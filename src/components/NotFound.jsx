import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from './SEO';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <SEO
        title="Page Not Found | Vann Villa"
        description="The page you are looking for at Vann Villa could not be found. Return to our home page."
      />

      <div className="not-found-content">
        <motion.h1
          className="error-code"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="error-title"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          Page Not Located
        </motion.h2>

        <motion.p
          className="error-desc"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.15 }}
        >
          The residence or page you requested could not be found. Please return to the estate home or explore our guest guide.
        </motion.p>

        <motion.div
          className="error-actions"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          <Link to="/" className="btn-primary">
            Return to Estate
          </Link>
          <Link to="/experience" className="btn-outline">
            The Experience &rarr;
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
