import React from 'react';

const testimonials = [
  {
    name: "Suresh Reddy",
    role: "Farm Owner",
    image: "/images/testimonial_suresh.png",
    title: "Reliable quality for agricultural irrigation.",
    quote: "The durability and performance of Mangalam's HDPE piping systems have significantly improved our agricultural yields. Excellent support for specialized applications."
  },
  {
    name: "Carlos Mendoza",
    role: "Operations Manager",
    image: "/images/testimonial_carlos.png",
    title: "Excellent support for specialized applications.",
    quote: "The durability and performance of Mangalam's HDPE piping systems have significantly improved our municipal water distribution. Excellent support for specialized applications."
  },
  {
    name: "Rajesh Kumar",
    role: "Manufacturing Head",
    image: "/images/testimonial_rajesh.png",
    title: "Provides the exact specifications we need!",
    quote: "For our potable water applications, their specialized HDPE pipes provide the exact specifications we need. Their understanding of industrial piping requirements is impressive."
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Trusted Performance. Proven Results</h2>
        <p className="section-desc" style={{ marginBottom: '4rem' }}>
          From high-pressure water mains to specialized irrigation networks, we deliver complete HDPE piping solutions for modern infrastructure development.
        </p>

        <div className="testimonials__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card" style={{ background: '#F8FAFC', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '2rem' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2E3A8C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1.5rem' }}>
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .765-2 1.95v8.1c0 1.05.655 1.95 2 1.95.5 0 1 .5 1 1v4.1c0 .5-.5 1-1 1h-.25c-.41 0-.75.34-.75.75s.34.75.75.75H3zm14 0c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .765-2 1.95v8.1c0 1.05.655 1.95 2 1.95.5 0 1 .5 1 1v4.1c0 .5-.5 1-1 1h-.25c-.41 0-.75.34-.75.75s.34.75.75.75h.25z" fill="#2E3A8C" stroke="none" />
              </svg>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '1rem', lineHeight: 1.4 }}>{t.title}</h3>
              <p className="testimonial-card__quote" style={{ color: 'var(--color-text-light)', fontSize: '0.9375rem', marginBottom: '2rem', fontStyle: 'normal', lineHeight: 1.6 }}>{t.quote}</p>
              <div className="testimonial-card__author" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={t.image} alt={t.name} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top' }} />
                <div className="author-info">
                  <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-text)', margin: 0 }}>{t.name}</h4>
                  <span style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
