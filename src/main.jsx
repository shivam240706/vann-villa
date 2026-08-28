import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

// We use createRoot unconditionally here.
// Although the DOM contains static HTML (snapshotted via Puppeteer for SEO),
// it was rendered via createRoot originally, so it lacks SSR hydration markers.
// Using hydrateRoot would cause hydration mismatch errors.
// createRoot will safely overwrite the static shell with the interactive app.
createRoot(rootElement).render(<App />);

// --- App-side ready signal for prerender.js ---
// Add this to your top-level App component (or a layout wrapper) once
// your initial render AND any on-mount data fetches have completed:
//
//   useEffect(() => {
//     // after reviews/images/etc. have loaded and rendered
//     window.__PRERENDER_READY__ = true;
//   }, [dataLoaded]);
//
// Without this signal, prerender.js has no reliable way to know the
// page is actually done rendering, and will either snapshot too early
// (missing content) or rely on a fixed timeout (fragile, slow builds).
