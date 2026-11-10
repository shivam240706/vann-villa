import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LivingVision.css';

const chapters = [
  {
    id: 'architecture',
    num: '01',
    label: 'The Architecture',
    title: 'Monolithic Stone, Himalayan Teak & Expansive Glass',
    quote: 'Architecture is not merely enclosing space; it is framing the mountain forest so you never forget where you are.',
    description: 'Designed as a contemporary mountain retreat, Vann Villa balances heavy natural stone foundations with warm seasoned wood and soaring floor-to-ceiling glass. Double-height ceilings invite the shifting daylight inward, creating a quiet sanctuary that feels rooted in the Shivalik terrain.',
    image: '/images/vann-villa-exterior.webp',
    imageAlt: 'Vann Villa architectural exterior in Dehradun foothills',
    specs: [
      { label: 'Estate Layout', val: 'Private 2BHK Residence' },
      { label: 'Ceiling Height', val: 'Double-Height Living Salon' },
      { label: 'Exclusivity', val: '100% Private (No Shared Guests)' }
    ]
  },
  {
    id: 'grounds',
    num: '02',
    label: 'The Grounds & Lawns',
    title: '5,000 Square Feet of Fenced Private Greenery',
    quote: 'True luxury in the foothills is unobstructed open ground where children and pets can run freely under ancient trees.',
    description: 'Surrounded by local litchi orchards and pine foliage, our expansive private lawn provides an open-air sanctuary for slow mornings, barefoot grounding on dew-damp grass, outdoor dining, and private celebrations without neighboring eyes or noise.',
    image: '/images/vann-villa-exterior-lawn.webp',
    imageAlt: '5000 sq ft private lawn at Vann Villa Dehradun',
    specs: [
      { label: 'Ground Area', val: '5,000 Sq Ft Fenced Perimeter' },
      { label: 'Pet Hospitality', val: '100% Pet Friendly' },
      { label: 'Outdoor Living', val: 'Bonfire Deck & Sun Loungers' }
    ]
  },
  {
    id: 'water',
    num: '03',
    label: 'The Seclusion & Water',
    title: 'A Mountain Plunge Pool Reserved Exclusively for You',
    quote: 'No stranger swimming beside you. Just crystalline mountain water catching the afternoon sun and evening pine shadows.',
    description: 'Immerse yourself in our private sunken pool, filtered daily with freshwater. Whether greeting the dawn with a cool morning swim or enjoying evening poolside conversations with the fire pit crackling nearby, the pool remains entirely your private domain.',
    image: '/images/vann-villa-private-pool.webp',
    imageAlt: 'Private unshared pool at Vann Villa',
    specs: [
      { label: 'Pool Depth', val: '4.5 Feet Uniform Depth' },
      { label: 'Filtration', val: 'Fresh Mountain Water Daily' },
      { label: 'Access', val: '24/7 Direct Deck Access' }
    ]
  },
  {
    id: 'atmosphere',
    num: '04',
    label: 'Foothill Light & Air',
    title: 'Zero-AQI Mountain Breeze, Valley Mist & Starlit Nights',
    quote: 'When the city haze recedes, the mind settles. Taste crisp Himalayan air that smells of mountain pine and rain-washed soil.',
    description: 'Perched in the Dehradun foothills near UPES, Vann Villa enjoys clear skies, panoramic Shivalik ridges, and zero urban smog. Spend golden hour on the private rooftop deck watching the Mussoorie lights flicker on as twilight deepens across the valley.',
    image: '/images/vann-villa-rooftop-view.webp',
    imageAlt: 'Panoramic rooftop foothills view from Vann Villa',
    specs: [
      { label: 'Air Quality', val: 'Pristine AQI 24 - 35' },
      { label: 'Elevation', val: '680m Above Sea Level' },
      { label: 'Evening Ritual', val: 'Open Rooftop Mountain Watch' }
    ]
  }
];

const LivingVision = () => {
  const [activeChapter, setActiveChapter] = useState(chapters[0]);

  return (
    <section className="living-vision-section" id="living-vision" aria-label="The Living Vision Experience">
      <div className="living-vision-container">
        {/* Editorial Section Header */}
        <div className="living-vision-header">
          <span className="vision-eyebrow">Architectural Narrative</span>
          <h2 className="vision-heading">The Living Vision</h2>
          <p className="vision-subheading">
            What happens when a stay stops feeling like a property listing and becomes an experience?
            Discover an estate designed around materiality, open ground, and foothill light.
          </p>
        </div>

        {/* Chapter Navigation Tabs */}
        <div className="vision-tabs-nav" role="tablist" aria-label="Living Vision Chapters">
          {chapters.map((ch) => {
            const isActive = activeChapter.id === ch.id;
            return (
              <button
                key={ch.id}
                role="tab"
                aria-selected={isActive}
                className={`vision-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveChapter(ch)}
              >
                <span className="tab-num">{ch.num}</span>
                <span className="tab-label">{ch.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Chapter Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeChapter.id}
            className="vision-showcase-grid"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Left: Editorial Story & Specs */}
            <div className="vision-story-col">
              <span className="story-chapter-badge">Chapter {activeChapter.num}</span>
              <h3 className="story-title">{activeChapter.title}</h3>
              <blockquote className="story-quote">
                "{activeChapter.quote}"
              </blockquote>
              <p className="story-desc">{activeChapter.description}</p>

              <div className="story-specs-grid">
                {activeChapter.specs.map((spec, i) => (
                  <div key={i} className="story-spec-card">
                    <span className="spec-label">{spec.label}</span>
                    <strong className="spec-val">{spec.val}</strong>
                  </div>
                ))}
              </div>

              <div className="story-actions">
                <a
                  href={`https://wa.me/919411770969?text=Hello%20Vann%20Villa%2C%20I%20am%20captivated%20by%20${encodeURIComponent(activeChapter.title)}%20and%20would%20like%20to%20plan%20a%20stay.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="story-cta-btn"
                >
                  Experience This in Person &rarr;
                </a>
              </div>
            </div>

            {/* Right: Architectural Imagery */}
            <div className="vision-media-col">
              <div className="vision-image-frame">
                <img
                  src={activeChapter.image}
                  alt={activeChapter.imageAlt}
                  className="vision-main-img"
                  loading="lazy"
                />
                <div className="vision-image-caption">
                  <span className="caption-tag">Vann Villa Dehradun</span>
                  <span className="caption-detail">{activeChapter.label}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LivingVision;

