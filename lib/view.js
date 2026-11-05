'use strict';

/** Small view helpers shared by templates. */

const { icon } = require('./icons');

function dateLabel(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

function truncate(text, max = 120) {
  if (!text || text.length <= max) return text || '';
  return `${text.slice(0, max - 1).trimEnd()}…`;
}

module.exports = { icon, dateLabel, truncate };
