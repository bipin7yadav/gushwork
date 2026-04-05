import React from 'react';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <h2 className="section-title">Complete Piping Solutions Portfolio</h2>
        <p className="section-desc">From industrial-grade fittings to specialized fusion machines, we deliver complete solutions for modern infrastructure projects.</p>

        <div className="portfolio__grid">
          <div className="portfolio-card text-left">
            <div className="portfolio-card__text">
              <h3>HDPE Fittings & Accessories</h3>
              <p>Complete range of electrofusion and butt fusion fittings, including elbows, tees, reducers, and couplers for seamless pipe connections.</p>
            </div>
            <img src="/images/hdpe_fittings_portfolio.png" alt="Fittings" className="portfolio-card__img" />
            <div className="portfolio-card__action">
              <a href="#" className="btn-learn-more">Learn More</a>
            </div>
          </div>
          <div className="portfolio-card text-left">
            <div className="portfolio-card__text">
              <h3>Professional Installation Services</h3>
              <p>Expert installation and fusion welding services ensuring optimal system performance, compliance with standards, and long-term reliability.</p>
            </div>
            <img src="/images/hdpe_installation_services.png" alt="Services" className="portfolio-card__img" />
            <div className="portfolio-card__action">
              <a href="#" className="btn-learn-more">Learn More</a>
            </div>
          </div>
          <div className="portfolio-card text-left">
            <div className="portfolio-card__text">
              <h3>PE-RT Heating Pipes</h3>
              <p>Polyethylene of Raised Temperature resistance pipes ideal for underfloor heating, radiator connections, and hot water applications.</p>
            </div>
            <img src="/images/pert_heating_pipes.png" alt="Heating Pipes" className="portfolio-card__img" />
            <div className="portfolio-card__action">
              <a href="#" className="btn-learn-more">Learn More</a>
            </div>
          </div>
        </div>

        <div className="help-banner text-left">
          <div className="help-banner__content">
            <h3>Didn't find what <span className="text-primary">you're looking for?</span></h3>
            <p>Talk to our experts for custom solutions and tailored guidance.</p>
          </div>
          <a href="#contact" className="btn btn--primary">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
            </svg> Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
