import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InitialLoader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 12) + 4;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
      setProgress(count);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              fontFamily: 'var(--font-heading, Playfair Display)',
              fontSize: '3rem',
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
