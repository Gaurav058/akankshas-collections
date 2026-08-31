import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RefreshCw } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { products, productCategories } from '../data/products';
import type { Product } from '../data/products';

interface CollectionsProps {
  onSelectProduct: (p: Product) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectProduct }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const catQuery = searchParams.get('cat') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(catQuery);
  const [selectedOccasion, setSelectedOccasion] = useState('all');
  const [selectedRegional, setSelectedRegional] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchParams.get('cat')) {
      setSelectedCategory(searchParams.get('cat')!);
    }
  }, [searchParams]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', catId);
    }
    setSearchParams(searchParams);
  };

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesOccasion = selectedOccasion === 'all' || p.occasion === selectedOccasion;
    const matchesRegional = selectedRegional === 'all' || p.regionalInfluence === selectedRegional;
    const matchesSearch = searchTerm.trim() === '' || 
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.style.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesOccasion && matchesRegional && matchesSearch;
  });

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedOccasion('all');
    setSelectedRegional('all');
    setSearchTerm('');
    setSearchParams({});
  };

  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh', paddingBottom: '6rem' }}>
      <SeoHead
        title="Collections Catalog | Women's Suits & Jewellery in Hamirpur"
        description="Browse Akanksha's Collections catalog: stitched & unstitched suits, kurtis, partywear, bridal wear, Punjabi & Rajasthani outfits, and Kundan jewellery in Hamirpur."
      />

      {/* BANNER HEADER */}
      <section style={{
        backgroundColor: '#141414',
        borderBottom: '1px solid var(--border-gold)',
        padding: '4rem 0 3rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="editorial-label">Curated Boutique Catalog</span>
          <h1 className="font-serif" style={{ fontSize: '3.2rem', marginBottom: '1rem' }}>
            Women's Collections & Accessories
          </h1>
          <div className="gold-line" style={{ margin: '1rem auto', maxWidth: '140px' }}></div>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Explore our curated ethnic suits, formal wear, occasion dressing, and artificial jewellery available at our boutique in Satya Complex, Hamirpur.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section style={{
        backgroundColor: '#161616',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '1.5rem 0',
        position: 'sticky',
        top: '80px',
        zIndex: 40
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}>
            {/* CATEGORY TABS */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '0.4rem',
              maxWidth: '100%'
            }}>
              <button
                onClick={() => handleCategoryChange('all')}
                style={{
                  background: selectedCategory === 'all' ? 'var(--gold-primary)' : 'var(--bg-card)',
                  color: selectedCategory === 'all' ? '#000' : 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)',
                  padding: '0.5rem 1rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                All Items ({products.length})
              </button>
              {productCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  style={{
                    background: selectedCategory === cat.id ? 'var(--gold-primary)' : 'var(--bg-card)',
                    color: selectedCategory === cat.id ? '#000' : 'var(--text-secondary)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.5rem 1rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* OCCASION & REGIONAL DROPDOWNS */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <select
                value={selectedOccasion}
                onChange={(e) => setSelectedOccasion(e.target.value)}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-subtle)',
                  padding: '0.5rem 1rem',
                  fontSize: '0.8rem',
                  outline: 'none'
                }}
              >
                <option value="all">All Occasions</option>
                <option value="everyday">Everyday</option>
                <option value="office">Office & Formal</option>
                <option value="festive">Festive Dressing</option>
                <option value="party">Party Nights</option>
                <option value="wedding">Wedding Guest</option>
                <option value="bridal">Bridal Edit</option>
              </select>

              <select
                value={selectedRegional}
                onChange={(e) => setSelectedRegional(e.target.value)}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-subtle)',
                  padding: '0.5rem 1rem',
                  fontSize: '0.8rem',
                  outline: 'none'
                }}
              >
                <option value="all">All Regional Edits</option>
                <option value="punjabi">Punjabi Edit</option>
                <option value="rajasthani">Rajasthani Edit</option>
                <option value="himachali">Himachali Edit</option>
              </select>

              {(selectedCategory !== 'all' || selectedOccasion !== 'all' || selectedRegional !== 'all' || searchTerm !== '') && (
                <button
                  onClick={resetFilters}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--gold-primary)',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem'
                  }}
                >
                  <RefreshCw size={12} /> Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CATALOG GRID SECTION */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem', display: 'flex', justifyContent: 'space-between' }}>
            <span>Showing {filteredProducts.length} curated fashion items</span>
            <span>Satya Complex, Hamirpur</span>
          </div>

          {filteredProducts.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '5rem 2rem',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>No Matching Items Found</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                We couldn't find items matching your selected criteria. Try resetting your filter choices.
              </p>
              <button onClick={resetFilters} className="btn-gold">
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid-3">
              {filteredProducts.map(product => (
                <div key={product.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div
                    className="img-hover-zoom"
                    style={{ height: '340px', backgroundColor: '#000', cursor: 'pointer', position: 'relative' }}
                    onClick={() => onSelectProduct(product)}
                  >
                    <img src={product.images[0]} alt={product.name} className="img-editorial" />
                    {product.regionalLabel && (
                      <span style={{
                        position: 'absolute',
                        top: '1rem',
                        left: '1rem',
                        backgroundColor: 'rgba(13, 13, 13, 0.85)',
                        border: '1px solid var(--border-gold)',
                        color: 'var(--gold-primary)',
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase'
                      }}>
                        {product.regionalLabel}
                      </span>
                    )}
                  </div>

                  <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <span className="editorial-label" style={{ margin: 0, fontSize: '0.7rem' }}>{product.categoryLabel}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{product.occasionLabel}</span>
                      </div>
                      <h3
                        className="font-serif"
                        style={{ fontSize: '1.3rem', marginBottom: '0.5rem', cursor: 'pointer', color: 'var(--text-primary)' }}
                        onClick={() => onSelectProduct(product)}
                      >
                        {product.name}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                        {product.description}
                      </p>
                    </div>

                    <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--gold-primary)', fontWeight: 600 }}>
                        {product.availability}
                      </span>
                      <button
                        onClick={() => onSelectProduct(product)}
                        className="btn-outline-gold"
                        style={{ padding: '0.4rem 0.85rem', fontSize: '0.725rem' }}
                      >
                        View & Enquire
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
