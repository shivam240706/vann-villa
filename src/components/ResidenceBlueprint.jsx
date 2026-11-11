import React, { useRef, useState, useEffect } from 'react';
import './ResidenceBlueprint.css';

const spaces = [
  {
    id: 'master-1',
    category: 'Master Bedroom',
    title: 'Master Suite 1 (Forest Canopy View)',
    tagline: 'Quiet seclusion overlooking Shivalik pine trees',
    image: '/images/vann-villa-master-bedroom.webp',
    imageAlt: 'Master Suite 1 at Vann Villa Dehradun',
    dimensions: '350 Sq Ft',
    occupancy: '2 Adults (+1 Child)',
    bedType: 'King Size Bed',
    view: 'Dense Pine & Mountain View',
    features: [
      'Floor-to-ceiling windows framing natural forest light',
      'Attached private bathroom with open-sky rain shower',
      'Quiet workspace with high-speed Wi-Fi',
      'Air conditioning and custom warm lighting',
      'Solid wood wardrobe and storage luggage bench'
    ]
  },
  {
    id: 'master-2',
    category: 'Garden Bedroom',
    title: 'Suite 2 (Garden & Mountain Sunrise)',
    tagline: 'Direct lawn access with crisp valley morning breeze',
    image: '/images/vann-villa-spacious-bedroom.webp',
    imageAlt: 'Suite 2 garden view bedroom at Vann Villa',
    dimensions: '320 Sq Ft',
    occupancy: '2 Adults (+1 Child)',
    bedType: 'King Size Bed',
    view: '5,000 Sq Ft Lawn & Pool Vista',
    features: [
      'Direct French doors opening out onto the morning lawn',
      'Attached modern bathroom with glass shower and toiletries',
      'Cozy corner reading nook with natural window light',
      'Air conditioning and blackout curtains for deep sleep',
      'Multiple bedside charging points and ambient lamps'
    ]
  },
  {
    id: 'salon',
    category: 'Living & Dining',
    title: 'Central Living Salon & Dining',
    tagline: 'Double-height gathering space for family conversations and movies',
    image: '/images/vann-villa-indoor-lounge.webp',
    imageAlt: 'Living salon and lounge at Vann Villa',
    dimensions: '450 Sq Ft',
    occupancy: 'Full Villa (Up to 8 Guests)',
    bedType: 'Plush Sectional Sofa',
    view: 'Panoramic Pool & Lawn Outlook',
    features: [
      '65-inch 4K Smart TV with Netflix, Prime & OTT streaming',
      'Solid wood 6-seater dining table for shared meals',
      'High ceilings with natural timber touches',
      'Board games and curated reading collection',
      'Sliding glass doors leading directly to the pool deck'
    ]
  },
  {
    id: 'kitchen',
    category: 'Kitchen',
    title: 'Fully Equipped Self-Catering Kitchen',
    tagline: 'Complete culinary freedom with modern appliances',
    image: '/images/vann-villa-kitchen.webp',
    imageAlt: 'Self catering modern kitchen at Vann Villa',
    dimensions: '180 Sq Ft',
    occupancy: 'Private Villa Use',
    bedType: 'Modular Kitchen',
    view: 'Courtyard & Side Lawn',
    features: [
      'Induction cooktop, high-suction chimney, and microwave oven',
      'Large double-door refrigerator and freezer',
      'Multi-stage RO purified drinking water tap',
      'Electric kettle, tea bar, and coffee maker',
      'Cookware, pans, dinnerware, and glassware provided'
    ]
  },
  {
    id: 'grounds',
    category: 'Outdoors',
    title: '5,000 Sq Ft Private Lawn & Swimming Pool',
    tagline: 'Your private outdoor sanctuary with zero shared guests',
    image: '/images/vann-villa-private-pool.webp',
    imageAlt: 'Private swimming pool and lawn at Vann Villa',
    dimensions: '5,000 Sq Ft Total',
    occupancy: 'Entire Group',
    bedType: 'Sun Loungers & Lawn Seating',
    view: '360° Foothills & Shivalik Ridges',
    features: [
      'Private 4.5 ft sunken pool with clean freshwater daily',
      'Open stone fire pit for cold foothill evenings',
      'Outdoor barbecue setup for private lawn grilling',
      'Fully fenced perimeter safe for dogs and young children',
      'Rooftop terrace overlooking Mussoorie evening lights'
    ]
  }
];

