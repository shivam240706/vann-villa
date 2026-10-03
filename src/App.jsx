import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import CustomCursor from './components/CustomCursor';
import ErrorBoundary from './components/ErrorBoundary';
import PageLoader from './components/PageLoader';
import InitialLoader from './components/InitialLoader';
import './App.css';

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// Lazy-load all page components for route-based code splitting
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));
const PrivacyPolicy = React.lazy(() => import('./components/PrivacyPolicy'));
const TermsConditions = React.lazy(() => import('./components/TermsConditions'));
const CancellationRefund = React.lazy(() => import('./components/CancellationRefund'));
const Experience = React.lazy(() => import('./components/Experience'));
const NotFound = React.lazy(() => import('./components/NotFound'));

const DestinationGuide = React.lazy(() => import('./components/seo/DestinationGuide'));
const FamilyVilla = React.lazy(() => import('./components/seo/FamilyVilla'));
const CoupleGetaway = React.lazy(() => import('./components/seo/CoupleGetaway'));
const PetFriendly = React.lazy(() => import('./components/seo/PetFriendly'));
const DelhiWeekend = React.lazy(() => import('./components/seo/DelhiWeekend'));
const BestVillaDehradun = React.lazy(() => import('./components/seo/BestVillaDehradun'));
const PackagesHub = React.lazy(() => import('./components/PackagesHub'));

// Wrapper for animated routes
const AnimatedRoutes = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <Home />
          </motion.div>
        } />
        <Route path="/about" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <About />
          </motion.div>
        } />
        <Route path="/contact" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <Contact />
          </motion.div>
        } />
        
        {/* Legal Pages */}
        <Route path="/privacy-policy" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <PrivacyPolicy />
          </motion.div>
        } />
        <Route path="/terms-conditions" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <TermsConditions />
          </motion.div>
        } />
        <Route path="/cancellation-refund" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <CancellationRefund />
          </motion.div>
        } />

        <Route path="/experience" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <Experience />
          </motion.div>
        } />

        {/* SEO Pages */}
        <Route path="/packages" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <PackagesHub />
          </motion.div>
        } />
        <Route path="/destination-guide" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <DestinationGuide />
          </motion.div>
        } />
        <Route path="/family-villa-dehradun" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <FamilyVilla />
          </motion.div>
        } />
        <Route path="/couple-getaway-dehradun" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <CoupleGetaway />
          </motion.div>
        } />
        <Route path="/pet-friendly-villa-dehradun" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <PetFriendly />
          </motion.div>
        } />
        <Route path="/delhi-to-dehradun-weekend" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <DelhiWeekend />
          </motion.div>
        } />
        <Route path="/best-villa-in-dehradun" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <BestVillaDehradun />
          </motion.div>
        } />
        <Route path="/villa-in-dehradun" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <BestVillaDehradun />
          </motion.div>
        } />

        {/* Catch-all 404 Route */}
        <Route path="*" element={
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.1 }}>
            <NotFound />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  React.useEffect(() => {
    // Signal to Puppeteer that the app has mounted and is ready to snapshot
    window.__PRERENDER_READY__ = true;
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <CustomCursor />
        <Router>
          <InitialLoader />
          <div className="app">
          <Header />
          <Suspense fallback={<PageLoader />}>
            <AnimatedRoutes />
          </Suspense>
          <Footer />
          <FloatingWhatsApp />
          <BackToTop />
        </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
