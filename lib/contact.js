'use strict';

/**
 * Contact form delivery.
 *
 * Two real transports are supported, both configured only through environment
 * variables (never in the browser bundle):
 *   - RESEND_API_KEY  -> Resend HTTPS API
 *   - SMTP_HOST/PORT/USER/PASS -> nodemailer SMTP
 *
 * If neither is configured the endpoint returns HTTP 503 with an explicit
 * configuration error. It never pretends a message was delivered.
 */

const nodemailer = require('nodemailer');

const TO = process.env.CONTACT_TO || 'shubiishaj@gmail.com';
const FROM = process.env.CONTACT_FROM || 'Portfolio Contact <onboarding@resend.dev>';

const LIMITS = { name: 80, email: 160, subject: 120, message: 4000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

let transporter = null;

function deliveryStatus() {
  if (process.env.RESEND_API_KEY) return { mode: 'resend', configured: true };
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return { mode: 'smtp', configured: true };
  }
  return { mode: 'unconfigured', configured: false };
}

function clean(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function validate(body) {
  const fields = {};
  const data = {
    name: clean(body.name),
    email: clean(body.email),
    subject: clean(body.subject),
    message: clean(body.message),
    company: clean(body.company) // honeypot: must stay empty
  };

  if (data.name.length < 2) fields.name = 'Please enter your full name.';
  else if (data.name.length > LIMITS.name) fields.name = `Name must be under ${LIMITS.name} characters.`;

  if (!data.email) fields.email = 'Please enter your email address.';
  else if (data.email.length > LIMITS.email || !EMAIL_RE.test(data.email)) {
    fields.email = 'Please enter a valid email address.';
  }

  if (data.subject.length < 3) fields.subject = 'Please add a short subject.';
  else if (data.subject.length > LIMITS.subject) {
    fields.subject = `Subject must be under ${LIMITS.subject} characters.`;
  }

  if (data.message.length < 20) fields.message = 'Please write at least 20 characters.';
  else if (data.message.length > LIMITS.message) {
    fields.message = `Message must be under ${LIMITS.message} characters.`;
  }

  return { data, fields };
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildBody(data) {
  return [
    `New portfolio message`,
    '',
    `Name:    ${data.name}`,
    `Email:   ${data.email}`,
    `Subject: ${data.subject}`,
    '',
    'Message:',
    data.message
  ].join('\n');
}

function buildHtml(data) {
  return `<div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;color:#14161a">
  <h2 style="margin:0 0 12px">New portfolio message</h2>
  <p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(data.name)}</p>
  <p style="margin:0 0 4px"><strong>Email:</strong> ${escapeHtml(data.email)}</p>
  <p style="margin:0 0 16px"><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
  <pre style="white-space:pre-wrap;background:#f5f6f8;padding:16px;border-radius:8px;margin:0">${escapeHtml(
    data.message
  )}</pre>
</div>`;
}

async function sendViaResend(data) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 10000);
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM || 'Portfolio Contact <onboarding@resend.dev>',
        to: [TO],
        reply_to: data.email,
        subject: `[Portfolio] ${data.subject}`,
        text: buildBody(data),
        html: buildHtml(data)
      }),
      signal: controller.signal
    });
    if (!response.ok) {
      const detail = await response.text().catch(() => '');
      throw new Error(`Resend ${response.status}: ${detail.slice(0, 200)}`);
    }
  } finally {
    clearTimeout(timer);
  }
}

async function sendViaSmtp(data) {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT || 587) === 465,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
  }
  await transporter.sendMail({
    from: process.env.CONTACT_FROM || process.env.SMTP_USER,
    to: TO,
    replyTo: data.email,
    subject: `[Portfolio] ${data.subject}`,
    text: buildBody(data),
    html: buildHtml(data)
  });
}

async function sendContactMessage(body) {
  const { data, fields } = validate(body || {});

  // Honeypot filled => silently accept the shape but deliver nothing.
  if (data.company) {
    return { ok: true, message: 'Thanks — your message has been sent.' };
  }

  if (Object.keys(fields).length) {
    return {
      ok: false,
      status: 422,
      code: 'VALIDATION_ERROR',
      error: 'Please correct the highlighted fields.',
      fields
    };
  }

  const status = deliveryStatus();
  if (!status.configured) {
    return {
      ok: false,
      status: 503,
      code: 'CONTACT_NOT_CONFIGURED',
      error:
        'Email delivery is not configured on this deployment yet. Please email shubiishaj@gmail.com directly — the address is a working mailto link.'
    };
  }

  try {
    if (status.mode === 'resend') await sendViaResend(data);
    else await sendViaSmtp(data);

    return { ok: true, message: 'Thanks for reaching out — your message was sent successfully.' };
  } catch (err) {
    console.error('[contact] delivery failed:', err.message);
    return {
      ok: false,
      status: 502,
      code: 'DELIVERY_FAILED',
      error: 'The message could not be delivered right now. Please email shubiishaj@gmail.com directly.'
    };
  }
}

module.exports = { sendContactMessage, deliveryStatus, validate, FROM };
