import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

const DesktopLayout = ({ children }) => {
  return (
    <div className="desktop-layout">
      <Header />
      <div className="desktop-content">
        {children}
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default DesktopLayout;
