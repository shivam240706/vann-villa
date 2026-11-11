import React, { useState, useRef, useEffect } from 'react';
import './ReservationBar.css';

const CalendarIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="1"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const UserGroupIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const CompassIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  </svg>
);

const ShieldCheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <polyline points="9 12 11 14 15 10"></polyline>
  </svg>
);

const ChevronDownIcon = ({ open }) => (
  <svg 
    width="12" 
    height="12" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', flexShrink: 0 }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

/* Custom Select Dropdown that NEVER overflows mobile screen boundaries */
const CustomSelectField = ({ id, label, icon, value, options, onChange, className }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, []);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  return (
    <div className={`reservation-field ${className || ''}`} ref={containerRef}>
      <label id={`${id}-label`} className="field-label">
        {icon}
        <span>{label}</span>
      </label>
      
      <div 
        className={`custom-select-trigger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-label`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(!open);
          }
        }}
      >
        <span className="selected-value-text">{selectedOption.label}</span>
        <ChevronDownIcon open={open} />
      </div>

      {open && (
        <div className="custom-select-menu" role="listbox">
          {options.map((opt) => (
            <div
              key={opt.value}
              className={`custom-select-item ${value === opt.value ? 'selected' : ''}`}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              role="option"
              aria-selected={value === opt.value}
            >
              <span>{opt.label}</span>
              {value === opt.value && <span className="item-check" aria-hidden="true">&#10003;</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const guestOptions = [
  { value: '2 Guests (Romantic Getaway)', label: '2 Guests (Couple Retreat)' },
  { value: '2-4 Guests (Small Group)', label: '2 to 4 Guests (Small Group)' },
  { value: '5-6 Guests (Family Stay)', label: '5 to 6 Guests (Family Stay)' },
  { value: '7-8 Guests (Full Estate)', label: '7 to 8 Guests (Full Estate)' }
];

const stayOptions = [
  { value: 'Private Pool Holiday', label: 'Private Pool Getaway' },
  { value: 'Family Gathering & Barbecue', label: 'Family Gathering & Lawn BBQ' },
  { value: 'Mountain Workation / Creative Retreat', label: 'Quiet Mountain Workation' },
  { value: 'Birthday or Intimate Celebration', label: 'Private Celebration' }
];

const ReservationBar = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 3);

  const formatDate = (d) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [guests, setGuests] = useState('2-4 Guests (Small Group)');
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
    <section className="reservation-bar-wrapper" id="reservation" aria-label="Check Villa Availability">
      <div className="reservation-bar-container">
        <div className="reservation-bar-card">
          <div className="res-card-top-tag">
            <span>Direct Concierge Booking</span>
            <span className="res-tag-divider">•</span>
            <span>Zero Middleman Fees</span>
          </div>

          <form className="reservation-form" onSubmit={handleWhatsAppBooking}>
            {/* Check In */}
            <div className="reservation-field date-field-checkin">
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
            <div className="reservation-field date-field-checkout">
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

            {/* Custom Guests Select Dropdown (Strictly bounded inside card) */}
            <CustomSelectField
              id="res-guests"
              label="Guests"
              icon={<UserGroupIcon />}
              value={guests}
              options={guestOptions}
              onChange={setGuests}
              className="select-field-guests"
            />

            <div className="field-divider" aria-hidden="true" />

            {/* Custom Stay Experience Select Dropdown (Strictly bounded inside card) */}
            <CustomSelectField
              id="res-stay-type"
              label="Stay Experience"
              icon={<CompassIcon />}
              value={stayType}
              options={stayOptions}
              onChange={setStayType}
              className="select-field-stay"
            />

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
              <span>Direct Rate: From ₹4,499/nt (No 18% OTA Markup)</span>
            </div>
            <div className="guarantee-dot" aria-hidden="true">•</div>
            <div className="guarantee-item">
              <span>100% Private 2BHK: Zero Shared Strangers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationBar;