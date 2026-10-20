import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AnimatedImage from './AnimatedImage';
import './Gallery.css';

const CATEGORIES = ['All', 'Living Spaces', 'The Outdoors', 'Pool & Features'];

const galleryImages = [
  // Pool & Features
  { src: '/images/kudrat-villa-private-pool.webp', alt: 'Private luxury swimming pool at Kudrat Villa Dehradun', category: 'Pool & Features' },
  { src: '/images/kudrat-villa-pool-nature.webp', alt: 'Clear blue swimming pool surrounded by nature in Uttarakhand', category: 'Pool & Features' },
  { src: '/images/kudrat-villa-outdoor-fire-pit.webp', alt: 'Outdoor BBQ kudrat-villa-outdoor-fire-pit for cozy evenings at the private villa', category: 'Pool & Features' },
  { src: '/images/kudrat-villa-open-shower.webp', alt: 'Premium kudrat-villa-open-shower experience at Kudrat Villa', category: 'Pool & Features' },
  
  // Living Spaces
  { src: '/images/kudrat-villa-master-bedroom.webp', alt: 'Luxury master bedroom with panoramic mountain views', category: 'Living Spaces' },
  { src: '/images/kudrat-villa-spacious-bedroom.webp', alt: 'Spacious second bedroom with premium bedding and decor', category: 'Living Spaces' },
  { src: '/images/kudrat-villa-family-suite-bedroom.webp', alt: 'Comfortable family suite at Kudrat Villa', category: 'Living Spaces' },
  { src: '/images/kudrat-villa-master-bedroom-view.webp', alt: 'Well-lit bedroom interiors at the Dehradun villa', category: 'Living Spaces' },
  { src: '/images/kudrat-villa-indoor-lounge.webp', alt: 'Elegant indoor kudrat-villa-indoor-lounge and lounge', category: 'Living Spaces' },
  { src: '/images/kudrat-villa-mini-bar.webp', alt: 'In-house kudrat-villa-mini-bar setup for private parties and relaxation', category: 'Living Spaces' },

  // The Outdoors
  { src: '/images/kudrat-villa-exterior.webp', alt: 'Exterior view of Kudrat Villa, a premium private pool property', category: 'The Outdoors' },
  { src: '/images/kudrat-villa-estate.webp', alt: 'Lush green lawns and expansive estate in Dehradun', category: 'The Outdoors' },
  { src: '/images/kudrat-villa-outdoor-seating.webp', alt: 'Comfortable outdoor seating area surrounded by forest', category: 'The Outdoors' },
  { src: '/images/kudrat-villa-morning-tea-spot.webp', alt: 'Morning tea spot in the private gardens of Kudrat Villa', category: 'The Outdoors' },
  { src: '/images/kudrat-villa-rooftop-view.webp', alt: 'Stunning rooftop view of the Dehradun valley and foothills', category: 'The Outdoors' },
  { src: '/images/kudrat-villa-grand-entrance.webp', alt: 'Grand entrance to the luxury pet-friendly villa', category: 'The Outdoors' }
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const displayedImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const nextImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % displayedImages.length);
  }, [displayedImages.length]);
  
  const prevImage = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + displayedImages.length) % displayedImages.length);
  }, [displayedImages.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  return (
    <section id="gallery" className="gallery-section section-padding" aria-label="Photo Gallery">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <span className="section-subtitle" style={{ marginBottom: '0px', display: 'block', fontWeight: 'bold' }}>Visual Tour</span>
        <h2 className="section-title">The Gallery</h2>
      </motion.div>
      
      <div className="gallery-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '40px', padding: '0 20px' }}>
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => { setActiveCategory(category); setSelectedIndex(null); }}
            style={{
              padding: '10px 24px',
              borderRadius: '30px',
              border: '1px solid var(--accent-gold)',
              background: activeCategory === category ? 'var(--accent-gold)' : 'transparent',
              color: activeCategory === category ? '#fff' : 'var(--text-color)',
              fontWeight: activeCategory === category ? '600' : '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="home-gallery-swiper-container">
        <Swiper
          key={activeCategory}
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
          {displayedImages.map((img, index) => (
            <SwiperSlide key={index} className="gallery-slide">
              {({ isActive }) => (
                <div 
                  className="gallery-slide-inner" 
                  onClick={() => { if (isActive) openLightbox(index); }}
                >
                  <AnimatedImage src={img.src} alt={img.alt} loading="lazy" decoding="async" className="gallery-slide-media" />
                  <div className="gallery-overlay">
                    <span className="expand-icon"><Maximize2 size={18} />Click to expand</span>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
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
            <button className="lightbox-close" aria-label="Close lightbox" onClick={closeLightbox}><X size={32} /></button>
            <button className="lightbox-nav prev" aria-label="Previous image" onClick={prevImage}><ChevronLeft size={48} /></button>
            <button className="lightbox-nav next" aria-label="Next image" onClick={nextImage}><ChevronRight size={48} /></button>
            
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={displayedImages[selectedIndex].src} alt={displayedImages[selectedIndex].alt} loading="lazy" decoding="async" style={{ width: '100%', height: 'auto', maxHeight: '90vh', objectFit: 'contain' }} />
              <p className="lightbox-caption">{displayedImages[selectedIndex].alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
