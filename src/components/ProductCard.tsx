import React from 'react';
import { Link } from 'react-router-dom';

export interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  gradeBadge: string;
  pressureRating: string;
  priceRange: string;
  applications: string[];
}

export default function ProductCard({
  id, title, image, gradeBadge, pressureRating, priceRange, applications
}: ProductCardProps) {
  return (
    <div className="product-card" style={{
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <div className="product-card__image-wrap" style={{ position: 'relative', height: '200px', backgroundColor: '#f8fafc' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <span style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'var(--color-primary)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: 600
        }}>
          {gradeBadge}
        </span>
      </div>
      
      <div className="product-card__content" style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>{title}</h3>
        <div style={{ color: 'var(--color-text-light)', fontSize: '0.875rem', marginBottom: '1rem', flex: 1 }}>
          <p><strong>Pressure:</strong> {pressureRating}</p>
          <p><strong>Applications:</strong> {applications.join(', ')}</p>
        </div>
        
        <div style={{ marginTop: 'auto', borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
          <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.125rem', marginBottom: '1rem' }}>
            {priceRange}
          </div>
          <Link to={`/contact?product=${id}`} className="btn btn--outline" style={{ display: 'block', textAlign: 'center', width: '100%' }}>
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
