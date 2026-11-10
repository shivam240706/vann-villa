import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import ReservationBar from './ReservationBar';
import HighlightsBar from './HighlightsBar';
import LivingVision from './LivingVision';
import ResidenceBlueprint from './ResidenceBlueprint';
import EstateStatusCalculator from './EstateStatusCalculator';
import EstateDayTimeline from './EstateDayTimeline';
import Packages from './Packages';
import Amenities from './Amenities';
import StatsCounter from './StatsCounter';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import LeadCapture from './LeadCapture';
import PriceBanner from './PriceBanner';
import SEO from './SEO';
import ParallaxDivider from './ParallaxDivider';

const Home = () => {
  return (
    <main>
      <SEO 
        title="Best Villa in Dehradun | Vann Villa: Luxury Private Pool & Hidden Gem Stay"
        description="Looking for the best villa in Dehradun? Vann Villa is a 5-star rated luxury 2BHK private pool homestay & hidden gem set across 5,000 sq ft of private lawns."
      />
      <Hero />
      <ReservationBar />
      <HighlightsBar />
      <LivingVision />
      <ResidenceBlueprint />
      <EstateStatusCalculator />
      <EstateDayTimeline />
      <Packages />
      <ParallaxDivider imageSrc="/images/vann-villa-rooftop-view.webp" height="350px" />
      <Amenities />
      <StatsCounter />
      <Gallery />
      <ParallaxDivider imageSrc="/images/vann-villa-pool-nature.webp" height="350px" />
      <Testimonials />
      <FAQ />
      <LeadCapture />
      <PriceBanner />
      
      {/* Interlocking Navigation */}
      <section className="next-steps-section" style={{ padding: '60px 20px', backgroundColor: 'var(--primary-bg)' }}>
        <div className="next-steps-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="next-steps-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <Link to="/experience" className="next-step-card" style={{ height: '200px', borderRadius: '2px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'flex-end', textDecoration: 'none', color: 'var(--text-light)', border: '1px solid rgba(165, 167, 155, 0.4)' }}>
              <div className="next-step-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', '--mobile-bg': 'url("/images/vann-villa-exterior-lawn.webp")', '--desktop-bg': 'url("/images/vann-villa-private-pool.webp")', zIndex: 1 }}></div>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))', zIndex: 2 }}></div>
              <div style={{ position: 'relative', zIndex: 3, padding: '20px', width: '100%' }}>
                <span className="next-step-btn" style={{ color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Local Guide & Itinerary &rarr;</span>
              </div>
            </Link>
            <a href="#gallery" className="next-step-card" style={{ height: '200px', borderRadius: '2px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'flex-end', textDecoration: 'none', color: 'var(--text-light)', border: '1px solid rgba(165, 167, 155, 0.4)' }}>
              <div className="next-step-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', '--mobile-bg': 'url("/images/vann-villa-indoor-lounge.webp")', '--desktop-bg': 'url("/images/vann-villa-master-bedroom-view.webp")', zIndex: 1 }}></div>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))', zIndex: 2 }}></div>
              <div style={{ position: 'relative', zIndex: 3, padding: '20px', width: '100%' }}>
                <span className="next-step-btn" style={{ color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Visual Tour &rarr;</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
