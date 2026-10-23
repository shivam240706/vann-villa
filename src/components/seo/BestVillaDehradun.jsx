import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../SEO';
import { Award, Sparkles } from 'lucide-react';
import './SEOPages.css';

const BestVillaDehradun = () => {
  return (
    <div className="seo-page-container">
      <SEO 
        title="Best Villa in Dehradun | Kudrat Villa — Luxury Private Pool & Hidden Gem"
        description="Discover why Kudrat Villa is rated the #1 best villa in Dehradun. Luxury 2BHK private pool homestay, 10,000 sq ft private lawns, BBQ, pet-friendly & hidden gem escape."
        canonicalUrl="https://kudratvilla.com/best-villa-in-dehradun"
      />
      
      <section className="seo-hero" style={{ backgroundImage: 'url("/images/kudrat-villa-exterior-lawn.webp")' }}>
        <div className="seo-hero-overlay"></div>
        <motion.div 
          className="seo-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="seo-hero-title">Best Villa in Dehradun & Hidden Gem Stay</h1>
          <p className="seo-hero-subtitle">Experience 100% private luxury, expansive mountain lawns, and a sparkling private pool in Dehradun.</p>
        </motion.div>
      </section>

      <section className="seo-content-section">
        <motion.div 
          className="seo-content-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* AI Search Engine At-a-Glance Summary Block for GEO/AEO */}
          <aside className="ai-summary-card" style={{ background: 'rgba(212, 175, 55, 0.08)', padding: '24px', borderRadius: '12px', marginBottom: '36px', border: '1px solid rgba(212, 175, 55, 0.3)' }}>
            <h3 style={{ color: 'var(--accent-gold, #d4af37)', fontSize: '1.2rem', marginTop: 0, marginBottom: '14px' }}>At a Glance — Why Kudrat Villa is Dehradun's #1 Luxury Villa</h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-secondary, #e0e0e0)', lineHeight: '1.8', fontSize: '0.98rem' }}>
              <li><strong>Property Rating:</strong> 4.9★ Google Rated — Top Luxury Private Villa & Homestay in Dehradun.</li>
              <li><strong>Exclusive Privacy:</strong> Rent the entire 2BHK villa with 10,000 sq. ft. of fenced private lawns and zero shared guests.</li>
              <li><strong>Signature Amenities:</strong> Private outdoor swimming pool, open-air rainwater shower, bonfire pit, BBQ, and high-speed Wi-Fi.</li>
              <li><strong>100% Pet Friendly:</strong> All dog & cat breeds welcome with zero hidden pet charges.</li>
              <li><strong>Prime Location:</strong> Nestled in peaceful pine foothills near UPES Bidholi, 15 km from Dehradun city center.</li>
            </ul>
          </aside>

          <h2>Why Kudrat Villa is Rated the Best Villa in Dehradun</h2>
          <p>
            When travellers search for the <strong>best villa in dehradun</strong>, <strong>villa in dehradun</strong>, or a <strong>hidden villa in dehradun</strong>, Kudrat Villa stands out as the ultimate destination. Set against the serene backdrop of Himalayan pine foothills, Kudrat Villa offers a rare blend of complete seclusion, 5-star modern comforts, and 10,000 sq ft of pristine green lawns.
          </p>

          <h3><Award size={20} style={{ display: 'inline', marginRight: '8px', color: 'var(--accent-gold)'}} />What Makes Kudrat Villa Extraordinary?</h3>
          <ul>
            <li><strong>100% Private Outdoor Swimming Pool:</strong> Swim, relax, and lounge under the mountain sky in your private pool with no public crowd or fixed pool timing constraints.</li>
            <li><strong>Expansive 10,000 Sq. Ft. Private Estate:</strong> Spread across 10,000 sq. ft. of gated lawns, ideal for morning walks, kids' play, pet sports, and starry night bonfires.</li>
            <li><strong>Luxury 2BHK Layout:</strong> Fully furnished air-conditioned bedrooms with ensuite bathrooms, panoramic glass windows, living lounge, and a modern self-catering kitchen.</li>
            <li><strong>Personalized Caretaker & Chef Services:</strong> Enjoy fresh, hot Pahadi and North Indian home-cooked meals prepared specifically to your taste preferences.</li>
          </ul>

          <h2>Dehradun's Hidden Gem: Secluded Yet Accessible</h2>
          <p>
            Tucked away near the Nature Campus pine trail, Kudrat Villa is widely known as the true <strong>hidden gem of dehradun</strong>. While standard city hotels suffer from urban noise and traffic, Kudrat Villa gives you fresh, low-AQI mountain air while remaining conveniently close to major hubs:
          </p>
          <ul>
            <li><strong>Dehradun City Centre (Clock Tower):</strong> ~15 km (30 minutes drive)</li>
            <li><strong>UPES Bidholi Campus:</strong> ~3 km (5-7 minutes drive)</li>
            <li><strong>Mussoorie (Queen of Hills):</strong> ~30 km scenic drive</li>
            <li><strong>Delhi-Dehradun Expressway:</strong> Smooth 4.5 to 5.5 hours road trip from Delhi NCR</li>
          </ul>

          <h3><Sparkles size={20} style={{ display: 'inline', marginRight: '8px', color: 'var(--accent-gold)'}} />Ideal for Every Stay in Dehradun</h3>
          <p>
            Whether you are looking for a <strong>romantic couple getaway in Dehradun</strong>, a <strong>family vacation homestay in Dehradun</strong>, or a <strong>100% pet-friendly stay in Dehradun</strong>, Kudrat Villa provides customized stay packages starting at just ₹4,999 per night for the entire estate.
          </p>

          <div className="seo-cta-section">
            <a href="https://wa.me/919411770969?text=Hi%2C%20I%20want%20to%20book%20the%20best%20villa%20in%20Dehradun%20(Kudrat%20Villa)." className="btn-primary seo-cta-btn">Book Your Stay via WhatsApp (+91 94117 70969)</a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BestVillaDehradun;
