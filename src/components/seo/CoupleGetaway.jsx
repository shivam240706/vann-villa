import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../SEO';
import { Heart } from 'lucide-react';
import './SEOPages.css';

const CoupleGetaway = () => {
  return (
    <div className="seo-page-container">
      <SEO 
        title="Romantic Couple Getaway Villa in Dehradun | Kudrat Villa"
        description="Romantic private villa in Dehradun — private pool, no other guests. Book the entire 2BHK for anniversaries or honeymoons from ₹9,998/2 nights."
      />
      
      <section className="seo-hero" style={{ backgroundImage: 'url("/images/kudrat-villa-master-bedroom-view.webp")' }}>
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
              <li><strong>Exclusive Privacy:</strong> Entire 2BHK private villa, private pool, and 2+ acres of lawns reserved 100% for the couple.</li>
              <li><strong>Romantic Features:</strong> Private temperature-suited pool, stargazing outdoor bonfire pit, open rainwater shower, candlelit setup.</li>
              <li><strong>Location & Access:</strong> Dehradun (30 min drive to Dehradun City Centre, 30 km to Mussoorie).</li>
              <li><strong>Rates & Booking:</strong> Packages from ₹9,998 / 2 nights including romantic decor arrangements.</li>
            </ul>
          </aside>

          <h2>The Ultimate Romantic Escape</h2>
          <p>
            Kudrat Villa in Dehradun is the top-rated romantic couple getaway in Uttarakhand, giving couples 100% exclusive access to a 2BHK luxury villa with a private swimming pool, 2+ acres of secluded mountain-facing lawns, outdoor bonfire pit, and customized anniversary or honeymoon setups.
          </p>

          <h3><Heart size={20} style={{ display: 'inline', marginRight: '8px', color: 'var(--accent-gold)'}} />Designed for Romance</h3>
          <ul>
            <li><strong>Total Privacy:</strong> When you book Kudrat Villa, the entire 2BHK property, including the lawns and pool, is exclusively yours. There are no other guests or shared lobbies.</li>
            <li><strong>Private Pool Access:</strong> Enjoy a midnight swim or a lazy afternoon floating in your own private pool, surrounded by the quiet hum of the surrounding forest.</li>
            <li><strong>Customized Decor:</strong> For special occasions, our team can arrange for romantic room setups, flower decorations, and customized cakes (available via our special Celebration Packages).</li>
          </ul>

          <h3>Starry Nights & Cozy Fires</h3>
          <p>
            As the sun sets over the Dehradun valley, the temperature drops, making it the perfect time to light the outdoor fire pit. 
            Enjoy a private BBQ or simply sit by the fire with a glass of wine and watch the stars. The lack of city light pollution makes the location incredible for stargazing.
          </p>

          <h3>Explore Together</h3>
          <p>
            If you wish to step out, the surrounding pine forests near UPES University offer beautiful, quiet trails for morning nature walks. 
            Reconnect with nature and with each other in complete serenity.
          </p>

          <div className="seo-cta-section">
            <a href="https://wa.me/916396335179?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Kudrat%20Villa." className="btn-primary seo-cta-btn">Check Availability via WhatsApp</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CoupleGetaway;
