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
  { path: '/', title: 'Best Villa in Dehradun | Kudrat Villa Private Pool Stay', description: 'Kudrat Villa is the #1 luxury private pool villa and hidden gem stay in Dehradun. 2BHK homestay, 2+ acres private lawns, BBQ & pet-friendly.', priority: '1.0', changefreq: 'weekly' },
  { path: '/best-villa-in-dehradun', title: 'Best Villa in Dehradun | Kudrat Luxury Homestay', description: 'Discover why Kudrat Villa is rated the #1 best villa in Dehradun. Luxury 2BHK private pool homestay, 2+ acres lawns, BBQ & pet-friendly escape.', priority: '1.0', changefreq: 'weekly' },
  { path: '/villa-in-dehradun', title: 'Villa in Dehradun | Kudrat Private Pool Homestay', description: 'Looking for a private luxury villa in Dehradun? Rent the entire 2BHK Kudrat Villa with private swimming pool, 2+ acres lawns, and 100% privacy.', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', title: 'About Us | Kudrat Villa Dehradun', description: "Learn about Kudrat Villa, Dehradun's premier 2BHK luxury private pool homestay set across 2+ acres of private fenced lawns.", priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', title: 'Contact Us | Kudrat Villa Dehradun', description: 'Contact Kudrat Villa in Dehradun via WhatsApp or phone. Book your luxury private pool villa stay with instant confirmation.', priority: '0.8', changefreq: 'monthly' },
  { path: '/experience', title: 'The Experience | Kudrat Villa Dehradun', description: 'Explore the 5-star Kudrat Villa experience in Dehradun — private pool, open rainwater shower, bonfire pit, BBQ, and mountain views.', priority: '0.8', changefreq: 'monthly' },
  { path: '/packages', title: 'Luxury Villa Packages in Dehradun | Kudrat Villa', description: 'Browse luxury stay packages at Kudrat Villa Dehradun. Private pool 2BHK stay, family vacations, couple getaways & weekend retreats.', priority: '0.9', changefreq: 'monthly' },
  { path: '/destination-guide', title: 'Dehradun Travel & Destination Guide | Kudrat Villa', description: 'Explore top attractions, nature trails, and hidden gems near Kudrat Villa in Dehradun. The ultimate local getaway travel guide.', priority: '0.9', changefreq: 'monthly' },
  { path: '/family-villa-dehradun', title: 'Family Villa in Dehradun | Kudrat Villa', description: 'Book the best family villa in Dehradun. Entire 2BHK luxury stay, private swimming pool, 2+ acres fenced lawns, and space for 6+ guests.', priority: '0.9', changefreq: 'monthly' },
  { path: '/couple-getaway-dehradun', title: 'Couple Getaway in Dehradun | Kudrat Villa', description: 'Romantic private pool villa in Dehradun for couples. 100% exclusive access, stargazing bonfire pit, and cozy luxury stay from ₹19,998.', priority: '0.9', changefreq: 'monthly' },
  { path: '/pet-friendly-villa-dehradun', title: 'Pet Friendly Villa in Dehradun | Kudrat Villa', description: '100% pet friendly luxury villa in Dehradun. Zero pet fees, 2+ acres of securely fenced lawns, and private pool access for your stay.', priority: '0.9', changefreq: 'monthly' },
  { path: '/delhi-to-dehradun-weekend', title: 'Delhi to Dehradun Weekend Escape | Kudrat Villa', description: 'Easy 5-hour drive from Delhi NCR to your private luxury pool villa in Dehradun. 2BHK stay, gated parking for 5 SUVs, and fresh mountain air.', priority: '0.9', changefreq: 'monthly' },
  { path: '/terms-conditions', title: 'Terms & Conditions | Kudrat Villa', description: 'Terms and conditions for booking a stay at Kudrat Villa in Dehradun. Check-in policies, guest guidelines, and house rules.', priority: '0.5', changefreq: 'yearly' },
  { path: '/privacy-policy', title: 'Privacy Policy | Kudrat Villa', description: 'Privacy Policy for Kudrat Villa guests and website visitors. Learn how we protect your personal data and booking privacy.', priority: '0.5', changefreq: 'yearly' },
  { path: '/cancellation-refund', title: 'Cancellation & Refund Policy | Kudrat Villa', description: 'Cancellation and refund policy for Kudrat Villa bookings in Dehradun. Review our transparent refund terms and reservation policies.', priority: '0.5', changefreq: 'yearly' },
];

