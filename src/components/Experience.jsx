import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Sun, Coffee, Camera } from 'lucide-react';
import SEO from './SEO';
import './Experience.css';

const Experience = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="experience-page">
      <SEO 
        title="Luxury Villa in Dehradun | Local Guide & Experience | Van Villa"
        description="Discover Dehradun's hidden gem. Explore our curated 3-day itinerary, local attractions, and see why Van Villa is the best luxury private villa in Dehradun."
      />
      
      {/* Hero Section */}
      <section className="experience-hero">
        <picture>
          <source media="(min-width: 769px)" srcSet="/images/vann-villa-exterior.webp" />
          <img src="/images/vann-villa-outdoor-seating.webp" alt="Van Villa - Dehradun's Hidden Villa" className="global-hero-bg" loading="eager" />
        </picture>
        <motion.div 
          className="experience-hero-overlay"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="massive-title">The Experience</h1>
          <p className="experience-hero-subtitle">Dehradun's Hidden Gem</p>
        </motion.div>
      </section>

      {/* Main Content Area (SEO Word Count) */}
      <div className="experience-container">
        
        <article className="experience-article">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="article-title">Why Choose a Luxury Villa in Dehradun?</h2>
            <p className="article-text">
              When searching for the <strong>best luxury private villa in Dehradun</strong>, travelers often look for a balance between natural serenity and modern comfort. Tucked away from the bustling city center, Van Villa has earned its reputation as <strong>Dehradun's hidden villa</strong>, offering an exclusive sanctuary for families, couples, and groups seeking a premium retreat.
            </p>
            <p className="article-text">
              Unlike traditional hotels where you are confined to a single room, a luxury villa provides expansive living spaces, private outdoor areas, and a personalized experience. At Van Villa, you're not just booking accommodation; you're securing a private, 5,000 sq ft estate surrounded by lush greenery, complete with a private swimming pool, fully equipped kitchen, and beautifully curated indoor spaces.
            </p>
            <p className="article-text">
              As a premier <strong>pet-friendly villa in Uttarakhand</strong>, we understand that a family vacation isn't complete without your furry companions. Our expansive lawns provide the perfect playground for pets, ensuring every member of your family enjoys the getaway. From waking up to the sound of chirping birds to spending evenings under the starlit sky, every moment at Van Villa is designed to be unforgettable.
            </p>
          </motion.div>

          <motion.div
            className="article-image-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <img src="/images/vann-villa-private-pool.webp" alt="Private swimming pool at Van Villa, luxury private villa in Dehradun" loading="lazy" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="article-title">Your Perfect 3-Day Itinerary</h2>
            <p className="article-text">
              Making the most of your stay at <strong>Dehradun's hidden gem</strong> requires the perfect balance of relaxation and exploration. Here is our curated itinerary to help you experience the best of Dehradun while enjoying the luxurious comforts of Van Villa.
            </p>

            <div className="itinerary-days">
              {/* Day 1 */}
              <div className="itinerary-day">
                <div className="day-badge">Day 1</div>
                <h3 className="day-title">Arrival & Unwinding</h3>
                <ul className="day-activities">
                  <li>
                    <Coffee className="activity-icon" />
                    <span><strong>Afternoon Check-in:</strong> Arrive at Van Villa and be greeted by the tranquil surroundings. Enjoy a refreshing welcome drink as you settle into your beautifully appointed rooms.</span>
                  </li>
                  <li>
                    <Sun className="activity-icon" />
                    <span><strong>Leisure by the Pool:</strong> Spend the late afternoon lounging by our private swimming pool. Let the stress of travel melt away as you soak in the serene atmosphere.</span>
                  </li>
                  <li>
                    <Camera className="activity-icon" />
                    <span><strong>Evening Under the Stars:</strong> As the sun sets, relax on the lawns under the starlit sky. Enjoy a quiet dinner or self-cooked meal with your loved ones in your private haven.</span>
                  </li>
                </ul>
              </div>

              {/* Day 2 */}
              <div className="itinerary-day">
                <div className="day-badge">Day 2</div>
                <h3 className="day-title">Exploring the Foothills</h3>
                <ul className="day-activities">
                  <li>
                    <MapPin className="activity-icon" />
                    <span><strong>Morning Excursion to Robber's Cave:</strong> Start your day early with a trip to Gucchupani (Robber's Cave), a fascinating natural river cave formation just a short drive away.</span>
                  </li>
                  <li>
                    <MapPin className="activity-icon" />
                    <span><strong>Visit Tapkeshwar Mahadev Temple:</strong> Experience the spiritual ambiance of this ancient temple situated on the banks of a seasonal river.</span>
                  </li>
                  <li>
                    <Sun className="activity-icon" />
                    <span><strong>Relaxed Evening at the Villa:</strong> Return to the comfort of Van Villa. Enjoy a quiet evening on the terrace, perhaps reading a book or enjoying refreshments from the mini-bar.</span>
                  </li>
                </ul>
              </div>

              {/* Day 3 */}
              <div className="itinerary-day">
                <div className="day-badge">Day 3</div>
                <h3 className="day-title">Nature Trails & Departure</h3>
                <ul className="day-activities">
                  <li>
                    <MapPin className="activity-icon" />
                    <span><strong>Nature Walk in the Foothills:</strong> Take a refreshing morning walk surrounded by greenery and pine forests.</span>
                  </li>
                  <li>
                    <Coffee className="activity-icon" />
                    <span><strong>Hearty Breakfast:</strong> Enjoy a delicious breakfast in our alfresco outdoor area, taking in the morning breeze.</span>
                  </li>
                  <li>
                    <ArrowRight className="activity-icon" />
                    <span><strong>Departure:</strong> Check out with beautiful memories of your stay at the best luxury private villa in Dehradun, feeling rejuvenated and ready to face the world.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="image-grid-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <img src="/images/vann-villa-master-bedroom.webp" alt="Luxurious bedroom at Van Villa" loading="lazy" />
            <img src="/images/vann-villa-outdoor-seating.webp" alt="Outdoor seating at Van Villa Dehradun" loading="lazy" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="article-title">The Benefits of a Pet-Friendly Villa in Uttarakhand</h2>
            <p className="article-text">
              Finding truly pet-friendly accommodations can often be a challenge for travelers. Van Villa stands out as a premier <strong>pet-friendly villa in Uttarakhand</strong> because we don't just tolerate pets; we welcome them. The expansive outdoor areas mean your dogs can run and play freely in a safe, enclosed environment. The crisp mountain air and natural surroundings provide sensory enrichment that city living often lacks.
            </p>
            <p className="article-text">
              When planning your next vacation, don't leave a piece of your heart at a boarding kennel. Experience the joy of watching your pet explore the great outdoors right alongside you. Our commitment to providing a luxurious experience extends to all our guests, both two-legged and four-legged.
            </p>
          </motion.div>

        </article>

      </div>

      {/* Interlocking Navigation for UX Signals (Pages Per Session) */}
      <section className="next-steps-section">
        <motion.div 
          className="next-steps-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="next-steps-title">Continue Your Journey</h2>
          <div className="next-steps-grid">
            <Link to="/about" className="next-step-card">
              <div className="next-step-bg" style={{ '--mobile-bg': 'url("/images/vann-villa-exterior-lawn.webp")', '--desktop-bg': 'url("/images/vann-villa-private-pool.webp")' }}></div>
              <div className="next-step-overlay"></div>
              <div className="next-step-content">
                <span className="next-step-btn">Discover Our Story &rarr;</span>
              </div>
            </Link>
            <Link to="/contact" className="next-step-card">
              <div className="next-step-bg" style={{ '--mobile-bg': 'url("/images/vann-villa-grand-entrance.webp")', '--desktop-bg': 'url("/images/vann-villa-outdoor-seating.webp")' }}></div>
              <div className="next-step-overlay"></div>
              <div className="next-step-content">
                <span className="next-step-btn">Check Availability via WhatsApp &rarr;</span>
              </div>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Experience;
