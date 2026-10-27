import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from './SEO';
import './PackagesHub.css';

const packages = [
  {
    title: 'Romantic Couple Getaway',
    description: 'A secluded private villa for two — private pool, starry nights, and complete privacy for anniversaries and honeymoons.',
    image: '/images/vann-villa-master-bedroom-view.webp',
    link: '/couple-getaway-dehradun',
  },
  {
    title: 'Family Villa Vacation',
    description: 'Space for everyone: 2BHK villa, 5,000 sq ft of private grounds, a private pool, and a fully equipped kitchen. Fits up to 6 guests.',
    image: '/images/vann-villa-private-pool.webp',
    link: '/family-villa-dehradun',
  },
  {
    title: 'Pet-Friendly Stay',
    description: 'No pet fees, no restrictions. 5,000 sq ft of fenced grounds for dogs to roam free, with secure gated access and on-site support.',
    image: '/images/vann-villa-exterior-lawn.webp',
    link: '/pet-friendly-villa-dehradun',
  },
  {
    title: 'Best Villa & Hidden Gem Stay',
    description: 'Dehradun’s premier private luxury pool villa set across 5,000 sq ft of mountain lawns. 100% exclusive privacy starting at just ₹4,499/night.',
    image: '/images/vann-villa-estate.webp',
    link: '/best-villa-in-dehradun',
  },
  {
    title: 'Delhi Weekend Getaway',
    description: 'A 5–6 hour drive from Delhi NCR to clean mountain air and your own private pool. Leave Friday, return Sunday recharged.',
    image: '/images/vann-villa-rooftop-view.webp',
    link: '/delhi-to-dehradun-weekend',
  },
];

const PackagesHub = () => {
  return (
    <div className="packages-hub-container">
      <SEO
        title="Luxury Stay Packages in Dehradun | Van Villa"
        description="Browse all stay packages at Van Villa — romantic getaways, family vacations, pet-friendly stays, and Delhi weekend trips. Private pool villa starting at just ₹4,499/night."
      />

      <section
        className="packages-hub-hero"
        style={{ backgroundImage: 'url("/images/vann-villa-exterior.webp")' }}
      >
        <motion.div
          className="packages-hub-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Stay Packages</h1>
          <p>Find the right experience for your getaway to Dehradun.</p>
        </motion.div>
      </section>

      <div className="packages-hub-grid">
        {packages.map((pkg, idx) => (
          <motion.div
            key={pkg.link}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
          >
            <Link to={pkg.link} className="package-hub-card">
              <div
                className="package-hub-card-bg"
                style={{ backgroundImage: `url("${pkg.image}")` }}
              />
              <div className="package-hub-card-overlay" />
              <div className="package-hub-card-content">
                <h2>{pkg.title}</h2>
                <p>{pkg.description}</p>
                <span className="package-hub-card-cta">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PackagesHub;
