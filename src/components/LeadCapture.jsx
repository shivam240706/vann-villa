import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import './LeadCapture.css';

const LeadCapture = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would connect to a backend or Mailchimp
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setEmail('');
    }
  };

  return (
    <section className="lead-capture-section" aria-labelledby="newsletter-heading">
      <div className="lead-capture-container">
        <motion.div 
          className="lead-capture-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="lead-capture-text">
            <h2 id="newsletter-heading">Unlock Secret Deals</h2>
            <p>Not ready to book yet? Join our inner circle to receive exclusive 10% off direct booking codes, last-minute cancellation deals, and curated Dehradun itineraries.</p>
          </div>
          
          <div className="lead-capture-form-wrapper">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  className="lead-capture-form" 
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <div className="input-group">
                    <Mail className="input-icon" size={20} />
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                      aria-label="Email address for newsletter"
                    />
                  </div>
                  <button type="submit" className="subscribe-btn">
                    <span>Subscribe</span>
                    <ArrowRight size={18} />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  className="lead-capture-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <CheckCircle2 size={24} className="success-icon" />
                  <span>You're on the list! Check your inbox for your first exclusive offer.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadCapture;