const ResidenceBlueprint = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    setActiveIndex(index);
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll('.blueprint-detail-card');
    if (cards[index]) {
      const isMobile = window.innerWidth <= 900;
      if (isMobile) {
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        cards[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeIndex - 1);
    scrollToIndex(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(spaces.length - 1, activeIndex + 1);
    scrollToIndex(nextIdx);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const isMobile = window.innerWidth <= 900;
      if (!isMobile) return;

      const cards = el.querySelectorAll('.blueprint-detail-card');
      const containerLeft = el.getBoundingClientRect().left;
      let closestIdx = 0;
      let minDistance = Infinity;

      cards.forEach((card, idx) => {
        const cardLeft = card.getBoundingClientRect().left;
        const dist = Math.abs(cardLeft - containerLeft);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      });

      setActiveIndex(closestIdx);
    };

    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="residence-blueprint-section" id="residence" aria-label="Villa Bedrooms and Living Spaces">
      <div className="blueprint-container">
        {/* Section Header */}
        <div className="blueprint-header">
          <span className="blueprint-eyebrow">Accommodation & Spaces</span>
          <h2 className="blueprint-heading">The Villa & Bedrooms</h2>
          <p className="blueprint-subheading">
            Explore the private suites, central salon, kitchen, and grounds.
            Every space is 100% exclusive to your party.
          </p>
        </div>

        {/* Quick-Jump Navigation Chips */}
        <div className="blueprint-scroll-nav" role="tablist" aria-label="Quick jump to space">
          {spaces.map((sp, idx) => (
            <button
              key={sp.id}
              type="button"
              className={`blueprint-nav-chip ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => scrollToIndex(idx)}
            >
              <span className="chip-category">{sp.category}</span>
              <span className="chip-name">{sp.title.split('(')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Showcase Container */}
        <div className="blueprint-scroll-wrapper">
          {/* Mobile Prev / Next Controls (Hidden on PC where spaces are up-to-down) */}
          <div className="blueprint-scroll-controls">
            <button 
              type="button" 
              className="scroll-btn prev-btn" 
              onClick={handlePrev}
              disabled={activeIndex === 0}
              aria-label="Previous space"
            >
              &#8249;
            </button>
            <span className="scroll-indicator-text">
              {activeIndex + 1} of {spaces.length}
            </span>
            <button 
              type="button" 
              className="scroll-btn next-btn" 
              onClick={handleNext}
              disabled={activeIndex === spaces.length - 1}
              aria-label="Next space"
            >
              &#8250;
            </button>
          </div>

          {/* Up-to-down on PC, Horizontal swipe on Mobile */}
          <div className="blueprint-scroll-track" ref={scrollRef}>
            {spaces.map((sp, idx) => (
              <article 
                key={sp.id} 
                id={`space-${sp.id}`}
                className={`blueprint-detail-card ${activeIndex === idx ? 'current' : ''}`}
              >
                {/* Visual Column (Left Column) */}
                <div className="blueprint-media-col">
                  <div className="blueprint-image-wrap">
                    <img
                      src={sp.image}
                      alt={sp.imageAlt}
                      className="blueprint-img"
                      loading="lazy"
                    />
                    <div className="blueprint-dimensions-badge">
                      <span>{sp.dimensions}</span>
                    </div>
                  </div>
                </div>

                {/* Data Column (Right Column) */}
                <div className="blueprint-info-col">
                  <span className="info-badge">{sp.category}</span>
                  <h3 className="info-title">{sp.title}</h3>
                  <p className="info-tagline">{sp.tagline}</p>

                  {/* Specs Matrix */}
                  <div className="blueprint-specs-matrix">
                    <div className="matrix-cell">
                      <span className="matrix-label">Area</span>
                      <strong className="matrix-value">{sp.dimensions}</strong>
                    </div>
                    <div className="matrix-cell">
                      <span className="matrix-label">Capacity</span>
                      <strong className="matrix-value">{sp.occupancy}</strong>
                    </div>
                    <div className="matrix-cell">
                      <span className="matrix-label">Bed Type</span>
                      <strong className="matrix-value">{sp.bedType}</strong>
                    </div>
                    <div className="matrix-cell">
                      <span className="matrix-label">View</span>
                      <strong className="matrix-value">{sp.view}</strong>
                    </div>
                  </div>

                  {/* Highlights / Inclusions */}
                  <div className="inclusions-section">
                    <h4 className="inclusions-title">Highlights:</h4>
                    <ul className="inclusions-list">
                      {sp.features.map((feature, fIdx) => (
                        <li key={fIdx} className="inclusion-item">
                          <span className="inclusion-bullet" aria-hidden="true">•</span>
                          <span className="inclusion-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="blueprint-cta-row">
                    <a
                      href={`https://wa.me/919411770969?text=Hello%20Vann%20Villa%2C%20I%20would%20like%20to%20inquire%20about%20booking%20and%20details%20for%20${encodeURIComponent(sp.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blueprint-cta-link"
                    >
                      Inquire on WhatsApp &rarr;
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidenceBlueprint;