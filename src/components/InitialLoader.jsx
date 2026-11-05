import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InitialLoader = () => {
  // If in prerender mode, headless browser, or crawler, never show loader
  const isPrerender = typeof window !== 'undefined' && (
    Boolean(window.__IS_PRERENDER__) || 
    Boolean(window.__PRERENDER_READY__) ||
    /bot|googlebot|crawler|spider|robot|crawling|headlesschrome|puppeteer/i.test(navigator.userAgent)
  );

  // If already visited this session or in prerender mode, don't show loader
  const alreadyVisited = typeof window !== 'undefined' && (
    isPrerender || 
    Boolean(sessionStorage.getItem('van_visited'))
  );

  const [loading, setLoading] = useState(!alreadyVisited);
  const [progress, setProgress] = useState(alreadyVisited ? 100 : 0);

  useEffect(() => {
    if (alreadyVisited) {
      setLoading(false);
      return;
    }

    // Fast, responsive entry: complete in 280ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(100, prev + 25);
      });
    }, 40);

    const finishTimer = setTimeout(() => {
      setProgress(100);
      setLoading(false);
      try {
        sessionStorage.setItem('van_visited', 'true');
      } catch {}
    }, 280);

    // Hard fallback: loader MUST hide after 400ms under any circumstances
    const safetyTimer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimer);
      clearTimeout(safetyTimer);
    };
  }, [alreadyVisited]);

  if (isPrerender || !loading) {
    return null;
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="initial-loader"
          key="loader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#2B0605',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ marginBottom: '16px' }}
          >
            <img 
              src="/images/vann-villa-logo.webp" 
              alt="Vann Villa" 
              width="80" 
              height="80" 
              style={{ 
                borderRadius: '2px', 
                border: '1px solid #E8D2B5', 
                display: 'block' 
              }} 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.5rem',
              fontWeight: 500,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#E8D2B5',
              marginBottom: '20px'
            }}
          >
            Vann Villa
          </motion.div>
          <motion.div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              color: 'rgba(255, 255, 255, 0.7)',
              letterSpacing: '2px',
              marginBottom: '10px'
            }}
          >
            {progress}%
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
            style={{
              height: '1px',
              backgroundColor: '#E8D2B5',
              maxWidth: '200px'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoader;
