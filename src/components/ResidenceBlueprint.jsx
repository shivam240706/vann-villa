import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ResidenceBlueprint.css';

const spaces = [
  {
    id: 'master-1',
    category: 'Bedroom Suite',
    title: 'Master Suite 1 (Forest Canopy View)',
    tagline: 'Peaceful seclusion overlooking pristine Shivalik trees',
    image: '/images/vann-villa-master-bedroom.webp',
    imageAlt: 'Master Suite 1 at Vann Villa Dehradun',
    dimensions: '350 Sq Ft (32.5 m²)',
    occupancy: '2 Adults (+1 Child)',
    bedType: 'King Size Orthopedic Bed',
    view: 'Dense Pine & Mountain Canopy',
    features: [
      'Floor-to-ceiling glass framing morning forest light',
      'En-suite artisan bathroom with open-sky rain shower',
      'Quiet remote workstation with high-speed Wi-Fi',
      'Independent climate control and bespoke ambient lighting',
      'Handcrafted hardwood wardrobe and luggage bench'
    ]
  },
  {
    id: 'master-2',
    category: 'Bedroom Suite',
    title: 'Suite 2 (Garden & Mountain Sunrise)',
    tagline: 'Direct lawn access with crisp valley morning breeze',
    image: '/images/vann-villa-spacious-bedroom.webp',
    imageAlt: 'Suite 2 garden view bedroom at Vann Villa',
    dimensions: '320 Sq Ft (29.7 m²)',
    occupancy: '2 Adults (+1 Child)',
    bedType: 'King Size Luxury Bed',
    view: '5,000 Sq Ft Lawn & Pool Deck',
    features: [
      'Direct French doors opening onto the morning lawn',
      'En-suite bathroom with glass shower cubicle and luxury toiletries',
      'Cozy corner reading nook with garden vantage',
      'Air conditioning, quiet ceiling fan, and blackout curtains',
      'Artisan bedside lamps and multiple USB charging points'
    ]
  },
  {
    id: 'salon',
    category: 'Living & Dining',
    title: 'The Central Living Salon & Dining',
    tagline: 'Double-height gathering space for conversations and film nights',
    image: '/images/vann-villa-indoor-lounge.webp',
    imageAlt: 'Living salon and lounge at Vann Villa',
    dimensions: '450 Sq Ft (41.8 m²)',
    occupancy: 'Full Villa Gathering (Up to 8)',
    bedType: 'Plush Velvet Sectional Seating',
    view: 'Panoramic Pool & Lawn Vista',
    features: [
      '65-inch 4K Smart TV with Netflix, Prime, and YouTube',
      'Solid wood 6-seater dining table for shared meals',
      'Double-height ceiling with warm natural timber accents',
      'Curated mountain bookshelf and board games collection',
      'Seamless transition to the outdoor pool deck via sliding glass'
    ]
  },
  {
    id: 'kitchen',
    category: 'Culinary Space',
    title: 'The Fully Equipped Chef Kitchen',
    tagline: 'Self-catering freedom with modern appliances and tea bar',
    image: '/images/vann-villa-kitchen.webp',
    imageAlt: 'Self catering modern kitchen at Vann Villa',
    dimensions: '180 Sq Ft (16.7 m²)',
    occupancy: 'Private Villa Use',
    bedType: 'Complete Modular Kitchen',
    view: 'Courtyard & Side Lawn',
    features: [
      'Induction cooktop, high-suction chimney, and microwave oven',
      'Large double-door refrigerator and freezer',
      'Multi-stage RO purified drinking water tap',
      'Electric kettle, premium tea assortments, and coffee maker',
      'Full set of premium cookware, fine crockery, and glassware'
    ]
  },
  {
    id: 'grounds',
    category: 'Outdoor Living',
    title: '5,000 Sq Ft Lawn, Pool & Fire Pit',
    tagline: 'Your private outdoor sanctuary with zero shared eyes',
    image: '/images/vann-villa-private-pool.webp',
    imageAlt: 'Private swimming pool and lawn at Vann Villa',
    dimensions: '5,000 Sq Ft Total Outdoor Perimeter',
    occupancy: 'Entire Party',
    bedType: 'Sun Loungers & Outdoor Seating',
    view: '360° Foothills & Shivalik Ridges',
    features: [
      'Private 4.5 ft sunken pool with filtered mountain water',
      'Open stone fire pit for evening warmth and star watching',
      'Outdoor barbecue setup for private grill sessions',
      'Full perimeter safety fencing welcoming children and pets',
      'Rooftop viewing terrace overlooking Mussoorie twinkling lights'
    ]
  }
];

const BlueprintIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
    <path d="M3 9h18"></path>
    <path d="M9 21V9"></path>
  </svg>
);

const CheckMark = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const ResidenceBlueprint = () => {
  const [selectedSpace, setSelectedSpace] = useState(spaces[0]);

  return (
    <section className="residence-blueprint-section" id="residence-blueprint" aria-label="Estate Residence Blueprint">
      <div className="blueprint-container">
        {/* Section Header */}
        <div className="blueprint-header">
          <div className="blueprint-eyebrow">
            <BlueprintIcon />
            <span>Spatial Architecture</span>
          </div>
          <h2 className="blueprint-heading">Residence & Grounds Blueprint</h2>
          <p className="blueprint-subheading">
            Inspect the layout of your private 2BHK estate. Every suite and zone has been planned
            for spatial flow, natural ventilation, and absolute seclusion.
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="blueprint-tabs" role="tablist" aria-label="Estate Spaces">
          {spaces.map((sp) => {
            const isSelected = selectedSpace.id === sp.id;
            return (
              <button
                key={sp.id}
                role="tab"
                aria-selected={isSelected}
                className={`blueprint-tab-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedSpace(sp)}
              >
                <span className="tab-category">{sp.category}</span>
                <span className="tab-title">{sp.title.split('(')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Space Layout Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSpace.id}
            className="blueprint-detail-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Visual Column */}
            <div className="blueprint-media-col">
              <div className="blueprint-image-wrap">
                <img
                  src={selectedSpace.image}
                  alt={selectedSpace.imageAlt}
                  className="blueprint-img"
                  loading="lazy"
                />
                <div className="blueprint-dimensions-badge">
                  <span>Area: {selectedSpace.dimensions}</span>
                </div>
              </div>
            </div>

            {/* Architectural Data Column */}
            <div className="blueprint-info-col">
              <div className="info-badge">{selectedSpace.category}</div>
              <h3 className="info-title">{selectedSpace.title}</h3>
              <p className="info-tagline">{selectedSpace.tagline}</p>

              {/* Dimension Specs Matrix */}
              <div className="blueprint-specs-matrix">
                <div className="matrix-cell">
                  <span className="matrix-label">Floor Area</span>
                  <strong className="matrix-value">{selectedSpace.dimensions}</strong>
                </div>
                <div className="matrix-cell">
                  <span className="matrix-label">Capacity</span>
                  <strong className="matrix-value">{selectedSpace.occupancy}</strong>
                </div>
                <div className="matrix-cell">
                  <span className="matrix-label">Sleeping Arrangement</span>
                  <strong className="matrix-value">{selectedSpace.bedType}</strong>
                </div>
                <div className="matrix-cell">
                  <span className="matrix-label">Orientation / Outlook</span>
                  <strong className="matrix-value">{selectedSpace.view}</strong>
                </div>
              </div>

              {/* Key Architectural Inclusions */}
              <div className="inclusions-section">
                <h4 className="inclusions-title">Inclusions & Architecture:</h4>
                <ul className="inclusions-list">
                  {selectedSpace.features.map((feature, idx) => (
                    <li key={idx} className="inclusion-item">
                      <span className="inclusion-icon"><CheckMark /></span>
                      <span className="inclusion-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Booking Inquire for this layout */}
              <div className="blueprint-cta-row">
                <a
                  href={`https://wa.me/919411770969?text=Hello%20Vann%20Villa%2C%20I%20am%20interested%20in%20reserving%20the%20villa%20with%20specific%20details%20about%20${encodeURIComponent(selectedSpace.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blueprint-cta-link"
                >
                  Inquire About This Space via Host WhatsApp &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ResidenceBlueprint;
