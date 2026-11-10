import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="hero" className="hero" aria-label="Welcome to Vann Villa">
      <div className="hero-overlay" />
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ y, opacity }}
      >
        <span className="hero-eyebrow-text">
          Dehradun Foothills • Uttarakhand
        </span>

        <h1 className="hero-title">
          An Unshared Mountain Sanctuary
        </h1>

        <p className="hero-narrative">
          A secluded 2BHK private pool villa set across 5,000 sq ft of private lawn.
          Reserved exclusively for one family or gathering at a time.
        </p>

        {/* Clean, typographic spec line without bulky dark boxes */}
        <div className="hero-features-line">
          <span>Unshared Private Pool</span>
          <span className="hero-dot" aria-hidden="true">•</span>
          <span>5,000 Sq Ft Lawn</span>
          <span className="hero-dot" aria-hidden="true">•</span>
          <span>Entire 2BHK Villa</span>
          <span className="hero-dot" aria-hidden="true">•</span>
          <span>Pet Friendly</span>
        </div>

        {/* Action Button */}
        <div className="hero-actions-row">
          <a
            href="https://wa.me/919411770969?text=Hello%20Vann%20Villa%2C%20I%20would%20like%20to%20inquire%20about%20direct%20availability%20and%20rates."
            target="_blank"
            rel="noopener noreferrer"
            className="hero-primary-btn"
          >
            <span>Check Availability on WhatsApp</span>
            <span className="btn-rate-hint">Starting from ₹4,499 / night</span>
          </a>

          <button
            type="button"
            className="hero-secondary-btn"
            onClick={() => scrollToSection('gallery')}
          >
            View Photos & Suites ↓
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
