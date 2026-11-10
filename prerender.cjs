/**
 * prerender.js
 * Runs after `vite build`. Serves dist/, visits every route with a headless
 * browser, waits for the app to signal it has finished rendering, then
 * overwrites each route's index.html with the fully rendered DOM.
 */

const path = require('path');
const fs = require('fs');
const os = require('os');
const puppeteer = require('puppeteer');
const express = require('express');

const DIST_DIR = path.resolve(__dirname, 'dist');
const PORT = 4173;

// Every route that must be independently crawlable.
const ROUTES = [
  { path: '/', title: 'Best Villa in Dehradun | Vann Villa Private Pool Stay', description: 'Vann Villa is the premier luxury private pool villa and hidden gem stay in Dehradun. 2BHK homestay, 5,000 sq ft private lawns, fully equipped kitchen & pet-friendly.', priority: '1.0', changefreq: 'weekly' },
  { path: '/best-villa-in-dehradun', title: 'Best Villa in Dehradun | Vann Villa Luxury Homestay', description: 'Discover why Vann Villa is rated the top villa in Dehradun. Luxury 2BHK private pool homestay, 5,000 sq ft lawns, mountain terrace & pet-friendly escape.', priority: '1.0', changefreq: 'weekly' },
  { path: '/villa-in-dehradun', title: 'Villa in Dehradun | Vann Villa Private Pool Homestay', description: 'Looking for a private luxury villa in Dehradun? Rent the entire 2BHK Vann Villa with private swimming pool, 5,000 sq ft lawns, and 100% privacy.', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', title: 'About Us | Vann Villa Dehradun', description: "Learn about Vann Villa, Dehradun's premier 2BHK luxury private pool homestay set across 5,000 sq ft of private fenced lawns.", priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', title: 'Contact Us | Vann Villa Dehradun', description: 'Contact Vann Villa in Dehradun via WhatsApp or phone. Book your luxury private pool villa stay with instant confirmation.', priority: '0.8', changefreq: 'monthly' },
  { path: '/experience', title: 'The Experience | Vann Villa Dehradun', description: 'Explore the 5-star Vann Villa experience in Dehradun: private pool, scenic terrace, mountain views, and lush gardens.', priority: '0.8', changefreq: 'monthly' },
  { path: '/packages', title: 'Luxury Villa Packages in Dehradun | Vann Villa', description: 'Browse luxury stay packages at Vann Villa Dehradun. Private pool 2BHK stay, family vacations, couple getaways & weekend retreats from ₹4,499/night.', priority: '0.9', changefreq: 'monthly' },
  { path: '/destination-guide', title: 'Dehradun Travel & Destination Guide | Vann Villa', description: 'Explore top attractions, nature trails, and hidden gems near Vann Villa in Dehradun. The ultimate local getaway travel guide.', priority: '0.9', changefreq: 'monthly' },
  { path: '/family-villa-dehradun', title: 'Family Villa in Dehradun | Vann Villa', description: 'Book the best family villa in Dehradun. Entire 2BHK luxury stay, private swimming pool, 5,000 sq ft fenced lawns, and space for up to 6 guests.', priority: '0.9', changefreq: 'monthly' },
  { path: '/couple-getaway-dehradun', title: 'Couple Getaway in Dehradun | Vann Villa', description: 'Romantic private pool villa in Dehradun for couples. 100% exclusive access, panoramic mountain terrace, and cozy luxury stay from ₹8,998.', priority: '0.9', changefreq: 'monthly' },
  { path: '/pet-friendly-villa-dehradun', title: 'Pet Friendly Villa in Dehradun | Vann Villa', description: '100% pet friendly luxury villa in Dehradun. Zero pet fees, 5,000 sq ft of securely fenced lawns, and private pool access for your stay.', priority: '0.9', changefreq: 'monthly' },
  { path: '/delhi-to-dehradun-weekend', title: 'Delhi to Dehradun Weekend Escape | Vann Villa', description: 'Easy drive from Delhi NCR to your private luxury pool villa in Dehradun. 2BHK stay, gated parking, and fresh mountain air.', priority: '0.9', changefreq: 'monthly' },
  { path: '/terms-conditions', title: 'Terms & Conditions | Vann Villa', description: 'Terms and conditions for booking a stay at Vann Villa in Dehradun. Check-in policies, guest guidelines, and house rules.', priority: '0.5', changefreq: 'yearly' },
  { path: '/privacy-policy', title: 'Privacy Policy | Vann Villa', description: 'Privacy Policy for Vann Villa guests and website visitors. Learn how we protect your personal data and booking privacy.', priority: '0.5', changefreq: 'yearly' },
  { path: '/cancellation-refund', title: 'Cancellation & Refund Policy | Vann Villa', description: 'Cancellation and refund policy for Vann Villa bookings in Dehradun. Review our transparent refund terms and reservation policies.', priority: '0.5', changefreq: 'yearly' },
];

const SITE_URL = 'https://vannvilla.com';
const READY_TIMEOUT_MS = 15000;

function startServer() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.static(DIST_DIR));
    app.use((req, res) => {
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
  html = html.replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, '');

  html = html.replace(/<meta\b[^>]*>/gi, (tag) => {
    if (
      /name=["'](title|description|twitter:[^"']*)["']/i.test(tag) ||
      /property=["'](og:[^"']*)["']/i.test(tag)
    ) {
      return '';
    }
    return tag;
  });

  html = html.replace(/<link\s+[^>]*rel=["']canonical["'][^>]*>/gi, '');

  const canonicalUrl = `${SITE_URL}${route.path === '/' ? '' : route.path}`;

  const cleanMeta = `
    <title>${route.title}</title>
    <meta name="title" content="${route.title}" />
    <meta name="description" content="${route.description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Vann Villa" />
    <meta property="og:locale" content="en_IN" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:image" content="https://vannvilla.com/images/vann-villa-exterior-lawn.webp" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="https://vannvilla.com/images/vann-villa-exterior-lawn.webp" />
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

  fs.copyFileSync(path.join(DIST_DIR, 'index.html'), path.join(DIST_DIR, 'original.html'));

  const server = await startServer();

  let executablePath = undefined;
  let args = ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage'];
  
  if (process.env.VERCEL && process.platform === 'linux') {
    console.log('Vercel Linux environment detected. Loading @sparticuz/chromium...');
    const chromium = require('@sparticuz/chromium');
    executablePath = await chromium.default.executablePath();
    args = chromium.default.args;
  }

  let browser;
  try {
    const tempProfileDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pptr-prerender-'));
    browser = await puppeteer.launch({
      headless: 'new',
      executablePath,
      userDataDir: tempProfileDir,
      args,
    });
  } catch (launchErr) {
    console.warn('[Prerender Warning] Headless browser launch skipped in this environment:', launchErr.message);
    generateSitemap();
    server.close();
    console.log('Sitemap generated successfully. SPA distribution bundle ready.');
    process.exit(0);
  }

  const failures = [];

  for (const route of ROUTES) {
    const page = await browser.newPage();
    page.on('console', msg => console.log(`[${route.path} LOG] ${msg.text()}`));
    page.on('pageerror', err => console.log(`[${route.path} ERR] ${err.message}`));
    
    await page.evaluateOnNewDocument(() => {
      window.__IS_PRERENDER__ = true;
      try {
        sessionStorage.setItem('van_visited', 'true');
      } catch {}
    });

    const url = `http://localhost:${PORT}${route.path}`;

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: READY_TIMEOUT_MS });

      await page.waitForFunction('window.__PRERENDER_READY__ === true', {
        timeout: READY_TIMEOUT_MS,
      });

      await page.evaluate(() => {
        const loader = document.getElementById('initial-loader');
        if (loader) loader.remove();
      });

      let html = await page.content();
      html = injectMeta(html, route);

      html = html.replace(/https?:\/\/localhost:\d+\//gi, '/');
      html = html.replace(/https?:\/\/localhost:\d+/gi, '');
      html = html.replace(/https?:\/\/127\.0\.0\.1:\d+\//gi, '/');
      html = html.replace(/https?:\/\/127\.0\.0\.1:\d+/gi, '');

      html = html.replace(/<div[^>]*id="initial-loader"[^>]*>[\s\S]*?<\/div>/gi, '');
      html = html.replace(/<div[^>]*style="[^"]*z-index:\s*99999[^"]*"[\s\S]*?<\/div>/gi, '');

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
    process.exit(1);
  }

  console.log(`\nAll ${ROUTES.length} routes prerendered successfully.`);
  process.exit(0);
}

prerender().catch((err) => {
  console.error('Prerender script crashed:', err);
  process.exit(1);
});
