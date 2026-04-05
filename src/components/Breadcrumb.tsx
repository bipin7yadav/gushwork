import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  paths: { name: string; url?: string }[];
}

export default function Breadcrumb({ paths }: BreadcrumbProps) {
  return (
    <div className="breadcrumb" style={{ padding: '1rem 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <Link to="/" className="breadcrumb__path" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>Home</Link>
        
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <span className="breadcrumb__separator" style={{ margin: '0 0.5rem', color: 'var(--color-gray)' }}>/</span>
            {path.url ? (
              <Link to={path.url} className="breadcrumb__path" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>
                {path.name}
              </Link>
            ) : (
              <span className="breadcrumb__current" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                {path.name}
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
