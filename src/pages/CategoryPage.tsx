import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ChevronRight, CheckCircle } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { products } from '../data/products';
import type { Product } from '../data/products';
import { storeConfig } from '../data/storeConfig';

interface CategoryPageProps {
  categoryId: string;
  title: string;
  subtitle: string;
  editorialText: string;
  regionalInfluence?: 'Punjabi' | 'Rajasthani' | 'Himachali';
  onSelectProduct: (p: Product) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categoryId,
  title,
  subtitle,
  editorialText,
  regionalInfluence,
  onSelectProduct
}) => {
  // Filter items matching category or regional influence
  const filteredProducts = products.filter(p => {
    if (regionalInfluence) {
      const matchKey = regionalInfluence.toLowerCase();
      return p.regionalInfluence === matchKey;
    }
    if (categoryId === 'women') {
      return p.category !== 'jewellery' && p.category !== 'bangles';
    }
    if (categoryId === 'jewellery') {
      return p.category === 'jewellery' || p.category === 'bangles';
    }
    return p.category === categoryId;
  });

  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${title} | Akanksha's Collections Hamirpur`,
    "description": subtitle,
    "url": `https://akankshas-collections.vercel.app/${categoryId}`,
    "provider": {
      "@type": "ClothingStore",
      "name": storeConfig.brandName,
      "address": storeConfig.address.fullAddress,
      "telephone": storeConfig.contact.phoneDisplay
    }
  };

  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh', paddingBottom: '6rem' }}>
      <SeoHead
        title={`${title} | Akanksha's Collections Hamirpur`}
        description={subtitle}
        jsonLdSchema={categorySchema}
      />

      {/* BREADCRUMBS */}
      <div style={{ backgroundColor: '#121212', borderBottom: '1px solid var(--border-subtle)', padding: '0.75rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={12} />
          <Link to="/collections" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Collections</Link>
          <ChevronRight size={12} />
          <span style={{ color: 'var(--gold-primary)' }}>{title}</span>
        </div>
      </div>

      {/* CATEGORY HEADER BANNER */}
      <section style={{
        backgroundColor: '#141414',
        borderBottom: '1px solid var(--border-gold)',
        padding: '4rem 0 3.5rem 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <span className="editorial-label">Curated Boutique Collection</span>
          <h1 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: '1rem', color: 'var(--text-primary)' }}>
            {title}
          </h1>
          <div className="gold-line" style={{ margin: '1rem auto', maxWidth: '140px' }}></div>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            {editorialText}
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#1B1B1B', border: '1px solid var(--border-subtle)', padding: '0.5rem 1rem', fontSize: '0.825rem', color: 'var(--gold-light)' }}>
            <CheckCircle size={14} style={{ color: 'var(--gold-primary)' }} />
            <span>Available for viewing & fitting at Shop No. 101, Satya Complex, Hamirpur</span>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Showing <span style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>{filteredProducts.length}</span> curated items
            </div>
            <a
              href={`https://wa.me/${storeConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Akanksha's Collections, I am inquiring about outfit options in your ${title} category.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
            >
              <MessageCircle size={14} /> Ask Store Availability
            </a>
          </div>

          <div className="grid-3">
            {filteredProducts.map(product => (
              <div key={product.id} className="glass-card img-hover-zoom" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '340px', overflow: 'hidden', position: 'relative', backgroundColor: '#000' }}>
                  <img src={product.images[0]} alt={product.name} className="img-editorial" />
                  {product.regionalLabel && (
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      backgroundColor: 'rgba(13, 13, 13, 0.85)',
                      border: '1px solid var(--border-gold)',
                      color: 'var(--gold-primary)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '0.3rem 0.6rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}>
                      {product.regionalLabel}
                    </span>
                  )}
                  {product.featured && (
                    <span style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: 'var(--gold-primary)',
                      color: '#000',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '0.3rem 0.6rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}>
                      Featured
                    </span>
                  )}
                </div>

                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span className="editorial-label" style={{ margin: 0, fontSize: '0.7rem' }}>
                      {product.categoryLabel} {product.fabric ? `• ${product.fabric}` : ''}
                    </span>
                    <h3 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', margin: '0.5rem 0', lineHeight: 1.3 }}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                      {product.description}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                      {product.details.slice(0, 2).map((d, i) => (
                        <span key={i} style={{
                          backgroundColor: '#181818',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-secondary)',
                          fontSize: '0.725rem',
                          padding: '0.2rem 0.5rem'
                        }}>
                          {d}
                        </span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="btn-outline-gold"
                        style={{ flex: 1, padding: '0.6rem', fontSize: '0.775rem' }}
                      >
                        View Details
                      </button>
                      <a
                        href={`https://wa.me/${storeConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello Akanksha's Collections, I am inquiring about "${product.name}" (${product.categoryLabel}). Is it available at your Satya Complex, Hamirpur store?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp"
                        style={{ padding: '0.6rem 0.75rem', fontSize: '0.775rem' }}
                        aria-label={`Enquire about ${product.name} on WhatsApp`}
                      >
                        <MessageCircle size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED CATEGORY NAVIGATION */}
      <section style={{ padding: '4rem 0', backgroundColor: '#121212', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="editorial-label">Explore More Styles</span>
          <h2 className="font-serif" style={{ fontSize: '2rem', marginBottom: '2rem' }}>
            Other Boutique Collections
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/kurtas" className="btn-outline-gold">Kurtas & Kurtis</Link>
            <Link to="/stitched-suits" className="btn-outline-gold">Stitched Suits</Link>
            <Link to="/unstitched-suits" className="btn-outline-gold">Unstitched Suits</Link>
            <Link to="/partywear" className="btn-outline-gold">Partywear Gowns</Link>
            <Link to="/bridal-wear" className="btn-outline-gold">Bridal Edit</Link>
            <Link to="/jewellery" className="btn-outline-gold">Artificial Jewellery</Link>
          </div>
        </div>
      </section>
    </div>
  );
};
