/**
 * prerender.js
 * Runs after `vite build`. Serves dist/, visits every route with a headless
 * browser, waits for the app to signal it has finished rendering, then
 * overwrites each route's index.html with the fully rendered DOM.
 *
 * Requires the app to set `window.__PRERENDER_READY__ = true` once it has
 * finished its initial render AND any data it fetches on mount (see the
 * "app-side ready signal" note at the bottom of this file).
 */

const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');
const express = require('express');

const DIST_DIR = path.resolve(__dirname, 'dist');
const PORT = 4173;

// Every route that must be independently crawlable.
// Add to this list whenever you add a new route to the app.
const ROUTES = [
  { path: '/', title: 'Kudrat Villa | Luxury Private Pool Villa in Kandholi, Dehradun', description: 'Kudrat Villa is a premium private pool villa located in Kandholi, Dehradun (near UPES). Offering a 2BHK luxury stay, 2 acres of lawns, and a 100% pet-friendly environment for family and couples.' },
  { path: '/about', title: 'About Us | Kudrat Villa', description: 'Learn about Kudrat Villa, a private pool villa in Kandholi, Dehradun.' },
  { path: '/contact', title: 'Contact Us | Kudrat Villa', description: 'Get in touch with Kudrat Villa to book your stay in Dehradun.' },
  { path: '/privacy-policy', title: 'Privacy Policy | Kudrat Villa', description: 'Privacy policy for Kudrat Villa guests and website visitors.' },
  { path: '/terms-conditions', title: 'Terms & Conditions | Kudrat Villa', description: 'Terms and conditions for booking a stay at Kudrat Villa.' },
  { path: '/cancellation-refund', title: 'Cancellation & Refund Policy | Kudrat Villa', description: 'Cancellation and refund policy for Kudrat Villa bookings.' },
];

const SITE_URL = 'https://kudratvilla.com';
const READY_TIMEOUT_MS = 15000;

function startServer() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.static(DIST_DIR));
    // SPA fallback for the dev server itself (not the final static host)
    app.get('*', (req, res) => {
      res.sendFile(path.join(DIST_DIR, 'index.html'));
    });
    const server = app.listen(PORT, () => resolve(server));
  });
}

function outputPathFor(routePath) {
  if (routePath === '/') return path.join(DIST_DIR, 'index.html');
  const clean = routePath.replace(/^\/|\/$/g, '');
  return path.join(DIST_DIR, clean, 'index.html');
}

function injectMeta(html, route) {
  // Replace title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

  // Replace or insert canonical
  const canonicalTag = `<link rel="canonical" href="${SITE_URL}${route.path}" />`;
  if (/<link[^>]+rel=["']canonical["'][^>]*>/i.test(html)) {
    html = html.replace(/<link[^>]+rel=["']canonical["'][^>]*>/i, canonicalTag);
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n</head>`);
  }

  // Replace or insert meta description
  const descTag = `<meta name="description" content="${route.description}" />`;
  if (/<meta[^>]+name=["']description["'][^>]*>/i.test(html)) {
    html = html.replace(/<meta[^>]+name=["']description["'][^>]*>/i, descTag);
  } else {
    html = html.replace('</head>', `  ${descTag}\n</head>`);
  }

  // Keep OG/Twitter title+description in sync too
  html = html
    .replace(/<meta[^>]+property=["']og:title["'][^>]*>/i, `<meta property="og:title" content="${route.title}" />`)
    .replace(/<meta[^>]+property=["']og:description["'][^>]*>/i, `<meta property="og:description" content="${route.description}" />`)
    .replace(/<meta[^>]+property=["']og:url["'][^>]*>/i, `<meta property="og:url" content="${SITE_URL}${route.path}" />`)
    .replace(/<meta[^>]+name=["']twitter:title["'][^>]*>/i, `<meta name="twitter:title" content="${route.title}" />`)
    .replace(/<meta[^>]+name=["']twitter:description["'][^>]*>/i, `<meta name="twitter:description" content="${route.description}" />`);

  return html;
}

function generateSitemap() {
  const urls = ROUTES.map(
    (r) => `  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n  </url>`
  ).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), xml);
}

async function prerender() {
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error('dist/ not found — run `vite build` before prerender.js');
  }

  const server = await startServer();

  // --no-sandbox / --disable-setuid-sandbox are required in most CI
  // containers (GitHub Actions, Vercel, Netlify build images). Without
  // these flags Puppeteer's Chromium fails to launch and the build breaks.
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const failures = [];

  for (const route of ROUTES) {
    const page = await browser.newPage();
    const url = `http://localhost:${PORT}${route.path}`;

    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: READY_TIMEOUT_MS });

      // Wait for the app-side ready signal (see main.jsx note below) instead
      // of a fixed sleep, so late/async data fetches are captured too.
      await page.waitForFunction('window.__PRERENDER_READY__ === true', {
        timeout: READY_TIMEOUT_MS,
      });

      let html = await page.content();
      html = injectMeta(html, route);

      const outPath = outputPathFor(route.path);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, html);

      console.log(`✓ prerendered ${route.path} -> ${path.relative(DIST_DIR, outPath)}`);
    } catch (err) {
      failures.push({ route: route.path, error: err.message });
      console.error(`✗ FAILED to prerender ${route.path}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  generateSitemap();

  await browser.close();
  server.close();

  if (failures.length > 0) {
    console.error(`\n${failures.length} route(s) failed to prerender:`);
    failures.forEach((f) => console.error(`  - ${f.route}: ${f.error}`));
    // Fail the build loudly rather than silently shipping blank pages.
    process.exit(1);
  }

  console.log(`\nAll ${ROUTES.length} routes prerendered successfully.`);
}

prerender().catch((err) => {
  console.error('Prerender script crashed:', err);
  process.exit(1);
});
