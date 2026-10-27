import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './StatsCounter.css';

const stats = [
  { value: 200, suffix: '+', label: 'Happy Guests' },
  { value: 4.7, suffix: '★', label: 'Google Rating', isDecimal: true },
  { value: 5000, suffix: ' sq ft', label: 'Private Estate' },
  { value: 100, suffix: '%', label: 'Pet Friendly' }
];

// Module-level flag: false on initial page load (hydration from prerendered HTML),
// stays true after first mount. Survives SPA navigation, resets only on full page reload.
const AnimatedNumber = ({ target, suffix, isDecimal = false }) => {
  const [current, setCurrent] = useState(target); // initial state matches prerender snapshot
  const hasAnimated = useRef(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Animate smoothly from 0 to target upon entering view
          setCurrent(0);
          const duration = 1800;
          const totalSteps = 60;
          const increment = target / totalSteps;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            if (step >= totalSteps) {
              setCurrent(target);
              clearInterval(timer);
            } else {
              setCurrent(isDecimal ? parseFloat((increment * step).toFixed(1)) : Math.floor(increment * step));
            }
          }, duration / totalSteps);
        }
      },
      { threshold: 0.2 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => observer.disconnect();
  }, [target, isDecimal]);

  return (
    <span ref={nodeRef} className="stat-number">
      {isDecimal ? current.toFixed(1) : current.toLocaleString('en-IN')}<span className="stat-suffix">{suffix}</span>
    </span>
  );
};

const StatsCounter = () => {
  return (
    <section className="stats-section" aria-label="Property statistics">
      <div className="stats-container">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="stat-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: idx * 0.15 }}
          >
            <AnimatedNumber 
              target={stat.value} 
              suffix={stat.suffix} 
              isDecimal={stat.isDecimal}
            />
            <span className="stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsCounter;
