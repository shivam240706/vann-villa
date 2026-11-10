import React, { useState } from 'react';
import './ReservationBar.css';

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="1"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const UserGroupIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const CompassIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <polyline points="9 12 11 14 15 10"></polyline>
  </svg>
);

const ReservationBar = () => {
  // Format tomorrow and day-after-tomorrow as sensible default ISO dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const formatDate = (d) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [guests, setGuests] = useState('2-4 Guests (Couple or Small Family)');
  const [stayType, setStayType] = useState('Private Pool Holiday');

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const message = `Hello Vann Villa Concierge! I would like to check availability and direct booking rates for my upcoming stay:%0A%0A` +
      `Check-In: ${checkIn}%0A` +
      `Check-Out: ${checkOut}%0A` +
      `Party Size: ${guests}%0A` +
      `Occasion: ${stayType}%0A%0A` +
      `Please confirm availability and share the direct booking privileges.`;

    const url = `https://wa.me/919411770969?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="reservation-bar-wrapper" aria-label="Check Villa Availability">
      <div className="reservation-bar-container">
        <div className="reservation-bar-card">
          <form className="reservation-form" onSubmit={handleWhatsAppBooking}>
            {/* Check In */}
            <div className="reservation-field">
              <label htmlFor="res-checkin" className="field-label">
                <CalendarIcon />
                <span>Check In</span>
              </label>
              <input
                id="res-checkin"
                type="date"
                className="field-input"
                value={checkIn}
                min={formatDate(today)}
                onChange={(e) => setCheckIn(e.target.value)}
                required
              />
            </div>

            <div className="field-divider" aria-hidden="true" />

            {/* Check Out */}
            <div className="reservation-field">
              <label htmlFor="res-checkout" className="field-label">
                <CalendarIcon />
                <span>Check Out</span>
              </label>
              <input
                id="res-checkout"
                type="date"
                className="field-input"
                value={checkOut}
                min={checkIn || formatDate(tomorrow)}
                onChange={(e) => setCheckOut(e.target.value)}
                required
              />
            </div>

            <div className="field-divider" aria-hidden="true" />

            {/* Guests */}
            <div className="reservation-field">
              <label htmlFor="res-guests" className="field-label">
                <UserGroupIcon />
                <span>Guests</span>
              </label>
              <select
                id="res-guests"
                className="field-select"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="2 Guests (Romantic Getaway)">2 Guests (Couple Getaway)</option>
                <option value="2-4 Guests (Couple or Small Family)">2 to 4 Guests (Small Group)</option>
                <option value="5-6 Guests (Full Villa Family)">5 to 6 Guests (Family Stay)</option>
                <option value="7-8 Guests (Exclusive Entire Estate)">7 to 8 Guests (Full Estate)</option>
              </select>
            </div>

            <div className="field-divider" aria-hidden="true" />

            {/* Stay Type */}
            <div className="reservation-field">
              <label htmlFor="res-stay-type" className="field-label">
                <CompassIcon />
                <span>Stay Experience</span>
              </label>
              <select
                id="res-stay-type"
                className="field-select"
                value={stayType}
                onChange={(e) => setStayType(e.target.value)}
              >
                <option value="Private Pool Holiday">Private Pool Getaway</option>
                <option value="Family Gathering & Barbecue">Family Gathering & Lawn BBQ</option>
                <option value="Mountain Workation / Creative Retreat">Quiet Mountain Workation</option>
                <option value="Birthday or Intimate Celebration">Private Celebration</option>
              </select>
            </div>

            {/* Submit CTA */}
            <div className="reservation-cta-wrapper">
              <button type="submit" className="reservation-submit-btn">
                <span>Check Availability</span>
                <span className="btn-subtext">Direct Host WhatsApp</span>
              </button>
            </div>
          </form>

          {/* Direct Booking Assurance Bar */}
          <div className="reservation-guarantee-bar">
            <div className="guarantee-item">
              <ShieldCheckIcon />
              <span>Direct Best Rate Guarantee (No 18% OTA Commission)</span>
            </div>
            <div className="guarantee-dot" aria-hidden="true">•</div>
            <div className="guarantee-item">
              <span>100% Private 2BHK: Zero Shared Strangers</span>
            </div>
            <div className="guarantee-dot" aria-hidden="true">•</div>
            <div className="guarantee-item">
              <span>Instant Host Confirmation: <a href="tel:+919411770969" className="guarantee-link">+91 94117 70969</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationBar;

