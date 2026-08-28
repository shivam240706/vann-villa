import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';
import SEO from './SEO';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <SEO 
        title="Page Not Found | Kudrat Villa"
        description="The page you are looking for at Kudrat Villa could not be found. Return to our home page."
      />
      
      <div className="not-found-content">
        <motion.h1 
          className="error-code"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="error-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          Oops! Looks like you're lost in the woods.
        </motion.h2>
        
        <motion.p 
          className="error-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2 }}
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back to Dehradun's hidden gem.
        </motion.p>
        
        <motion.div 
          className="error-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <Link to="/" className="btn-primary">
            <Home size={18} /> Back to Home
          </Link>
          <Link to="/experience" className="btn-outline">
            The Experience <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
