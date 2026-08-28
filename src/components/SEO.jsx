import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonicalUrl, ogImage, ogType, name, schemaMarkup }) => {
  const defaultImage = 'https://kudratvilla.com/images/kudrat%20villa(1).jpg';
  const defaultCanonical = typeof window !== 'undefined' ? window.location.href : 'https://kudratvilla.com/';
  
  const finalCanonical = canonicalUrl || defaultCanonical;
  const finalImage = ogImage || defaultImage;
  const finalType = ogType || 'website';

  const formattedSchema = typeof schemaMarkup === 'object' ? JSON.stringify(schemaMarkup) : schemaMarkup;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={finalType} />
      <meta property="og:site_name" content="Kudrat Villa" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={finalImage} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={name || 'Kudrat Villa'} />
      <meta name="twitter:url" content={finalCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={finalImage} />

      {/* Structured Data */}
      {formattedSchema && <script type="application/ld+json">{formattedSchema}</script>}
    </Helmet>
  );
};

SEO.defaultProps = {
  title: 'Kudrat Villa | Luxury Private Pool Villa in Dehradun',
  description: 'Kudrat Villa is a premium 2BHK private pool villa located in Dehradun (near UPES). Offering 2 acres of lawns, open shower, BBQ, and a 100% pet-friendly stay.',
  name: 'Kudrat Villa',
  ogType: 'website'
};

export default SEO;
