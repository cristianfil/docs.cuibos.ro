/**
 * Basic Auth middleware for protected documentation sections.
 *
 * - /api/*  and /en/api/*          → protected (API Reference)
 * - /architecture/*  and /en/architecture/*  → protected (Architecture)
 * - Everything else (guide, landing) → public
 *
 * Credentials are read from env: DOCS_AUTH_USER, DOCS_AUTH_PASS.
 * If DOCS_AUTH_PASS is empty the middleware is skipped (dev mode).
 */

const PROTECTED_PREFIXES = [
  '/api/',
  '/architecture/',
  '/en/api/',
  '/en/architecture/',
];

export default defineEventHandler((event) => {
  const path = getRequestURL(event).pathname;

  // Only protect matching routes
  const isProtected = PROTECTED_PREFIXES.some((prefix) => path.startsWith(prefix));
  if (!isProtected) return;

  const user = process.env.DOCS_AUTH_USER || 'admin';
  const pass = process.env.DOCS_AUTH_PASS || '';

  // No password configured → skip auth (local dev)
  if (!pass) return;

  const authorization = getHeader(event, 'authorization');
  if (authorization) {
    const [scheme, encoded] = authorization.split(' ');
    if (scheme === 'Basic' && encoded) {
      const decoded = Buffer.from(encoded, 'base64').toString('utf8');
      const [u, ...rest] = decoded.split(':');
      const p = rest.join(':'); // password may contain colons
      if (u === user && p === pass) return; // authorized ✓
    }
  }

  setResponseHeader(event, 'WWW-Authenticate', 'Basic realm="CuibOS Docs"');
  throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
});
