import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* Top Banner Card */}
        <div className="footer__banner">
          <img src="/images/mangalam_logo_rect.svg" alt="Mangalam HDPE Pipes & Coils" className="footer__banner-logo" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
          <div className="footer__banner-text">
            <strong>Premium <span className="text-primary">HDPE Pipes & Fittings</span></strong><br />
            <span className="text-primary">Manufacturer</span> <span style={{ fontWeight: 'normal', color: 'var(--color-text)' }}>in South India</span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer__links">
          <div className="footer__col">
            <h4 className="footer__title">About Us</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Categories</h4>
            <ul>
              <li><Link to="/products">Agriculture & Irrigation</Link></li>
              <li><Link to="/products">Urban Water Supply</Link></li>
              <li><Link to="/products">Industrial Piping</Link></li>
              <li><Link to="/products">Gas Distribution</Link></li>
              <li><Link to="/products">Sewage Management</Link></li>
              <li><Link to="/products">Potable Water Systems</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Products</h4>
            <ul>
              <li><Link to="/products">HDPE Pipes (IS 4984)</Link></li>
              <li><Link to="/products">Butt Fusion Fittings</Link></li>
              <li><Link to="/products">Electrofusion Fittings</Link></li>
              <li><Link to="/products">PE-RT Heating Pipes</Link></li>
              <li><Link to="/products">SDR 11/17 Pipes</Link></li>
              <li><Link to="/products">Coil Wrappers & Tools</Link></li>
            </ul>
          </div>
          <div className="footer__col footer__col--contact">
            <h4 className="footer__title">Contact</h4>
            <ul>
              <li>
                <span className="contact-icon text-primary">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span> Plot No. 45, Industrial Estate, Hyderabad - 500 037, Telangana, India
              </li>
              <li>
                <span className="contact-icon text-primary">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span> +91-XXX-XXX-XXXX
              </li>
              <li>
                <span className="contact-icon text-primary">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </span> info@mangalamhdpe.com
              </li>
              <li>
                <span className="contact-icon text-primary">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4 M12 8h.01" />
                  </svg>
                </span> support@mangalamhdpe.com
              </li>
            </ul>
            <div className="footer__socials">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="X">X</a>
              <a href="#" aria-label="Instagram">ig</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container container--flex">
          <p>Copyright &copy; 2026 Mangalam HDPE Pipes | All Rights Reserved</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
