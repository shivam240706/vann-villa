import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../SEO';
import { MapPin } from 'lucide-react';
import './SEOPages.css';

const DestinationGuide = () => {
  return (
    <div className="seo-page-container">
      <SEO 
        title="Things to Do in Dehradun | Kudrat Villa Guide"
        description="Discover the top local attractions, nature walks, and hidden gems in Dehradun. The ultimate destination guide by Kudrat Villa."
      />
      
      <section className="seo-hero" style={{ backgroundImage: 'url("/images/kudrat-villa-outdoor-seating.webp")' }}>
        <div className="seo-hero-overlay"></div>
        <motion.div 
          className="seo-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="seo-hero-title">Destination Guide: Dehradun</h1>
          <p className="seo-hero-subtitle">Explore the serene foothills and hidden treasures surrounding Kudrat Villa.</p>
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
            <h3 style={{ color: 'var(--accent-gold, #d4af37)', fontSize: '1.15rem', marginTop: 0, marginBottom: '12px' }}>At a Glance — Dehradun Destination Highlights</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary, #e0e0e0)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              <li><strong>Location:</strong> Dehradun, Uttarakhand (PIN: 248007).</li>
              <li><strong>Proximity:</strong> 3 km from UPES Bidholi, 15 km from Clock Tower, 25 km from ISBT, 42 km from Airport, 30 km from Mussoorie.</li>
              <li><strong>Key Attractions:</strong> Nature Campus Pine Forests (500m), Robber's Cave (14 km), Shikhar Fall (18 km).</li>
              <li><strong>Best Seasons:</strong> March to May (Spring) and September to November (Autumn).</li>
            </ul>
          </aside>

          <h2>Welcome to Dehradun</h2>
          <p>
            The villa area is a peaceful hillside destination located 15 km north of Dehradun city center near UPES Bidholi, known for its pristine pine forests, clean mountain air, and close proximity to Mussoorie and local waterfalls.
          </p>

          <h3><MapPin size={20} style={{ display: 'inline', marginRight: '8px', color: 'var(--accent-gold)'}} />Top Nearby Attractions</h3>
          <ul>
            <li><strong>Nature Campus & Pine Forests:</strong> Take an early morning stroll through the dense pine forests right outside your door. The air here is crisp, clean, and filled with the scent of nature.</li>
            <li><strong>UPES University Area:</strong> Just 500 meters from Kudrat Villa, the vibrant student culture around UPES offers quiet cafes and beautiful campus roads perfect for an evening walk.</li>
            <li><strong>Robber's Cave (Guchhupani):</strong> A famous natural cave formation with a stream flowing through it, located just a 30-minute drive away.</li>
            <li><strong>Shikhar Fall:</strong> An adventurous trek leading to a beautiful waterfall, perfect for nature enthusiasts and photographers.</li>
          </ul>

          <h3>Local Dining & Culture</h3>
          <ul>
            <li>While the villa is secluded, it is never far from local culinary delights. From small, authentic Pahadi dhabas serving hot Maggi and tea to premium cafes closer to the university, there is something for everyone.</li>
            <li>Of course, when you stay at Kudrat Villa, you also have the option of enjoying our customized, home-cooked meals right on the property.</li>
          </ul>

          <h3>Best Time to Visit</h3>
          <ul>
            <li>The region enjoys pleasant weather year-round.</li>
            <li>However, the best times to visit are during the spring (March to May) and autumn (September to November) when the sky is clear, and the temperature is perfect for outdoor BBQ and swimming in your private pool at Kudrat Villa.</li>
          </ul>

          <div className="seo-cta-section">
            <a href="https://wa.me/916396335179?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Kudrat%20Villa." className="btn-primary seo-cta-btn">Check Availability via WhatsApp</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default DestinationGuide;
