import React from 'react';

export default function Resources() {
  return (
    <section className="resources">
      <div className="container">
        <h2 className="section-title">Resources & Downloads</h2>
        <p className="section-desc">Get all the technical documentation and resources you need to make informed decisions about our HDPE piping solutions.</p>

        <div className="resources__list text-left mx-auto">
          <a href="#" className="resource-item">
            <span className="resource-item__title">HDPE Pipe Installation Manual (PDF)</span>
            <span className="resource-item__link text-primary">Download PDF <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg></span>
          </a>
          <a href="#" className="resource-item">
            <span className="resource-item__title">Maintenance & Inspection Handbook (PDF)</span>
            <span className="resource-item__link text-primary">Download PDF <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg></span>
          </a>
          <a href="#" className="resource-item">
            <span className="resource-item__title">Engineering Specifications Sheet (PDF)</span>
            <span className="resource-item__link text-primary">Download PDF <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg></span>
          </a>
        </div>
      </div>
    </section>
  );
}
