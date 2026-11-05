import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SEO from './SEO';
import AnimatedImage from './AnimatedImage';
import './About.css';
import './Gallery.css';

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const PrevIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const NextIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const facilities = [
  { num: "01", title: "High-Speed Wi-Fi", desc: "Stable high-speed connectivity across the villa grounds." },
  { num: "02", title: "Equipped Kitchen", desc: "Full self-catering setup with modern cooking appliances." },
  { num: "03", title: "Estate Concierge", desc: "Attentive personalized hospitality throughout your stay." },
  { num: "04", title: "Pet-Friendly Grounds", desc: "Safe, enclosed green spaces welcoming your companions." },
  { num: "05", title: "Private Pool", desc: "Secluded mountain-facing pool exclusively for your group." },
  { num: "06", title: "5,000 Sq Ft Lawns", desc: "Sprawling private gardens for morning strolls and gatherings." }
];

const distances = [
  { name: "UPES University", dist: "500 m", note: "Immediate vicinity" },
  { name: "Tapkeshwar Mandir", dist: "15 km", note: "Historic cave shrine" },
  { name: "Badhraj Temple", dist: "15 km", note: "Scenic ridge trail" },
  { name: "Clock Tower", dist: "17 km", note: "Dehradun city center" },
  { name: "ISBT Bus Stand", dist: "18 km", note: "Interstate transit" },
  { name: "Mussoorie", dist: "36 km", note: "Queen of the Hills" }
];

