import React, { useState } from 'react';

const steps = [
  "Raw Material",
  "Extrusion",
  "Cooling",
  "Sizing",
  "Quality Control",
  "Marking",
  "Coiling",
  "Packaging"
];

export default function ManufacturingProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="process">
      <div className="container process__wrapper">
        <h2 className="section-title">Advanced HDPE Pipe Manufacturing Process</h2>
        <p className="section-desc">
          Our state-of-the-art extrusion technology ensures consistent quality, optimal material properties, and dimensional accuracy in every pipe we manufacture.
        </p>

        <div className="process__timeline-scroll">
          <div className="process__timeline">
            {steps.map((step, index) => (
              <button 
                key={index} 
                className={`timeline-step ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                {step}
              </button>
            ))}
          </div>
        </div>

        <div className="process__details text-left" style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="process__details-content" style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '1rem' }}>
              High-Grade Raw Material Selection
            </h3>
            <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.
            </p>
            <ul className="process__features" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--color-text)' }}>
                <span style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '20px', height: '20px', background: '#2E3A8C', borderRadius: '50%', color: 'white' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span> PE100 grade material
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--color-text)' }}>
                <span style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '20px', height: '20px', background: '#2E3A8C', borderRadius: '50%', color: 'white' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span> Optimal molecular weight distribution
              </li>
            </ul>
          </div>
          <div className="process__details-image" style={{ flex: 1, minWidth: '300px' }}>
            <img src="/images/hdpe_manufacturing_process.png" alt="Manufacturing Process" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
