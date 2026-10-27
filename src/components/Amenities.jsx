import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Mousewheel, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Amenities.css';
import './Gallery.css';

const Amenities = () => {
  const [lightboxState, setLightboxState] = useState({ isOpen: false, images: [], index: 0 });

  const features = [
    { name: 'Swimming Pool', subtitle: 'Relax & Unwind', img: '/images/vann-villa-private-pool.webp', alt: 'Crystal-clear private swimming pool at Van Villa, Dehradun' },
    { name: <><span style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '0.93em', fontWeight: 500, marginRight: '4px' }}>2</span>BHK Property</>, subtitle: 'Spacious Living', img: '/images/vann-villa-exterior.webp', alt: 'Full exterior view of the 2BHK private villa and landscaped gardens' },
    { name: "AC's", subtitle: 'Cool Comfort', img: '/images/vann-villa-spacious-bedroom.webp', alt: 'Air-conditioned bedroom with premium bedding at Van Villa' },
    { name: 'Kitchen', subtitle: 'Fully Equipped', img: '/images/vann-villa-kitchen.webp', alt: 'Fully equipped self-catering kitchen with modern appliances' },
    { name: 'Bedrooms', subtitle: 'Cozy Stays', img: ['/images/vann-villa-master-bedroom.webp', '/images/vann-villa-master-bedroom-view.webp'], alt: 'Spacious bedrooms with mountain views and luxury furnishings' },
    { name: 'Spacious Area', subtitle: 'Outdoor Bliss', img: '/images/vann-villa-morning-tea-spot.webp', alt: 'Shaded outdoor seating area surrounded by greenery in Dehradun' },
    { name: 'Mini Bar', subtitle: 'Refreshments', img: '/images/vann-villa-mini-bar.webp', alt: 'In-house mini bar with seating for private gatherings' },
    { name: 'Private Lawns', subtitle: '5,000 Sq Ft', img: '/images/vann-villa-lawn-view.webp', alt: 'Expansive 5,000 sq ft private green lawn at Van Villa' },
    { name: 'Mountain Terrace', subtitle: 'Scenic Views', img: '/images/vann-villa-rooftop-view.webp', alt: 'Rooftop terrace with serene views at Van Villa' }
  ];

  const allMedia = features.flatMap(f => Array.isArray(f.img) ? f.img : [f.img]);

  const openLightbox = (imgSrc) => {
    const index = allMedia.indexOf(imgSrc);
    if (index !== -1) {
      setLightboxState({ isOpen: true, images: allMedia, index });
    }
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
    <section id="amenities" className="amenities-section section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="amenities-header text-center"
      >
        <h4 className="section-subtitle" style={{ justifyContent: 'center', marginBottom: '25px' }}>Discover</h4>
        <h2 className="section-title">Exclusive Amenities</h2>
      </motion.div>

      <div className="amenities-swiper-container">
        <Swiper
          effect={'coverflow'}
          speed={600}
          freeMode={true}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          slideToClickedSlide={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
          }}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation, Mousewheel, FreeMode]}
          className="amenities-coverflow"
        >
          {features.map((feature, idx) => {
            const firstImg = Array.isArray(feature.img) ? feature.img[0] : feature.img;
            const isVideo = firstImg.endsWith('.mp4');
            return (
              <SwiperSlide key={idx} className="amenity-slide">
                {({ isActive }) => (
                  <div 
                    className="amenity-slide-inner" 
                    onClick={() => { if (isActive) openLightbox(firstImg); }}
                    style={{ cursor: isActive ? 'pointer' : 'default' }}
                  >
                    {isVideo ? (
                      <video 
                        src={isActive ? firstImg : undefined} 
                        poster="/images/vann-villa-open-shower.webp"
                        autoPlay={isActive} 
                        loop 
                        muted 
                        playsInline 
                        preload="none" 
                        className="slide-media" 
                      />
                    ) : (
                      <img src={firstImg} alt={feature.alt || `Van Villa - ${typeof feature.name === 'string' ? feature.name : 'Premium Amenity'}`} loading="lazy" decoding="async" className="slide-media" />
                    )}
                    <div className="slide-overlay"></div>
                    <div className="slide-content">
                      <div className="slide-text">
                        <h3 className="slide-title">{feature.name}</h3>
                        <p className="slide-subtitle">{feature.subtitle}</p>
                      </div>
                      <div className="slide-action">
                        <button className="slide-btn" aria-label={`Expand ${typeof feature.name === 'string' ? feature.name : 'amenity'} image`} onClick={(e) => { e.stopPropagation(); openLightbox(firstImg); }}>
                          <Maximize2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
          
          {/* Default Swiper navigation and pagination will be generated */}
        </Swiper>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxState.isOpen && (
          <motion.div 
            className="lightbox-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Amenity image lightbox"
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
              onClick={(e) => e.stopPropagation()}
            >
              {lightboxState.images[lightboxState.index].endsWith('.mp4') ? (
                <video 
                  src={lightboxState.images[lightboxState.index]} 
                  autoPlay 
                  loop 
                  controls 
                  style={{ maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain', boxShadow: 'var(--shadow-xl)' }}
                />
              ) : (
                <img src={lightboxState.images[lightboxState.index]} alt={`Van Villa amenity — image ${lightboxState.index + 1} of ${lightboxState.images.length}`} />
              )}
              <div className="lightbox-counter">
                {lightboxState.index + 1} / {lightboxState.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Amenities;
