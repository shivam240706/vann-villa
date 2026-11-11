import React from 'react';
import './MobileBottomBar.css';

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const MobileBottomBar = () => {
  return (
    <div className="mobile-bottom-bar" aria-label="Mobile Quick Booking Actions">
      <div className="mobile-bar-pricing">
        <span className="price-tag">From ₹4,499<span className="price-unit">/nt</span></span>
        <span className="price-guarantee">Direct Host Rate • Zero Fee</span>
      </div>

      <div className="mobile-bar-buttons">
        <a
          href="https://wa.me/919411770969?text=Hello%20Vann%20Villa%2C%20I%20would%20like%20to%20connect%20with%20the%20host."
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-call-btn"
          aria-label="Chat with Villa Host"
        >
          <PhoneIcon />
          <span>Chat</span>
        </a>

        <a
          href="https://wa.me/919411770969?text=Hello%20Vann%20Villa%2C%20I%20would%20like%20to%20check%20availability%20and%20direct%20pricing%20for%20a%20stay."
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-whatsapp-btn"
          aria-label="Reserve on WhatsApp"
        >
          <WhatsAppIcon />
          <span>Book Now</span>
        </a>
      </div>
    </div>
  );
};

export default MobileBottomBar;

