import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';
import './Contact.css';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    
    // Construct the WhatsApp message
    const whatsappText = `Hello Kudrat Villa! I have an inquiry.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
    const whatsappNumber = "919411770969";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;
    
    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact Us | Book the Best Luxury Private Villa in Dehradun"
        description="Ready to experience Dehradun's hidden gem? Contact Kudrat Villa today to book your luxury private villa retreat or inquire about our amenities."
      />
      {/* Hero Section */}
      <section className="contact-hero">
        <img src="/images/kudrat-villa-exterior.webp" alt="Kudrat Villa — Premium Luxury Private Villa in Dehradun" className="global-hero-bg" loading="eager" />
        <motion.div 
          className="contact-hero-overlay"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="massive-title">CONTACT US</h1>
        </motion.div>
      </section>

      {/* Info Section */}
      <section className="contact-info-section section-padding" aria-label="Contact information">
        <motion.div 
          className="contact-info-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="info-title">GET IN TOUCH WITH US</h2>
          <div className="info-details">
            <a href="tel:+919411770969" className="contact-link">+91 94117 70969</a>
            <span className="contact-separator" aria-hidden="true">|</span>
            <a href="mailto:kudratvilla98@gmail.com?subject=Inquiry%20for%20Kudrat%20Villa" className="contact-link email">kudratvilla98@gmail.com</a>
          </div>

          <a href="https://wa.me/919411770969?text=Hello!%20I%20am%20interested%20in%20experiencing%20the%20tranquility%20of%20Kudrat%20Villa.%20Could%20you%20please%20provide%20more%20information%20regarding%20availability%20and%20booking%20details%3F%20Thank%20you." target="_blank" rel="noopener noreferrer" className="contact-whatsapp-btn">
            <svg viewBox="0 0 32 32" fill="currentColor" width="20" height="20">
              <path d="M16 2a14 14 0 0 0-11.83 21.5L2 30l6.67-2.12A13.9 13.9 0 0 0 16 30a14 14 0 0 0 0-28zm7.36 19.83c-.31.87-1.8 1.66-2.5 1.76-.64.08-1.46.22-4.17-.9-3.26-1.35-5.38-4.72-5.54-4.94-.16-.21-1.32-1.76-1.32-3.36 0-1.6.84-2.38 1.14-2.71.3-.32.65-.41.87-.41.22 0 .43 0 .62.01.2.01.47-.07.72.53.27.65.92 2.25 1 2.45.08.2.14.43.01.69-.13.26-.2.43-.4.65-.19.23-.41.51-.58.69-.2.19-.41.39-.18.79.23.4 1.01 1.68 2.18 2.72 1.5 1.34 2.76 1.76 3.16 1.95.4.19.64.16.88-.11.23-.27 1.01-1.18 1.28-1.58.27-.4.54-.34.9-.21.36.14 2.27 1.07 2.66 1.27.39.2.65.29.74.45.1.16.1.92-.21 1.79z"></path>
            </svg>
            Chat on WhatsApp
          </a>

          <p className="info-desc">
            Kudrat Villa is situated amidst the serene landscapes of the countryside, offering a peaceful escape from the hustle and bustle of city life. Discover us at:
            <br/><br/>
            <a 
              href="https://maps.app.goo.gl/gjF7a1iz6D2W21HR8" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: 'bold' }}
            >
              1km ahead of Nature Campus<br/>
              Hillside, Uttarakhand, 248007
            </a>
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/kudratvilla" target="_blank" rel="noopener noreferrer" className="icon" aria-label="Visit our Facebook page"><FacebookIcon /></a>
            <a href="https://www.instagram.com/kudrat_villa?igsh=MXV0czBiMG9xZTRpYw==" target="_blank" rel="noopener noreferrer" className="icon" aria-label="Visit our Instagram page"><InstagramIcon /></a>
          </div>
        </motion.div>
      </section>

      {/* Map and Form Section */}
      <section className="map-form-section" aria-label="Location and inquiry form">
        <div className="map-container">
          <div className="map-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
            <iframe 
              src="https://maps.google.com/maps?q=30.3765003,77.9633871&z=15&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Kudrat Villa Location on Google Maps"
            ></iframe>
          </div>
        </div>
        <motion.div 
          className="form-container"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="contact-name" className="sr-only">Your Name</label>
              <input 
                type="text" 
                id="contact-name"
                name="name" 
                placeholder="Name" 
                required 
                autoComplete="name"
                aria-required="true"
                value={formData.name} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email" className="sr-only">Email Address</label>
              <input 
                type="email" 
                id="contact-email"
                name="email" 
                placeholder="Email" 
                required 
                autoComplete="email"
                aria-required="true"
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
              <input 
                type="tel" 
                id="contact-phone"
                name="phone" 
                placeholder="Phone" 
                required 
                autoComplete="tel"
                aria-required="true"
                value={formData.phone} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message" className="sr-only">Your Message</label>
              <textarea 
                id="contact-message"
                name="message" 
                placeholder="HOW MAY I ASSIST YOU?" 
                rows="4" 
                required 
                aria-required="true"
                value={formData.message} 
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" id="contact-submit">Send Message</button>
          </form>
        </motion.div>
      </section>

      {/* Reservation Partners */}
      <section className="partners-section section-padding" aria-label="Reservation partners">
        <div className="partners-content">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Reservation Partners
          </motion.h2>
          
          <motion.div 
            className="ota-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="ota-card">
              <div className="ota-logo">
                <img src="/logos/mmt.webp" alt="MakeMyTrip logo" loading="lazy" />
              </div>
              <p className="ota-name">MakeMyTrip</p>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="ota-card">
              <div className="ota-logo">
                <img src="/logos/airbnb.webp" alt="Airbnb logo" loading="lazy" />
              </div>
              <p className="ota-name">Airbnb</p>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="ota-card">
              <div className="ota-logo">
                <img src="/logos/agoda.webp" alt="Agoda logo" loading="lazy" />
              </div>
              <p className="ota-name">Agoda</p>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="ota-card">
              <div className="ota-logo">
                <img src="/logos/goibibo.webp" alt="Goibibo logo" loading="lazy" />
              </div>
              <p className="ota-name">Goibibo</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
