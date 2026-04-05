import React from 'react';

export default function TechSpecs() {
  return (
    <section className="specs" id="specs">
      <div className="container">
        <h2 className="section-title text-white">Technical Specifications at a Glance</h2>
        <p className="section-desc text-white opacity-80">
          Comprehensive performance data demonstrating our commitment to quality, longevity, and engineering excellence.
        </p>

        <div className="specs__table-wrapper">
          <table className="specs__table">
            <thead>
              <tr>
                <th>PARAMETER</th>
                <th>SPECIFICATION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pipe Diameter Range</td>
                <td>20mm to 1600mm (3/4" to 63")</td>
              </tr>
              <tr>
                <td>Pressure Ratings</td>
                <td>PN 2.5, PN 4, PN 6, PN 8, PN 10, PN 12.5, PN 16</td>
              </tr>
              <tr>
                <td>Standard Dimension Ratio</td>
                <td>SDR 33, SDR 26, SDR 21, SDR 17, SDR 13.6, SDR 11</td>
              </tr>
              <tr>
                <td>Operating Temperature</td>
                <td>-40°C to +60°C (-40°F to +140°F)</td>
              </tr>
              <tr>
                <td>Service Life</td>
                <td>50+ Years (at 20 degrees C, PN 10)</td>
              </tr>
              <tr>
                <td>Material Density</td>
                <td>0.95 - 0.96 g/cm3</td>
              </tr>
              <tr>
                <td>Certification Standards</td>
                <td>IS 4984, ISO 4427, ASTM D3035</td>
              </tr>
              <tr>
                <td>Joint Type</td>
                <td>Butt Fusion, Electrofusion, Mechanical</td>
              </tr>
              <tr>
                <td>Coil Lengths</td>
                <td>Up to 500mm (for smaller diameters)</td>
              </tr>
              <tr>
                <td>Country of Origin</td>
                <td>
                  <img 
                    src="/images/india_flag.png" 
                    alt="India flag" 
                    className="flag-icon" 
                    style={{ width: '22px', height: '15px', objectFit: 'cover', borderRadius: '2px' }} 
                  />
                  India
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="specs__download">
          <a href="#" className="btn btn--outline btn--light">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4 M7 10l5 5 5-5 M12 15V3" />
            </svg> Download Full Technical Datasheet
          </a>
        </div>
      </div>
    </section>
  );
}
