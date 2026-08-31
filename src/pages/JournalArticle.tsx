import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, MessageCircle } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { blogArticles } from '../data/blogArticles';
import { storeConfig } from '../data/storeConfig';

export const JournalArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div style={{ padding: '6rem 0', textAlign: 'center', backgroundColor: '#0D0D0D', minHeight: '60vh' }}>
        <h2 className="font-serif" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Article Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>The journal entry you requested does not exist or has been relocated.</p>
        <Link to="/journal" className="btn-gold">Back to Journal</Link>
      </div>
    );
  }

  const relatedArticles = blogArticles.filter(a => a.slug !== article.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": `https://akankshascollections.com${article.image}`,
    "author": {
      "@type": "Person",
      "name": article.author,
      "jobTitle": article.authorTitle
    },
    "publisher": {
      "@type": "Organization",
      "name": storeConfig.brandName,
      "logo": {
        "@type": "ImageObject",
        "url": "https://akankshascollections.com/assets/akankshas-collections-storefront.png"
      }
    },
    "datePublished": article.publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://akankshascollections.com/journal/${article.slug}`
    }
  };

  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh', paddingBottom: '6rem' }}>
      <SeoHead
        title={`${article.title} | Akanksha's Collections Journal`}
        description={article.excerpt}
        image={article.image}
        jsonLdSchema={articleSchema}
      />

      {/* ARTICLE HEADER */}
      <section style={{
        backgroundColor: '#141414',
        borderBottom: '1px solid var(--border-gold)',
        padding: '4rem 0 3rem 0'
      }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <Link to="/journal" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--gold-primary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            <ArrowLeft size={14} /> Back to Journal
          </Link>

          <span className="editorial-label">{article.category}</span>
          <h1 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3.4rem)', lineHeight: 1.15, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            {article.title}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <User size={14} style={{ color: 'var(--gold-primary)' }} />
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{article.author}</span> ({article.authorTitle})
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Calendar size={14} />
              <span>{article.publishedDate}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Clock size={14} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* HERO FEATURED IMAGE */}
      <section style={{ padding: '3rem 0 1rem 0' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ border: '1px solid var(--border-gold)', padding: '0.5rem', backgroundColor: '#141414', marginBottom: '2.5rem' }}>
            <img src={article.image} alt={article.imageAlt} style={{ width: '100%', maxHeight: '480px', objectFit: 'cover' }} />
          </div>

          {/* ARTICLE BODY */}
          <div style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-primary)', fontWeight: 300, marginBottom: '2rem', fontStyle: 'italic', borderLeft: '3px solid var(--gold-primary)', paddingLeft: '1.25rem' }}>
              {article.content.intro}
            </p>

            {article.content.sections.map((section, idx) => (
              <div key={idx} style={{ marginBottom: '2.5rem' }}>
                <h2 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
                  {section.heading}
                </h2>
                <p style={{ marginBottom: '1rem' }}>{section.body}</p>
                {section.keyTakeaway && (
                  <div style={{ backgroundColor: '#161616', border: '1px solid var(--border-subtle)', padding: '1rem 1.25rem', color: 'var(--gold-primary)', fontSize: '0.9rem', marginTop: '0.75rem' }}>
                    💡 <strong>Style Tip:</strong> {section.keyTakeaway}
                  </div>
                )}
              </div>
            ))}

            <div style={{
              backgroundColor: '#161616',
              border: '1px solid var(--border-gold)',
              padding: '2rem',
              marginTop: '3rem',
              marginBottom: '3rem'
            }}>
              <h3 className="font-serif" style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                In Conclusion
              </h3>
              <p style={{ marginBottom: '1.5rem' }}>{article.content.conclusion}</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/collections" className="btn-gold">
                  Explore Related Suits & Jewellery
                </Link>
                <a
                  href={`https://wa.me/${storeConfig.contact.whatsapp}?text=${encodeURIComponent(`Hello, I read your article "${article.title}" and would like to enquire about outfit styling.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <MessageCircle size={16} /> Consult on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <section style={{ padding: '4rem 0', backgroundColor: '#121212', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div className="editorial-label">Keep Reading</div>
          <h2 className="font-serif" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Related Editorial Guides</h2>
          <div className="grid-2">
            {relatedArticles.map(rel => (
              <Link key={rel.slug} to={`/journal/${rel.slug}`} className="glass-card" style={{ padding: '1.5rem', textDecoration: 'none' }}>
                <span className="editorial-label" style={{ fontSize: '0.7rem' }}>{rel.category}</span>
                <h3 className="font-serif" style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{rel.title}</h3>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>{rel.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
