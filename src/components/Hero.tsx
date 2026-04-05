import React, { useState, useRef } from 'react';

const IMAGES = [
  '/images/hdpe_pipe_coil_orange.png',
  '/images/hdpe_pipe_black.png',
  '/images/hdpe_pipe_blue_coil.png',
  '/images/hdpe_fittings_portfolio.png',
  '/images/pert_heating_pipes.png',
  '/images/hdpe_installation_services.png'
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setActiveIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.transformOrigin = `${x}% ${y}%`;
  };

  return (
    <section className="hero">
      <div className="container hero__container">
        {/* Left Carousel */}
        <div className="hero__carousel">
          <div className="carousel__viewport">
            <div 
              className="carousel__track" 
              ref={trackRef}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {IMAGES.map((src, idx) => (
                <div key={idx} className={`carousel__slide ${activeIndex === idx ? 'active' : ''}`}>
                  <div 
                    className="carousel__image zoomable"
                    style={{ backgroundImage: `url('${src}')` }}
                    onMouseMove={handleMouseMove}
                  ></div>
                </div>
              ))}
            </div>

            <button className="carousel__btn carousel__btn--prev" onClick={prevSlide} aria-label="Previous slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="carousel__btn carousel__btn--next" onClick={nextSlide} aria-label="Next slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="carousel__thumbnails">
            {IMAGES.map((src, idx) => (
              <div 
                key={idx} 
                className={`thumbnail ${activeIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <img src={src} alt={`Thumb ${idx + 1}`} style={{ objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="hero__content">
          <div className="hero__badges">
            <span className="badge">
              <img src="/images/bis_certified_badge.png" alt="BIS" width="20" height="20" style={{ objectFit: 'contain' }} />
              BIS Certified
            </span>
            <span className="badge">
              <img src="/images/iso_certified_badge.png" alt="ISO" width="20" height="20" style={{ objectFit: 'contain' }} />
              ISO 9001 Certified
            </span>
            <span className="badge">
              <img src="/images/ce_certified_badge.png" alt="CE" width="20" height="20" style={{ objectFit: 'contain' }} />
              CE Certified
            </span>
          </div>

          <h1 className="hero__title">Premium HDPE Pipes & Coils for Modern Infrastructure</h1>

          <ul className="hero__features">
            <li>
              <span className="icon-check">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </span> Leak-Proof Fusion Joints
            </li>
            <li>
                <span className="icon-check">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span> Chemical Resistance
            </li>
            <li><span className="icon-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                    </svg></span> 50+ Year Service Life</li>
            <li><span className="icon-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                    </svg></span> Flexible Installation</li>
          </ul>

          <div className="hero__pricing">
            <span className="hero__price-label">Price Range</span>
            <div className="hero__price-value">₹4,80,000 - 7,90,000</div>
            <div className="hero__price-tags">
              <span className="tag tag--shipping">Shipping: 6-12 days</span>
              <span className="tag tag--returns">Returns: If returned within 7 days</span>
            </div>
          </div>

          <div className="hero__cta">
            <a href="#quote" className="btn btn--primary">Get Custom Quote</a>
            <a href="#specs" className="btn btn--outline">View Technical Specs <span className="arrow">&gt;</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
