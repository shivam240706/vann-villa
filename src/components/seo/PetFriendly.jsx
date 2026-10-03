import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../SEO';
import { Dog } from 'lucide-react';
import './SEOPages.css';

const PetFriendly = () => {
  return (
    <div className="seo-page-container">
      <SEO 
        title="100% Pet Friendly Villa in Dehradun | Kudrat Villa"
        description="100% pet-friendly private villa in Dehradun. No pet fees. 2+ fenced acres for dogs. Private pool. Book direct from ₹4,999/night."
      />
      
      <section className="seo-hero" style={{ backgroundImage: 'url("/images/kudrat-villa-exterior-lawn.webp")' }}>
        <div className="seo-hero-overlay"></div>
        <motion.div 
          className="seo-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="seo-hero-title">100% Pet-Friendly Villa in Dehradun</h1>
          <p className="seo-hero-subtitle">Because a family vacation is incomplete without your furry friends.</p>
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
            <h3 style={{ color: 'var(--accent-gold, #d4af37)', fontSize: '1.15rem', marginTop: 0, marginBottom: '12px' }}>At a Glance — 100% Pet-Friendly Villa Highlights</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary, #e0e0e0)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              <li><strong>Pet Policy:</strong> 100% pet-friendly, zero hidden pet charges, all dog and cat breeds welcome.</li>
              <li><strong>Space for Pets:</strong> 2+ acres (87,120 sq. ft.) of securely fenced private green lawns.</li>
              <li><strong>Safety & Comfort:</strong> Gated private estate with no road traffic hazard, nearby pine forest walking trails.</li>
              <li><strong>Villa Pricing:</strong> Entire 2BHK stay from ₹4,999 / night with direct WhatsApp booking.</li>
            </ul>
          </aside>

          <h2>A True Haven for Pets</h2>
          <p>
            Kudrat Villa in Dehradun is the best 100% pet-friendly luxury villa in Uttarakhand, featuring 2+ acres of securely fenced lawns, zero hidden pet surcharges, and a private 2BHK stay where dogs and cats can roam freely in complete safety.
          </p>

          <h3><Dog size={20} style={{ display: 'inline', marginRight: '8px', color: 'var(--accent-gold)'}} />Why Pets Love Kudrat Villa</h3>
          <ul>
            <li><strong>2+ Acres of Open Space:</strong> Your dogs will be in paradise. Our massive, well-maintained lawns provide endless space for running, playing fetch, and rolling in the grass.</li>
            <li><strong>Secure & Gated:</strong> The property is fully fenced and gated, ensuring that your pets can roam freely and safely within the estate without the risk of wandering off.</li>
            <li><strong>No Hidden Pet Fees:</strong> We do not charge arbitrary nightly pet fees. As long as the property rules are respected, bringing your pet is absolutely free.</li>
          </ul>

          <h3>Pet Etiquette & Rules</h3>
          <p>
            To ensure the highest standard of hygiene for all future guests, we ask pet owners to observe a few simple rules:
            Pets are strictly prohibited from entering the swimming pool. Owners must clean up after their pets on the lawns, and any damages or deep cleaning required due to pets will be deducted from the standard security deposit.
          </p>

          <h3>Nature Walks</h3>
          <p>
            The quiet, paved roads and trails around the villa and the nearby UPES campus are excellent for early morning or late evening walks with your dog, far away from heavy city traffic.
          </p>

          <div className="seo-cta-section">
            <a href="https://wa.me/916396335179?text=Hi%2C%20I%20would%20like%20to%20book%20a%20stay%20at%20Kudrat%20Villa." className="btn-primary seo-cta-btn">Check Availability via WhatsApp</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PetFriendly;
