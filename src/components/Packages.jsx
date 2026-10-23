import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Heart, Users, Sparkles } from 'lucide-react';
import './Packages.css';
import KatanaStrikePrice from './KatanaStrikePrice';
import { Link } from 'react-router-dom';
import TiltCard from './TiltCard';

const packageData = [
  {
    id: 'pool-escape',
    title: 'Private Pool Escape',
    tagline: 'The entire property is yours — pool, lawns, outdoor fire pit, and all.',
    price: <KatanaStrikePrice oldPrice="₹9,999" newPrice="₹4,999" color="#b8860b" size="0.7em" newSize="1em" />,
    unit: '/night',
    icon: Sparkles,
    bestFor: 'Up to 4 Guests',
    link: '/pet-friendly-villa-dehradun',
    linkText: 'See full pet-friendly stay details →',
    features: [
      'Entire 2BHK Private Villa',
      '₹500 per extra person (if > 4 guests)',
      'Exclusive Access to Swimming Pool',
      'Evening Bonfire Setup',
      'High-Speed Wi-Fi & Smart TV'
    ],
    recommended: true,
  },
  {
    id: 'romantic-stay',
    title: 'Romantic 2-Night Stay',
    tagline: 'Two nights of uninterrupted stillness, an outdoor fire pit, and a sky full of stars.',
    price: <KatanaStrikePrice oldPrice="₹19,998" newPrice="₹9,998" color="#b8860b" size="0.7em" newSize="1em" />,
    unit: 'total',
    icon: Heart,
    bestFor: 'Couples',
    link: '/couple-getaway-dehradun',
    linkText: 'See full romantic getaway details →',
    features: [
      '2 Nights in Luxury Master Suite',
      'Late Check-out (Subject to Availability)',
      'Exclusive Access to Swimming Pool',
      'High-Speed Wi-Fi & Smart TV'
    ],
    recommended: false,
  },
  {
    id: 'family-getaway',
    title: 'Family Villa Getaway',
    tagline: 'Space for everyone: 10,000 sq ft of private grounds, a private pool, and a kitchen on your terms.',
    price: <KatanaStrikePrice oldPrice="₹11,999" newPrice="₹5,999" color="#b8860b" size="0.7em" newSize="1em" />,
    unit: '/night',
    icon: Users,
    bestFor: 'Families (up to 6 Guests)',
    link: '/family-villa-dehradun',
    linkText: 'See full family getaway details →',
    features: [
      'Entire 2BHK Villa',
      'Extra Mattresses Provided',
      'Complete BBQ Setup',
      'Pet-Friendly Access to Lawns',
      'Exclusive Access to Swimming Pool',
      'High-Speed Wi-Fi & Smart TV'
    ],
    recommended: false,
  }
];

const Packages = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const handleBook = (pkgTitle) => {
    const text = `Hi, I am interested in booking the "${pkgTitle}" package at Kudrat Villa. Please share availability.`;
    window.open(`https://wa.me/919411770969?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="packages" className="packages-section section-padding" aria-label="Our Booking Packages">
      <div className="packages-container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <h2 className="section-title">Choose Your Experience</h2>
          <p className="section-subtitle">Select the perfect luxury package for your stay in Dehradun</p>
        </motion.div>

        <motion.div 
          className="packages-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {packageData.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <TiltCard 
                key={pkg.id} 
                className={`package-card ${pkg.recommended ? 'recommended' : ''}`}
                variants={itemVariants}
                scale={pkg.recommended && window.innerWidth > 992 ? 1.05 : 1}
              >
                {pkg.recommended && <div className="recommended-badge">Most Popular</div>}
                
                <div className="package-header">
                  <div className="package-icon">
                    <Icon size={28} />
                  </div>
                  <span className="best-for">Best For: {pkg.bestFor}</span>
                  <h3 className="package-title">{pkg.title}</h3>
                  {pkg.tagline && <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5', marginTop: '6px', marginBottom: '8px', fontStyle: 'italic' }}>{pkg.tagline}</p>}
                  <span className="package-price-prefix">Starting at just</span>
                  <div className="package-price-wrap">
                    <span className="package-price">{pkg.price}</span>
                    <span className="package-unit">{pkg.unit}</span>
                  </div>
                </div>

                <div className="package-body">
                  <ul className="package-features">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={18} className="feature-check" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="package-footer">
                  {pkg.link && (
                    <Link 
                      to={pkg.link} 
                      className="package-deep-link" 
                      style={{ display: 'block', textAlign: 'center', marginBottom: '15px', color: 'var(--accent-gold)', fontWeight: '500', textDecoration: 'none', fontSize: '0.9rem', letterSpacing: '0.5px' }}
                    >
                      {pkg.linkText}
                    </Link>
                  )}
                  <button 
                    className={`btn-primary package-btn ${pkg.recommended ? 'pulse-glow' : ''}`}
                    onClick={() => handleBook(pkg.title)}
                  >
                    Check Availability via WhatsApp
                  </button>
                </div>
              </TiltCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;
