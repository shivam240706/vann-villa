import React from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';
import './LegalPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <SEO 
        title="Privacy Policy | Kudrat Villa"
        description="Read the privacy policy for Kudrat Villa."
      />
      <section className="legal-hero">
        <div className="legal-hero-overlay"></div>
        <motion.div 
          className="legal-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="legal-title">Privacy Policy</h1>
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
            <ul className="legal-list">
              <li>Kudrat Villa is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.</li>
              <li>Kudrat Villa may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you adhere to these changes.</li>
            </ul>
            
            <p style={{ marginTop: '20px' }}><strong>We may collect the following information:</strong></p>
            <ul className="legal-list">
              <li>Name</li>
              <li>Contact information including email address</li>
              <li>Demographic information such as postcode, preferences and interests, if required</li>
              <li>Other information relevant to customer surveys and/or offers</li>
            </ul>

            <p style={{ marginTop: '20px' }}><strong>What we do with the information we gather:</strong></p>
            <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
            <ul className="legal-list">
              <li>Internal record keeping.</li>
              <li>We may use the information to improve our products and services.</li>
              <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
              <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customize the website according to your interests.</li>
              <li>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