const SITE_URL = 'https://kudratvilla.com';
const READY_TIMEOUT_MS = 15000;

function startServer() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.static(DIST_DIR));
    // SPA fallback for the dev server itself (not the final static host)
    app.use((req, res) => {
      // console.log(`Fallback triggered for: ${req.url}`);
      const originalPath = path.join(DIST_DIR, 'original.html');
      if (fs.existsSync(originalPath)) {
        res.setHeader('Content-Type', 'text/html');
        res.send(fs.readFileSync(originalPath, 'utf8'));
      } else {
        res.status(404).send('Not found');
      }
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
  // 1. Remove ALL existing <title> tags (including multiline, attributes like data-rh="true")
  html = html.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '');

  // 2. Remove ALL existing <meta> tags that match title, description, og:*, twitter:*
  html = html.replace(/<meta\b[^>]*>/gi, (tag) => {
    if (
      /name=["'](title|description|twitter:[^"']*)["']/i.test(tag) ||
      /property=["'](og:[^"']*)["']/i.test(tag)
    ) {
      return '';
    }
    return tag;
  });

  // 3. Remove ALL existing <link rel="canonical"> tags
  html = html.replace(/<link\s+[^>]*rel=["']canonical["'][^>]*>/gi, '');

  const canonicalUrl = `${SITE_URL}${route.path === '/' ? '' : route.path}`;

  const cleanMeta = `
    <title>${route.title}</title>
    <meta name="title" content="${route.title}" />
    <meta name="description" content="${route.description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Kudrat Villa" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:image" content="https://kudratvilla.com/images/kudrat-villa-exterior-lawn.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="https://kudratvilla.com/images/kudrat-villa-exterior-lawn.webp" />
  `;

  return html.replace('<head>', `<head>${cleanMeta}`);
}

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  const urls = ROUTES.map(
    (r) => `  <url>\n    <loc>${SITE_URL}${r.path === '/' ? '' : r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq || 'monthly'}</changefreq>\n    <priority>${r.priority || '0.8'}</priority>\n  </url>`
  ).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), xml);
}

async function prerender() {
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error('dist/ not found — run `vite build` before prerender.js');
  }

  // Preserve the original empty shell for SPA fallback, so subsequent routes
  // don't try to hydrate on top of the prerendered homepage.
  fs.copyFileSync(path.join(DIST_DIR, 'index.html'), path.join(DIST_DIR, 'original.html'));

  const server = await startServer();

  // --no-sandbox / --disable-setuid-sandbox are required in most CI
  // On Vercel, Puppeteer crashes due to missing shared libraries (e.g. libnspr4.so).
  // We use @sparticuz/chromium which bundles the pre-compiled binary and libraries for AWS/Vercel.
  let executablePath = undefined;
  let args = ['--no-sandbox', '--disable-setuid-sandbox'];
  
  if (process.env.VERCEL) {
    console.log('Vercel environment detected. Loading @sparticuz/chromium...');
    const chromium = require('@sparticuz/chromium');
    executablePath = await chromium.default.executablePath();
    args = chromium.default.args;
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath,
    args,
  });

  const failures = [];

  for (const route of ROUTES) {
    const page = await browser.newPage();
    page.on('console', msg => console.log(`[${route.path} LOG] ${msg.text()}`));
    page.on('pageerror', err => console.log(`[${route.path} ERR] ${err.message}`));
    
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

async function pingIndexNow() {
  const https = require('https');
  const urlList = ROUTES.map(r => `${SITE_URL}${r.path}`);
  const payload = JSON.stringify({
    host: 'kudratvilla.com',
    key: '404d80a1c1074e64816c8021cb8b7762',
    keyLocation: 'https://kudratvilla.com/404d80a1c1074e64816c8021cb8b7762.txt',
    urlList: urlList
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      console.log(`[IndexNow Ping] Sent ${urlList.length} URLs to IndexNow. Status: ${res.statusCode}`);
      resolve();
    });
    req.on('error', (e) => {
      console.warn(`[IndexNow Ping Warning] ${e.message}`);
      resolve();
    });
    req.write(payload);
    req.end();
  });
}

  await pingIndexNow();
  console.log(`\nAll ${ROUTES.length} routes prerendered successfully.`);
  process.exit(0);
}

prerender().catch((err) => {
  console.error('Prerender script crashed:', err);
  process.exit(1);
});
