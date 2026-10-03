import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxDivider = ({ imageSrc, height = '300px' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // The background moves opposite to the scroll direction for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} style={{ height, position: 'relative', overflow: 'hidden', width: '100%', scrollSnapAlign: 'start' }}>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y,
          scale: 1.2, // Need to scale up slightly so edges don't show when moving
          zIndex: -1
        }}
      />
      {/* Dark overlay for luxury feel */}
      <div 
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default ParallaxDivider;
