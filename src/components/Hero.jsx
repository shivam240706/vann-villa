import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const scrollToReservation = (e) => {
    e.preventDefault();
    const el = document.getElementById('reservation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="hero" className="hero" aria-label="Welcome to Vann Villa">
      <div className="hero-overlay" />
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        style={{ y, opacity }}
      >
        <span className="hero-eyebrow">
          Dehradun Foothills • Uttarakhand
        </span>

        <h1 className="hero-title">
          An Unshared Mountain Sanctuary
        </h1>

        <p className="hero-subtitle">
          A secluded 2BHK private pool villa set across 5,000 sq ft of private lawn. Reserved exclusively for one family or gathering at a time.
        </p>

        {/* 4 Clean Visual Spec Pills */}
        <div className="hero-pills-row">
          <span className="hero-pill">Unshared Private Pool</span>
          <span className="hero-pill">5,000 Sq Ft Lawn</span>
          <span className="hero-pill">Entire 2BHK Villa</span>
          <span className="hero-pill">Pet Friendly</span>
        </div>

        {/* Action Button & Direct Rate */}
        <div className="hero-actions-container">
          <a
            href="https://wa.me/919411770969?text=Hello%20Vann%20Villa%2C%20I%20would%20like%20to%20check%20availability%20and%20rates%20for%20a%20private%20stay."
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary"
          >
            Check Availability on WhatsApp
          </a>

          <div className="hero-rate-tag">
            Starting from <span className="rate-accent">₹4,499 / night</span>
          </div>

          <a 
            href="#reservation" 
            onClick={scrollToReservation}
            className="hero-scroll-link"
          >
            Check Dates &amp; Availability &darr;
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;