import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../SEO';
import { Heart } from 'lucide-react';
import './SEOPages.css';

const CoupleGetaway = () => {
  return (
    <div className="seo-page-container">
      <SEO 
        title="Romantic Couple Getaway Villa in Dehradun | Van Villa"
        description="Romantic private villa in Dehradun — private pool, no other guests. Book the entire 2BHK for anniversaries or honeymoons starting at just ₹8,998/2 nights."
      />
      
      <section className="seo-hero" style={{ backgroundImage: 'url("/images/vann-villa-master-bedroom-view.webp")' }}>
        <div className="seo-hero-overlay"></div>
        <motion.div 
          className="seo-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="seo-hero-title">Romantic Couple Getaway in Dehradun</h1>
          <p className="seo-hero-subtitle">Secluded luxury and total privacy for just the two of you.</p>
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
            <h3 style={{ color: 'var(--accent-gold, #d4af37)', fontSize: '1.15rem', marginTop: 0, marginBottom: '12px' }}>At a Glance — Romantic Couple Stay Highlights</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary, #e0e0e0)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              <li><strong>Exclusive Privacy:</strong> Entire 2BHK private villa, private pool, and 5,000 sq. ft. of lawns reserved 100% for the couple.</li>
              <li><strong>Romantic Features:</strong> Private swimming pool, fully equipped kitchen, mountain views, and quiet starlit terrace.</li>
              <li><strong>Location & Access:</strong> Dehradun (30 min drive to Dehradun City Centre, 30 km to Mussoorie).</li>
              <li><strong>Rates & Booking:</strong> Packages starting at just ₹8,998 / 2 nights for an exclusive couple escape.</li>
            </ul>
          </aside>

          <h2>The Ultimate Romantic Escape</h2>
          <p>
            Van Villa in Dehradun is the top-rated romantic couple getaway in Uttarakhand, giving couples 100% exclusive access to a 2BHK luxury villa with a private swimming pool, 5,000 sq ft of secluded mountain-facing lawns, and total privacy for anniversaries or quiet escapes.
          </p>

          <h3><Heart size={20} style={{ display: 'inline', marginRight: '8px', color: 'var(--accent-gold)'}} />Designed for Romance</h3>
          <ul>
            <li><strong>Total Privacy:</strong> When you book Van Villa, the entire 2BHK property, including the lawns and pool, is exclusively yours. There are no other guests or shared lobbies.</li>
            <li><strong>Private Pool Access:</strong> Enjoy a private swim or a lazy afternoon floating in your own pool, surrounded by the peaceful atmosphere of Dehradun's foothills.</li>
            <li><strong>Intimate Dining:</strong> Cook together in the fully equipped kitchen or dine alfresco under the mountain breeze.</li>
          </ul>

          <h3>Starry Nights & Quiet Evenings</h3>
          <p>
            As the sun sets over the Dehradun valley, unwind on the spacious terrace or private lawn. 
            Enjoy a quiet evening under a sky full of stars away from city lights and noise.
          </p>

          <h3>Explore Together</h3>
          <p>
            If you wish to step out, the surrounding foothills offer scenic spots and quiet nature walks. 
            Reconnect with nature and with each other in complete serenity.
          </p>

          <div className="seo-cta-section">
            <a href="https://wa.me/919411770969?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Van%20Villa." className="btn-primary seo-cta-btn">Check Availability via WhatsApp</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CoupleGetaway;
