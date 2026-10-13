import React from 'react';
import { motion } from 'framer-motion';
import { Waves, ShieldCheck, ChefHat, Mountain, HeartHandshake } from 'lucide-react';
import KatanaStrikePrice from './KatanaStrikePrice';
import './HighlightsBar.css';

const HighlightsBar = () => {
  const highlights = [
    { icon: Waves, text: "Your own private swimming pool" },
    { icon: ShieldCheck, text: "Complete privacy (no shared spaces)" },
    { icon: ChefHat, text: "Fully equipped kitchen" },
    { icon: Mountain, text: "Forest & mountain views" },
    { icon: HeartHandshake, text: "Perfect for families & couples" }
  ];

  return (
    <div className="highlights-bar-container">
      <div className="highlights-title-container">
        <h2 className="why-kudrat-title">Why Kudrat Villa?</h2>
        <p className="why-kudrat-direct-answer" style={{ maxWidth: '800px', margin: '12px auto 24px', textAlign: 'center', color: 'var(--text-muted, #a3b18a)', fontSize: '1.05rem', lineHeight: '1.6' }}>
          Kudrat Villa is Dehradun's premier 2BHK private luxury pool villa set across 2+ acres of fenced lawns in Dehradun (near UPES). Offering 100% exclusive privacy with no shared guests, a private swimming pool, open rainwater shower, outdoor BBQ, and pet-friendly accommodations starting at just <KatanaStrikePrice oldPrice="₹9,999" newPrice="₹4,999" color="#b8860b" size="0.9em" newSize="1em" />/night.
        </p>
      </div>
      <div className="highlights-bar-content" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={idx} 
              className="highlight-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.15 }}
            >
              <div className="highlight-icon">
                <Icon size={32} color="var(--accent-gold)" strokeWidth={1.5} />
              </div>
              <span className="highlight-text">{item.text}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HighlightsBar;
