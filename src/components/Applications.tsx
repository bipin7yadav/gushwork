import React, { useRef } from 'react';

const applications = [
  {
    image: "/images/hdpe_agriculture_irrigation.png",
    title: "Agriculture & Irrigation",
    desc: "Efficient and durable water transport solutions for modern farming and large-scale irrigation systems."
  },
  {
    image: "/images/hdpe_industrial_piping.png",
    title: "Industrial Piping",
    desc: "Chemical-resistant and high-pressure piping for factories, chemical plants, and heavy industries."
  },
  {
    image: "/images/hdpe_urban_infrastructure.png",
    title: "Urban Infrastructure",
    desc: "Reliable potable water supply and sewage management systems for smart cities and urban development."
  },
  {
    image: "/images/hdpe_gas_distribution.png",
    title: "Gas Distribution",
    desc: "Safe, flexible, and leak-proof piping solutions for natural gas distribution and ventilation systems."
  }
];

export default function Applications() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="applications bg-light">
      <div className="container relative">
        <div className="section-header">
          <div className="section-header__text">
            <h2 className="section-title">Versatile Applications Across Industries</h2>
            <p className="section-desc">
              From agricultural irrigation to urban water distribution, Mangalam's precision-engineered HDPE piping solutions deliver superior performance across diverse applications.
            </p>
          </div>
          <div className="nav-arrows">
            <button className="nav-arrow" aria-label="Previous" onClick={scrollLeft}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="nav-arrow" aria-label="Next" onClick={scrollRight}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="applications__slider" ref={scrollRef}>
          {applications.map((app, index) => (
            <div key={index} className="app-card">
              <img src={app.image} alt={app.title} className="app-card__img" />
              <div className="app-card__content">
                <h3>{app.title}</h3>
                <p>{app.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
