'use strict';

/**
 * Portfolio application (Express + EJS).
 * Exported as a factory so tests can boot it on an ephemeral port.
 */

const path = require('path');
const express = require('express');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const site = require('./data/site');
const { getGithubData } = require('./lib/github');
const { sendContactMessage, deliveryStatus } = require('./lib/contact');

function createApp() {
  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
  app.disable('x-powered-by');
  app.set('trust proxy', 1);

  app.use(compression());
  app.use(express.json({ limit: '32kb' }));
  app.use(express.urlencoded({ extended: false, limit: '32kb' }));

  // Conservative security headers. The site loads no third-party scripts.
  app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    res.setHeader(
      'Content-Security-Policy',
      [
        "default-src 'self'",
        "script-src 'self'",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https://avatars.githubusercontent.com https://images.weserv.nl",
        "connect-src 'self'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'none'"
      ].join('; ')
    );
    next();
  });

  app.use(
    express.static(path.join(__dirname, 'public'), {
      maxAge: process.env.NODE_ENV === 'production' ? '7d' : 0,
      extensions: ['html']
    })
  );

  app.locals.site = site;
  app.locals.currentYear = new Date().getFullYear();

  // ---------------------------------------------------------------- pages
  app.get('/', async (req, res, next) => {
    try {
      const github = await getGithubData();
      res.render('index', {
        page: 'home',
        title: 'Shubiisha J — Frontend & Full-Stack Developer',
        description:
          'Portfolio of Shubiisha J, a Computer Science & Engineering student and full-stack developer building React, Node.js, Express and MySQL applications.',
        canonical: '/',
        github
      });
    } catch (err) {
      next(err);
    }
  });

  app.get('/projects/:slug', (req, res, next) => {
    const project = site.projects.find((item) => item.slug === req.params.slug);
    if (!project) return next();

    const index = site.projects.findIndex((item) => item.slug === project.slug);
    const related = site.projects
      .filter((item) => item.slug !== project.slug && item.category === project.category)
      .concat(site.projects.filter((item) => item.slug !== project.slug && item.category !== project.category))
      .slice(0, 3);

    res.render('project', {
      page: 'project',
      project,
      index,
      related,
      title: `${project.title} — Shubiisha J`,
      description: project.summary,
      canonical: `/projects/${project.slug}`
    });
  });

  app.get('/resume', (req, res) => {
    res.redirect(302, site.profile.resume.file);
  });

  // ---------------------------------------------------------------- api
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', contact: deliveryStatus().mode });
  });

  app.get('/api/github', async (req, res) => {
    const data = await getGithubData();
    res.setHeader('Cache-Control', 'public, max-age=600');
    res.json(data);
  });

  const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: { ok: false, error: 'Too many messages from this address. Please try again later.' }
  });

  app.post('/api/contact', contactLimiter, async (req, res) => {
    const result = await sendContactMessage(req.body || {});
    if (result.ok) {
      return res.status(200).json({ ok: true, message: result.message });
    }
    const status = result.status || 400;
    return res.status(status).json({
      ok: false,
      code: result.code,
      error: result.error,
      fields: result.fields || undefined
    });
  });

  // ---------------------------------------------------------------- errors
  app.use((req, res) => {
    res.status(404).render('404', {
      page: 'notfound',
      title: 'Page not found — Shubiisha J',
      description: 'The page you requested could not be found.',
      canonical: req.path
    });
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.error('[error]', err.message);
    if (req.path.startsWith('/api/')) {
      return res.status(500).json({ ok: false, error: 'Unexpected server error.' });
    }
    res.status(500).render('404', {
      page: 'error',
      title: 'Something went wrong — Shubiisha J',
      description: 'An unexpected error occurred.',
      canonical: req.path
    });
  });

  return app;
}

module.exports = { createApp };
