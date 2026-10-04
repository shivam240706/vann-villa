import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import './LeadCapture.css';

const LeadCapture = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (_e) => {
    // We let the form do a standard HTML submit to FormSubmit.co
    // This bypasses AJAX CORS issues and guarantees the email is sent/verified.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
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
            {!submitted ? (
              <form 
                className="lead-capture-form" 
                action="https://formsubmit.co/kudratvilla98@gmail.com"
                method="POST"
                target="_blank"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_subject" value="New Newsletter Subscription!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="message" value="Please add me to the secret deals newsletter." />
                <div className="input-group">
                  <Mail className="input-icon" size={20} />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email address" 
                    required 
                    aria-label="Email address for newsletter"
                  />
                </div>
                <button type="submit" className="subscribe-btn">
                  <span>Subscribe</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            ) : (
              <div className="lead-capture-success">
                <CheckCircle2 size={24} className="success-icon" />
                <span>You're on the list! Check your inbox for your first exclusive offer.</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadCapture;
