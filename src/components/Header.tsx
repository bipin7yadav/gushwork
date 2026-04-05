import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Toggle sticky state based on scroll threshold
      if (currentScrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? 'header--sticky' : ''} ${isHidden ? 'header--hidden' : ''}`}>
        <div className="container header__container">
            <div className="header__logo">
                <Link to="/">
                  <img src="/images/mangalam_logo_rect.svg" alt="Mangalam HDPE Pipes & Coils" />
                </Link>
            </div>
            
            <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
                <ul className="header__menu">
                    <li><Link to="/about" className="header__link" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                    <li>
                      <Link to="/products" className="header__link header__link--dropdown" onClick={() => setMenuOpen(false)}>
                        Products <span className="header__chevron"></span>
                      </Link>
                    </li>
                </ul>
            </nav>
            
            <div className="header__actions">
                <Link to="/contact" className="btn btn--primary" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                <button 
                  className={`header__hamburger ${menuOpen ? 'active' : ''}`} 
                  aria-label="Toggle menu"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>
  );
}
