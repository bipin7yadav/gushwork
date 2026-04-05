import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function ContactPage() {
  return (
    <main style={{ paddingBottom: '4rem', background: 'var(--color-bg)' }}>
      <Breadcrumb paths={[{ name: "Contact Us" }]} />
      
      <section className="container mt-xl">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 2fr)', gap: '4rem', alignItems: 'start' }}>
          
          <div className="contact-info">
            <h1 className="section-title text-left" style={{ marginBottom: '1rem' }}>Get in Touch</h1>
            <p className="section-desc text-left" style={{ marginBottom: '3rem' }}>
              We're here to help you get the best piping solutions for your project. Reach out to us directly or fill out the form for a custom quotation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Our Office & Factory</strong>
                <p>Plot No. 45, Industrial Estate<br />Hyderabad - 500 037<br />Telangana, India</p>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Call Us</strong>
                <p>+91-XXX-XXX-XXXX<br />+91-YYY-YYY-YYYY</p>
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.25rem' }}>Email Us</strong>
                <p>info@mangalamhdpe.com<br />sales@mangalamhdpe.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form" style={{ background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--color-primary-dark)' }}>Request a Quotation</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <input type="text" placeholder="First Name" required style={{ flex: 1, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
                <input type="text" placeholder="Last Name" required style={{ flex: 1, padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
              </div>
              <input type="email" placeholder="Email Address" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
              <input type="tel" placeholder="Phone Number" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
              <textarea placeholder="Tell us about your project requirements..." rows={5} required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', resize: 'vertical' }}></textarea>
              <button type="submit" className="btn btn--primary" style={{ padding: '16px', fontSize: '1.125rem', marginTop: '1rem' }}>Send Inquiry</button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}
