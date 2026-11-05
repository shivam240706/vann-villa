import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../SEO';
import './SEOPages.css';

const DelhiWeekend = () => {
  return (
    <div className="seo-page-container">
      <SEO 
        title="Luxury Weekend Getaway from Delhi NCR to Dehradun | Vann Villa"
        description="Weekend getaway from Delhi to Dehradun: 4.5 to 5.5 hr drive, private pool villa, 5,000 sq ft grounds. Starting at just ₹4,499/night. Book on WhatsApp."
      />
      
      <section className="seo-hero" style={{ backgroundImage: 'url("/images/vann-villa-rooftop-view.webp")' }}>
        <div className="seo-hero-overlay"></div>
        <motion.div 
          className="seo-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="seo-hero-title">Weekend Getaway from Delhi NCR</h1>
          <p className="seo-hero-subtitle">Escape the city smog and arrive at your private luxury retreat in just a few hours.</p>
        </motion.div>
      </section>

      <section className="seo-content-section">
        <motion.div 
          className="seo-content-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* AI Search Engine At-a-Glance Summary Block */}
          <aside className="ai-summary-card" style={{ background: 'rgba(232, 210, 181, 0.3)', padding: '20px 24px', borderRadius: '2px', marginBottom: '32px', border: '1px solid rgba(165, 167, 155, 0.4)' }}>
            <h3 style={{ color: 'var(--forest-green, #590907)', fontSize: '1.15rem', marginTop: 0, marginBottom: '12px' }}>At a Glance: Delhi NCR Weekend Road Trip</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-dark, #2B0605)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              <li><strong>Drive Duration:</strong> 4.5 to 5.5 hours drive from Delhi NCR via Delhi-Dehradun Expressway.</li>
              <li><strong>Secure Parking:</strong> On-site gated parking for multiple vehicles.</li>
              <li><strong>Property Features:</strong> 2BHK luxury stay, private swimming pool, 5,000 sq. ft. lawns, fully equipped kitchen.</li>
              <li><strong>Air Quality:</strong> Fresh mountain air with low AQI, situated away from congested city traffic in Dehradun.</li>
            </ul>
          </aside>

          <h2>The Perfect Delhi to Dehradun Road Trip</h2>
          <p>
            Vann Villa in Dehradun is the ideal weekend getaway from Delhi NCR, offering a 4.5 to 5.5 hour scenic drive to a 2BHK private pool villa set across 5,000 sq ft of mountain lawns with secure gated parking.
          </p>

          <h3>Easy Accessibility</h3>
          <ul>
            <li><strong>Smooth Drive:</strong> With the new expressways and improved highway infrastructure, the drive from Delhi to Dehradun is smoother and faster than ever, typically taking around 4.5 to 5.5 hours.</li>
            <li><strong>Ample Secure Parking:</strong> Road trips require safe parking. Our gated property offers free, secure on-site parking for multiple vehicles, giving you total peace of mind.</li>
            <li><strong>Away from City Traffic:</strong> Vann Villa is situated away from the congested city center of Dehradun, meaning you avoid local traffic bottlenecks when you arrive.</li>
          </ul>

          <h3>What Awaits You</h3>
          <p>
            Upon arrival, step out of your car and directly into luxury. Wash off the journey with a dip in your exclusive private pool. 
            In the evening, unwind on the private lawns or terrace under the clear, unpolluted night sky.
          </p>

          <h3>Breathe Clean Air</h3>
          <p>
            One of the biggest luxuries for residents of Delhi NCR is simply breathing clean, fresh air. 
            Surrounded by green hills and natural landscapes, the Air Quality Index (AQI) at Vann Villa is excellent year-round. It is a genuine detox for your lungs and mind.
          </p>

          <div className="seo-cta-section">
            <a href="https://wa.me/919411770969?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Van%20Villa." className="btn-primary seo-cta-btn">Check Availability via WhatsApp</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DelhiWeekend;
