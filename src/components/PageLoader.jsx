import React from 'react';
import './PageLoader.css';

const PageLoader = () => (
  <div className="page-loader" role="status" aria-label="Loading page">
    <div className="page-loader__ring">
      <div className="page-loader__ring-dot" />
    </div>
    <span className="page-loader__text" aria-hidden="true">Kudrat Villa</span>
    <span className="sr-only">Loading…</span>
  </div>
);

export default PageLoader;
