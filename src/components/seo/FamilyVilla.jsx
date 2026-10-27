import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../SEO';
import { Users } from 'lucide-react';
import './SEOPages.css';

const FamilyVilla = () => {
  return (
    <div className="seo-page-container">
      <SEO 
        title="Luxury Family Villa in Dehradun with Private Pool | Van Villa"
        description="Luxury 2BHK family villa in Dehradun with private pool. Base package 4 guests (+extra guest support), pet-friendly, fully equipped kitchen. Exclusively yours starting at just ₹4,499/night."
      />
      
      <section className="seo-hero" style={{ backgroundImage: 'url("/images/vann-villa-private-pool.webp")' }}>
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
            <h3 style={{ color: 'var(--accent-gold, #d4af37)', fontSize: '1.15rem', marginTop: 0, marginBottom: '12px' }}>At a Glance — Van Villa Family Specifications</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary, #e0e0e0)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              <li><strong>Property Type:</strong> Entire 2BHK Luxury Private Pool Villa (base 4 guests, extra mattresses available).</li>
              <li><strong>Outdoor Grounds:</strong> 5,000 sq. ft. of private fenced lawns + private swimming pool.</li>
              <li><strong>Exact Location:</strong> Dehradun foothills (15 km from Clock Tower, scenic mountain area).</li>
              <li><strong>Family Amenities:</strong> 100% pet-friendly (zero extra pet fees), private pool, fully equipped kitchen.</li>
            </ul>
          </aside>

          <h2>Why Van Villa is Perfect for Families</h2>
          <p>
            Van Villa in Dehradun is Dehradun's premier 2BHK luxury family holiday home, providing 100% exclusive privacy for families across 5,000 sq. ft. of fenced green grounds with a private swimming pool, self-catering kitchen, and zero shared public spaces.
          </p>

          <h3><Users size={20} style={{ display: 'inline', marginRight: '8px', color: 'var(--accent-gold)'}} />Space for Everyone</h3>
          <ul>
            <li><strong>Entire 2BHK Villa:</strong> You get the entire property to yourself. No sharing spaces with strangers. It includes spacious bedrooms with premium bedding for ultimate comfort.</li>
            <li><strong>Private Swimming Pool:</strong> Our crystal-clear private pool is a hit with kids and adults alike. Enjoy pool games in complete privacy without worrying about operating hours.</li>
            <li><strong>5,000 Sq. Ft. of Open Lawns:</strong> Let the kids run free in our secure green spaces. It's the perfect environment for outdoor family activities and relaxation.</li>
          </ul>

          <h3>Home-Cooked Comfort & Family Dining</h3>
          <p>
            Family vacations are built on shared experiences. Our fully equipped kitchen means you can prepare your family's favorite meals just like home, or order from local restaurants via food delivery apps. Dine together in our cozy dining area or outdoors enjoying the crisp mountain air.
          </p>

          <h3>Safe and Secure Environment</h3>
          <p>
            Located securely in Dehradun, our gated property ensures your family's safety is never compromised. 
            With dedicated parking and an on-site caretaker, you have support whenever you need it while maintaining total privacy.
          </p>

          <div className="seo-cta-section">
            <a href="https://wa.me/919411770969?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Van%20Villa." className="btn-primary seo-cta-btn">Check Availability via WhatsApp</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FamilyVilla;
