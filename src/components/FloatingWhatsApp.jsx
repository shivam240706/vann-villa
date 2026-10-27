import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const location = useLocation();
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Wait 8 seconds before showing the bubble to capture attention
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  if (location.pathname === '/contact') return null;

  return (
    <div className="floating-whatsapp-container">
      {showBubble && (
        <div className="whatsapp-proactive-bubble">
          <span>👋 Have a question? Chat with the host!</span>
          <button className="bubble-close" onClick={(e) => { e.preventDefault(); setShowBubble(false); }} aria-label="Close notification">×</button>
        </div>
      )}
      <a href="https://wa.me/919411770969?text=Hello!%20I%20am%20interested%20in%20experiencing%20the%20tranquility%20of%20Van%20Villa.%20Could%20you%20please%20provide%20more%20information%20regarding%20availability%20and%20booking%20details%3F%20Thank%20you." target="_blank" rel="noopener noreferrer" className="floating-whatsapp" aria-label="Chat with Van Villa on WhatsApp">
        <div className="whatsapp-icon">
          <svg viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 2a14 14 0 0 0-11.83 21.5L2 30l6.67-2.12A13.9 13.9 0 0 0 16 30a14 14 0 0 0 0-28zm7.36 19.83c-.31.87-1.8 1.66-2.5 1.76-.64.08-1.46.22-4.17-.9-3.26-1.35-5.38-4.72-5.54-4.94-.16-.21-1.32-1.76-1.32-3.36 0-1.6.84-2.38 1.14-2.71.3-.32.65-.41.87-.41.22 0 .43 0 .62.01.2.01.47-.07.72.53.27.65.92 2.25 1 2.45.08.2.14.43.01.69-.13.26-.2.43-.4.65-.19.23-.41.51-.58.69-.2.19-.41.39-.18.79.23.4 1.01 1.68 2.18 2.72 1.5 1.34 2.76 1.76 3.16 1.95.4.19.64.16.88-.11.23-.27 1.01-1.18 1.28-1.58.27-.4.54-.34.9-.21.36.14 2.27 1.07 2.66 1.27.39.2.65.29.74.45.1.16.1.92-.21 1.79z"></path>
          </svg>
        </div>
        <span className="whatsapp-text">Chat on WhatsApp</span>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
