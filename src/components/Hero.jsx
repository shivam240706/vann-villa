import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
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
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ y, opacity }}
      >
        <span className="hero-eyebrow">
          Dehradun Foothills &bull; Uttarakhand
        </span>

        <h1 className="hero-title">
          An Unshared Mountain Sanctuary
        </h1>

        <p className="hero-subtitle">
          Private 2BHK Pool Residence &amp; 5,000 Sq Ft Grounds &bull; Reserved Strictly for One Gathering
        </p>

        {/* Minimalist Specs - Hidden on mobile to keep hero airy and uncluttered */}
        <div className="hero-specs-line">
          <span>Unshared Private Pool</span>
          <span className="spec-dot">&bull;</span>
          <span>5,000 Sq Ft Lawn</span>
          <span className="spec-dot">&bull;</span>
          <span>Entire 2BHK Villa</span>
          <span className="spec-dot">&bull;</span>
          <span>100% Pet Friendly</span>
        </div>

        {/* Dual Action Buttons: Check Availability on WhatsApp & View Packages */}
        <div className="hero-actions-container">
          <div className="hero-btn-group">
            <a
              href="https://wa.me/919411770969?text=Hello%20Vann%20Villa%2C%20I%20would%20like%20to%20check%20availability%20and%20rates%20for%20a%20private%20stay."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
            >
              Check Availability on WhatsApp
            </a>

            <a
              href="#packages"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('packages');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hero-btn-secondary"
            >
              View Packages
            </a>
          </div>

          <div className="hero-rate-tag">
            Direct Host Rate: <span className="rate-accent">From ₹4,499 / night</span>
          </div>

          <a 
            href="#residence" 
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('residence') || document.getElementById('reservation');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hero-scroll-link"
          >
            Explore Villa &amp; Suites &darr;
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;