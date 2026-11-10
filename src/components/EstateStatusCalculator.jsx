import React, { useState } from 'react';
import './EstateStatusCalculator.css';

const ThermometerIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
  </svg>
);

const WindIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
  </svg>
);

const DropletIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
  </svg>
);

const UserCheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="8.5" cy="7" r="4"></circle>
    <polyline points="17 11 19 13 23 9"></polyline>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const EstateStatusCalculator = () => {
  const [nights, setNights] = useState(2);
  const [guestTier, setGuestTier] = useState('2-4'); // '2-4' or '5-6' or '7-8'

  // Pricing structure:
  // Base 2-4 guests: ₹4,499/night
  // 5-6 guests: ₹6,499/night
  // 7-8 guests (full capacity): ₹7,999/night
  const ratePerNight = guestTier === '2-4' ? 4499 : guestTier === '5-6' ? 6499 : 7999;
  const directTotal = ratePerNight * nights;
  // Typical OTA (Airbnb/MMT) 18% commission fee
  const otaMarkup = Math.round(directTotal * 0.18);
  const otaTotal = directTotal + otaMarkup;

  const handleBookNow = () => {
    const message = `Hello Vann Villa! I used the transparent stay calculator on your website:%0A%0A` +
      `Duration: ${nights} Night(s)%0A` +
      `Group Size: ${guestTier === '2-4' ? '2 to 4 Guests' : guestTier === '5-6' ? '5 to 6 Guests' : '7 to 8 Guests'}%0A` +
      `Estimated Direct Rate: ₹${directTotal.toLocaleString('en-IN')}%0A` +
      `Please confirm availability for my preferred dates.`;

    window.open(`https://wa.me/919411770969?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="estate-status-calculator-section" id="status-calculator" aria-label="Live Estate Status & Direct Stay Estimator">
      <div className="status-calculator-container">
        {/* Live Foothills Operations Bar */}
        <div className="live-status-bar">
          <div className="status-bar-header">
            <span className="live-pulse-dot" aria-hidden="true" />
            <span className="live-status-title">Live From Dehradun Foothills</span>
          </div>

          <div className="status-indicators-grid">
            <div className="status-indicator-item">
              <span className="status-icon"><ThermometerIcon /></span>
              <div className="status-meta">
                <span className="meta-label">Foothills Climate</span>
                <strong className="meta-val">22°C Crisp / Clear Skies</strong>
              </div>
            </div>

            <div className="status-indicator-item">
              <span className="status-icon"><WindIcon /></span>
              <div className="status-meta">
                <span className="meta-label">Mountain Air Quality</span>
                <strong className="meta-val">AQI 26 (Pristine Air)</strong>
              </div>
            </div>

            <div className="status-indicator-item">
              <span className="status-icon"><DropletIcon /></span>
              <div className="status-meta">
                <span className="meta-label">Private Plunge Pool</span>
                <strong className="meta-val">Clean & Filtered Daily</strong>
              </div>
            </div>

            <div className="status-indicator-item">
              <span className="status-icon"><UserCheckIcon /></span>
              <div className="status-meta">
                <span className="meta-label">On-Site Host Care</span>
                <strong className="meta-val">Dedicated Staff on Call</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Stay Calculator Card */}
        <div className="calculator-wrapper">
          <div className="calculator-intro">
            <span className="calculator-eyebrow">Direct Booking Transparency</span>
            <h2 className="calculator-heading">Transparent Direct Stay Estimator</h2>
            <p className="calculator-sub">
              Book directly with the property owners. Avoid excessive 18% to 22% OTA commissions
              charged by third-party booking platforms, while securing direct host privileges.
            </p>

            <div className="direct-perks-list">
              <div className="perk-item">
                <span className="perk-check"><CheckIcon /></span>
                <span>Zero OTA Middleman Service Fees</span>
              </div>
              <div className="perk-item">
                <span className="perk-check"><CheckIcon /></span>
                <span>Complimentary Evening Bonfire Wood Setup</span>
              </div>
              <div className="perk-item">
                <span className="perk-check"><CheckIcon /></span>
                <span>Priority Early Check-In (Subject to Schedule)</span>
              </div>
              <div className="perk-item">
                <span className="perk-check"><CheckIcon /></span>
                <span>Direct 1-on-1 Host Coordination via WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Calculator Control Panel */}
          <div className="calculator-panel">
            <div className="calc-group">
              <label className="calc-group-label">Select Number of Nights:</label>
              <div className="calc-button-row">
                {[1, 2, 3, 4].map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`calc-toggle-btn ${nights === n ? 'active' : ''}`}
                    onClick={() => setNights(n)}
                  >
                    {n} {n === 1 ? 'Night' : 'Nights'}
                    {n === 2 && <span className="recommended-badge">Popular</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="calc-group">
              <label className="calc-group-label">Select Group Size:</label>
              <div className="calc-button-row">
                <button
                  type="button"
                  className={`calc-toggle-btn ${guestTier === '2-4' ? 'active' : ''}`}
                  onClick={() => setGuestTier('2-4')}
                >
                  2 to 4 Guests
                </button>
                <button
                  type="button"
                  className={`calc-toggle-btn ${guestTier === '5-6' ? 'active' : ''}`}
                  onClick={() => setGuestTier('5-6')}
                >
                  5 to 6 Guests
                </button>
                <button
                  type="button"
                  className={`calc-toggle-btn ${guestTier === '7-8' ? 'active' : ''}`}
                  onClick={() => setGuestTier('7-8')}
                >
                  7 to 8 Guests (Full Estate)
                </button>
              </div>
            </div>

            {/* Price Comparison Summary */}
            <div className="calc-price-breakdown">
              <div className="breakdown-row">
                <span className="breakdown-label">Direct Villa Rate ({nights} {nights === 1 ? 'night' : 'nights'})</span>
                <span className="breakdown-val">₹{directTotal.toLocaleString('en-IN')}</span>
              </div>

              <div className="breakdown-row ota-row">
                <span className="breakdown-label">Third-Party OTA Listing Cost (Approx.)</span>
                <span className="breakdown-val ota-val">₹{otaTotal.toLocaleString('en-IN')}</span>
              </div>

              <div className="savings-highlight-bar">
                <span className="savings-label">Your Direct Booking Savings:</span>
                <strong className="savings-val">Save ₹{otaMarkup.toLocaleString('en-IN')}</strong>
              </div>
            </div>

            {/* Lock in CTA */}
            <button
              type="button"
              className="calc-reserve-btn"
              onClick={handleBookNow}
            >
              Lock in Direct Rate via WhatsApp &rarr;
            </button>
            <span className="calc-note">
              No immediate card deduction. Dates confirmed directly with the host.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstateStatusCalculator;
