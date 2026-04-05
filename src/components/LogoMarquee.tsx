import React from 'react';

export default function LogoMarquee() {
  const logos = [
    {
      id: 'tata',
      content: <img src="/images/logo_tata_projects.png" alt="TATA Projects" />
    },
    {
      id: 'lt',
      content: (
        <svg viewBox="0 0 200 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="L&T Infrastructure">
            <rect x="4" y="4" width="42" height="42" rx="4" fill="#c8102e"/>
            <text x="25" y="34" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="28" fill="white" textAnchor="middle">L&amp;T</text>
            <text x="100" y="28" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="20" fill="#1a1a2e">Infrastructure</text>
            <text x="100" y="50" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="12" fill="#555">Engineering &amp; Construction</text>
        </svg>
      )
    },
    {
      id: 'shapoorji',
      content: (
        <svg viewBox="0 0 220 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Shapoorji Pallonji">
            <rect x="2" y="20" width="8" height="30" rx="2" fill="#1a3a5c"/>
            <rect x="14" y="10" width="8" height="50" rx="2" fill="#1a3a5c"/>
            <rect x="26" y="20" width="8" height="30" rx="2" fill="#1a3a5c"/>
            <text x="44" y="32" fontFamily="Georgia,serif" fontWeight="700" fontSize="15" fill="#1a3a5c">SHAPOORJI</text>
            <text x="44" y="52" fontFamily="Georgia,serif" fontWeight="700" fontSize="15" fill="#1a3a5c">PALLONJI</text>
        </svg>
      )
    },
    {
      id: 'ncc',
      content: (
        <svg viewBox="0 0 180 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NCC Limited">
            <circle cx="35" cy="35" r="30" fill="none" stroke="#003087" strokeWidth="3"/>
            <text x="35" y="43" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="22" fill="#003087" textAnchor="middle">NCC</text>
            <text x="100" y="30" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="18" fill="#003087">NCC</text>
            <text x="100" y="50" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="13" fill="#555">Limited</text>
        </svg>
      )
    },
    {
      id: 'megha',
      content: (
        <svg viewBox="0 0 200 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Megha Engineering">
            <polygon points="10,55 25,15 40,55" fill="#2e7d32"/>
            <polygon points="18,55 33,22 48,55" fill="#388e3c" opacity="0.6"/>
            <text x="58" y="30" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="16" fill="#1a3a1a">MEGHA</text>
            <text x="58" y="48" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="10" fill="#555">Engineering &amp; Infrastructures</text>
        </svg>
      )
    },
    {
      id: 'ircon',
      content: (
        <svg viewBox="0 0 180 70" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="IRCON International">
            <rect x="4" y="25" width="50" height="20" rx="3" fill="#1a3a5c"/>
            <text x="29" y="40" fontFamily="Arial Black,Arial" fontWeight="900" fontSize="13" fill="white" textAnchor="middle">IRCON</text>
            <text x="62" y="30" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="#1a3a5c">IRCON</text>
            <text x="62" y="46" fontFamily="Arial,sans-serif" fontWeight="400" fontSize="10" fill="#555">International Ltd.</text>
        </svg>
      )
    }
  ];

  return (
    <section className="logos">
      <div className="container container--logos">
        <p className="logos__title">Trusted by Hundreds of Companies Globally</p>
        <div className="logos__slider">
          <div className="logos__track">
            {/* Set 1 */}
            {logos.map((logo) => (
              <div key={`set1-${logo.id}`} className="logos__item">
                {logo.content}
              </div>
            ))}
            {/* Duplicate set for infinite scroll */}
            {logos.map((logo) => (
              <div key={`set2-${logo.id}`} className="logos__item">
                {logo.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