const GalleryRow = ({ title, images, onImageClick }) => {
  return (
    <div className="gallery-category" style={{ marginBottom: '40px' }}>
      {title && <h3 className="carousel-title text-center" style={{ marginBottom: '20px', fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--text-dark)' }}>{title}</h3>}
      <div className="about-gallery-swiper-container">
        <Swiper
          effect={'coverflow'}
          speed={800}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="gallery-coverflow"
        >
          {images.map((imgObj, i) => (
            <SwiperSlide key={i} className="gallery-slide">
              {({ isActive }) => (
                <div 
                  className="gallery-slide-inner" 
                  onClick={() => { if (isActive) onImageClick(images, i); }}
                >
                  <AnimatedImage src={imgObj.src} alt={imgObj.alt} loading="lazy" decoding="async" className="gallery-slide-media" />
                  <div className="gallery-overlay">
                    <span className="expand-icon">View Fullscreen</span>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};


const About = () => {
  const [lightboxState, setLightboxState] = useState({ isOpen: false, images: [], index: 0 });

  const openLightbox = (images, index) => {
    setLightboxState({ isOpen: true, images, index });
  };
  const closeLightbox = () => setLightboxState(prev => ({ ...prev, isOpen: false }));
  
  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxState(prev => ({ ...prev, index: (prev.index + 1) % prev.images.length }));
  };
  
  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxState(prev => ({ ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length }));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxState.isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxState.isOpen, lightboxState.images.length]);

  return (
    <div className="about-page">
      <SEO 
        title="Dehradun's Hidden Gem | About Vann Villa"
        description="Learn more about Vann Villa, Dehradun's hidden gem. Discover our luxury facilities, pet-friendly environment, and serene natural surroundings."
      />
      {/* Hero Section */}
      <section className="about-hero" aria-label="About Vann Villa">
        <motion.div 
          className="about-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="massive-title">Dehradun's Hidden Gem</h1>
          <p className="about-hero-subtitle">The Story of Vann Villa</p>
          <p className="about-hero-text">
            Escape the noise and commotion of the city and lose yourself in the peaceful surroundings of one of the finest villas in Dehradun. Vann Villa is a haven of tranquility, nestled in the lap of nature, where you can unwind and recharge your senses. Recognized as Dehradun's hidden villa, our property is a sanctuary for those seeking a premium retreat.
          </p>
          <p className="about-hero-text" style={{ marginTop: '15px' }}>
            Whether you are searching for premium properties in Dehradun for family stays or a pet-friendly villa in Uttarakhand, our state-of-the-art facilities and amenities cater to your every need, ensuring a comfortable and indulgent luxury experience. We built this private villa with a simple vision: to offer a space where guests can reconnect with nature without compromising on modern luxury.
          </p>
        </motion.div>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section section-padding" aria-label="Facilities and Services">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          Facilities & Services
        </motion.h2>
        
        <div className="facilities-grid">
          {facilities.map((fac, idx) => (
            <motion.div 
              key={idx} 
              className="facility-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.08 }}
            >
              <span className="facility-index">{fac.num}</span>
              <h3>{fac.title}</h3>
              <p>{fac.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="about-gallery-section section-padding" aria-label="Photo Gallery">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Gallery
        </motion.h2>
        <GalleryRow 
          title="Vann Villa" 
          images={[
            { src: '/images/vann-villa-exterior.webp', alt: 'Vann Villa front exterior view' },
            { src: '/images/vann-villa-lawn-view.webp', alt: 'Expansive lush green lawn' },
            { src: '/images/vann-villa-estate.webp', alt: 'Beautiful estate view' },
            { src: '/images/vann-villa-exterior-lawn.webp', alt: 'Exterior lawn and garden' },
            { src: '/images/vann-villa-front-view.webp', alt: 'Front facade of the luxury villa' }
          ]}
          onImageClick={openLightbox}
        />
        <GalleryRow 
          title="Outdoors" 
          images={[
            { src: '/images/vann-villa-grand-entrance.webp', alt: 'Grand villa entrance' },
            { src: '/images/vann-villa-outdoor-seating.webp', alt: 'Outdoor seating area' },
            { src: '/images/vann-villa-morning-tea-spot.webp', alt: 'Morning tea spot in the garden' },
            { src: '/images/vann-villa-rooftop-view.webp', alt: 'Scenic rooftop view' },
            { src: '/images/vann-villa-private-pool.webp', alt: 'Private luxury pool' },
            { src: '/images/vann-villa-pool-nature.webp', alt: 'Pool surrounded by nature' }
          ]}
          onImageClick={openLightbox}
        />
        <GalleryRow 
          title="Indoors" 
          images={[
            { src: '/images/vann-villa-indoor-lounge.webp', alt: 'Cozy indoor lounge area' },
            { src: '/images/vann-villa-mini-bar.webp', alt: 'Private mini bar setup' },
            { src: '/images/vann-villa-master-bedroom.webp', alt: 'Luxury master bedroom' },
            { src: '/images/vann-villa-spacious-bedroom.webp', alt: 'Spacious guest bedroom' },
            { src: '/images/vann-villa-family-suite-bedroom.webp', alt: 'Family suite bedroom' },
            { src: '/images/vann-villa-master-bedroom-view.webp', alt: 'Master bedroom with a view' }
          ]}
          onImageClick={openLightbox}
        />
      </section>

      {/* FAQ & Map Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--primary-bg)' }} aria-label="FAQs and Location">
        <motion.h2 
          className="faq-main-title text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="faq-map-section three-col">
          <motion.div 
            className="faq-container"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="faq-grid">
              <div className="faq-item">
                <h4>1. Where is Vann Villa located?</h4>
                <p><strong>Vann Villa is located in Dehradun, Uttarakhand (PIN: 248007).</strong> It is roughly 15 km from Dehradun city centre. Exact location and Google Maps directions are shared upon booking confirmation.</p>
              </div>
              <div className="faq-item">
                <h4>2. Is Vann Villa pet-friendly?</h4>
                <p><strong>Yes, 100% pet-friendly with no hidden charges.</strong> Your pets are welcome to roam freely on our 5,000 sq ft of private, fenced lawns. We ask that pets are kept supervised near the pool area for their safety.</p>
              </div>
              <div className="faq-item">
                <h4>3. Is food provided? Can we order from Zomato or Swiggy?</h4>
                <p><strong>Guests have full access to our fully equipped kitchen to prepare meals.</strong> Food delivery from Swiggy and Zomato is also available in the area. You can bring your own groceries for a personalized cooking experience.</p>
              </div>
              <div className="faq-item">
                <h4>4. How deep is the private swimming pool?</h4>
                <p><strong>The pool is approximately 4 feet deep throughout</strong>, making it safe and enjoyable for both adults and children who can swim. It is cleaned and maintained before every check-in. Please note there is no lifeguard on duty; adult supervision is required at all times.</p>
              </div>
              <div className="faq-item">
                <h4>5. What are the check-in and check-out times?</h4>
                <p><strong>Standard check-in is 2:00 PM and check-out is 11:00 AM.</strong> Early check-in or late check-out may be arranged based on availability: please let us know in advance via WhatsApp. Late-night arrivals are welcome as long as we are notified beforehand.</p>
              </div>
              <div className="faq-item">
                <h4>6. Is parking available? Is it safe?</h4>
                <p><strong>Yes, secure on-site parking for up to 3 vehicles is included at no extra cost.</strong> The parking area is within the gated estate and monitored 24/7. It can comfortably accommodate SUVs and sedans.</p>
              </div>
              <div className="faq-item">
                <h4>7. How far is Vann Villa from Delhi?</h4>
                <p><strong>The villa is approximately 270 to 300 km from Delhi</strong>, roughly a 5-6 hour drive via NH334 through Roorkee and Haridwar. It is an ideal destination for a Delhi weekend getaway, especially Thursday-to-Sunday bookings.</p>
              </div>
              <div className="faq-item">
                <h4>8. What amenities are included in every booking?</h4>
                <p><strong>Every booking includes the entire private pool, fully equipped kitchen, high-speed Wi-Fi, secure parking, and all bedrooms.</strong> The villa is privately yours for the duration of your stay, with no shared spaces with other guests.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="distances-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="distances-list">
              {distances.map((item, idx) => (
                <div key={idx} className="distance-item">
                  <div className="distance-marker">
                    <span>{idx + 1}</span>
                  </div>
                  <div className="distance-text">
                    <h5>{item.name}</h5>
                    <span>{item.dist} · {item.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="map-container"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="map-placeholder" style={{ padding: 0, overflow: 'hidden', borderRadius: '2px', border: '1px solid var(--accent-gold)' }}>
              <iframe 
                src="https://maps.google.com/maps?q=30.3765003,77.9633871&z=15&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Vann Villa Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interlocking Navigation */}
      <section className="next-steps-section" style={{ padding: '60px 20px', backgroundColor: 'var(--forest-green)', color: 'var(--text-light)' }}>
        <div className="next-steps-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="next-steps-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', textAlign: 'center', marginBottom: '30px', color: 'var(--accent-gold)' }}>Continue Your Journey</h2>
          <div className="next-steps-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <Link to="/experience" className="next-step-card" style={{ height: '350px', borderRadius: '2px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'flex-end', textDecoration: 'none', color: 'var(--text-light)', border: '1px solid rgba(232, 210, 181, 0.3)' }}>
              <div className="next-step-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', '--mobile-bg': 'url("/images/vann-villa-outdoor-seating.webp")', '--desktop-bg': 'url("/images/vann-villa-exterior.webp")', zIndex: 1 }}></div>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))', zIndex: 2 }}></div>
              <div style={{ position: 'relative', zIndex: 3, padding: '20px', width: '100%' }}>
                <span className="next-step-btn" style={{ color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Read our Local Guide &rarr;</span>
              </div>
            </Link>
            <Link to="/contact" className="next-step-card" style={{ height: '350px', borderRadius: '2px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'flex-end', textDecoration: 'none', color: 'var(--text-light)', border: '1px solid rgba(232, 210, 181, 0.3)' }}>
              <div className="next-step-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', '--mobile-bg': 'url("/images/vann-villa-master-bedroom.webp")', '--desktop-bg': 'url("/images/vann-villa-rooftop-view.webp")', zIndex: 1 }}></div>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))', zIndex: 2 }}></div>
              <div style={{ position: 'relative', zIndex: 3, padding: '20px', width: '100%' }}>
                <span className="next-step-btn" style={{ color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Check Availability via WhatsApp &rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxState.isOpen && (
          <motion.div 
            className="lightbox-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" aria-label="Close lightbox" onClick={closeLightbox}><CloseIcon /></button>
            <button className="lightbox-nav prev" aria-label="Previous image" onClick={prevImage}><PrevIcon /></button>
            <button className="lightbox-nav next" aria-label="Next image" onClick={nextImage}><NextIcon /></button>
            
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxState.images[lightboxState.index]?.src || lightboxState.images[lightboxState.index]} alt={lightboxState.images[lightboxState.index]?.alt || `Gallery Image ${lightboxState.index + 1}`} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default About;
