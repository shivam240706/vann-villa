import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const KatanaStrikePrice = ({ oldPrice, newPrice, color = '#ff3b30', size = '1.2rem', newSize = '1.6rem', oldOpacity = 0.7 }) => {
  const [isSlashed, setIsSlashed] = useState(false);
  
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
      <motion.span 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }}
        onViewportEnter={() => {
          setTimeout(() => setIsSlashed(true), 200);
        }}
        style={{ position: 'relative', display: 'inline-block', fontSize: size, opacity: oldOpacity, color: 'inherit' }}
      >
        {oldPrice}
        
        {/* The Katana Slash Line */}
        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isSlashed ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.15, ease: [0.1, 0.9, 0.2, 1] }} // Fast fruit-ninja cut!
          style={{
            position: 'absolute',
            top: '50%',
            left: '-10%',
            width: '120%',
            height: '3px',
            backgroundColor: color,
            transformOrigin: 'left center',
            rotate: '-15deg',
            boxShadow: `0 0 10px ${color}, 0 0 5px ${color}` // Glowing cut
          }}
        />
      </motion.span>
      
      {/* The New Price Reveal */}
      <motion.span
        initial={{ opacity: 0, scale: 0.5, x: -10 }}
        animate={isSlashed ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.5, x: -10 }}
        transition={{ duration: 0.4, type: 'spring', bounce: 0.5, delay: 0.1 }} // Pops in right after slash
        style={{ fontSize: newSize, fontWeight: 'bold', color: 'inherit' }}
      >
        {newPrice}
      </motion.span>
    </span>
  );
};

export default KatanaStrikePrice;
