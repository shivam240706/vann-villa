import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Packages.css';

const stayOptions = [
  {
    id: 'estate-stay',
    title: 'The Entire Estate Reservation',
    subtitle: 'Exclusive private reservation of the 2BHK villa, pool, and 5,000 sq ft grounds',
    oldPrice: '₹8,999',
    price: '₹4,499',
    unit: 'per night',
    capacity: 'Base 4 Guests · Max 6',
    badge: 'Most Popular',
    inclusions: [
      'Complete private access to entire 2BHK residence',
      'Exclusive unshared swimming pool (zero other guests)',
      '5,000 sq ft of securely fenced private lawns',
      'Fully equipped kitchen for self-cooking / catering',
      'High-speed Wi-Fi & 24/7 power backup'
    ],
    note: '100% pet-friendly with zero pet charges.',
    link: '/pet-friendly-villa-dehradun',
    linkText: 'Pet-friendly stay details',
    primary: true
  },
  {
    id: 'romantic-stay',
    title: 'Romantic Couple Retreat',
    subtitle: 'Two nights of mountain stillness and private poolside seclusion',
    oldPrice: '₹17,998',
    price: '₹8,998',
    unit: '2 nights total',
    capacity: 'Reserved for 2 Guests',
    badge: 'Couple Special',
    inclusions: [
      '2 nights in the luxury master bedroom suite',
      'Exclusive unshared pool & starlit terrace access',
      'Flexible check-in / late check-out upon request',
      'Fully equipped kitchen for candlelight meals',
      'Complimentary welcome beverage basket'
    ],
    note: 'Ideal for anniversaries and quiet getaways.',
    link: '/couple-getaway-dehradun',
    linkText: 'Couple retreat details',
    primary: false
  },
  {
    id: 'family-stay',
    title: 'Family Mountain Getaway',
    subtitle: 'Spacious multi-guest living surrounded by Himalayan pine foothills',
    oldPrice: '₹10,999',
    price: '₹5,499',
    unit: 'per night',
    capacity: 'Up to 6 Guests',
    badge: 'Family Gathering',
    inclusions: [
      'Two spacious bedrooms with comfortable extra bedding',
      '5,000 sq ft secure grounds for children & pets',
      'Full kitchen with cookware, fridge & gas stove',
      'Secure on-site gated parking for multiple cars',
      'Smart TV lounge with family board games'
    ],
    note: 'All pets welcome freely with no restrictions.',
    link: '/family-villa-dehradun',
    linkText: 'Family getaway details',
    primary: false
  }
];

const Packages = () => {
  const handleInquire = (stayTitle) => {
    const text = `Hi, I am interested in reserving "${stayTitle}" at Vann Villa. Please share current availability and dates.`;
    window.open(`https://wa.me/919411770969?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="packages" className="packages-section" aria-label="Estate Rates and Stays">
      <div className="packages-container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <p className="section-subtitle">Estate Reservation & Rates</p>
          <h2 className="section-title">Private Villa Stays</h2>
          <p className="estate-rates-intro">
            Vann Villa is booked exclusively as an unshared private sanctuary. Every package guarantees 100% privacy with zero strangers on the estate.
          </p>
        </motion.div>

        {/* 3-Column Single Row on Desktop */}
        <div className="packages-row-grid">
          {stayOptions.map((stay, idx) => (
            <motion.article 
              key={stay.id} 
              className={`package-card ${stay.primary ? 'featured-card' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.08 }}
            >
              <div className="package-card-header">
                <div className="package-top-row">
                  <span className="package-capacity">{stay.capacity}</span>
                  {stay.badge && <span className="package-badge">{stay.badge}</span>}
                </div>
                <h3 className="package-title">{stay.title}</h3>
                <p className="package-subtitle">{stay.subtitle}</p>
                
                <div className="package-pricing">
                  <span className="package-rate-label">Direct Host Rate:</span>
                  <div className="price-line">
                    <del className="package-old-price">{stay.oldPrice}</del>
                    <strong className="package-price">{stay.price}</strong>
                    <span className="package-unit">/{stay.unit}</span>
                  </div>
                </div>
              </div>

              <div className="package-card-body">
                <h4 className="package-inclusions-label">Highlights & Inclusions:</h4>
                <ul className="package-inclusions-list">
                  {stay.inclusions.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <span className="package-bullet" aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {stay.note && <p className="package-note">{stay.note}</p>}
              </div>

              <div className="package-card-footer">
                <Link to={stay.link} className="package-deep-link">
                  {stay.linkText} &rarr;
                </Link>
                <button 
                  type="button"
                  className={`package-cta-btn ${stay.primary ? 'btn-featured' : ''}`}
                  onClick={() => handleInquire(stay.title)}
                >
                  Book via WhatsApp
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;