import React, { useEffect, useState } from 'react';

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA only if we've scrolled down a bit to avoid covering footer/header etc.
      // But typically it's always shown on mobile. Let's just show it if width < 768px.
      // Actually we will handle the visibility via CSS mostly, but React can mount it.
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky-mobile-cta" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#ffffff',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
      display: 'none', // Overridden in CSS media queries
      padding: '10px 16px',
      zIndex: 998,
      borderTop: '1px solid #e5e7eb'
    }}>
      <style>
        {`
          @media (max-width: 768px) {
            .sticky-mobile-cta {
              display: flex !important;
              gap: 12px;
            }
            body {
              padding-bottom: 60px; /* Make room for the CTA */
            }
          }
        `}
      </style>
      <a href="tel:+919876543210" className="btn btn--outline" style={{ flex: 1, padding: '12px 0', textAlign: 'center' }}>
        Call Now
      </a>
      <a href="#contact" className="btn btn--primary" style={{ flex: 1, padding: '12px 0', textAlign: 'center' }}>
        Get Quote
      </a>
    </div>
  );
}
