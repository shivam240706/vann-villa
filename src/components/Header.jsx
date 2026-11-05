import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const isHomePage = location.pathname === '/';
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleHomeClick = () => {
    setMenuOpen(false);
    setPoliciesOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setPoliciesOpen(false);
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
          backgroundColor: 'var(--accent-gold)',
          transformOrigin: '0%',
          zIndex: 1002
        }}
      />
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={handleHomeClick} aria-label="Vann Villa Home" className="logo-link">
            <img 
              src="/images/vann-villa-logo.webp" 
              alt="Vann Villa Logo" 
              className="header-logo-img" 
              width="44" 
              height="44" 
              loading="eager"
            />
            <span className="logo-text">Vann Villa</span>
          </Link>
        </div>
        
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span className="bar" aria-hidden="true"></span>
          <span className="bar" aria-hidden="true"></span>
          <span className="bar" aria-hidden="true"></span>
        </button>

        <nav id="main-nav" className={`nav-links ${menuOpen ? 'active' : ''}`} role="navigation" aria-label="Primary navigation">
          <Link to="/" onClick={handleHomeClick} aria-current={isActive('/') ? 'page' : undefined} className={isActive('/') ? 'nav-active' : ''}>Home</Link>
          <Link to="/about" onClick={closeMenu} aria-current={isActive('/about') ? 'page' : undefined} className={isActive('/about') ? 'nav-active' : ''}>About & Gallery</Link>
          <Link to="/packages" onClick={closeMenu} aria-current={isActive('/packages') ? 'page' : undefined} className={isActive('/packages') ? 'nav-active' : ''}>Packages</Link>
          
          <div className={`nav-dropdown ${policiesOpen ? 'open' : ''}`}>
            <button 
              type="button" 
              className="nav-dropdown-toggle"
              onClick={togglePolicies}
              aria-expanded={policiesOpen}
              aria-haspopup="true"
            >
              Policies <ChevronIcon className={`dropdown-chevron ${policiesOpen ? 'rotated' : ''}`} />
            </button>
            <div className={`nav-dropdown-content ${policiesOpen ? 'open' : ''}`}>
              <Link to="/terms-conditions" onClick={closeMenu} aria-current={isActive('/terms-conditions') ? 'page' : undefined} className={isActive('/terms-conditions') ? 'nav-active' : ''}>Terms & Conditions</Link>
              <Link to="/privacy-policy" onClick={closeMenu} aria-current={isActive('/privacy-policy') ? 'page' : undefined} className={isActive('/privacy-policy') ? 'nav-active' : ''}>Privacy Policy</Link>
              <Link to="/cancellation-refund" onClick={closeMenu} aria-current={isActive('/cancellation-refund') ? 'page' : undefined} className={isActive('/cancellation-refund') ? 'nav-active' : ''}>Cancellation & Refund</Link>
            </div>
          </div>

          <Link to="/contact" onClick={closeMenu} aria-current={isActive('/contact') ? 'page' : undefined} className={isActive('/contact') ? 'nav-active' : ''}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
