import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../SEO';
import { Users } from 'lucide-react';
import './SEOPages.css';

const FamilyVilla = () => {
  return (
    <div className="seo-page-container">
      <SEO 
        title="Luxury Family Villa in Dehradun with Private Pool | Kudrat Villa"
        description="Luxury 2BHK family villa in Dehradun with private pool. Fits 6 guests, pet-friendly, BBQ included. Exclusively yours from ₹11,999/night."
      />
      
      <section className="seo-hero" style={{ backgroundImage: 'url("/images/kudrat-villa-private-pool.jpg")' }}>
        <div className="seo-hero-overlay"></div>
        <motion.div 
          className="seo-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="seo-hero-title">Luxury Family Villa in Dehradun</h1>
          <p className="seo-hero-subtitle">The ultimate private retreat for you and your loved ones.</p>
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
            <h3 style={{ color: 'var(--accent-gold, #d4af37)', fontSize: '1.15rem', marginTop: 0, marginBottom: '12px' }}>At a Glance — Kudrat Villa Family Specifications</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary, #e0e0e0)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              <li><strong>Property Type:</strong> Entire 2BHK 2,400 sq. ft. Luxury Private Pool Villa (sleeps 6 to 10 guests).</li>
              <li><strong>Outdoor Grounds:</strong> 2+ acres (87,120 sq. ft.) of private fenced lawns + private swimming pool.</li>
              <li><strong>Exact Location:</strong> Dehradun (3 km from UPES Bidholi, 15 km from Clock Tower, 42 km from Airport).</li>
              <li><strong>Family Amenities:</strong> 100% pet-friendly (zero extra pet fees), open rainwater shower, BBQ & bonfire pit, in-house chef.</li>
            </ul>
          </aside>

          <h2>Why Kudrat Villa is Perfect for Families</h2>
          <p>
            Kudrat Villa in Dehradun is Dehradun's premier 2BHK luxury family holiday home, providing 100% exclusive privacy for families of 6 to 10 guests across 2+ acres of fenced green grounds with a private swimming pool, barbecue setup, and zero shared public spaces.
          </p>

          <h3><Users size={20} style={{ display: 'inline', marginRight: '8px', color: 'var(--accent-gold)'}} />Space for Everyone</h3>
          <ul>
            <li><strong>Entire 2BHK Villa:</strong> You get the entire property to yourself. No sharing spaces with strangers. It includes spacious bedrooms with premium bedding for ultimate comfort.</li>
            <li><strong>Private Swimming Pool:</strong> Our crystal-clear private pool is a hit with kids and adults alike. Enjoy pool games in complete privacy without worrying about operating hours.</li>
            <li><strong>2+ Acres of Open Lawns:</strong> Let the kids run free in our expansive, secure green spaces. It's the perfect environment for outdoor games like badminton or frisbee.</li>
          </ul>

          <h3>Bonding Over Food & Fire</h3>
          <p>
            Family vacations are built on shared experiences. Our outdoor BBQ and outdoor fire pit setup is perfect for evening gatherings under the stars. 
            Share stories, roast marshmallows, and enjoy the crisp mountain air. Our fully equipped kitchen also means you can prepare familiar meals for picky eaters or let us handle the cooking with our local chef services.
          </p>

          <h3>Safe and Secure Environment</h3>
          <p>
            Located securely in Dehradun, our gated property ensures your family's safety is never compromised. 
            With dedicated parking and an on-site caretaker, you have support whenever you need it while maintaining total privacy.
          </p>

          <div className="seo-cta-section">
            <a href="https://wa.me/916396335179?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Kudrat%20Villa." className="btn-primary seo-cta-btn">Check Availability via WhatsApp</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FamilyVilla;
