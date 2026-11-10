import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './LeadCapture.css';

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="1"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const LeadCapture = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastEmail, setLastEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@')) return;

    setLastEmail(trimmed);
    setSubmitted(true);

    // 1. Save locally to localStorage so emails are never lost
    try {
      const existing = JSON.parse(localStorage.getItem('vann_villa_registered_emails') || '[]');
      existing.push({ email: trimmed, date: new Date().toISOString() });
      localStorage.setItem('vann_villa_registered_emails', JSON.stringify(existing));
    } catch {
      // Ignore localStorage error if private mode
    }

    // 2. Direct WhatsApp forward to owner at +91 6396885805
    const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    const message = `Hello Vann Villa! Please register my email for Estate Dispatch, seasonal privileges, and exclusive rate updates:%0A%0A*Email:* ${encodeURIComponent(trimmed)}%0A*Date:* ${encodeURIComponent(today)}`;
    const whatsappUrl = `https://wa.me/916396885805?text=${message}`;

    // Open WhatsApp in new window/tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Reset input
    setEmail('');
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
                  <span className="input-icon"><MailIcon /></span>
                  <input 
                    type="email" 
                    id="newsletter-email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    aria-label="Email address for estate dispatch"
                  />
                </div>
                <button type="submit" className="subscribe-btn">
                  <span>Register on WhatsApp</span>
                  <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                </button>
                <span className="lead-note">
                  Direct dispatch to host (+91 6396885805) • Zero spam
                </span>
              </form>
            ) : (
              <div className="lead-capture-success">
                <div className="success-header">
                  <span className="success-icon"><CheckIcon /></span>
                  <span className="success-tag">Registration Sent</span>
                </div>
                <p className="success-text">
                  Your email <strong>{lastEmail}</strong> has been forwarded to our estate team on WhatsApp (+91 6396885805).
                </p>
                <button 
                  type="button" 
                  className="register-another-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Register another email
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
