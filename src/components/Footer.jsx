import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <footer id="contact" className="footer-section" role="contentinfo">
      <div className="footer-container">
        {/* Top Row */}
        <div className="footer-top-row">
          <div className="footer-col footer-brand">
            <h2>Kudrat Villa</h2>
            <p>Your sanctuary in the lap of nature.</p>
            <div className="footer-social">
              <a href="https://www.instagram.com/kudrat_villa" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram"><InstagramIcon /></a>
              <a href="https://www.facebook.com/kudratvilla" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook"><FacebookIcon /></a>
              <a href="https://www.linkedin.com/company/kudrat-villa" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn"><LinkedInIcon /></a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom-row">
          {/* Contact Column */}
          <div className="footer-col footer-contact">
            <h3>Contact</h3>
            <address>
              <a href="tel:+916396335179" className="footer-contact-item">
                <Phone size={14} aria-hidden="true" /> +91 63963 35179
              </a>
              <a href="mailto:kudratvilla98@gmail.com" className="footer-contact-item">
                <Mail size={14} aria-hidden="true" /> kudratvilla98@gmail.com
              </a>
              <a href="https://maps.app.goo.gl/gjF7a1iz6D2W21HR8" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <MapPin size={14} aria-hidden="true" /> Dehradun, Uttarakhand 248007
              </a>
            </address>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col footer-quick-links">
            <h3>Quick Links</h3>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cancellation-refund">Cancellation Policy</Link>
            <Link to="/destination-guide">Dehradun Guide</Link>
          </div>

          {/* Trust Column */}
          <div className="footer-col footer-trust">
            <h3>Why Choose Us</h3>
            <div className="trust-badges">
              <span className="trust-badge">✓ Verified Property</span>
              <span className="trust-badge">✓ Instant Confirmation</span>
              <span className="trust-badge">✓ 4.7★ Google Rated</span>
              <span className="trust-badge">✓ 100% Pet Friendly</span>
            </div>
          </div>

          {/* Popular Retreats Column */}
          <div className="footer-col footer-quick-links">
            <h3>Popular Retreats</h3>
            <Link to="/best-villa-in-dehradun">Best Villa in Dehradun</Link>
            <Link to="/couple-getaway-dehradun">Couple Getaway</Link>
            <Link to="/pet-friendly-villa-dehradun">Pet-Friendly Stay</Link>
            <Link to="/family-villa-dehradun">Family Vacation</Link>
            <Link to="/delhi-to-dehradun-weekend">Delhi Weekend Trip</Link>
            <Link to="/destination-guide">Dehradun Guide</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kudrat Villa. All rights reserved. Made with ♥ in Dehradun.</p>
      </div>
    </footer>
  );
};

export default Footer;
