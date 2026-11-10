import React from 'react';
import { motion } from 'framer-motion';
import './HighlightsBar.css';

// Minimalist architectural SVG icons (zero third-party dependencies, anti-vibe-coded)
const PoolIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 20c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1"></path>
    <path d="M2 16c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1"></path>
    <path d="M16 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
    <path d="M14 10l2 2 4-2"></path>
  </svg>
);

const LawnIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22V8"></path>
    <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
    <path d="M8 8a4 4 0 0 1 8 0"></path>
    <path d="M12 2v2"></path>
  </svg>
);

const PawIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="4" r="2"></circle>
    <circle cx="18" cy="8" r="2"></circle>
    <circle cx="20" cy="16" r="2"></circle>
    <path d="M9 10a5 5 0 0 1 5 5v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3a5 5 0 0 1 5-5z"></path>
  </svg>
);

const VillaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const KitchenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 13.8V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v9.8"></path>
    <path d="M18 2v18"></path>
    <path d="M18 7a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V7z"></path>
    <line x1="6" y1="18" x2="10" y2="18"></line>
    <line x1="8" y1="14" x2="8" y2="22"></line>
  </svg>
);

const MountainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
  </svg>
);

const BonfireIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2c1 3 4 5 4 9a6 6 0 0 1-12 0c0-4 3-6 4-9 1 2 2 3 4 0z"></path>
    <path d="M8.5 15.5a3.5 3.5 0 0 0 7 0"></path>
    <path d="M4 22h16"></path>
  </svg>
);

const WifiIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 13a10 10 0 0 1 14 0"></path>
    <path d="M8.5 16.5a5 5 0 0 1 7 0"></path>
    <path d="M2 8.82a15 15 0 0 1 20 0"></path>
    <line x1="12" y1="20" x2="12.01" y2="20"></line>
  </svg>
);

const villaFeatures = [
  {
    icon: <PoolIcon />,
    tag: "100% UNSHARED",
    title: "Private Mountain Pool",
    subtitle: "Exclusively yours. No other guests, no timings, filtered fresh mountain water.",
    badgeClass: "badge-burgundy"
  },
  {
    icon: <LawnIcon />,
    tag: "5,000 SQ FT",
    title: "Fenced Mountain Lawn",
    subtitle: "Huge private green expanse surrounded by pine trees, safe for children to run.",
    badgeClass: "badge-olive"
  },
  {
    icon: <PawIcon />,
    tag: "PET WELCOMING",
    title: "100% Pet-Friendly",
    subtitle: "Complete perimeter fencing so pets can play off-leash safely with zero extra fee.",
    badgeClass: "badge-burgundy"
  },
  {
    icon: <VillaIcon />,
    tag: "ENTIRE RESIDENCE",
    title: "Full 2BHK Private Villa",
    subtitle: "2 king suites, double-height living salon, 6-seater dining & private balconies.",
    badgeClass: "badge-olive"
  },
  {
    icon: <KitchenIcon />,
    tag: "SELF-CATERING",
    title: "Chef's Kitchen & Dining",
    subtitle: "Equipped with induction, microwave, fridge, RO water & cookware. Cook or request meals.",
    badgeClass: "badge-burgundy"
  },
  {
    icon: <BonfireIcon />,
    tag: "EVENING RITUAL",
    title: "Bonfire & BBQ Deck",
    subtitle: "Open stone fire pit and barbecue setup under crystal starlit foothill skies.",
    badgeClass: "badge-olive"
  },
  {
    icon: <MountainIcon />,
    tag: "SHIVALIK VISTAS",
    title: "Rooftop Mountain Terrace",
    subtitle: "Panoramic 360° views of Mussoorie hill contours and pristine zero-smog valley air.",
    badgeClass: "badge-burgundy"
  },
  {
    icon: <WifiIcon />,
    tag: "FAST & RELIABLE",
    title: "High-Speed WiFi & Inverter",
    subtitle: "Dedicated workstations, seamless OTT smart TV, and 100% power backup.",
    badgeClass: "badge-olive"
  }
];

const HighlightsBar = () => {
  return (
    <section className="highlights-bar-container" id="estate-features" aria-label="Vann Villa Key Inclusions and Features">
      <div className="highlights-header">
        <div className="highlights-eyebrow">
          <span>Unmatched Foothill Seclusion</span>
        </div>
        <h2 className="why-vann-villa-title">
          Every Luxury Feature, Exclusively Yours
        </h2>
        <p className="why-vann-villa-direct-answer">
          Unlike crowded hillside resorts or shared homestays, Vann Villa is booked for only one party at a time.
          Every amenity—from your private swimming pool to the 5,000 sq ft lawn—is 100% reserved for your stay.
        </p>
      </div>

      {/* Prominent Mobile-First Feature Grid */}
      <div className="features-showcase-grid">
        {villaFeatures.map((item, idx) => (
          <motion.article 
            key={idx} 
            className="feature-card"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
          >
            <div className="feature-card-header">
              <div className="feature-icon-wrapper" aria-hidden="true">
                {item.icon}
              </div>
              <span className={`feature-pill-badge ${item.badgeClass}`}>
                {item.tag}
              </span>
            </div>
            <h3 className="feature-card-title">{item.title}</h3>
            <p className="feature-card-sub">{item.subtitle}</p>
          </motion.article>
        ))}
      </div>

      {/* Reassurance Banner for Mobile Skimmers */}
      <div className="highlights-guarantee-strip">
        <div className="guarantee-cell">
          <strong className="cell-num">₹4,499</strong>
          <span className="cell-desc">Starting Host Rate / Night</span>
        </div>
        <div className="guarantee-sep" aria-hidden="true" />
        <div className="guarantee-cell">
          <strong className="cell-num">0</strong>
          <span className="cell-desc">Shared Guests or Strangers</span>
        </div>
        <div className="guarantee-sep" aria-hidden="true" />
        <div className="guarantee-cell">
          <strong className="cell-num">500m</strong>
          <span className="cell-desc">From UPES Dehradun</span>
        </div>
        <div className="guarantee-sep" aria-hidden="true" />
        <div className="guarantee-cell">
          <strong className="cell-num">100%</strong>
          <span className="cell-desc">Pet & Family Friendly</span>
        </div>
      </div>
    </section>
  );
};

export default HighlightsBar;
