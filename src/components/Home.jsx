import React from 'react';
import Hero from './Hero';
import ReservationBar from './ReservationBar';
import HighlightsBar from './HighlightsBar';
import Gallery from './Gallery';
import ResidenceBlueprint from './ResidenceBlueprint';
import Amenities from './Amenities';
import Packages from './Packages';
import PriceBanner from './PriceBanner';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import LeadCapture from './LeadCapture';
import SEO from './SEO';

const Home = () => {
  return (
    <main className="home-main-wrapper">
      <SEO 
        title="Vann Villa Dehradun | Luxury 2BHK Private Pool & 5,000 Sq Ft Lawn Estate"
        description="Vann Villa is a private 2BHK luxury pool villa set across 5,000 sq ft of private lawn in Dehradun foothills. 100% unshared privacy for families, couples, and pets."
      />
      <Hero />
      <ReservationBar />
      <HighlightsBar />
      <Gallery />
      <ResidenceBlueprint />
      <Amenities />
      <Packages />
      <PriceBanner />
      <Testimonials />
      <FAQ />
      <LeadCapture />
    </main>
  );
};

export default Home;
