import React, { useState } from 'react';
import './HostJournal.css';

const guideStories = [
  {
    id: 'trails',
    category: 'Foot & Pine Trails',
    title: 'The Silent Pine Ridge Walk',
    duration: '10 Mins from Villa Gate',
    snippet: 'Step right out of the villa perimeter into secluded ridge paths winding through Deodar and Chir pine groves. Ideal for sunrise birdwatching with views stretching to the Shivalik foothills.',
    recommendation: 'Walk between 06:30 AM and 08:00 AM when the valley mist still hangs low in the pine hollows.'
  },
  {
    id: 'food',
    category: 'Local Flavors',
    title: 'Warm Pahadi Comfort & Secret Bakeries',
    duration: 'Villa Kitchen or 15 Mins Drive',
    snippet: 'Enjoy home-cooked Garhwali dishes (Kafli, Jhangore ki Kheer, Pahadi Dal) prepared on request, or drive down to local artisan European bakeries in Rajpur for crusty sourdough and mountain jams.',
    recommendation: 'Ask the villa caretaker to prepare fresh chai with wild mint and ginger collected from nearby hillsides.'
  },
  {
    id: 'waterways',
    category: 'Streams & Rivers',
    title: 'Secluded Crystal Streams of Maldevta',
    duration: '25 Mins Scenic Drive',
    snippet: 'Away from crowded commercial tourist points, discover clear shallow limestone stream crossings with pebble banks perfect for private family picnics and dipping your toes in cool Himalayan waters.',
    recommendation: 'Take along a packed picnic basket from the villa kitchen with fruit, sandwiches, and hot tea in a thermos.'
  },
  {
    id: 'sunset',
    category: 'Evening Vistas',
    title: 'George Everest & Cloud End Ridge',
    duration: '35 Mins Mountain Climb',
    snippet: 'A scenic ascent past UPES towards Hathipaon and the historic George Everest estate, giving you a 360-degree vista of the Doon Valley on one side and snow-capped Himalayan peaks on the other.',
    recommendation: 'Head up at 04:00 PM to catch golden hour and the dramatic purple mountain twilight.'
  }
];

const CompassIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  </svg>
);

const HostJournal = () => {
  const [activeStory, setActiveStory] = useState(guideStories[0]);

  return (
    <section className="host-journal-section" id="host-journal" aria-label="Host Dehradun Guide and Journal">
      <div className="host-journal-container">
        <div className="journal-header">
          <div className="journal-eyebrow">
            <CompassIcon />
            <span>Curated Local Guide</span>
          </div>
          <h2 className="journal-heading">The Host's Dehradun Journal</h2>
          <p className="journal-subheading">
            Dehradun holds treasures beyond the standard tourist itineraries. Here are our family-favorite
            secret walks, mountain streams, and foothill viewpoints.
          </p>
        </div>

        <div className="journal-layout-grid">
          {/* Left: Interactive list of entries */}
          <div className="journal-entries-col" role="tablist" aria-label="Local Guide Entries">
            {guideStories.map((story) => {
              const isSelected = activeStory.id === story.id;
              return (
                <button
                  key={story.id}
                  role="tab"
                  aria-selected={isSelected}
                  className={`journal-entry-item ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveStory(story)}
                >
                  <div className="entry-meta-row">
                    <span className="entry-category">{story.category}</span>
                    <span className="entry-duration">{story.duration}</span>
                  </div>
                  <h3 className="entry-title">{story.title}</h3>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed story card */}
          <div className="journal-story-col">
            <div className="journal-detail-card">
              <span className="detail-badge">{activeStory.category}</span>
              <h3 className="detail-title">{activeStory.title}</h3>
              <div className="detail-duration-tag">
                <span>Location / Distance:</span>
                <strong>{activeStory.duration}</strong>
              </div>
              <p className="detail-snippet">{activeStory.snippet}</p>

              <div className="detail-recommendation-box">
                <span className="recommendation-label">Host's Private Tip:</span>
                <p className="recommendation-text">{activeStory.recommendation}</p>
              </div>

              <div className="detail-action-row">
                <a
                  href={`https://wa.me/919411770969?text=Hello%20Vann%20Villa%2C%20I%20would%20love%20more%20details%20about%20visiting%20${encodeURIComponent(activeStory.title)}%20during%20my%20stay.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-ask-host-link"
                >
                  Ask Host for Route Coordinates on WhatsApp &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostJournal;

