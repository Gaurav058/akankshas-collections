import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const NotFound: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#0D0D0D',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '4rem 1.5rem'
    }}>
      <SeoHead
        title="404 Page Not Found | Akanksha's Collections"
        description="The requested page could not be found."
      />

      <div style={{ maxWidth: '600px' }}>
        <span className="editorial-label">Error 404</span>
        <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Page Not Found
        </h1>
        <div className="gold-line" style={{ margin: '1rem auto', maxWidth: '120px' }}></div>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>
          The boutique page you are looking for may have been moved or does not exist. Explore our featured suit collections or return home.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn-gold">
            <Home size={16} /> Return to Homepage
          </Link>
          <Link to="/collections" className="btn-outline-gold">
            <Search size={16} /> Browse Collections
          </Link>
        </div>
      </div>
    </div>
  );
};
