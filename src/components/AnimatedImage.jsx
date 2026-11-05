import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedImage = ({ src, alt, className = '', style = {}, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }} className={className}>
      {/* Subtle architectural placeholder */}
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--secondary-bg, #F5EFEB)',
            zIndex: 1,
          }}
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        {...props}
      />
    </div>
  );
};

export default AnimatedImage;
