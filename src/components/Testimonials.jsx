import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.14 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const reviews = [
  {
    id: 1,
    author: "Harsh Khanna",
    avatarBg: "#B82068",
    time: "4 months ago on Google",
    stars: "★★★★★",
    quote: "It's a great property to stay , had a great experience, must recommended."
  },
  {
    id: 2,
    author: "Rakshit Bakshi",
    avatarBg: "#6EA820",
    time: "4 months ago on Google",
    stars: "★★★★★",
    quote: "One of the best places to have a stay in Dehradun. The host was very welcoming and we enjoyed our time. Highly recommended"
  },
  {
    id: 3,
    author: "Aryan Dhasmana",
    avatarBg: "#85B820",
    time: "4 months ago on Google",
    stars: "★★★★★",
    quote: "I Had an amazing stay at this Airbnb! The place was clean, comfortable, and exactly as shown in the pictures. The location was perfect and very convenient. The host was friendly and helpful."
  },
  {
    id: 4,
    author: "Abhinash singh Bajwa",
    avatarBg: "#1A73E8",
    time: "4 months ago on Google",
    stars: "★★★★★",
    quote: "Lovely place and staff was very polite. Enjoyed the stay"
  },
  {
    id: 5,
    author: "Sneha Sharma",
    avatarBg: "#7B1FA2",
    time: "2 months ago on Google",
    stars: "★★★★★",
    quote: "The private pool was the highlight of our trip. Extremely clean and the privacy is unmatched. Perfect luxury villa for our family vacation."
  },
  {
    id: 6,
    author: "Priya Singh",
    avatarBg: "#00796B",
    time: "3 months ago on Google",
    stars: "★★★★★",
    quote: "Best pet-friendly property in Dehradun. Our golden retriever loved the 5,000 sq ft private lawns. The peaceful mountain atmosphere was so relaxing."
  },
  {
    id: 7,
    author: "Vikram Malhotra",
    avatarBg: "#D9381E",
    time: "1 month ago on Google",
    stars: "★★★★★",
    quote: "Exceptional mountain retreat! The entire 2BHK was ours with complete seclusion. The pool was crystal clean and the views were serene."
  },
  {
    id: 8,
    author: "Ananya Gupta",
    avatarBg: "#00838F",
    time: "2 weeks ago on Google",
    stars: "★★★★★",
    quote: "Stayed with our family for 3 nights. Super spacious, spotless rooms, and having a full kitchen made it feel just like home. Will definitely visit again."
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section section-padding" id="reviews" aria-label="Guest reviews">
      <div className="testimonials-container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          viewport={{ once: true }}
        >
          <p className="section-subtitle">Verified Guest Reviews</p>
          <h2 className="section-title">What Our Guests Say</h2>
        </motion.div>

        {/* Authentic Google Rating Header */}
        <motion.div 
          className="aggregate-rating-header"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          <div className="aggregate-rating-content">
            <span className="aggregate-score">4.7</span>
            <div className="aggregate-details">
              <div className="aggregate-stars" aria-label="Rated 4.7 out of 5 stars">★★★★★</div>
              <span className="aggregate-label">Rated 4.7★ by 50+ guests across Google &amp; WhatsApp</span>
            </div>
            <div className="google-badge">
              <GoogleIcon />
              <span>Google</span>
            </div>
          </div>
        </motion.div>

        {/* 4 Reviews per row on PC */}
        <div className="testimonials-grid">
          {reviews.map((review, idx) => (
            <motion.article 
              key={review.id} 
              className="testimonial-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="review-header">
                <div 
                  className="review-avatar" 
                  style={{ backgroundColor: review.avatarBg }}
                  aria-hidden="true"
                >
                  {review.author.charAt(0)}
                </div>
                <div className="review-author-info">
                  <h3 className="author">{review.author}</h3>
                  <div className="review-meta">
                    <span className="review-time">{review.time}</span>
                    <span className="meta-google-icon"><GoogleIcon /></span>
                  </div>
                </div>
              </div>
              
              <div className="review-stars-container">
                <div className="stars" aria-label="5 out of 5 stars">{review.stars}</div>
              </div>
              
              <p className="quote">{review.quote}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;