import React from 'react';
import { motion } from 'framer-motion';
import './HighlightsBar.css';

const HighlightsBar = () => {
  const highlights = [
    { num: "01", text: "Your own private swimming pool" },
    { num: "02", text: "Complete privacy with zero shared guests" },
    { num: "03", text: "Fully equipped chef's kitchen" },
    { num: "04", text: "Himalayan foothills & forest views" },
    { num: "05", text: "5,000 sq ft private fenced grounds" }
  ];

  return (
    <div className="highlights-bar-container">
      <div className="highlights-title-container">
        <h2 className="why-vann-villa-title">Why Vann Villa?</h2>
        <p className="why-vann-villa-direct-answer" style={{ maxWidth: '800px', margin: '12px auto 24px', textAlign: 'center', color: 'var(--text-muted, #555750)', fontSize: '1.05rem', lineHeight: '1.6' }}>
          Vann Villa is Dehradun's premier 2BHK private luxury pool villa set across 5,000 sq ft of fenced lawns. Offering 100% exclusive privacy with no shared guests, a private swimming pool, fully equipped kitchen, mountain views, and pet-friendly accommodations starting at just <span style={{ textDecoration: 'line-through', opacity: 0.6, marginRight: '4px' }}>₹8,999</span><strong style={{ color: 'var(--forest-green)' }}>₹4,499</strong>/night.
        </p>
      </div>
      <div className="highlights-bar-content" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {highlights.map((item, idx) => (
          <motion.div 
            key={idx} 
            className="highlight-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <div className="highlight-num">{item.num}</div>
            <span className="highlight-text">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HighlightsBar;
