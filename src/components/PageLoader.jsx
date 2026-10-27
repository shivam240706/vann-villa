import React from 'react';
import './PageLoader.css';

const PageLoader = () => (
  <div className="page-loader" role="status" aria-label="Loading page">
    <div className="page-loader__brand">Van Villa</div>
    <div className="page-loader__progress"></div>
    <span className="sr-only">Loading…</span>
  </div>
);

export default PageLoader;
