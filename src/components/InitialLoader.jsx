import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InitialLoader = () => {
  // If already visited this session or in prerender mode, don't show loader
  const alreadyVisited = typeof window !== 'undefined' && (
    Boolean(sessionStorage.getItem('kudrat_visited')) || 
    Boolean(window.__PRERENDER_READY__)
  );

  const [loading, setLoading] = useState(!alreadyVisited);
  const [progress, setProgress] = useState(alreadyVisited ? 100 : 0);

  useEffect(() => {
    if (alreadyVisited) return;

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
        sessionStorage.setItem('kudrat_visited', 'true');
      } catch (_) {}
    }, 280);

    return () => {
      clearInterval(interval);
      clearTimeout(finishTimer);
    };
  }, [alreadyVisited]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1] } 
          }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#022C22',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ marginBottom: '16px' }}
          >
            <img 
              src="/images/kudrat-logo.webp" 
              alt="Kudrat Villa" 
              width="80" 
              height="80" 
              style={{ 
                borderRadius: '50%', 
                border: '2px solid rgba(212, 175, 55, 0.7)', 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.45)',
                display: 'block' 
              }} 
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-heading, Playfair Display)',
              fontSize: '2.5rem',
              fontWeight: 500,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: '#B8860B',
              marginBottom: '20px'
            }}
          >
            Kudrat Villa
          </motion.div>
          <motion.div
            style={{
              fontFamily: 'var(--font-body, Inter)',
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.6)',
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
              backgroundColor: '#B8860B',
              maxWidth: '200px'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoader;
