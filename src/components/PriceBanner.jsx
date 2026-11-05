import React from 'react';
import { motion } from 'framer-motion';
import './PriceBanner.css';

const PriceBanner = () => {
  return (
    <section className="ultra-premium-price-section" aria-label="Reservation summary and pricing">
      <div className="ultra-premium-price-content">
        <motion.p 
          className="ultra-premium-prefix"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          Exclusive Private Villa Rate
        </motion.p>
        
        <motion.div 
          className="editorial-price-display"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <del className="editorial-old-price">₹8,999</del>
          <span className="editorial-curr-price">₹4,499</span>
          <span className="editorial-price-unit">/ night</span>
        </motion.div>
        
        <motion.p 
          className="ultra-premium-suffix"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          Base reservation includes 4 guests. Extra guests ₹500 per person up to 6 maximum.
        </motion.p>

        {/* Editorial Trust Signals */}
        <motion.div 
          className="price-trust-signals"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <span className="trust-signal">Direct Host Reservation</span>
          <span className="trust-divider" aria-hidden="true">·</span>
          <span className="trust-signal">Zero Hidden Fees</span>
          <span className="trust-divider" aria-hidden="true">·</span>
          <span className="trust-signal">100% Pet-Friendly Grounds</span>
        </motion.div>
        
        <motion.button 
          id="price-cta-book"
          type="button"
          className="btn-primary ultra-premium-book-btn" 
          onClick={() => window.location.href = 'https://wa.me/919411770969?text=Hi%2C%20I%20would%20like%20to%20reserve%20a%20stay%20at%20Van%20Villa.'}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          Reserve via WhatsApp
        </motion.button>

        <motion.p 
          className="urgency-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          Advance reservation recommended for weekend stays and holiday dates.
        </motion.p>
      </div>
    </section>
  );
};

export default PriceBanner;
