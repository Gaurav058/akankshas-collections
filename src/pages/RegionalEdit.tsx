import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sparkles, MessageCircle } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { products } from '../data/products';
import type { Product } from '../data/products';
import { storeConfig } from '../data/storeConfig';

interface RegionalEditProps {
  onSelectProduct: (p: Product) => void;
}

export const RegionalEdit: React.FC<RegionalEditProps> = ({ onSelectProduct }) => {
  const { region } = useParams<{ region: string }>();

  const regionalContent = {
    punjabi: {
      title: "The Punjabi Edit",
      subtitle: "Color, Celebration & Statement Ethnic Styling",
      tag: "India's Regional Grace",
      heroImg: "/assets/punjabi-suit-collection.png",
      description: "Celebrating classic Punjabi suit silhouettes, hand-finished zari embroidery, vibrant Phulkari-inspired accents, and flared salwars crafted for Anand Karaj, Sangeet, and festive family gatherings.",
      highlights: [
        "Traditional Salwar & Sharara Cuts",
        "Zari & Gota Patti Neckline Work",
        "Vibrant Duaptta Combinations",
        "In-Store Trial & Fitting in Hamirpur"
      ]
    },
    rajasthani: {
      title: "The Rajasthani Edit",
      subtitle: "Traditional Silhouettes, Rich Detailing & Royal Character",
      tag: "Royal Heritage",
      heroImg: "/assets/jewellery-collection-showcase.png",
      description: "Inspired by Rajasthani royal charm, our collection showcases Gota Patti borders, traditional motif embroidery, vivid bandhani tones, and exquisite Kundan jewellery pairings.",
      highlights: [
        "Gota Patti & Metallic Border Detailing",
        "Faux Kundan & Meenakari Jewellery Sets",
        "Velvet Bangle Stacks & Accessories",
        "Festive Partywear Suits"
      ]
    },
    himachali: {
      title: "The Himachali Edit",
      subtitle: "Regional Charm, Graceful Textures & Culturally Inspired Styling",
      tag: "Regional Heritage",
      heroImg: "/assets/akankshas-collections-interior.png",
      description: "Honoring the textile elegance of Himachal Pradesh with refined woven motif jackets, warm wool-blend formal suit layers, and graceful silhouettes designed for dignified poise.",
      highlights: [
        "Woven Motif Tailored Jackets",
        "Cozy Formal Suit Ensembles",
        "Subtle Silver & Pearl Accessories",
        "Practical Luxury for Hill Climate"
      ]
    }
  };

  const key = (region && regionalContent[region as keyof typeof regionalContent]) ? (region as keyof typeof regionalContent) : 'punjabi';
  const content = regionalContent[key];

  const regionalProducts = products.filter(p => p.regionalInfluence === key);

  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh', paddingBottom: '6rem' }}>
      <SeoHead
        title={`${content.title} | Akanksha's Collections Hamirpur`}
        description={`Explore the ${content.title}: ${content.subtitle}. Visit Akanksha's Collections at Satya Complex, Hamirpur, Himachal Pradesh.`}
      />

      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        padding: '6rem 0 4rem 0',
        backgroundColor: '#141414',
        borderBottom: '1px solid var(--border-gold)'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="editorial-label">{content.tag}</span>
              <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                {content.title}
              </h1>
              <h3 className="font-serif text-gold" style={{ fontSize: '1.4rem', marginBottom: '1.25rem' }}>
                {content.subtitle}
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7 }}>
                {content.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
                {content.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                    <Sparkles size={14} style={{ color: 'var(--gold-primary)' }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href={`https://wa.me/${storeConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello, I would like to inquire about items from the ${content.title}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle size={16} /> Enquire on WhatsApp
                </a>
                <Link to="/visit-us" className="btn-outline-gold">
                  Visit Store
                </Link>
              </div>
            </div>

            <div style={{ border: '1px solid var(--border-gold)', padding: '0.5rem', backgroundColor: '#0D0D0D' }}>
              <img src={content.heroImg} alt={content.title} style={{ width: '100%', height: '420px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS IN THIS EDIT */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ marginBottom: '3rem' }}>
            <span className="editorial-label">Curated Selection</span>
            <h2 className="font-serif" style={{ fontSize: '2.4rem' }}>{content.title} Showcases</h2>
          </div>

          <div className="grid-3">
            {regionalProducts.map(product => (
              <div key={product.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="img-hover-zoom" style={{ height: '320px', backgroundColor: '#000', cursor: 'pointer' }} onClick={() => onSelectProduct(product)}>
                  <img src={product.images[0]} alt={product.name} className="img-editorial" />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <span className="editorial-label" style={{ marginBottom: '0.4rem' }}>{product.categoryLabel}</span>
                    <h3 className="font-serif" style={{ fontSize: '1.3rem', marginBottom: '0.5rem', cursor: 'pointer' }} onClick={() => onSelectProduct(product)}>
                      {product.name}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{product.description}</p>
                  </div>
                  <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gold-primary)' }}>{product.availability}</span>
                    <button onClick={() => onSelectProduct(product)} className="btn-outline-gold" style={{ padding: '0.4rem 0.85rem', fontSize: '0.725rem' }}>
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
