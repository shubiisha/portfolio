'use strict';

/**
 * GitHub data with a 30 minute in-memory cache and a verified static fallback.
 * No fabricated numbers: if the API is unavailable we serve the last known
 * public snapshot recorded from the GitHub REST API during review.
 */

const { githubFallback } = require('../data/site');

const USERNAME = 'shubiisha';
const TTL_MS = 30 * 60 * 1000;
const API = 'https://api.github.com';

let cache = { at: 0, data: null };
let inflight = null;

const LANGUAGE_COLORS = {
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  HTML: '#e34c26',
  CSS: '#563d7c',
  TypeScript: '#3178c6',
  C: '#555555',
  'C++': '#f34b7d',
  Other: '#9aa0a6'
};

function normalizeRepo(repo) {
  return {
    name: repo.name,
    description: repo.description || '',
    language: repo.language || 'Other',
    languageColor: LANGUAGE_COLORS[repo.language] || LANGUAGE_COLORS.Other,
    url: repo.html_url,
    homepage: repo.homepage || null,
    stars: typeof repo.stargazers_count === 'number' ? repo.stargazers_count : 0,
    updated: repo.pushed_at ? repo.pushed_at.slice(0, 10) : null
  };
}

function fallback() {
  return {
    available: false,
    source: 'fallback',
    profile: githubFallback.profile,
    repos: githubFallback.repos.map((repo) => ({
      ...repo,
      languageColor: LANGUAGE_COLORS[repo.language] || LANGUAGE_COLORS.Other,
      stars: 0
    })),
    languages: ['JavaScript', 'Python', 'HTML', 'CSS'],
    updatedAt: null
  };
}

async function fetchGithub() {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'shubiisha-portfolio',
    'X-GitHub-Api-Version': '2022-11-28'
  };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6000);

  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`${API}/users/${USERNAME}`, { headers, signal: controller.signal }),
      fetch(`${API}/users/${USERNAME}/repos?per_page=100&sort=pushed`, { headers, signal: controller.signal })
    ]);

    if (!profileRes.ok || !reposRes.ok) throw new Error(`GitHub responded ${profileRes.status}/${reposRes.status}`);

    const profile = await profileRes.json();
    const rawRepos = await reposRes.json();

    if (!Array.isArray(rawRepos)) throw new Error('Unexpected GitHub payload');

    const repos = rawRepos
      .filter((repo) => !repo.fork && !repo.archived)
      .map(normalizeRepo)
      .sort((a, b) => String(b.updated).localeCompare(String(a.updated)));

    const languageCounts = new Map();
    repos.forEach((repo) => {
      if (!repo.language) return;
      languageCounts.set(repo.language, (languageCounts.get(repo.language) || 0) + 1);
    });
    const languages = [...languageCounts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({
        name,
        count,
        color: LANGUAGE_COLORS[name] || LANGUAGE_COLORS.Other
      }));

    return {
      available: true,
      source: 'api',
      profile: {
        login: profile.login,
        name: profile.name || profile.login,
        bio: profile.bio || '',
        publicRepos: profile.public_repos,
        followers: profile.followers,
        url: profile.html_url,
        avatar: profile.avatar_url
      },
      repos,
      languages,
      updatedAt: new Date().toISOString()
    };
  } finally {
    clearTimeout(timer);
  }
}

async function getGithubData() {
  const now = Date.now();
  if (cache.data && now - cache.at < TTL_MS) return cache.data;
  if (inflight) return inflight;

  inflight = fetchGithub()
    .then((data) => {
      cache = { at: Date.now(), data };
      return data;
    })
    .catch((err) => {
      console.warn('[github] falling back to static data:', err.message);
      const data = cache.data || fallback();
      cache = { at: Date.now(), data };
      return data;
    })
    .finally(() => {
      inflight = null;
    });

  return inflight;
}

module.exports = { getGithubData, LANGUAGE_COLORS };
