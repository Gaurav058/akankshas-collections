import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ArrowRight, Tag, BookOpen } from 'lucide-react';
import { products } from '../data/products';
import { blogArticles } from '../data/blogArticles';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = query.trim()
    ? products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.style.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredArticles = query.trim()
    ? blogArticles.filter(a =>
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        a.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(10, 10, 10, 0.92)',
      backdropFilter: 'blur(16px)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      padding: '4rem 1.5rem 2rem 1.5rem',
      animation: 'fadeIn 0.2s ease'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '750px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem'
      }}>
        {/* INPUT HEADER */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          borderBottom: '2px solid var(--gold-primary)',
          paddingBottom: '0.8rem'
        }}>
          <Search size={26} style={{ color: 'var(--gold-primary)' }} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search suits, kurtas, jewellery, articles..."
            autoFocus
            style={{
              width: '100%',
              background: 'none',
              border: 'none',
              outline: 'none',
              fontSize: '1.4rem',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-serif)'
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
          >
            <X size={26} />
          </button>
        </div>

        {/* RESULTS AREA */}
        <div style={{ overflowY: 'auto', maxHeight: '70vh', paddingRight: '0.5rem' }}>
          {query.trim() === '' ? (
            <div>
              <div className="editorial-label">Popular Searches</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: '0.75rem' }}>
                {['Punjabi Suit', 'Kundan Set', 'Unstitched Suits', 'Partywear', 'Bridal Wear', 'Bangles', 'Himachali Style'].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-secondary)',
                      padding: '0.5rem 1rem',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      borderRadius: '2px'
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* PRODUCTS MATCHING */}
              <div>
                <div className="editorial-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Tag size={14} /> Catalog Results ({filteredProducts.length})
                </div>
                {filteredProducts.length === 0 ? (
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>No products found matching "{query}".</p>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '0.75rem' }}>
                    {filteredProducts.slice(0, 4).map(p => (
                      <Link
                        key={p.id}
                        to={`/collections?id=${p.id}`}
                        onClick={onClose}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '0.75rem',
                          backgroundColor: 'var(--bg-card)',
                          border: '1px solid var(--border-subtle)',
                          textDecoration: 'none'
                        }}
                      >
                        <img src={p.images[0]} alt={p.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                        <div style={{ flex: 1 }}>
                          <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{p.name}</h4>
                          <span style={{ fontSize: '0.75rem', color: 'var(--gold-primary)', textTransform: 'uppercase' }}>{p.categoryLabel}</span>
                        </div>
                        <ArrowRight size={16} style={{ color: 'var(--text-muted)' }} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* ARTICLES MATCHING */}
              <div>
                <div className="editorial-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpen size={14} /> Journal Articles ({filteredArticles.length})
                </div>
                {filteredArticles.length === 0 ? (
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>No articles found matching "{query}".</p>
                ) : (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginTop: '0.75rem' }}>
                    {filteredArticles.slice(0, 3).map(a => (
                      <Link
                        key={a.slug}
                        to={`/journal/${a.slug}`}
                        onClick={onClose}
                        style={{
                          padding: '0.85rem',
                          backgroundColor: 'var(--bg-card)',
                          border: '1px solid var(--border-subtle)',
                          textDecoration: 'none'
                        }}
                      >
                        <h4 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{a.title}</h4>
                        <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{a.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
