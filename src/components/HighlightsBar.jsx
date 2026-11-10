import React from 'react';
import './HighlightsBar.css';

const PoolIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 20c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1"></path>
    <path d="M2 16c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1"></path>
    <path d="M16 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
    <path d="M14 10l2 2 4-2"></path>
  </svg>
);

const LawnIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22V8"></path>
    <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
    <path d="M8 8a4 4 0 0 1 8 0"></path>
    <path d="M12 2v2"></path>
  </svg>
);

const PawIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="4" r="2"></circle>
    <circle cx="18" cy="8" r="2"></circle>
    <circle cx="20" cy="16" r="2"></circle>
    <path d="M9 10a5 5 0 0 1 5 5v3a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-3a5 5 0 0 1 5-5z"></path>
  </svg>
);

const VillaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const KitchenIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 13.8V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v9.8"></path>
    <path d="M18 2v18"></path>
    <path d="M18 7a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V7z"></path>
    <line x1="6" y1="18" x2="10" y2="18"></line>
    <line x1="8" y1="14" x2="8" y2="22"></line>
  </svg>
);

const MountainIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
  </svg>
);

const features = [
  {
    icon: <PoolIcon />,
    title: "Unshared Private Pool",
    desc: "100% private to your booking. Filtered daily with mountain freshwater."
  },
  {
    icon: <LawnIcon />,
    title: "5,000 Sq Ft Lawn",
    desc: "A wide private green lawn with pine trees, safe for children and outdoor meals."
  },
  {
    icon: <PawIcon />,
    title: "100% Pet Friendly",
    desc: "Fully fenced property boundary so pets can play off-leash safely."
  },
  {
    icon: <VillaIcon />,
    title: "Entire 2BHK Villa",
    desc: "Two master suites, private bathrooms, living lounge, and dining area."
  },
  {
    icon: <KitchenIcon />,
    title: "Self-Catering Kitchen",
    desc: "Equipped with refrigerator, microwave, induction, RO water, and cookware."
  },
  {
    icon: <MountainIcon />,
    title: "Foothill Views & Bonfire",
    desc: "Fresh mountain air, peaceful forest surroundings, and evening bonfire setup."
  }
];

const HighlightsBar = () => {
  return (
    <section className="highlights-section" id="highlights" aria-label="Key Highlights of Vann Villa">
      <div className="highlights-container">
        <div className="highlights-intro">
          <span className="highlights-tag">Why Vann Villa</span>
          <h2 className="highlights-title">An Authentic Mountain Sanctuary</h2>
          <p className="highlights-desc">
            Unlike commercial resorts or shared homestays, Vann Villa is reserved exclusively for one family or gathering at a time.
            The entire 5,000 sq ft property and swimming pool are 100% yours.
          </p>
        </div>

        <div className="highlights-grid">
          {features.map((item, idx) => (
            <div key={idx} className="highlight-box">
              <div className="highlight-icon-box" aria-hidden="true">
                {item.icon}
              </div>
              <div className="highlight-text-content">
                <h3 className="highlight-heading">{item.title}</h3>
                <p className="highlight-info">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsBar;
