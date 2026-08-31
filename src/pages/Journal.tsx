import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { blogArticles } from '../data/blogArticles';

export const Journal: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  const allTags = ['All', ...Array.from(new Set(blogArticles.flatMap(a => a.tags)))];

  const filteredArticles = selectedTag === 'All'
    ? blogArticles
    : blogArticles.filter(a => a.tags.includes(selectedTag));

  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh', paddingBottom: '6rem' }}>
      <SeoHead
        title="Fashion Journal & Styling Advice | Akanksha's Collections Hamirpur"
        description="Read original Indian fashion, suit styling, regional wear, and artificial jewellery guides by Akanksha's Collections in Hamirpur."
      />

      {/* HEADER */}
      <section style={{
        backgroundColor: '#141414',
        borderBottom: '1px solid var(--border-gold)',
        padding: '5rem 0 3.5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="editorial-label">Editorial Fashion Advice</span>
          <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            The Akanksha's Journal
          </h1>
          <div className="gold-line" style={{ margin: '1rem auto', maxWidth: '140px' }}></div>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Original fashion insights, wedding suit styling guides, jewellery pairing tips, and regional heritage edits tailored for women.
          </p>
        </div>
      </section>

      {/* TAG FILTER */}
      <section style={{ padding: '1.5rem 0', backgroundColor: '#121212', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                style={{
                  background: selectedTag === tag ? 'var(--gold-primary)' : 'var(--bg-card)',
                  color: selectedTag === tag ? '#000' : 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)',
                  padding: '0.4rem 1rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="grid-3">
            {filteredArticles.map(article => (
              <Link
                key={article.slug}
                to={`/journal/${article.slug}`}
                className="glass-card img-hover-zoom"
                style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
              >
                <div style={{ height: '240px', backgroundColor: '#000' }}>
                  <img src={article.image} alt={article.imageAlt} className="img-editorial" />
                </div>
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span className="editorial-label" style={{ margin: 0, fontSize: '0.7rem' }}>{article.category}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{article.readTime}</span>
                    </div>
                    <h2 className="font-serif" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                      {article.title}
                    </h2>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                      {article.excerpt}
                    </p>
                  </div>

                  <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>{article.author}</span>
                    <span style={{ color: 'var(--gold-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      Read Guide <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
