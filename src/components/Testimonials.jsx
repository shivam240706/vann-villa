import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      quote: "A genuinely peaceful property. The private pool and fenced lawn gave our family absolute privacy. One of the rare places in Dehradun that feels truly secluded.",
      author: "Harsh Khanna",
      stayContext: "Verified Guest · Private Estate Stay",
      rating: "5.0 / 5.0"
    },
    {
      id: 2,
      quote: "One of the best private pool stays in Dehradun. The host was exceptionally welcoming and attentive. The mountain air and quiet evenings made it memorable.",
      author: "Rakshit Bakshi",
      stayContext: "Verified Guest · Weekend Getaway",
      rating: "5.0 / 5.0"
    },
    {
      id: 3,
      quote: "The villa was impeccably clean, comfortable, and exactly as represented. Having the entire property with no other guests gave us the peace of mind we needed.",
      author: "Aryan Dhasmana",
      stayContext: "Verified Guest · Multi-Day Retreat",
      rating: "5.0 / 5.0"
    },
    {
      id: 4,
      quote: "Our golden retriever loved the 5,000 sq ft private lawns. Truly 100% pet-friendly without any awkward rules. We cooked our own meals in the kitchen and relaxed poolside.",
      author: "Priya Singh",
      stayContext: "Verified Guest · Pet-Friendly Stay",
      rating: "5.0 / 5.0"
    }
  ];

  return (
    <section className="testimonials-section section-padding" aria-label="Guest reflections and reviews">
      <div className="testimonials-container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">Guest Register</p>
          <h2 className="section-title">Reflections from the Estate</h2>
          <div className="guestbook-aggregate">
            <span className="guestbook-score">4.7 / 5.0</span>
            <span className="guestbook-divider" aria-hidden="true">·</span>
            <span className="guestbook-count">Based on 50+ verified guest stays in Dehradun</span>
          </div>
        </motion.div>

        <div className="guest-reflections-grid">
          {reviews.map((review, idx) => (
            <motion.article 
              key={review.id} 
              className="guest-reflection-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="reflection-card-header">
                <span className="reflection-score">{review.rating}</span>
                <span className="reflection-date">{review.stayContext}</span>
              </div>
              <blockquote className="reflection-quote">
                "{review.quote}"
              </blockquote>
              <div className="reflection-author">
                <cite className="reflection-name">{review.author}</cite>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
