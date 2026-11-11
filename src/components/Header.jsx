import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import './Header.css';

const ChevronIcon = ({ className }) => (
  <svg 
    width="12" 
    height="12" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = React.useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [policiesOpen, setPoliciesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY.current && currentScrollY > 180 && !menuOpen) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setPoliciesOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setPoliciesOpen(false);
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        setPoliciesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setPoliciesOpen(false);
  };

  const handleHomeClick = (e) => {
    closeMenu();
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSectionScroll = (e, sectionId) => {
    e.preventDefault();
    closeMenu();
    if (isHomePage) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const togglePolicies = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPoliciesOpen((prev) => !prev);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`header ${(scrolled || !isHomePage) ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''} ${hidden && !menuOpen ? 'hidden' : ''}`}
      role="banner"
    >
      <motion.div
        className="scroll-progress-bar"
        style={{
          scaleX: scrollYProgress,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: 'var(--secondary-bg, #E8D2B5)',
          transformOrigin: '0%',
          zIndex: 1002
        }}
      />

      <div className="header-container">
        {/* Brand Logo */}
        <div className="logo">
          <Link to="/" onClick={handleHomeClick} aria-label="Vann Villa Home" className="logo-link">
            <img 
              src="/images/vann-villa-logo.webp" 
              alt="Vann Villa Logo" 
              className="header-logo-img" 
              width="40" 
              height="40" 
              loading="eager"
            />
            <span className="logo-text">Vann Villa</span>
          </Link>
        </div>

        {/* Desktop Navigation (>= 992px) */}
        <nav className="desktop-nav" role="navigation" aria-label="Primary Desktop Navigation">
          <Link 
            to="/" 
            onClick={handleHomeClick} 
            className={`desktop-nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>

          <a 
            href="#residence" 
            onClick={(e) => handleSectionScroll(e, 'residence')}
            className="desktop-nav-link"
          >
            Suites
          </a>

          <a 
            href="#gallery" 
            onClick={(e) => handleSectionScroll(e, 'gallery')}
            className="desktop-nav-link"
          >
            Gallery
          </a>

          <a 
            href="#amenities" 
            onClick={(e) => handleSectionScroll(e, 'amenities')}
            className="desktop-nav-link"
          >
            Amenities
          </a>

          <a 
            href="#packages" 
            onClick={(e) => handleSectionScroll(e, 'packages')}
            className="desktop-nav-link"
          >
            Rates
          </a>

          <a 
            href="#reviews" 
            onClick={(e) => handleSectionScroll(e, 'reviews')}
            className="desktop-nav-link"
          >
            Reviews
          </a>

          <Link 
            to="/contact" 
            className={`desktop-nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>

          {/* Policies Dropdown */}
          <div 
            className="desktop-dropdown"
            onMouseEnter={() => setPoliciesOpen(true)}
            onMouseLeave={() => setPoliciesOpen(false)}
          >
            <button 
              type="button" 
              className="desktop-dropdown-btn"
              onClick={() => setPoliciesOpen(!policiesOpen)}
              aria-expanded={policiesOpen}
            >
              <span>Policies</span>
              <ChevronIcon className={`dropdown-chevron ${policiesOpen ? 'rotated' : ''}`} />
            </button>
            <div className={`desktop-dropdown-menu ${policiesOpen ? 'open' : ''}`}>
              <Link to="/terms-conditions" onClick={closeMenu}>Terms & Conditions</Link>
              <Link to="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link>
              <Link to="/cancellation-refund" onClick={closeMenu}>Cancellation & Refund</Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Hamburger Button: ONLY rendered when drawer is CLOSED */}
        <div className="header-actions">
          {!menuOpen && (
            <button
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label="Open navigation menu"
              aria-expanded="false"
            >
              <span className="toggle-line" />
              <span className="toggle-line" />
              <span className="toggle-line" />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Overlay (< 1040px) */}
      <div 
        className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`} 
        aria-hidden={!menuOpen}
      >
        <div className="mobile-drawer-header">
          <Link to="/" onClick={handleHomeClick} className="mobile-drawer-logo">
            <img 
              src="/images/vann-villa-logo.webp" 
              alt="Vann Villa Logo" 
              className="header-logo-img" 
              width="36" 
              height="36" 
            />
            <span className="logo-text">Vann Villa</span>
          </Link>

          {/* Distinct, dedicated close button: ONLY visible inside drawer */}
          <button 
            type="button" 
            className="mobile-drawer-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <nav className="mobile-nav-links" role="navigation" aria-label="Mobile Navigation">
          <div className="mobile-nav-item">
            <span className="nav-index">01</span>
            <Link to="/" onClick={handleHomeClick} className="mobile-link">
              Home
            </Link>
          </div>

          <div className="mobile-nav-item">
            <span className="nav-index">02</span>
            <a 
              href="#residence" 
              onClick={(e) => handleSectionScroll(e, 'residence')} 
              className="mobile-link"
            >
              Suites & Spaces
            </a>
          </div>

          <div className="mobile-nav-item">
            <span className="nav-index">03</span>
            <a 
              href="#gallery" 
              onClick={(e) => handleSectionScroll(e, 'gallery')} 
              className="mobile-link"
            >
              Photo Gallery
            </a>
          </div>

          <div className="mobile-nav-item">
            <span className="nav-index">04</span>
            <a 
              href="#amenities" 
              onClick={(e) => handleSectionScroll(e, 'amenities')} 
              className="mobile-link"
            >
              Amenities
            </a>
          </div>

          <div className="mobile-nav-item">
            <span className="nav-index">05</span>
            <a 
              href="#packages" 
              onClick={(e) => handleSectionScroll(e, 'packages')} 
              className="mobile-link"
            >
              Rates & Stays
            </a>
          </div>

          <div className="mobile-nav-item">
            <span className="nav-index">06</span>
            <a 
              href="#reviews" 
              onClick={(e) => handleSectionScroll(e, 'reviews')} 
              className="mobile-link"
            >
              Google Reviews
            </a>
          </div>

          {/* Mobile Policies Accordion */}
          <div className={`mobile-nav-item mobile-policies-group ${policiesOpen ? 'expanded' : ''}`}>
            <div className="policies-trigger-row" onClick={togglePolicies}>
              <span className="nav-index">07</span>
              <button 
                type="button" 
                className="mobile-link policies-btn"
                aria-expanded={policiesOpen}
              >
                <span>Policies</span>
                <ChevronIcon className={`dropdown-chevron ${policiesOpen ? 'rotated' : ''}`} />
              </button>
            </div>

            {policiesOpen && (
              <div className="mobile-policies-sublinks">
                <Link to="/terms-conditions" onClick={closeMenu} className="mobile-sublink">Terms & Conditions</Link>
                <Link to="/privacy-policy" onClick={closeMenu} className="mobile-sublink">Privacy Policy</Link>
                <Link to="/cancellation-refund" onClick={closeMenu} className="mobile-sublink">Cancellation & Refund</Link>
              </div>
            )}
          </div>

          <div className="mobile-nav-item">
            <span className="nav-index">08</span>
            <Link to="/contact" onClick={closeMenu} className="mobile-link">
              Contact & Location
            </Link>
          </div>
        </nav>

        {/* Mobile Drawer Footer with Direct Booking */}
        <div className="mobile-drawer-footer">
          <a
            href="https://wa.me/919411770969?text=Hello%20Vann%20Villa%2C%20I%20would%20like%20to%20inquire%20about%20direct%20availability%20and%20rates."
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-drawer-whatsapp-btn"
          >
            Direct Host WhatsApp: +91 94117 70969
          </a>
          <p className="mobile-drawer-location">
            Dehradun Foothills, Uttarakhand • 100% Private 2BHK Pool Estate
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
