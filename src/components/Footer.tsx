import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Navigation } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#0A0A0A',
      borderTop: '1px solid var(--border-gold)',
      paddingTop: '4.5rem',
      paddingBottom: '2.5rem',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* COLUMN 1: BRAND IDENTITY */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', marginBottom: '1.2rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid var(--border-gold)',
                backgroundColor: '#0D0D0D'
              }}>
                <img 
                  src="/assets/akankshas-collections-storefront.png" 
                  alt="Akanksha's Collections" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div>
                <span className="font-serif" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', lineHeight: 1 }}>
                  AKANKSHA'S
                </span>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600 }}>
                  COLLECTIONS
                </span>
              </div>
            </Link>

            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              "Wear Your Confidence | Style That Speaks You"
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
              A premium women's fashion, ethnic wear and artificial jewellery destination in Hamirpur, Himachal Pradesh.
            </p>
          </div>

          {/* COLUMN 2: COLLECTIONS */}
          <div>
            <div className="editorial-label">Collections</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem', fontSize: '0.9rem' }}>
              <Link to="/collections?cat=kurtas" style={{ color: 'var(--text-secondary)' }}>Kurtas & Kurtis</Link>
              <Link to="/collections?cat=stitched-suits" style={{ color: 'var(--text-secondary)' }}>Stitched Suits</Link>
              <Link to="/collections?cat=unstitched-suits" style={{ color: 'var(--text-secondary)' }}>Unstitched Suits</Link>
              <Link to="/collections?cat=partywear" style={{ color: 'var(--text-secondary)' }}>Partywear</Link>
              <Link to="/collections?cat=formal-wear" style={{ color: 'var(--text-secondary)' }}>Formal & Office Wear</Link>
              <Link to="/collections?cat=bridal-wear" style={{ color: 'var(--gold-primary)' }}>Bridal Edit</Link>
              <Link to="/collections?cat=jewellery" style={{ color: 'var(--text-secondary)' }}>Artificial Jewellery</Link>
              <Link to="/collections?cat=bangles" style={{ color: 'var(--text-secondary)' }}>Bangles & Accessories</Link>
            </div>
          </div>

          {/* COLUMN 3: EXPLORE */}
          <div>
            <div className="editorial-label">Explore</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem', fontSize: '0.9rem' }}>
              <Link to="/about" style={{ color: 'var(--text-secondary)' }}>About Akanksha's</Link>
              <Link to="/regional/punjabi" style={{ color: 'var(--text-secondary)' }}>Punjabi Regional Edit</Link>
              <Link to="/regional/rajasthani" style={{ color: 'var(--text-secondary)' }}>Rajasthani Regional Edit</Link>
              <Link to="/regional/himachali" style={{ color: 'var(--text-secondary)' }}>Himachali Regional Edit</Link>
              <Link to="/gallery" style={{ color: 'var(--text-secondary)' }}>Store Gallery</Link>
              <Link to="/journal" style={{ color: 'var(--text-secondary)' }}>Fashion Journal</Link>
              <Link to="/visit-us" style={{ color: 'var(--gold-primary)' }}>Visit Our Store</Link>
              <Link to="/contact" style={{ color: 'var(--text-secondary)' }}>Contact Us</Link>
            </div>
          </div>

          {/* COLUMN 4: STORE ADDRESS & NAP */}
          <div>
            <div className="editorial-label">Store Location</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
                <span>{storeConfig.address.fullAddress}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <a href={`tel:${storeConfig.contact.phone}`} style={{ color: 'var(--text-primary)' }}>
                  {storeConfig.contact.phoneDisplay}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                <a href={`mailto:${storeConfig.contact.email}`} style={{ color: 'var(--text-primary)' }}>
                  {storeConfig.contact.email}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <a 
                  href={storeConfig.socials.googleBusiness} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-outline-gold" 
                  style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', flex: 1 }}
                >
                  <Navigation size={12} /> Get Directions
                </a>
                <a 
                  href={`https://wa.me/${storeConfig.contact.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-whatsapp" 
                  style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', flex: 1 }}
                >
                  <MessageCircle size={12} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* LEGAL & COPYRIGHT BOTTOM BAR */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} Akanksha's Collections. All rights reserved. Satya Complex, Hamirpur, Himachal Pradesh.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/faqs" style={{ color: 'var(--text-muted)' }}>FAQs</Link>
            <Link to="/privacy-policy" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: 'var(--text-muted)' }}>Terms & Conditions</Link>
            <Link to="/shipping-policy" style={{ color: 'var(--text-muted)' }}>Shipping Policy</Link>
            <Link to="/returns-policy" style={{ color: 'var(--text-muted)' }}>Returns Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
