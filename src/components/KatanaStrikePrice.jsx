import React from 'react';

const KatanaStrikePrice = ({ oldPrice, newPrice, size = '1.1rem', newSize = '1.5rem' }) => {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: '8px' }}>
      {oldPrice && (
        <span style={{ textDecoration: 'line-through', opacity: 0.6, fontSize: size }}>
          {oldPrice}
        </span>
      )}
      <span style={{ fontSize: newSize, fontWeight: 600 }}>
        {newPrice}
      </span>
    </span>
  );
};

export default KatanaStrikePrice;
