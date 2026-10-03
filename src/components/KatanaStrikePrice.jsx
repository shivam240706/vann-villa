import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Particle spark effect for the Katana Slash
const Sparks = ({ active, color }) => {
  if (!active) return null;
  
  const sparks = Array.from({ length: 8 });
  
  return (
    <div style={{ position: 'absolute', top: '50%', right: '-5%', width: '10px', height: '10px', pointerEvents: 'none', zIndex: 10 }}>
      {sparks.map((_, i) => {
        const angle = (Math.PI * 2 * i) / sparks.length + (Math.random() * 0.5 - 0.25);
        const velocity = 20 + Math.random() * 30;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{ opacity: 0, x, y, scale: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: 'absolute',
              width: '3px',
              height: '3px',
              backgroundColor: color,
              borderRadius: '50%',
              boxShadow: `0 0 8px ${color}, 0 0 4px #fff`
            }}
          />
        );
      })}
    </div>
  );
};

const KatanaStrikePrice = ({ oldPrice, newPrice, color = '#ff3b30', size = '1.2rem', newSize = '1.6rem', oldOpacity = 0.7 }) => {
  const [isSlashed, setIsSlashed] = useState(false);
  
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
      <motion.span 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }}
        onViewportEnter={() => {
          setTimeout(() => setIsSlashed(true), 300); // slight pause for anticipation
        }}
        animate={isSlashed ? { x: [-3, 3, -1, 1, 0], opacity: 0.4 } : { opacity: oldOpacity }}
        transition={{ duration: 0.3 }}
        style={{ position: 'relative', display: 'inline-block', fontSize: size, color: 'inherit' }}
      >
        {oldPrice}
        
        {/* The Katana Slash Line */}
        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isSlashed ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.12, ease: [0.1, 0.9, 0.2, 1] }} // Ultra-fast fruit-ninja cut!
          style={{
            position: 'absolute',
            top: '50%',
            left: '-10%',
            width: '120%',
            height: '3px',
            // A sharp gradient that looks like a glowing blade
            background: `linear-gradient(90deg, transparent 0%, ${color} 15%, #fff 50%, ${color} 85%, transparent 100%)`,
            transformOrigin: 'left center',
            rotate: '-15deg',
            boxShadow: `0 0 12px ${color}, 0 0 6px rgba(255,255,255,0.8)` // Intense glowing cut
          }}
        />
        <Sparks active={isSlashed} color={color} />
      </motion.span>
      
      {/* The New Price Reveal */}
      <motion.span
        initial={{ opacity: 0, scale: 0.5, x: -15, filter: 'blur(4px)' }}
        animate={isSlashed ? { opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' } : { opacity: 0, scale: 0.5, x: -15, filter: 'blur(4px)' }}
        transition={{ duration: 0.5, type: 'spring', bounce: 0.6, delay: 0.05 }} // Snaps in almost immediately after cut
        style={{ fontSize: newSize, fontWeight: 'bold', color: 'inherit' }}
      >
        {newPrice}
      </motion.span>
    </span>
  );
};

export default KatanaStrikePrice;
