import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './StatsCounter.css';

const stats = [
  { value: 200, suffix: '+', label: 'Happy Guests' },
  { value: 4.7, suffix: '★', label: 'Google Rating', isDecimal: true },
  { value: 2, suffix: '+', label: 'Acres of Nature' },
  { value: 100, suffix: '%', label: 'Pet Friendly' }
];

// Module-level flag: false on initial page load (hydration from prerendered HTML),
// stays true after first mount. Survives SPA navigation, resets only on full page reload.
let hasHydratedOnce = false;

const AnimatedNumber = ({ target, suffix, isDecimal = false }) => {
  const [current, setCurrent] = useState(target); // matches prerender snapshot value
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!hasHydratedOnce) {
      // First mount = hydrated from prerendered HTML, value is already correct
      hasHydratedOnce = true;
      hasAnimated.current = true;
      return;
    }
    // Genuine later mount (SPA nav away and back) — safe to animate from 0
    hasAnimated.current = false;
    setCurrent(0);
  }, []);

  useEffect(() => {
    if (hasAnimated.current) return;

    const section = document.querySelector('.stats-section');
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Animate from 0 to target
          const duration = 2000;
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
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [target, isDecimal]);

  return (
    <span className="stat-number">
      {isDecimal ? current.toFixed(1) : current}{suffix}
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
