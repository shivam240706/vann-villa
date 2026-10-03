import React from 'react';
import { motion } from 'framer-motion';
import { Waves, Dog, Home } from 'lucide-react';
import KatanaStrikePrice from './KatanaStrikePrice';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
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
        <motion.h1 className="hero-title" style={{ marginBottom: '10px' }}>
          {"Wake up to misty mountain views in Dehradun".split(" ").map((word, idx) => (
            <span key={idx} style={{ display: 'inline-block', marginRight: '0.25em', overflow: 'hidden' }}>
              <motion.span style={{ display: 'inline-block' }} variants={wordVariants}>
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>
        <motion.p variants={itemVariants} style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--accent-gold)', marginBottom: '30px', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
          Starting at <KatanaStrikePrice oldPrice="₹9,999" newPrice="₹4,999" color="#ff2a2a" size="1.2rem" newSize="1.6rem" />/night
        </motion.p>

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
