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
    inclusions: [
      'Complete private access to the entire 2BHK luxury residence',
      'Exclusive private swimming pool with zero shared guests',
      '5,000 sq ft of securely fenced private green lawns',
      'Fully equipped chef kitchen for self-cooking or catering',
      'High-speed Wi-Fi, smart entertainment, and 24/7 power backup'
    ],
    note: '₹500 per extra guest beyond 4. 100% pet-friendly with zero pet fees.',
    link: '/pet-friendly-villa-dehradun',
    linkText: 'Explore pet-friendly stay details',
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
    inclusions: [
      '2 nights in the luxury master bedroom suite',
      'Exclusive unshared swimming pool and starlit terrace access',
      'Flexible check-in and late check-out subject to schedule',
      'Fully equipped kitchen for private candlelight dining'
    ],
    note: 'Ideal for anniversaries, birthdays, and private celebrations.',
    link: '/couple-getaway-dehradun',
    linkText: 'Explore couple retreat details',
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
    inclusions: [
      'Two spacious bedrooms with comfortable additional bedding',
      'Expansive secure grounds for children and pets to run freely',
      'Complete kitchen setup with cookware, refrigerator, and gas stove',
      'Secure on-site gated parking for multiple vehicles'
    ],
    note: 'All dog and cat breeds welcome with no pet restrictions.',
    link: '/family-villa-dehradun',
    linkText: 'Explore family getaway details',
    primary: false
  }
];

const Packages = () => {
  const handleInquire = (stayTitle) => {
    const text = `Hi, I am interested in reserving "${stayTitle}" at Vann Villa. Please share current availability.`;
    window.open(`https://wa.me/919411770969?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="packages" className="packages-section section-padding" aria-label="Estate Rates and Stays">
      <div className="packages-container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <p className="section-subtitle">Estate Reservation & Rates</p>
          <h2 className="section-title">Private Villa Stays</h2>
          <p className="estate-rates-intro">
            Vann Villa is rented strictly as an exclusive private estate. Every reservation guarantees 100% privacy with no other guests on the property.
          </p>
        </motion.div>

        <div className="estate-stays-grid">
          {stayOptions.map((stay, idx) => (
            <motion.article 
              key={stay.id} 
              className={`estate-stay-card ${stay.primary ? 'estate-primary-card' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.1 }}
            >
              <div className="stay-card-header">
                <span className="stay-capacity">{stay.capacity}</span>
                <h3 className="stay-title">{stay.title}</h3>
                <p className="stay-subtitle">{stay.subtitle}</p>
                
                <div className="stay-pricing">
                  <span className="stay-rate-label">Rate:</span>
                  <del className="stay-old-price">{stay.oldPrice}</del>
                  <strong className="stay-price">{stay.price}</strong>
                  <span className="stay-unit">{stay.unit}</span>
                </div>
              </div>

              <div className="stay-card-body">
                <h4 className="stay-inclusions-label">Estate Inclusions:</h4>
                <ul className="stay-inclusions-list">
                  {stay.inclusions.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <span className="stay-bullet" aria-hidden="true">/</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {stay.note && <p className="stay-note">{stay.note}</p>}
              </div>

              <div className="stay-card-footer">
                <Link to={stay.link} className="stay-deep-link">
                  {stay.linkText}
                </Link>
                <button 
                  type="button"
                  className="btn-primary stay-inquire-btn"
                  onClick={() => handleInquire(stay.title)}
                >
                  Inquire via WhatsApp
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
