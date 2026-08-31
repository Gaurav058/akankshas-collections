import React, { useState } from 'react';
import { X, MessageCircle, Phone, CheckCircle, MapPin } from 'lucide-react';
import type { Product } from '../data/products';
import { storeConfig } from '../data/storeConfig';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [selectedImg, setSelectedImg] = useState(0);

  if (!product) return null;

  const enquiryMessage = `Hello Akanksha's Collections, I am interested in knowing more about "${product.name}" (${product.categoryLabel}, ${product.style}). Could you confirm availability at your Satya Complex, Hamirpur store?`;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(10, 10, 10, 0.9)',
      backdropFilter: 'blur(12px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      animation: 'fadeIn 0.25s ease'
    }}>
      <div style={{
        backgroundColor: '#161616',
        border: '1px solid var(--border-gold)',
        width: '100%',
        maxWidth: '900px',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        boxShadow: 'var(--shadow-dark)'
      }}>
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          aria-label="Close detail modal"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: '#0D0D0D',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            padding: '0.5rem',
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          <X size={20} />
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          padding: '2rem'
        }}>
          {/* IMAGE GALLERY */}
          <div>
            <div style={{
              width: '100%',
              height: '380px',
              backgroundColor: '#0D0D0D',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1rem',
              overflow: 'hidden'
            }}>
              <img
                src={product.images[selectedImg] || product.images[0]}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {product.images.length > 1 && (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(idx)}
                    style={{
                      width: '60px',
                      height: '60px',
                      border: selectedImg === idx ? '2px solid var(--gold-primary)' : '1px solid var(--border-subtle)',
                      background: 'none',
                      padding: 0,
                      cursor: 'pointer'
                    }}
                  >
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* PRODUCT SPECS & ACTION */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span className="editorial-label" style={{ margin: 0 }}>{product.categoryLabel}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>•</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--gold-primary)', fontWeight: 600 }}>{product.occasionLabel}</span>
              </div>

              <h2 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                {product.name}
              </h2>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                {product.description}
              </p>

              {/* SPECIFICATION PILLS */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                padding: '1rem',
                backgroundColor: '#0D0D0D',
                border: '1px solid var(--border-subtle)',
                marginBottom: '1.5rem',
                fontSize: '0.85rem'
              }}>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Style Silhouette</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{product.style}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Color Palette</span>
                  <strong style={{ color: 'var(--text-primary)' }}>{product.color}</strong>
                </div>
                {product.fabric && (
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Fabric Detail</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{product.fabric}</strong>
                  </div>
                )}
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>Store Availability</span>
                  <strong style={{ color: 'var(--gold-primary)' }}>{product.availability}</strong>
                </div>
              </div>

              {/* KEY DETAILS */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-primary)', marginBottom: '0.5rem' }}>
                  Craft & Features
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {product.details.map((detail, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={14} style={{ color: 'var(--gold-primary)', flexShrink: 0 }} />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`https://wa.me/${storeConfig.contact.whatsapp}?text=${encodeURIComponent(enquiryMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', textDecoration: 'none', justifyContent: 'center' }}
              >
                <MessageCircle size={18} /> Enquire on WhatsApp
              </a>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={`tel:${storeConfig.contact.phone}`}
                  className="btn-outline-gold"
                  style={{ flex: 1, textDecoration: 'none', justifyContent: 'center', fontSize: '0.8rem' }}
                >
                  <Phone size={14} /> Call Store
                </a>
                <a
                  href="/visit-us"
                  className="btn-outline-gold"
                  style={{ flex: 1, textDecoration: 'none', justifyContent: 'center', fontSize: '0.8rem' }}
                >
                  <MapPin size={14} /> Satya Complex
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
