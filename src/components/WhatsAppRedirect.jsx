import React, { useEffect } from 'react';

const WhatsAppRedirect = () => {
  useEffect(() => {
    // Redirect to the WhatsApp wa.me link automatically
    window.location.replace("https://wa.me/916396335179?text=Hello!%20I%20am%20interested%20in%20experiencing%20the%20tranquility%20of%20Kudrat%20Villa.%20Could%20you%20please%20provide%20more%20information%20regarding%20availability%20and%20booking%20details%3F%20Thank%20you.");
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'var(--primary-bg)' }}>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
        Redirecting to WhatsApp...
      </p>
    </div>
  );
};

export default WhatsAppRedirect;
