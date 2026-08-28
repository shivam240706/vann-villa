import React from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';
import './LegalPages.css';

const CancellationRefund = () => {
  return (
    <div className="legal-page">
      <SEO 
        title="Cancellation & Refund Policy | Kudrat Villa"
        description="Read the cancellation and refund policy for Kudrat Villa."
      />
      <section className="legal-hero">
        <div className="legal-hero-overlay"></div>
        <motion.div 
          className="legal-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="legal-title">Cancellation Policy</h1>
        </motion.div>
      </section>

      <section className="legal-content-section">
        <div className="legal-container">
          <motion.div 
            className="legal-text-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            <p><strong>1. Booking Advance & Refund Window</strong></p>
            <ul className="legal-list">
              <li>A 50% advance payment is required to secure your booking dates.</li>
              <li>14+ Days Before Check-In: 100% refund of your advance payment (minus any payment gateway processing fees).</li>
              <li>Within 14 Days of Check-In: The 50% booking advance is strictly non-refundable. No-shows will be charged the full amount.</li>
            </ul>
            
            <p style={{ marginTop: '20px' }}><strong>2. Weather & Access Exception</strong></p>
            <ul className="legal-list">
              <li>In the event of severe weather warnings, landslides, or official road closures preventing access to the villa, guests may reschedule their stay within 90 days, subject to availability. Cash refunds are not provided for weather-related disruptions.</li>
            </ul>

            <p style={{ marginTop: '20px' }}><strong>3. Security & Damage Deposit</strong></p>
            <ul className="legal-list">
              <li>A refundable security deposit of ₹5,000 is required upon check-in. This is fully refunded at check-out, pending a property walkthrough. Deductions will be made for property damage, deep cleaning required due to pets, or violations of house rules (e.g., smoking indoors).</li>
            </ul>

            <p style={{ marginTop: '20px' }}><strong>4. Pet Policy Addendum</strong></p>
            <ul className="legal-list">
              <li>We are 100% pet-friendly. Guests are entirely responsible for their pets at all times. Pets are strictly prohibited in the pool. Any damage caused by pets will be deducted directly from the security deposit.</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CancellationRefund;
