import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, Sparkles, Shield } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const About: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh', paddingBottom: '6rem' }}>
      <SeoHead
        title="About Akanksha's Collections | Boutique Story & Values"
        description="Learn about Akanksha's Collections, a women's fashion, ethnic wear, and artificial jewellery destination located at Satya Complex, Hamirpur, Himachal Pradesh."
      />

      {/* HEADER HERO */}
      <section style={{
        backgroundColor: '#141414',
        borderBottom: '1px solid var(--border-gold)',
        padding: '5rem 0 4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="editorial-label">Brand Narrative</span>
          <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            About Akanksha's Collections
          </h1>
          <div className="gold-line" style={{ margin: '1rem auto', maxWidth: '140px' }}></div>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 300 }}>
            "Wear Your Confidence | Style That Speaks You"
          </p>
        </div>
      </section>

      {/* MAIN STORY SECTION */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <span className="editorial-label">Curated Destination</span>
              <h2 className="font-serif" style={{ fontSize: '2.6rem', marginBottom: '1.5rem' }}>
                A Women's Fashion & Ethnic Wear Boutique in Hamirpur
              </h2>
              <div className="gold-line-left" style={{ marginBottom: '1.5rem' }}></div>
              <p style={{ marginBottom: '1.25rem', lineHeight: 1.8 }}>
                Founded with a passion for celebrating women's personal confidence and Indian sartorial heritage, <strong>Akanksha's Collections</strong> has grown into a cherished fashion destination in Hamirpur, Himachal Pradesh.
              </p>
              <p style={{ marginBottom: '1.25rem', lineHeight: 1.8 }}>
                Located at Shop No. 101, Satya Complex, near Nadaun Chowk, our store thoughtfully curates daily wear kurtas, stitched and unstitched suits, vibrant Punjabi silhouettes, royal Rajasthani-inspired festive ensembles, Himachali coat suits, partywear dresses, and matching artificial jewellery sets under one roof.
              </p>
              <p style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
                We believe shopping for an outfit should feel personal, joyful, and effortless. Whether you are preparing for a relative's wedding, choosing festive wear for Karwa Chauth or Diwali, or seeking comfortable office attire, our team provides warm, personalized guidance.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/collections" className="btn-gold">
                  Explore Collections
                </Link>
                <Link to="/visit-us" className="btn-outline-gold">
                  <MapPin size={16} /> Visit Satya Complex
                </Link>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ border: '1px solid var(--border-gold)', padding: '0.75rem', backgroundColor: '#141414' }}>
                <img
                  src="/assets/akankshas-collections-storefront.png"
                  alt="Akanksha's Collections storefront board in Hamirpur"
                  style={{ width: '100%', height: '440px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{ padding: '5rem 0', backgroundColor: '#121212', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
            <span className="editorial-label">What Drives Us</span>
            <h2 className="font-serif">Our Core Commitments</h2>
            <div className="gold-line" style={{ margin: '1rem auto', maxWidth: '120px' }}></div>
          </div>

          <div className="grid-3">
            <div className="glass-card" style={{ padding: '2rem' }}>
              <Sparkles size={28} style={{ color: 'var(--gold-primary)', marginBottom: '1rem' }} />
              <h3 className="font-serif" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Thoughtful Curation</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Every suit, kurti, and jewellery set in our boutique is individually selected for fabric feel, embroidery quality, and contemporary aesthetic appeal.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <Heart size={28} style={{ color: 'var(--gold-primary)', marginBottom: '1rem' }} />
              <h3 className="font-serif" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Personalized Experience</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                We assist customers with color coordination, dupatta draping ideas, and complete Kundan jewellery pairing to finish their look effortlessly.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem' }}>
              <Shield size={28} style={{ color: 'var(--gold-primary)', marginBottom: '1rem' }} />
              <h3 className="font-serif" style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Authentic Local Service</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Rooted in Hamirpur at Satya Complex, we offer an inviting in-store atmosphere, trial fittings, and custom tailoring guidance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
