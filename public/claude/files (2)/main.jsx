import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

// After prerender.js runs, rootElement will already contain the fully
// rendered markup for this route. hydrateRoot attaches React to that
// existing DOM without tearing it down and re-rendering from scratch
// (which is what causes a visible "flash" on load, and what causes
// hydration-mismatch warnings if the prerendered HTML doesn't match
// what the client would render first).
//
// In local dev (`vite dev`), #root is empty, so we fall back to
// createRoot as normal.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <App />);
} else {
  createRoot(rootElement).render(<App />);
}

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
