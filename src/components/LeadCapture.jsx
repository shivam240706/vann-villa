import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './LeadCapture.css';

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="1"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const LeadCapture = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (_e) => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section className="lead-capture-section" aria-labelledby="newsletter-heading">
      <div className="lead-capture-container">
        <motion.div 
          className="lead-capture-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="lead-capture-text">
            <h2 id="newsletter-heading">Estate Dispatch</h2>
            <p>Join our private guest registry to receive seasonal availability, estate announcements, and curated regional itineraries for Dehradun and Mussoorie.</p>
          </div>
          
          <div className="lead-capture-form-wrapper">
            {!submitted ? (
              <form 
                className="lead-capture-form" 
                action="https://formsubmit.co/info@vanvilla.com"
                method="POST"
                target="_blank"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_subject" value="New Newsletter Subscription!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="message" value="Please add me to the estate dispatch registry." />
                <div className="input-group">
                  <span className="input-icon"><MailIcon /></span>
                  <input 
                    type="email" 
                    id="newsletter-email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter your email address" 
                    required 
                    aria-label="Email address for estate dispatch"
                  />
                </div>
                <button type="submit" className="subscribe-btn">
                  <span>Register</span>
                  <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                </button>
              </form>
            ) : (
              <div className="lead-capture-success">
                <span className="success-tag">Confirmed</span>
                <span>You are registered on our guest dispatch list.</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadCapture;
