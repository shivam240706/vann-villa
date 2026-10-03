import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedImage = ({ src, alt, className = '', style = {}, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }} className={className}>
      {/* Skeleton or blurred placeholder */}
      {!isLoaded && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#e0e0e0',
            zIndex: 1,
          }}
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          filter: isLoaded ? 'blur(0px)' : 'blur(10px)' 
        }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        {...props}
      />
    </div>
  );
};

export default AnimatedImage;
