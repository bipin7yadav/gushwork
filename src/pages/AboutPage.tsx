import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function AboutPage() {
  return (
    <main style={{ paddingBottom: '4rem', background: 'var(--color-bg)' }}>
      <Breadcrumb paths={[{ name: "About Us" }]} />
      
      <section className="container mt-xl">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h1 className="section-title">Mangalam HDPE Pipes & Coils</h1>
          <p className="section-desc">
            Pioneering the future of fluid transportation across India since 1995. We are South India's leading manufacturer of high-density polyethylene (HDPE) pipes and fittings.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <img src="/images/hdpe_manufacturing_process.png" alt="Factory" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ fontSize: '2rem', color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>Our Legacy of Quality</h2>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: '1rem' }}>
              At Mangalam, we believe that infrastructure is the backbone of development. For over two decades, our state-of-the-art manufacturing facility in Hyderabad has been producing BIS and ISO certified piping solutions that stand the test of time.
            </p>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Our commitment to using purely PE100 and PE80 virgin raw materials ensures that every pipe leaving our factory offers optimal molecular weight distribution, unmatched flexibility, and a guaranteed service life of over 50 years.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#25D366' }}>&#10004;</span> IS 4984 & ISO 4427 Certified
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#25D366' }}>&#10004;</span> 100% Virgin Grade Raw Materials
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#25D366' }}>&#10004;</span> National Delivery Network
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
