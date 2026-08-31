import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Navigation, Compass, CheckCircle } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { storeConfig } from '../data/storeConfig';

export const VisitUs: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh', paddingBottom: '6rem' }}>
      <SeoHead
        title="Visit Our Store | Akanksha's Collections Satya Complex Hamirpur"
        description="Visit Akanksha's Collections at Shop No. 101, Satya Complex, Near Nadaun Chowk, Hamirpur, HP – 177001. Find store opening hours, phone number, and directions."
      />

      {/* HEADER HERO */}
      <section style={{
        backgroundColor: '#141414',
        borderBottom: '1px solid var(--border-gold)',
        padding: '5rem 0 3.5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="editorial-label">Local Store Guide</span>
          <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            Visit Akanksha's Collections
          </h1>
          <div className="gold-line" style={{ margin: '1rem auto', maxWidth: '140px' }}></div>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Experience our women's fashion, ethnic suits, and artificial jewellery in person at Satya Complex, Hamirpur.
          </p>
        </div>
      </section>

      {/* MAIN LOCATION & HOURS SECTION */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
            {/* LEFT: ADDRESS & CONTACT CARDS */}
            <div>
              <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <div className="editorial-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={14} /> Boutique Address
                </div>
                <h2 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                  Akanksha's Collections
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Shop No. 101, Satya Complex,<br />
                  Near Nadaun Chowk, Hamirpur,<br />
                  Himachal Pradesh – 177001, India
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Phone size={16} style={{ color: 'var(--gold-primary)' }} />
                    <a href={`tel:${storeConfig.contact.phone}`} style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                      {storeConfig.contact.phoneDisplay}
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Mail size={16} style={{ color: 'var(--gold-primary)' }} />
                    <a href={`mailto:${storeConfig.contact.email}`} style={{ color: 'var(--text-primary)' }}>
                      {storeConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href={storeConfig.socials.googleBusiness} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ flex: 1 }}>
                    <Navigation size={16} /> Get Directions
                  </a>
                  <a href={`https://wa.me/${storeConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ flex: 1 }}>
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </div>

              {/* LANDMARK & ACCESSIBILITY INFO */}
              <div className="glass-card" style={{ padding: '2rem' }}>
                <div className="editorial-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Compass size={14} /> Landmark & Location Tips
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <CheckCircle size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span>Located conveniently inside Satya Complex near Nadaun Chowk, Hamirpur.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <CheckCircle size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span>Ground floor boutique (Shop No. 101) with easy walk-in access and trial area.</span>
                  </li>
                  <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                    <CheckCircle size={16} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span>Personal styling and jewellery matching available directly at the counter.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT: OPENING HOURS & GOOGLE MAP */}
            <div>
              <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <div className="editorial-label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Clock size={14} /> Store Opening Hours
                </div>
                <h3 className="font-serif" style={{ fontSize: '1.6rem', marginBottom: '1.25rem' }}>
                  Weekly Schedule
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {storeConfig.openingHours.map((schedule, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingBottom: '0.5rem',
                        borderBottom: i < storeConfig.openingHours.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                        fontSize: '0.9rem'
                      }}
                    >
                      <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{schedule.day}</span>
                      <span style={{ color: schedule.isOpen ? 'var(--gold-primary)' : 'var(--text-muted)' }}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MAP EMBED CONTAINER */}
              <div style={{
                border: '1px solid var(--border-gold)',
                height: '320px',
                backgroundColor: '#141414',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <iframe
                  title="Google Maps Location of Akanksha's Collections Satya Complex Hamirpur"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0, filter: 'grayscale(80%) invert(90%) contrast(120%)' }}
                  src="https://maps.google.com/maps?q=Satya+Complex+Nadaun+Chowk+Hamirpur+Himachal+Pradesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORE GALLERY PREVIEW */}
      <section style={{ padding: '4rem 0', backgroundColor: '#121212', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="editorial-label">In-Store Ambiance</span>
            <h2 className="font-serif">Look Inside Our Hamirpur Store</h2>
          </div>
          <div className="grid-2">
            <div className="glass-card" style={{ padding: '0.5rem' }}>
              <img src="/assets/akankshas-collections-storefront.png" alt="Akanksha's Collections Storefront" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            </div>
            <div className="glass-card" style={{ padding: '0.5rem' }}>
              <img src="/assets/akankshas-collections-interior.png" alt="Akanksha's Collections Shop Interior" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
