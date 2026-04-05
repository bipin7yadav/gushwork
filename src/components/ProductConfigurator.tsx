import React, { useState } from 'react';

export default function ProductConfigurator() {
  const [diameter, setDiameter] = useState('110');
  const [pressure, setPressure] = useState('PN10');
  const [length, setLength] = useState(100);

  // Simple pricing logic for demo purposes
  const calculatePrice = () => {
    const basePrices: Record<string, number> = {
      '20': 50,
      '50': 150,
      '110': 450,
      '200': 1200,
      '315': 2800
    };
    
    const pressureMultipliers: Record<string, number> = {
      'PN6': 1,
      'PN8': 1.15,
      'PN10': 1.3,
      'PN16': 1.6
    };

    const basePrice = basePrices[diameter] || 450;
    const multiplier = pressureMultipliers[pressure] || 1;
    
    const unitPrice = basePrice * multiplier;
    const totalPrice = unitPrice * length;
    
    return {
      min: Math.floor(totalPrice * 0.9).toLocaleString('en-IN'),
      max: Math.ceil(totalPrice * 1.1).toLocaleString('en-IN')
    };
  };

  const currentPrice = calculatePrice();

  const handleWhatsApp = () => {
    const msg = `Hi, I'm interested in an HDPE Pipe with these specifications:%0A- Diameter: ${diameter}mm%0A- Pressure: ${pressure}%0A- Length: ${length}m`;
    window.open(`https://wa.me/919876543210?text=${msg}`, '_blank');
  };

  return (
    <section className="configurator" style={{ padding: '4rem 0', background: 'var(--color-bg-light)' }}>
      <div className="container">
        <div className="configurator-wrapper" style={{ 
          background: 'white', 
          borderRadius: '16px', 
          padding: '3rem',
          boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 className="section-title text-center" style={{ marginBottom: '2rem' }}>Configure Your Pipeline</h2>
          
          <div className="config-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            
            {/* Field 1 */}
            <div className="config-field">
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--color-primary-dark)' }}>
                Pipe Diameter (Outer)
              </label>
              <select 
                value={diameter} 
                onChange={(e) => setDiameter(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }}
              >
                <option value="20">20 mm (3/4")</option>
                <option value="50">50 mm (2")</option>
                <option value="110">110 mm (4")</option>
                <option value="200">200 mm (8")</option>
                <option value="315">315 mm (12")</option>
              </select>
            </div>

            {/* Field 2 */}
            <div className="config-field">
              <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--color-primary-dark)' }}>
                Pressure Rating (PN)
              </label>
              <select 
                value={pressure} 
                onChange={(e) => setPressure(e.target.value)}
                style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }}
              >
                <option value="PN6">PN 6 (Low Pressure)</option>
                <option value="PN8">PN 8 (Standard)</option>
                <option value="PN10">PN 10 (High Pressure)</option>
                <option value="PN16">PN 16 (Heavy Duty)</option>
              </select>
            </div>

            {/* Field 3 */}
            <div className="config-field">
              <label style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--color-primary-dark)' }}>
                <span>Length Required</span>
                <span style={{ color: 'var(--color-primary)' }}>{length} meters</span>
              </label>
              <input 
                type="range" 
                min="10" 
                max="1000" 
                step="10"
                value={length} 
                onChange={(e) => setLength(parseInt(e.target.value))}
                style={{ width: '100%', cursor: 'pointer', height: '6px', accentColor: 'var(--color-primary)' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8', marginTop: '0.5rem' }}>
                <span>10m</span>
                <span>1000m</span>
              </div>
            </div>

          </div>

          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
            <div className="price-display">
              <span style={{ display: 'block', color: '#64748b', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Estimated Project Cost
              </span>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary-dark)' }}>
                ₹ {currentPrice.min} – ₹ {currentPrice.max}
              </div>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>*Excludes tax & transport. Based on PE100 IS4984.</span>
            </div>

            <div className="config-actions" style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={handleWhatsApp} className="btn" style={{ background: '#25D366', color: 'white', borderColor: '#25D366', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </button>
              <a href="#contact" className="btn btn--primary">
                Get Formal Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
