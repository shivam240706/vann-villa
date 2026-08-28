# Prerendering setup — Kudrat Villa

## What changed vs. the original plan, and why

| Original plan | Problem | Fixed here |
|---|---|---|
| Only overwrites `dist/index.html` | Every other route (`/about`, `/contact`, etc.) stays a blank shell for any non-JS crawler | `prerender.js` loops over an explicit `ROUTES` list and writes each to its own `dist/<route>/index.html` |
| "Wait for React to fully render" | Vague — snapshots too early if data is fetched on mount, producing incomplete static HTML | Uses `window.__PRERENDER_READY__` app-side signal + `waitForFunction`, not a fixed timeout |
| No per-route meta tags | All prerendered pages would claim the same title/description/canonical, confusing Google about which page is which | `injectMeta()` rewrites title, canonical, description, and OG/Twitter tags per route |
| No CI sandbox flags | Puppeteer's Chromium fails to launch in most CI containers without `--no-sandbox --disable-setuid-sandbox` | Flags included in both `prerender.js` and `verify-prerender.js` |
| No sitemap | Crawlers have no authoritative list of the 6 routes | `generateSitemap()` writes `dist/sitemap.xml` |
| Manual verification only | "Eyeball it" isn't a test, and doesn't catch hydration mismatches | `verify-prerender.js` checks real content length per route, scans for the banned cloaked-content strings, and checks for hydration console errors |
| No host rewrite rules | Even with per-route files, static hosts need to be told to serve `/about/index.html` for a request to `/about` instead of falling back to root | See host-specific config below — **pick the one matching your actual host** |

## 1. package.json

```json
{
  "scripts": {
    "build": "vite build && node prerender.js",
    "verify": "npm run preview & sleep 2 && node verify-prerender.js"
  },
  "devDependencies": {
    "puppeteer": "^22.0.0",
    "express": "^4.19.0"
  }
}
```

## 2. Add the ready-signal to your App component

In your top-level `App.jsx` (or wherever your last piece of on-mount data finishes loading):

```jsx
import { useEffect } from 'react';

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  // ... your existing fetch logic, setDataLoaded(true) when done ...

  useEffect(() => {
    if (dataLoaded) {
      window.__PRERENDER_READY__ = true;
    }
  }, [dataLoaded]);

  // ...
}
```

If your site has **no** async data fetching on mount at all, set the flag
unconditionally in a top-level `useEffect(() => { window.__PRERENDER_READY__ = true }, [])`
instead — you still need the signal so `prerender.js` knows when to snapshot.

## 3. Fill in the real ROUTES list

Edit the `ROUTES` array at the top of `prerender.js` — it currently has
placeholder titles/descriptions for your six known pages. Replace the
`title`/`description` values with your actual per-page copy once you
have it (right now they default to sensible variations on your existing
homepage meta, not fabricated content).

## 4. Static host rewrite rules (pick your actual host)

**Vercel** (`vercel.json`):
```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

**Netlify** (`_redirects` in `public/`):
```
/about        /about/index.html   200
/contact      /contact/index.html 200
/*            /index.html         404
```

**Firebase Hosting** (`firebase.json`):
```json
{
  "hosting": {
    "cleanUrls": true,
    "rewrites": []
  }
}
```

If you don't know which host this is deployed on, check before assuming
any of the above apply — wrong rewrite config means the prerendered
files exist in `dist/` but are never actually served for direct route
hits, which silently defeats the whole point of this work.

## 5. Verification — run before trusting the deploy

```bash
npm run build          # vite build && prerender.js
npm run preview &       # serves dist/ locally
node verify-prerender.js
```

This checks, per route:
- Real content length in the static HTML (not just an empty `#root`)
- None of the previously-removed cloaked strings (Big Buck Bunny URL,
  fake Statista citation, fake quote) have been reintroduced
- No hydration console errors (React logging a mismatch between server
  HTML and first client render)

## 6. Final proof, post-deploy

Once deployed, the only test that actually matches how Google and other
tools read the page:

```bash
curl -s https://kudratvilla.com/about | grep -o '<title>.*</title>'
```

If that returns real, route-specific content instead of an empty shell,
the fix is verified the same way it was diagnosed — from the raw HTML,
not the rendered browser view.
