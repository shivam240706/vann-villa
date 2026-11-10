import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './EstateDayTimeline.css';

const moments = [
  {
    time: '07:30 AM',
    phase: 'Dawn & Awakening',
    title: 'Morning Mist & Steaming Pahadi Chai',
    desc: 'Wake up to silence broken only by Himalayan bulbuls and wind in the pines. Step out barefoot onto the dewy 5,000 sq ft private lawn with freshly brewed ginger-cardamom tea prepared in your kitchen or served by your host.',
    sensoryBadge: 'Crisp 18°C Mountain Air • Pine Fragrance',
    image: '/images/vann-villa-morning-tea-spot.webp',
    imageAlt: 'Morning tea spot on the lawn at Vann Villa'
  },
  {
    time: '11:30 AM',
    phase: 'Midday Solitude',
    title: 'Mountain Plunge & Lawn Leisure',
    desc: 'As the Himalayan sun warms the foothill stone, slip into your private 4.5 ft sunken pool. Zero strangers, zero reservations. Dry off on teak loungers with chilled beverages and games on the soft grass.',
    sensoryBadge: 'Filtered Mountain Water • Complete Privacy',
    image: '/images/vann-villa-pool-nature.webp',
    imageAlt: 'Private pool and nature at Vann Villa'
  },
  {
    time: '04:30 PM',
    phase: 'Golden Hour',
    title: 'Rooftop Horizon & Evening Breeze',
    desc: 'Ascend to the open-air rooftop viewing terrace as the sun dips behind the Shivalik ridges. Watch the valley shift through shades of amber, rose, and indigo while the twinkling lights of Mussoorie emerge in the distance.',
    sensoryBadge: '180° Foothill Horizon • Golden Twilight',
    image: '/images/vann-villa-rooftop-view.webp',
    imageAlt: 'Rooftop panoramic sunset at Vann Villa'
  },
  {
    time: '08:00 PM',
    phase: 'Nightfall & Hearth',
    title: 'Crackling Bonfire & Starlit Barbecue',
    desc: 'Gather around the stone hearth in the garden. Enjoy fresh outdoor barbecue skewers under an unpolluted night sky teeming with stars, enveloped by the aroma of crackling deodar woodfire and acoustic tranquility.',
    sensoryBadge: 'Stone Hearth • Zero Light Pollution Stars',
    image: '/images/vann-villa-outdoor-fire-pit.webp',
    imageAlt: 'Outdoor fire pit and bonfire at Vann Villa'
  }
];

const ClockIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const SparkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 2v3m0 14v3M2 12h3m14 0h3"></path>
  </svg>
);

const EstateDayTimeline = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = moments[activeIdx];

  return (
    <section className="estate-day-section" id="day-in-the-life" aria-label="A Day at Vann Villa">
      <div className="estate-day-container">
        {/* Header */}
        <div className="estate-day-header">
          <div className="timeline-eyebrow">
            <ClockIcon />
            <span>The Daily Rhythm</span>
          </div>
          <h2 className="timeline-heading">A Day at Vann Villa</h2>
          <p className="timeline-subheading">
            Taste is the consequence of pacing: how time slows down when you have an entire
            5,000 sq ft private foothill estate all to yourself.
          </p>
        </div>

        {/* Timeline Selector Bar */}
        <div className="timeline-milestones-nav" role="tablist" aria-label="Daily Timeline Moments">
          {moments.map((m, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={idx}
                role="tab"
                aria-selected={isActive}
                className={`timeline-milestone-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveIdx(idx)}
              >
                <span className="milestone-time">{m.time}</span>
                <span className="milestone-phase">{m.phase}</span>
                <div className="milestone-line-indicator" aria-hidden="true" />
              </button>
            );
          })}
        </div>

        {/* Active Moment Visual Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            className="moment-stage-card"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Visual Frame */}
            <div className="moment-media-frame">
              <img
                src={current.image}
                alt={current.imageAlt}
                className="moment-img"
                loading="lazy"
              />
              <div className="moment-sensory-overlay">
                <span className="sensory-icon"><SparkIcon /></span>
                <span className="sensory-text">{current.sensoryBadge}</span>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="moment-narrative-frame">
              <div className="moment-time-tag">
                <span className="time-val">{current.time}</span>
                <span className="phase-sep" aria-hidden="true">•</span>
                <span className="phase-val">{current.phase}</span>
              </div>

              <h3 className="moment-title">{current.title}</h3>
              <p className="moment-desc">{current.desc}</p>

              <div className="moment-navigation-controls">
                <button
                  type="button"
                  className="timeline-nav-arrow"
                  onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : moments.length - 1))}
                  aria-label="Previous timeline moment"
                >
                  &larr; Earlier
                </button>
                <span className="timeline-counter">
                  0{activeIdx + 1} / 0{moments.length}
                </span>
                <button
                  type="button"
                  className="timeline-nav-arrow"
                  onClick={() => setActiveIdx((prev) => (prev < moments.length - 1 ? prev + 1 : 0))}
                  aria-label="Next timeline moment"
                >
                  Later &rarr;
                </button>
              </div>

              <div className="moment-cta-wrap">
                <a
                  href={`https://wa.me/919411770969?text=Hello%20Vann%20Villa%2C%20I%20love%20the%20itinerary%20for%20${encodeURIComponent(current.title)}%20and%20would%20like%20to%20plan%20a%20stay.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="moment-cta-btn"
                >
                  Plan Your Stay for This Experience &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EstateDayTimeline;
