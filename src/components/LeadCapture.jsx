import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './LeadCapture.css';

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const LeadCapture = () => {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastPhone, setLastPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = phone.trim();
    if (!trimmed || trimmed.length < 8) return;

    setLastPhone(trimmed);
    setSubmitted(true);

    // Save locally to localStorage so numbers are preserved
    try {
      const existing = JSON.parse(localStorage.getItem('vann_villa_registered_phones') || '[]');
      existing.push({ phone: trimmed, date: new Date().toISOString() });
      localStorage.setItem('vann_villa_registered_phones', JSON.stringify(existing));
    } catch {
      // Ignore localStorage error if private mode
    }

    // Direct WhatsApp forward to host (phone number kept private in backend URL, not shown in UI)
    const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    const message = `Hello Vann Villa! Please register my mobile number for Estate Dispatch, seasonal privileges, and exclusive rate updates:%0A%0A*Mobile Number:* ${encodeURIComponent(trimmed)}%0A*Date:* ${encodeURIComponent(today)}`;
    const whatsappUrl = `https://wa.me/916396885805?text=${message}`;

    // Open WhatsApp in new window/tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Reset input
    setPhone('');
  };

  return (
    <section className="lead-capture-section" aria-labelledby="newsletter-heading">
      <div className="lead-capture-container">
        <motion.div 
          className="lead-capture-content"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="lead-capture-text">
            <span className="lead-eyebrow">Estate Registry</span>
            <h2 id="newsletter-heading">Estate Dispatch</h2>
            <p>
              Join our private guest registry to receive seasonal availability, estate announcements,
              and curated regional itineraries for Dehradun and Mussoorie.
            </p>
          </div>
          
          <div className="lead-capture-form-wrapper">
            {!submitted ? (
              <form 
                className="lead-capture-form" 
                onSubmit={handleSubmit}
              >
                <div className="input-group">
                  <span className="input-icon"><PhoneIcon /></span>
                  <input 
                    type="tel" 
                    id="newsletter-phone"
                    name="phone"
                    autoComplete="tel"
                    placeholder="Enter your phone number" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required 
                    aria-label="Mobile phone number for estate dispatch"
                  />
                </div>
                <button type="submit" className="subscribe-btn">
                  <span>Register on WhatsApp</span>
                  <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                </button>
                <span className="lead-note">
                  Direct dispatch to estate host &bull; Zero spam
                </span>
              </form>
            ) : (
              <div className="lead-capture-success">
                <div className="success-header">
                  <span className="success-icon"><CheckIcon /></span>
                  <span className="success-tag">Registration Sent</span>
                </div>
                <p className="success-text">
                  Your number <strong>{lastPhone}</strong> has been shared with our estate concierge on WhatsApp.
                </p>
                <button 
                  type="button" 
                  className="register-another-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Register another number
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadCapture;