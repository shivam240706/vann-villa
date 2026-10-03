import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InitialLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2 seconds to let the brand sink in
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
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
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            style={{
              height: '2px',
              backgroundColor: '#B8860B',
              opacity: 0.8
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InitialLoader;
