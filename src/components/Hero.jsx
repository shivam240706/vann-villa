import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const scrollToRates = (e) => {
    e.preventDefault();
    const el = document.getElementById('packages');
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
        <h1 className="hero-title">
          Wake up to misty mountain views in Dehradun
        </h1>

        <div className="hero-rate-tag">
          Starting at <span className="rate-accent">₹4,499 /night</span>
        </div>

        {/* 4 Clean Visual Spec Pills */}
        <div className="hero-pills-row">
          <span className="hero-pill">Private Pool</span>
          <span className="hero-pill">Pet Friendly</span>
          <span className="hero-pill">Entire 2BHK Villa</span>
          <span className="hero-pill">5,000 Sq Ft Lawns</span>
        </div>

        {/* Clean, Non-Cluttered Action Buttons */}
        <div className="hero-actions-row">
          <a
            href="https://wa.me/919411770969?text=Hello%20Vann%20Villa%2C%20I%20would%20like%20to%20inquire%20about%20direct%20availability%20and%20rates."
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary"
          >
            Check Availability & Pricing
          </a>

          <a
            href="#packages"
            onClick={scrollToRates}
            className="hero-btn-outline"
          >
            View Estate Rates
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
