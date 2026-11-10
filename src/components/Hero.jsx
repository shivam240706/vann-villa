import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const CompassIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  </svg>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
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
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ y, opacity }}
      >
        {/* Editorial Eyebrow */}
        <div className="hero-eyebrow">
          <span className="eyebrow-icon"><CompassIcon /></span>
          <span className="eyebrow-text">Estate No. 01 • Shivalik Foothills, Dehradun</span>
        </div>

        {/* Master Headline */}
        <h1 className="hero-title">
          An Unshared Mountain Sanctuary
        </h1>

        {/* Editorial Narrative */}
        <p className="hero-narrative">
          A private 2BHK luxury residence enveloped by 5,000 sq ft of pine-fringed grounds and an unshared mountain plunge pool. 100% exclusive seclusion, 500m from UPES.
        </p>

        {/* Architectural Specs Ribbon */}
        <div className="hero-specs-ribbon">
          <div className="hero-spec-item">
            <strong className="spec-number">5,000</strong>
            <span className="spec-unit">Sq Ft Grounds</span>
            <span className="spec-detail">Secure Fenced Lawn</span>
          </div>

          <div className="hero-spec-divider" aria-hidden="true" />

          <div className="hero-spec-item">
            <strong className="spec-number">Unshared</strong>
            <span className="spec-unit">Private Pool</span>
            <span className="spec-detail">Mountain Water • 4.5 Ft</span>
          </div>

          <div className="hero-spec-divider" aria-hidden="true" />

          <div className="hero-spec-item">
            <strong className="spec-number">100%</strong>
            <span className="spec-unit">Exclusive Privacy</span>
            <span className="spec-detail">Entire 2BHK Residence</span>
          </div>
        </div>

        {/* Streamlined Action Bar */}
        <div className="hero-actions-row">
          <a
            href="https://wa.me/919411770969?text=Hello%20Vann%20Villa%2C%20I%20would%20like%20to%20inquire%20about%20direct%20availability%20and%20rates."
            target="_blank"
            rel="noopener noreferrer"
            className="hero-primary-btn"
          >
            <span>Inquire Availability on WhatsApp</span>
            <span className="btn-rate-hint">From ₹4,499/nt • Zero OTA Fee</span>
          </a>

          <button
            type="button"
            className="hero-secondary-btn"
            onClick={() => scrollToSection('living-vision')}
          >
            Explore The Living Vision ↓
          </button>
        </div>
      </motion.div>

      {/* Understated Scroll Hint */}
      <div 
        className="hero-scroll-cue"
        onClick={() => scrollToSection('reservation-section')}
        role="button"
        tabIndex={0}
        aria-label="Scroll down to explore"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            scrollToSection('reservation-section');
          }
        }}
      >
        <span className="scroll-cue-line" />
        <span className="scroll-cue-text">Scroll to Discover</span>
      </div>
    </section>
  );
};

export default Hero;
