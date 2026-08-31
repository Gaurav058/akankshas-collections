import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Phone, MessageCircle, Menu, X, ChevronDown, MapPin } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';

interface NavbarProps {
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMega(null);
  }, [location.pathname]);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: scrolled ? 'var(--bg-glass)' : 'rgba(13, 13, 13, 0.95)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px'
      }}>
        {/* BRAND LOGO */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid var(--border-gold)',
            boxShadow: '0 2px 8px rgba(212, 175, 55, 0.15)',
            backgroundColor: '#0D0D0D'
          }}>
            <img 
              src="/assets/akankshas-collections-storefront.png" 
              alt="Akanksha's Collections Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <span className="font-serif" style={{
              fontSize: '1.4rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: 'var(--text-primary)',
              display: 'block',
              lineHeight: 1
            }}>
              AKANKSHA'S
            </span>
            <span style={{
              fontSize: '0.68rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              fontWeight: 600,
              display: 'block',
              marginTop: '2px'
            }}>
              COLLECTIONS
            </span>
          </div>
        </Link>

        {/* DESKTOP MAIN NAVIGATION */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
          <style>{`
            @media (min-width: 1024px) {
              .desktop-nav { display: flex !important; align-items: center; gap: 2rem; }
            }
            .nav-link {
              color: var(--text-secondary);
              font-size: 0.85rem;
              letter-spacing: 0.1em;
              text-transform: uppercase;
              font-weight: 500;
              padding: 0.5rem 0;
              position: relative;
              cursor: pointer;
              display: flex;
              align-items: center;
              gap: 0.3rem;
            }
            .nav-link:hover, .nav-link.active {
              color: var(--gold-primary);
            }
            .nav-link::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 0;
              height: 1px;
              background-color: var(--gold-primary);
              transition: width 0.3s ease;
            }
            .nav-link:hover::after, .nav-link.active::after {
              width: 100%;
            }
          `}</style>
          
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/collections" className={`nav-link ${location.pathname === '/collections' ? 'active' : ''}`}>Collections</Link>

          {/* WOMEN MEGA TRIGGER */}
          <div 
            onMouseEnter={() => setActiveMega('women')} 
            onMouseLeave={() => setActiveMega(null)}
            style={{ position: 'relative' }}
          >
            <span className="nav-link">
              Women <ChevronDown size={14} />
            </span>
            {activeMega === 'women' && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '-1rem',
                width: '320px',
                backgroundColor: '#161616',
                border: '1px solid var(--border-gold)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-dark)',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0.75rem',
                zIndex: 110,
                animation: 'fadeIn 0.2s ease'
              }}>
                <div className="editorial-label">Women's Edit</div>
                <Link to="/collections?cat=kurtas" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Kurtas & Kurtis</Link>
                <Link to="/collections?cat=stitched-suits" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Stitched Suits</Link>
                <Link to="/collections?cat=unstitched-suits" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Unstitched Suits</Link>
                <Link to="/collections?cat=partywear" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Partywear</Link>
                <Link to="/collections?cat=formal-wear" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Formal & Office Wear</Link>
                <Link to="/collections?cat=bridal-wear" style={{ color: 'var(--gold-primary)', fontSize: '0.9rem', fontWeight: 600 }}>Bridal Wear</Link>
              </div>
            )}
          </div>

          {/* REGIONAL EDIT TRIGGER */}
          <div 
            onMouseEnter={() => setActiveMega('regional')} 
            onMouseLeave={() => setActiveMega(null)}
            style={{ position: 'relative' }}
          >
            <span className="nav-link">
              Regional Edit <ChevronDown size={14} />
            </span>
            {activeMega === 'regional' && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '-1rem',
                width: '280px',
                backgroundColor: '#161616',
                border: '1px solid var(--border-gold)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-dark)',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0.75rem',
                zIndex: 110
              }}>
                <div className="editorial-label">India's Regional Grace</div>
                <Link to="/regional/punjabi" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Punjabi Edit</Link>
                <Link to="/regional/rajasthani" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Rajasthani Edit</Link>
                <Link to="/regional/himachali" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Himachali Edit</Link>
              </div>
            )}
          </div>

          {/* JEWELLERY TRIGGER */}
          <div 
            onMouseEnter={() => setActiveMega('jewellery')} 
            onMouseLeave={() => setActiveMega(null)}
            style={{ position: 'relative' }}
          >
            <span className="nav-link">
              Jewellery <ChevronDown size={14} />
            </span>
            {activeMega === 'jewellery' && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '-1rem',
                width: '280px',
                backgroundColor: '#161616',
                border: '1px solid var(--border-gold)',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-dark)',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '0.75rem',
                zIndex: 110
              }}>
                <div className="editorial-label">Accessories & Jewels</div>
                <Link to="/collections?cat=jewellery" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Chokers & Necklaces</Link>
                <Link to="/collections?cat=jewellery" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Earrings & Jhumkas</Link>
                <Link to="/collections?cat=bangles" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Bangles & Kadas</Link>
                <Link to="/collections?cat=jewellery" style={{ color: 'var(--gold-primary)', fontSize: '0.9rem' }}>Bridal Jewellery Sets</Link>
              </div>
            )}
          </div>

          <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link to="/journal" className={`nav-link ${location.pathname.startsWith('/journal') ? 'active' : ''}`}>Journal</Link>
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={onOpenSearch}
            aria-label="Search catalog"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Search size={20} />
          </button>

          <a
            href={`https://wa.me/${storeConfig.contact.whatsapp}?text=${encodeURIComponent("Hello Akanksha's Collections, I am visiting your website and would like to enquire about your boutique collections.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ display: 'none', textDecoration: 'none', padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}
          >
            <style>{`
              @media (min-width: 640px) {
                .btn-whatsapp-desktop { display: inline-flex !important; }
              }
            `}</style>
            <span className="btn-whatsapp-desktop">
              <MessageCircle size={16} /> WhatsApp
            </span>
          </a>

          <Link
            to="/visit-us"
            className="btn-outline-gold"
            style={{ display: 'none', padding: '0.6rem 1.2rem', fontSize: '0.75rem' }}
          >
            <style>{`
              @media (min-width: 768px) {
                .btn-visit-desktop { display: inline-flex !important; }
              }
            `}</style>
            <span className="btn-visit-desktop">
              <MapPin size={14} /> Visit Store
            </span>
          </Link>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--gold-primary)',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            <style>{`
              @media (min-width: 1024px) {
                .mobile-toggle { display: none !important; }
              }
            `}</style>
            <span className="mobile-toggle">
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </span>
          </button>
        </div>
      </div>

      {/* FULL-SCREEN MOBILE EDITORIAL DRAWER */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#0D0D0D',
          zIndex: 999,
          padding: '2rem 1.5rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border-gold)',
          animation: 'fadeIn 0.3s ease'
        }}>
          <div>
            <div className="editorial-label">Navigation Menu</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '1rem' }}>
              <Link to="/" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>Home</Link>
              <Link to="/collections" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>All Collections</Link>
              <Link to="/collections?cat=kurtas" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', paddingLeft: '1rem' }}>Kurtas & Kurtis</Link>
              <Link to="/collections?cat=stitched-suits" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', paddingLeft: '1rem' }}>Stitched Suits</Link>
              <Link to="/collections?cat=unstitched-suits" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', paddingLeft: '1rem' }}>Unstitched Suits</Link>
              <Link to="/collections?cat=partywear" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', paddingLeft: '1rem' }}>Partywear & Formal</Link>
              <Link to="/collections?cat=jewellery" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', paddingLeft: '1rem' }}>Artificial Jewellery</Link>
              <Link to="/regional/punjabi" style={{ fontSize: '1.1rem', color: 'var(--gold-primary)', paddingLeft: '1rem' }}>Punjabi Regional Edit</Link>
              <Link to="/regional/rajasthani" style={{ fontSize: '1.1rem', color: 'var(--gold-primary)', paddingLeft: '1rem' }}>Rajasthani Regional Edit</Link>
              <Link to="/regional/himachali" style={{ fontSize: '1.1rem', color: 'var(--gold-primary)', paddingLeft: '1rem' }}>Himachali Regional Edit</Link>
              <Link to="/gallery" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>Gallery</Link>
              <Link to="/about" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>About Boutique</Link>
              <Link to="/visit-us" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--gold-primary)' }}>Visit Our Store</Link>
              <Link to="/contact" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>Contact Us</Link>
              <Link to="/journal" style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', color: 'var(--text-primary)' }}>Journal & Blog</Link>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Shop No. 101, Satya Complex, Near Nadaun Chowk, Hamirpur, HP – 177001
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={`tel:${storeConfig.contact.phone}`} className="btn-outline-gold" style={{ flex: 1, padding: '0.75rem', fontSize: '0.8rem' }}>
                <Phone size={14} /> Call Store
              </a>
              <a href={`https://wa.me/${storeConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ flex: 1, padding: '0.75rem', fontSize: '0.8rem' }}>
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
