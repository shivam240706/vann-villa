import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Shield, Clock, CreditCard } from 'lucide-react';
import KatanaStrikePrice from './KatanaStrikePrice';
import './PriceBanner.css';

const PriceBanner = () => {
  return (
    <section className="ultra-premium-price-section" aria-label="Pricing information">
      <div className="ultra-premium-price-content">
        
        <motion.p 
          className="ultra-premium-prefix"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          STARTING AT JUST
        </motion.p>
        
        <motion.h2 
          className="ultra-premium-amount"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <KatanaStrikePrice oldPrice="₹9,999" newPrice="₹4,999" color="#ff2a2a" size="0.6em" newSize="1em" />
        </motion.h2>
        
        <motion.p 
          className="ultra-premium-suffix"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.2, ease: "easeOut" }}
        >
          per night <br/><span style={{ fontSize: '0.8rem', opacity: 0.8 }}>(+₹500 per person if more than 4)</span>
        </motion.p>

        {/* Trust Signals */}
        <motion.div 
          className="price-trust-signals"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.3, ease: "easeOut" }}
        >
          <span className="trust-signal"><Shield size={14} aria-hidden="true" /> No Hidden Fees</span>
          <span className="trust-signal"><Clock size={14} aria-hidden="true" /> Instant Confirmation</span>
          <span className="trust-signal"><CreditCard size={14} aria-hidden="true" /> Secure Booking</span>
        </motion.div>
        
        <motion.button 
          id="price-cta-book"
          className="ultra-premium-book-btn" 
          onClick={() => window.location.href = 'https://wa.me/919411770969?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Kudrat%20Villa.'}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.4, ease: "easeOut" }}
        >
          BOOK ON WHATSAPP <ChevronRight size={18} className="premium-btn-arrow" aria-hidden="true" />
        </motion.button>

        <motion.p 
          className="urgency-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.5, ease: "easeOut" }}
          style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}
        >
          ★ Limited slots available this month — Book early to secure your dates
        </motion.p>

      </div>
    </section>
  );
};

export default PriceBanner;
