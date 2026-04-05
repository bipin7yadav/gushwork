import React from 'react';

export default function CTASection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit the form data
    alert('Quote requested!');
  };

  return (
    <section className="cta-section" id="contact">
      <div className="container container--cta">
        <div className="cta-box">
          <div className="cta-box__content">
            <h2>Ready to Transform Your<br />Infrastructure Projects?</h2>
            <p>Get a personalized consultation and quote for HDPE piping solutions tailored to your specific project requirements.</p>
            <hr className="cta-divider" />
            <p className="cta-assist">
              For immediate assistance, feel free to give us a direct call at <strong>+91-XXX-XXX-XXXX</strong>. You can also send us a quick email at <strong>info@mangalamhdpe.com</strong>
            </p>
          </div>
          <div className="cta-box__form">
            <h3>Contact Us Today</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="Company Name" />
              <input type="email" placeholder="Email Address" required />
              <div className="phone-input">
                <select>
                  <option>+91</option>
                </select>
                <input type="tel" placeholder="7003026616" required />
              </div>
              <button type="submit" className="btn btn--primary btn--full btn--dark">Request Custom Quote</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
