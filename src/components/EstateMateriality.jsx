import React from 'react';
import './EstateMateriality.css';

const materials = [
  {
    num: '01',
    name: 'Himalayan Mountain Stone',
    origin: 'Local Shivalik Quarry',
    trait: 'Thermal Mass & Earth Texture',
    desc: 'Hand-chiseled stones create natural insulation: maintaining cool interior comfort during sunny foothill afternoons and radiating radiant warmth on chilly winter evenings.',
    tag: 'Authentic Masonry'
  },
  {
    num: '02',
    name: 'Seasoned Deodar & Teak Timber',
    origin: 'Himalayan Foothills',
    trait: 'Acoustic Warmth & Grain',
    desc: 'Double-height exposed wood beams, bespoke dining woodwork, and hand-finished railings provide natural aroma, soft acoustic reverberation, and warm tactile touchpoints.',
    tag: 'Natural Timber'
  },
  {
    num: '03',
    name: 'Crystalline Mountain Pool Water',
    origin: 'Subterranean Aquifer',
    trait: 'Pure Mountain Freshness',
    desc: 'Our 4.5 ft sunken plunge pool is filtered daily with pure freshwater, ensuring soothing dips free from harsh chemical scents under the open sky.',
    tag: 'Freshwater Pool'
  },
  {
    num: '04',
    name: 'Floor-To-Ceiling Architectural Glass',
    origin: 'High-Span Glazing',
    trait: 'Unobstructed Forest Views',
    desc: 'Expansive glass panels invite the changing light of the Shivalik ridge directly into the living salon, merging indoor tranquility with outdoor pine foliage.',
    tag: 'Canopy Light'
  }
];

const EstateMateriality = () => {
  return (
    <section className="materiality-section" id="materiality" aria-label="Estate Materiality and Craft">
      <div className="materiality-container">
        <div className="materiality-header">
          <span className="materiality-eyebrow">The Tactile Palette</span>
          <h2 className="materiality-heading">Craft, Texture & Foothill Materials</h2>
          <p className="materiality-subheading">
            A villa is defined by what touches your senses: rough-hewn stone, smooth seasoned timber,
            crystal mountain water, and panoramic glass that lets the Shivalik forest become your backdrop.
          </p>
        </div>

        <div className="materiality-grid">
          {materials.map((mat) => (
            <div key={mat.num} className="materiality-card">
              <div className="mat-card-top">
                <span className="mat-num">{mat.num}</span>
                <span className="mat-tag">{mat.tag}</span>
              </div>
              <h3 className="mat-name">{mat.name}</h3>
              <div className="mat-origin-row">
                <span className="origin-label">Origin:</span>
                <span className="origin-val">{mat.origin}</span>
              </div>
              <p className="mat-desc">{mat.desc}</p>
              <div className="mat-trait-bar">
                <span className="trait-dot" aria-hidden="true" />
                <span className="trait-text">{mat.trait}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EstateMateriality;
