import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import HighlightsBar from './HighlightsBar';
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
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <main>
      <SEO 
        title="Best Villa in Dehradun | Kudrat Villa — Luxury Private Pool & Hidden Gem Stay"
        description="Looking for the best villa in Dehradun? Kudrat Villa is a 5-star rated luxury 2BHK private pool homestay & hidden gem set across 2+ acres of private lawns."
      />
      <Hero />
      <HighlightsBar />
      <Packages />
      <ParallaxDivider imageSrc="/images/kudrat-villa-rooftop-view.webp" height="350px" />
      <Amenities />
      <StatsCounter />
      <Gallery />
      <ParallaxDivider imageSrc="/images/kudrat-villa-pool-nature.webp" height="350px" />
      <Testimonials />
      <FAQ />
      <LeadCapture />
      <PriceBanner />
      
      {/* Interlocking Navigation */}
      <section className="next-steps-section" style={{ padding: '60px 20px', backgroundColor: 'var(--primary-bg)' }}>
        <div className="next-steps-container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div className="next-steps-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <Link to="/experience" className="next-step-card" style={{ height: '200px', borderRadius: '12px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'flex-end', textDecoration: 'none', color: 'var(--text-light)', boxShadow: 'var(--shadow-md)' }}>
              <div className="next-step-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', '--mobile-bg': 'url("/images/kudrat-villa-exterior-lawn.webp")', '--desktop-bg': 'url("/images/kudrat-villa-private-pool.webp")', zIndex: 1 }}></div>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))', zIndex: 2 }}></div>
              <div style={{ position: 'relative', zIndex: 3, padding: '20px', width: '100%' }}>
                <span className="next-step-btn" style={{ color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>Local Guide & Itinerary <ArrowRight size={16}/></span>
              </div>
            </Link>
            <a href="#gallery" className="next-step-card" style={{ height: '200px', borderRadius: '12px', overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'flex-end', textDecoration: 'none', color: 'var(--text-light)', boxShadow: 'var(--shadow-md)' }}>
              <div className="next-step-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', '--mobile-bg': 'url("/images/kudrat-villa-indoor-lounge.webp")', '--desktop-bg': 'url("/images/kudrat-villa-master-bedroom-view.webp")', zIndex: 1 }}></div>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))', zIndex: 2 }}></div>
              <div style={{ position: 'relative', zIndex: 3, padding: '20px', width: '100%' }}>
                <span className="next-step-btn" style={{ color: 'var(--accent-gold)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>Visual Tour <ArrowRight size={16}/></span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
