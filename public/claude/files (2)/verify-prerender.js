/**
 * verify-prerender.js
 * Run after prerender.js. Fails the build if any route's static HTML
 * doesn't actually contain real content, or if hydration throws console
 * errors in the browser (a sign the prerendered HTML doesn't match what
 * React renders client-side).
 *
 * Usage: node verify-prerender.js
 * (run this against `npm run preview`, i.e. the built + prerendered dist/,
 * not the dev server)
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const DIST_DIR = path.resolve(__dirname, 'dist');
const PREVIEW_PORT = 4173;

const ROUTES = ['/', '/about', '/contact', '/privacy-policy', '/terms-conditions', '/cancellation-refund'];

// Minimum body text length to count as "real content" rather than an
// empty shell. Tune this to something below your shortest real page.
const MIN_CONTENT_LENGTH = 200;

// Strings that should NEVER appear again — guards against the cloaked
// filler block (Big Buck Bunny link, fake Statista citation, fake quote)
// ever being reintroduced by a future build or dependency.
const BANNED_STRINGS = [
  'mov_bbb.mp4',
  'Statista Travel Report',
  'esteemed travel experts',
];

async function checkStaticFile(routePath) {
  const filePath =
    routePath === '/'
      ? path.join(DIST_DIR, 'index.html')
      : path.join(DIST_DIR, routePath.replace(/^\/|\/$/g, ''), 'index.html');

  if (!fs.existsSync(filePath)) {
    return { routePath, ok: false, reason: `missing file: ${filePath}` };
  }

  const html = fs.readFileSync(filePath, 'utf-8');
  const bodyMatch = html.match(/<div id="root">([\s\S]*?)<\/div>\s*<script/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : '';
  const textLength = bodyContent.replace(/<[^>]+>/g, '').trim().length;

  for (const banned of BANNED_STRINGS) {
    if (html.includes(banned)) {
      return { routePath, ok: false, reason: `banned string found: "${banned}"` };
    }
  }

  if (textLength < MIN_CONTENT_LENGTH) {
    return {
      routePath,
      ok: false,
      reason: `root div text length ${textLength} < ${MIN_CONTENT_LENGTH} — looks empty/blank`,
    };
  }

  return { routePath, ok: true, textLength };
}

async function checkHydration(browser, routePath) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto(`http://localhost:${PREVIEW_PORT}${routePath}`, {
    waitUntil: 'networkidle0',
    timeout: 15000,
  });

  await page.close();
  return { routePath, errors };
}

async function main() {
  console.log('Checking static HTML content per route...\n');
  const staticResults = [];
  for (const route of ROUTES) {
    staticResults.push(await checkStaticFile(route));
  }

  staticResults.forEach((r) => {
    if (r.ok) {
      console.log(`✓ ${r.routePath} — ${r.textLength} chars of static content`);
    } else {
      console.error(`✗ ${r.routePath} — ${r.reason}`);
    }
  });

  console.log('\nChecking for hydration errors (requires `npm run preview` running)...\n');
  let browser;
  const hydrationResults = [];
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    for (const route of ROUTES) {
      hydrationResults.push(await checkHydration(browser, route));
    }
  } finally {
    if (browser) await browser.close();
  }

  hydrationResults.forEach((r) => {
    if (r.errors.length === 0) {
      console.log(`✓ ${r.routePath} — no console/hydration errors`);
    } else {
      console.error(`✗ ${r.routePath} — hydration errors:`);
      r.errors.forEach((e) => console.error(`    ${e}`));
    }
  });

  const anyFailures =
    staticResults.some((r) => !r.ok) || hydrationResults.some((r) => r.errors.length > 0);

  if (anyFailures) {
    console.error('\nVerification FAILED — see above.');
    process.exit(1);
  }

  console.log('\nAll routes verified: real static content, no hydration errors, no banned strings.');
}

main().catch((err) => {
  console.error('verify-prerender.js crashed:', err);
  process.exit(1);
});
