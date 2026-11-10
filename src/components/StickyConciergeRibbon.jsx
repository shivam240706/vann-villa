import React, { useState, useEffect } from 'react';
import './StickyConciergeRibbon.css';

const WhatsAppIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const StickyConciergeRibbon = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear once scrolled past the hero section (around 500px)
      if (window.scrollY > 480) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside className="sticky-concierge-ribbon" aria-label="Direct Concierge Quick Action">
      <div className="ribbon-inner">
        <div className="ribbon-info">
          <span className="ribbon-title">Vann Villa Dehradun</span>
          <span className="ribbon-dot" aria-hidden="true">•</span>
          <span className="ribbon-highlight">100% Private 2BHK Pool Estate</span>
          <span className="ribbon-dot" aria-hidden="true">•</span>
          <span className="ribbon-rate">From <strong>₹4,499</strong>/night (Zero OTA Fee)</span>
        </div>

        <div className="ribbon-actions">
          <a
            href="https://wa.me/919411770969?text=Hello%20Vann%20Villa%2C%20I%20am%20browsing%20the%20website%20and%20would%20like%20to%20check%20availability%20for%20my%20stay."
            target="_blank"
            rel="noopener noreferrer"
            className="ribbon-whatsapp-btn"
          >
            <WhatsAppIcon />
            <span>Check Availability on WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default StickyConciergeRibbon;

