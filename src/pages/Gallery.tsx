import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { galleryItems } from '../data/galleryItems';

export const Gallery: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCat === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCat);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh', paddingBottom: '6rem' }}>
      <SeoHead
        title="Store & Collection Gallery | Akanksha's Collections Hamirpur"
        description="View authentic photographs of Akanksha's Collections store interior, ethnic suits, artificial jewellery, and boutique showcases in Satya Complex, Hamirpur."
      />

      {/* HEADER */}
      <section style={{
        backgroundColor: '#141414',
        borderBottom: '1px solid var(--border-gold)',
        padding: '4rem 0 3rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="editorial-label">Visual Gallery</span>
          <h1 className="font-serif" style={{ fontSize: '3.2rem', marginBottom: '1rem' }}>
            Store & Collection Showcase
          </h1>
          <div className="gold-line" style={{ margin: '1rem auto', maxWidth: '140px' }}></div>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Explore real photographs of our Satya Complex boutique, curated ethnic suits, artificial jewellery displays, and regional edits.
          </p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section style={{ padding: '2rem 0', borderBottom: '1px solid var(--border-subtle)', backgroundColor: '#121212' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'store', label: 'Store Interior' },
              { id: 'ethnic-wear', label: 'Ethnic Wear' },
              { id: 'jewellery', label: 'Jewellery' },
              { id: 'bridal', label: 'Bridal' },
              { id: 'formal-wear', label: 'Formal & Fabrics' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCat(tab.id)}
                style={{
                  background: selectedCat === tab.id ? 'var(--gold-primary)' : 'var(--bg-card)',
                  color: selectedCat === tab.id ? '#000' : 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)',
                  padding: '0.6rem 1.2rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="grid-3">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="glass-card img-hover-zoom"
                onClick={() => setLightboxIndex(idx)}
                style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ height: '340px', backgroundColor: '#000' }}>
                  <img src={item.image} alt={item.title} className="img-editorial" />
                </div>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(13, 13, 13, 0.65)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                >
                  <span className="editorial-label" style={{ marginBottom: '0.2rem' }}>{item.categoryLabel}</span>
                  <h3 className="font-serif" style={{ fontSize: '1.3rem', color: '#FFF' }}>{item.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-primary)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                    <Maximize2 size={14} /> Expand High-Res Photo
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeItem && lightboxIndex !== null && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(5, 5, 5, 0.95)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem'
        }}>
          <button
            onClick={() => setLightboxIndex(null)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: '#161616',
              border: '1px solid var(--border-gold)',
              color: 'var(--text-primary)',
              padding: '0.5rem',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <X size={24} />
          </button>

          <button
            onClick={() => setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length)}
            style={{
              position: 'absolute',
              left: '1.5rem',
              background: '#161616',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              padding: '0.75rem',
              cursor: 'pointer'
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
            <img
              src={activeItem.image}
              alt={activeItem.title}
              style={{ maxHeight: '70vh', maxWidth: '100%', objectFit: 'contain', border: '1px solid var(--border-gold)' }}
            />
            <div style={{ marginTop: '1.5rem' }}>
              <span className="editorial-label">{activeItem.categoryLabel}</span>
              <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {activeItem.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{activeItem.description}</p>
            </div>
          </div>

          <button
            onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredItems.length)}
            style={{
              position: 'absolute',
              right: '1.5rem',
              background: '#161616',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              padding: '0.75rem',
              cursor: 'pointer'
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};
