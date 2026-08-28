import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Dog, Home } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="hero" aria-label="Welcome to Kudrat Villa">
      <div className="hero-overlay"></div>
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-title" style={{ marginBottom: '10px' }}>Wake up to misty mountain views in Dehradun</motion.h1>
        <motion.h2 variants={itemVariants} className="hero-subtitle" style={{ marginBottom: '15px', color: 'var(--text-light)', lineHeight: '1.6' }}>
          Step outside to pine-scented air, your own crystal pool catching the morning light, and complete silence — no other guests, no shared spaces.
        </motion.h2>
        <motion.p variants={itemVariants} style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--accent-gold)', marginBottom: '30px', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Starting at ₹9,999/night</motion.p>

        <motion.div variants={itemVariants} className="hero-selling-points">
          <div className="point"><Waves size={18} className="point-icon" /> <span>Private Pool</span></div>
          <div className="point"><Dog size={18} className="point-icon" /> <span>Pet Friendly</span></div>
          <div className="point"><Home size={18} className="point-icon" /> <span>Entire 2BHK Villa</span></div>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-actions">
          <button id="hero-cta-book" className="btn-primary hero-cta-btn pulse-glow" style={{ textTransform: 'none', letterSpacing: '1px', fontSize: '1rem' }} onClick={() => window.location.href = 'https://wa.me/916396335179?text=Hi%2C%20I%20would%20like%20to%20check%20availability%20and%20pricing%20at%20Kudrat%20Villa.'}>Check Availability & Pricing</button>
          <button id="hero-cta-explore" className="btn-primary hero-cta-btn pulse-glow" style={{ textTransform: 'none', letterSpacing: '1px', fontSize: '1rem' }} onClick={() => {
            const packagesSection = document.getElementById('packages');
            if (packagesSection) packagesSection.scrollIntoView({ behavior: 'smooth' });
          }}>View Packages</button>
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        onClick={() => {
          const nextSection = document.querySelector('.highlights-bar-container');
          if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
        }}
        role="button"
        tabIndex={0}
        aria-label="Scroll down to explore"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const nextSection = document.querySelector('.highlights-bar-container');
            if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
