import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Sparkles, MessageCircle, Phone, Shield, Heart } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { storeConfig } from '../data/storeConfig';
import { products, productCategories } from '../data/products';
import type { Product } from '../data/products';
import { blogArticles } from '../data/blogArticles';

interface HomeProps {
  onSelectProduct: (p: Product) => void;
}

export const Home: React.FC<HomeProps> = ({ onSelectProduct }) => {
  const featuredProducts = products.filter(p => p.featured);
  const latestArticles = blogArticles.slice(0, 3);

  return (
    <div>
      <SeoHead
        title="Akanksha's Collections | Women's Ethnic Wear & Fashion in Hamirpur"
        description="Explore women's ethnic wear, stitched suits, unstitched dress materials, partywear, bridal outfits, and artificial jewellery at Akanksha's Collections in Satya Complex, Hamirpur, HP."
      />

      {/* SECTION 1 — CINEMATIC HERO */}
      <section style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#0A0A0A',
        backgroundImage: 'linear-gradient(180deg, rgba(13, 13, 13, 0.4) 0%, rgba(13, 13, 13, 0.95) 100%), url(/assets/punjabi-suit-collection.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 25%',
        borderBottom: '1px solid var(--border-gold)'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{ maxWidth: '780px' }}>
            <span className="editorial-label" style={{ background: 'var(--gold-glass)', padding: '0.4rem 1rem', border: '1px solid var(--border-gold)' }}>
              Satya Complex, Hamirpur • Himachal Pradesh
            </span>

            <h1 className="font-serif animate-fade-in" style={{
              fontSize: 'clamp(2.8rem, 6vw, 5.2rem)',
              lineHeight: 1.08,
              marginTop: '1rem',
              marginBottom: '1.2rem',
              color: '#FDFBF7'
            }}>
              Style That Speaks You
            </h1>

            <p style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
              color: '#D1CDC4',
              marginBottom: '2rem',
              fontWeight: 300,
              maxWidth: '640px',
              lineHeight: 1.6
            }}>
              Women's fashion, ethnic elegance and artificial jewellery — thoughtfully curated for every celebration and everyday confidence.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/collections" className="btn-gold">
                Explore Collections <ArrowRight size={16} />
              </Link>
              <Link to="/visit-us" className="btn-outline-gold">
                <MapPin size={16} /> Visit Our Store
              </Link>
            </div>

            <div style={{
              marginTop: '3.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              borderTop: '1px solid rgba(253, 251, 247, 0.1)',
              paddingTop: '1.5rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={16} style={{ color: 'var(--gold-primary)' }} />
                <span>Curated Ethnic & Western Wear</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Shield size={16} style={{ color: 'var(--gold-primary)' }} />
                <span>Authentic In-Store Fitting</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Heart size={16} style={{ color: 'var(--gold-primary)' }} />
                <span>Complete Jewellery Matching</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — BRAND INTRODUCTION */}
      <section style={{ padding: '6rem 0', backgroundColor: '#0D0D0D' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <span className="editorial-label">Our Philosophy</span>
              <h2 className="font-serif" style={{ marginBottom: '1.5rem', fontSize: '2.8rem' }}>
                Where Tradition Meets Your Style
              </h2>
              <div className="gold-line-left" style={{ marginBottom: '1.5rem' }}></div>
              <p style={{ marginBottom: '1.25rem' }}>
                Located at Shop No. 101 in Satya Complex, Near Nadaun Chowk, <strong>Akanksha's Collections</strong> brings together women's clothing, ethnic wear, regional silhouettes, and fashion accessories under one roof in Hamirpur.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                Whether you are searching for daily wear kurtas, elegant stitched or unstitched suits, statement partywear, bridal attire, or matching artificial jewellery sets, our store is dedicated to helping you express your confidence through style.
              </p>
              <Link to="/about" className="btn-outline-gold">
                Discover Our Story <ArrowRight size={14} />
              </Link>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                border: '1px solid var(--border-gold)',
                padding: '0.75rem',
                backgroundColor: '#141414',
                boxShadow: 'var(--shadow-dark)'
              }}>
                <img
                  src="/assets/akankshas-collections-interior.png"
                  alt="Inside Akanksha's Collections store in Satya Complex Hamirpur"
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-1.5rem',
                right: '-1rem',
                backgroundColor: '#161616',
                border: '1px solid var(--border-gold)',
                padding: '1.25rem 1.5rem',
                maxWidth: '260px',
                boxShadow: 'var(--shadow-dark)'
              }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--gold-primary)' }}>
                  Boutique Location
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                  Satya Complex, Hamirpur
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Near Nadaun Chowk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SHOP BY CATEGORY */}
      <section style={{ padding: '5rem 0', backgroundColor: '#121212', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3.5rem auto' }}>
            <span className="editorial-label">Curated Wardrobe</span>
            <h2 className="font-serif">Shop By Category</h2>
            <div className="gold-line" style={{ margin: '1rem auto', maxWidth: '120px' }}></div>
            <p>Explore our diverse range of women's apparel and accessories designed for every aesthetic.</p>
          </div>

          <div className="grid-4">
            {productCategories.map((cat, idx) => (
              <Link
                key={cat.id}
                to={`/${cat.id}`}
                className="glass-card img-hover-zoom"
                style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px' }}
              >
                <div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--gold-primary)', fontWeight: 600, letterSpacing: '0.1em' }}>
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif" style={{ fontSize: '1.4rem', marginTop: '0.4rem', marginBottom: '0.5rem' }}>
                    {cat.name}
                  </h3>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{cat.desc}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {cat.count}
                  </span>
                  <ArrowRight size={14} style={{ color: 'var(--gold-primary)' }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — FEATURED COLLECTIONS GRID */}
      <section style={{ padding: '6rem 0', backgroundColor: '#0D0D0D' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', gap: '1rem' }}>
            <div>
              <span className="editorial-label">Store Highlights</span>
              <h2 className="font-serif">Featured Collection Pieces</h2>
            </div>
            <Link to="/collections" className="btn-outline-gold" style={{ fontSize: '0.75rem', padding: '0.6rem 1.5rem' }}>
              View Full Catalog <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid-3">
            {featuredProducts.slice(0, 6).map(product => (
              <div key={product.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="img-hover-zoom" style={{ height: '320px', backgroundColor: '#000', cursor: 'pointer' }} onClick={() => onSelectProduct(product)}>
                  <img src={product.images[0]} alt={product.name} className="img-editorial" />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span className="editorial-label" style={{ marginBottom: '0.4rem' }}>{product.categoryLabel}</span>
                    <h3 className="font-serif" style={{ fontSize: '1.25rem', marginBottom: '0.5rem', cursor: 'pointer' }} onClick={() => onSelectProduct(product)}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{product.description}</p>
                  </div>
                  <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gold-primary)', fontWeight: 600 }}>{product.availability}</span>
                    <button onClick={() => onSelectProduct(product)} className="btn-outline-gold" style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem' }}>
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — INDIA'S REGIONAL GRACE */}
      <section style={{ padding: '6rem 0', backgroundColor: '#141414', borderTop: '1px solid var(--border-gold)', borderBottom: '1px solid var(--border-gold)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <span className="editorial-label">Cultural Elegance</span>
            <h2 className="font-serif" style={{ fontSize: '3rem' }}>India's Regional Grace</h2>
            <div className="gold-line" style={{ margin: '1rem auto', maxWidth: '140px' }}></div>
            <p>Celebrating iconic style influences from Punjab, Rajasthan, and Himachal Pradesh thoughtfully presented for the modern woman.</p>
          </div>

          <div className="grid-3">
            {/* PUNJABI EDIT */}
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="editorial-label">Celebration & Flair</div>
              <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Punjabi Edit</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Vibrant silk suits, traditional pleated salwars, embroidered necklines, and statement dupattas celebrating regional flair.
              </p>
              <Link to="/punjabi-wear" className="btn-outline-gold" style={{ width: '100%' }}>
                Explore Punjabi Edit
              </Link>
            </div>

            {/* RAJASTHANI EDIT */}
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="editorial-label">Royal Heritage</div>
              <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Rajasthani Edit</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Gota patti detailing, bandhani patterns, vibrant jewel palettes, and regal Kundan accessories for festive occasions.
              </p>
              <Link to="/rajasthani-wear" className="btn-outline-gold" style={{ width: '100%' }}>
                Explore Rajasthani Edit
              </Link>
            </div>

            {/* HIMACHALI EDIT */}
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div className="editorial-label">Regional Charm</div>
              <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Himachali Edit</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Woven motif jacket suits, warm wool blend coats, and graceful textures honoring Himachali heritage.
              </p>
              <Link to="/himachali-wear" className="btn-outline-gold" style={{ width: '100%' }}>
                Explore Himachali Edit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — JEWELLERY & BRIDAL FEATURE */}
      <section style={{ padding: '6rem 0', backgroundColor: '#0D0D0D' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div style={{ border: '1px solid var(--border-gold)', padding: '0.5rem', backgroundColor: '#141414' }}>
              <img
                src="/assets/jewellery-collection-showcase.png"
                alt="Artificial Kundan Jewellery Collection showcase"
                style={{ width: '100%', height: '440px', objectFit: 'cover' }}
              />
            </div>
            <div>
              <span className="editorial-label">Complete The Look</span>
              <h2 className="font-serif" style={{ fontSize: '2.8rem', marginBottom: '1.25rem' }}>
                Curated Artificial Jewellery
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                From subtle everyday accents to royal statement Kundan chokers, chandelier earrings, and velvet bangle stacks — complete your outfit with accessories crafted for celebrations.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <li>✨ Kundan & Antique Gold Choker Necklaces</li>
                <li>✨ Statement Jhumkas, Chandbalis & Drop Earrings</li>
                <li>✨ Velvet Bangles & Metallic Kada Stacks</li>
                <li>✨ Bridal Jewellery Consultation at Store</li>
              </ul>
              <Link to="/jewellery" className="btn-gold">
                Explore Jewellery Section <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — REAL STORE EXPERIENCE */}
      <section style={{ padding: '6rem 0', backgroundColor: '#121212', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="editorial-label">Hamirpur Boutique</span>
            <h2 className="font-serif">The In-Store Experience</h2>
            <div className="gold-line" style={{ margin: '1rem auto', maxWidth: '120px' }}></div>
            <p>Visit us at Satya Complex for personal styling advice, trial fitting, and fabric selection.</p>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            <div className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="editorial-label">Boutique Address</span>
                <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
                  Satya Complex, Hamirpur
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Shop No. 101, Satya Complex, Near Nadaun Chowk, Hamirpur, Himachal Pradesh – 177001
                </p>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <strong>Opening Hours:</strong> Monday – Saturday: 10:00 AM – 7:30 PM
                </div>
              </div>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <a href={storeConfig.socials.googleBusiness} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ flex: 1 }}>
                  Get Directions
                </a>
                <a href={`tel:${storeConfig.contact.phone}`} className="btn-outline-gold" style={{ flex: 1 }}>
                  <Phone size={14} /> Call Store
                </a>
              </div>
            </div>

            <div style={{ border: '1px solid var(--border-gold)', padding: '0.5rem', backgroundColor: '#141414' }}>
              <img
                src="/assets/akankshas-collections-storefront.png"
                alt="Akanksha's Collections Storefront at Satya Complex Hamirpur"
                style={{ width: '100%', height: '100%', minHeight: '300px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 — JOURNAL HIGHLIGHTS */}
      <section style={{ padding: '6rem 0', backgroundColor: '#0D0D0D' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', gap: '1rem' }}>
            <div>
              <span className="editorial-label">Editorial Fashion Advice</span>
              <h2 className="font-serif">The Fashion Journal</h2>
            </div>
            <Link to="/journal" className="btn-outline-gold" style={{ fontSize: '0.75rem', padding: '0.6rem 1.5rem' }}>
              Read All Articles <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid-3">
            {latestArticles.map(article => (
              <Link key={article.slug} to={`/journal/${article.slug}`} className="glass-card img-hover-zoom" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                <div style={{ height: '220px', backgroundColor: '#000' }}>
                  <img src={article.image} alt={article.imageAlt} className="img-editorial" />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span className="editorial-label" style={{ fontSize: '0.7rem', marginBottom: '0.4rem' }}>{article.category}</span>
                    <h3 className="font-serif" style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{article.excerpt}</p>
                  </div>
                  <div style={{ marginTop: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--gold-primary)' }}>
                    <span>{article.readTime}</span>
                    <span style={{ textDecoration: 'underline' }}>Read Article →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — VISIT STORE CTA BANNER */}
      <section style={{
        padding: '5rem 0',
        backgroundColor: '#161616',
        borderTop: '1px solid var(--border-gold)',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <span className="editorial-label">Hamirpur Boutique</span>
          <h2 className="font-serif" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Visit Akanksha's Collections Today
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
            Experience our women's fashion, ethnic suits, and artificial jewellery collection in person.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/visit-us" className="btn-gold">
              <MapPin size={16} /> Get Directions to Store
            </Link>
            <a href={`https://wa.me/${storeConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={16} /> Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
