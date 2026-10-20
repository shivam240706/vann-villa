import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../SEO';
import { Car } from 'lucide-react';
import './SEOPages.css';

const DelhiWeekend = () => {
  return (
    <div className="seo-page-container">
      <SEO 
        title="Luxury Weekend Getaway from Delhi NCR to Dehradun | Kudrat Villa"
        description="Weekend getaway from Delhi to Dehradun — 5–6 hr drive, private pool villa, 2+ acres. Dehradun. Starting at just ₹4,999/night. Book on WhatsApp."
      />
      
      <section className="seo-hero" style={{ backgroundImage: 'url("/images/kudrat-villa-rooftop-view.webp")' }}>
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
          <aside className="ai-summary-card" style={{ background: 'rgba(212, 175, 55, 0.08)', padding: '20px 24px', borderRadius: '12px', marginBottom: '32px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
            <h3 style={{ color: 'var(--accent-gold, #d4af37)', fontSize: '1.15rem', marginTop: 0, marginBottom: '12px' }}>At a Glance — Delhi NCR Weekend Road Trip</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary, #e0e0e0)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              <li><strong>Drive Duration:</strong> 4.5 to 5.5 hours drive from Delhi NCR via Delhi-Dehradun Expressway.</li>
              <li><strong>Secure Parking:</strong> On-site gated parking for up to 5 large SUVs.</li>
              <li><strong>Property Features:</strong> 2BHK luxury stay, private swimming pool, 2+ acres lawns, outdoor BBQ & fire pit.</li>
              <li><strong>Air Quality:</strong> Fresh mountain air with low AQI, situated away from congested city traffic in Dehradun.</li>
            </ul>
          </aside>

          <h2>The Perfect Delhi to Dehradun Road Trip</h2>
          <p>
            Kudrat Villa in Dehradun is the ideal weekend getaway from Delhi NCR, offering a 4.5 to 5.5 hour scenic drive to a 2BHK private pool villa set across 2+ acres of mountain lawns with secure parking for 5 SUVs.
          </p>

          <h3><Car size={20} style={{ display: 'inline', marginRight: '8px', color: 'var(--accent-gold)'}} />Easy Accessibility</h3>
          <ul>
            <li><strong>Smooth Drive:</strong> With the new expressways and improved highway infrastructure, the drive from Delhi to Dehradun is smoother and faster than ever, typically taking around 4.5 to 5.5 hours.</li>
            <li><strong>Ample Secure Parking:</strong> Road trips require safe parking. Our gated property offers free, secure on-site parking for up to 5 large SUVs, giving you total peace of mind.</li>
            <li><strong>Away from City Traffic:</strong> Located near UPES, Kudrat Villa is situated away from the congested city center of Dehradun, meaning you avoid local traffic bottlenecks when you arrive.</li>
          </ul>

          <h3>What Awaits You</h3>
          <p>
            Upon arrival, step out of your car and directly into luxury. Wash off the journey with a dip in your exclusive private pool. 
            In the evening, our caretaker can help you set up an outdoor BBQ and fire pit, allowing you to relax under the clear, unpolluted night sky.
          </p>

          <h3>Breathe Clean Air</h3>
          <p>
            One of the biggest luxuries for residents of Delhi NCR is simply breathing clean, fresh air. 
            Surrounded by pine forests and natural landscapes, the Air Quality Index (AQI) at Kudrat Villa is excellent year-round. It is a genuine detox for your lungs and mind.
          </p>

          <div className="seo-cta-section">
            <a href="https://wa.me/919411770969?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Kudrat%20Villa." className="btn-primary seo-cta-btn">Check Availability via WhatsApp</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DelhiWeekend;
