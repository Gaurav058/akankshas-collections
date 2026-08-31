import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, X, ArrowRight } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';

export const AnnouncementBar: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible || !storeConfig.announcement.enabled) return null;

  return (
    <div style={{
      background: 'linear-gradient(90deg, #121212 0%, #1E1A10 50%, #121212 100%)',
      borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
      padding: '0.5rem 1rem',
      color: '#D4AF37',
      fontSize: '0.8rem',
      fontWeight: 500,
      letterSpacing: '0.05em'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 auto' }}>
          <MapPin size={14} style={{ color: '#D4AF37' }} />
          <span>{storeConfig.announcement.text}</span>
          {storeConfig.announcement.linkUrl && (
            <Link 
              to={storeConfig.announcement.linkUrl} 
              style={{
                color: '#FDFBF7',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                marginLeft: '0.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.2rem',
                fontWeight: 600
              }}
            >
              {storeConfig.announcement.linkText} <ArrowRight size={12} />
            </Link>
          )}
        </div>
        <button
          onClick={() => setVisible(false)}
          aria-label="Close announcement"
          style={{
            background: 'none',
            border: 'none',
            color: '#9E9A90',
            cursor: 'pointer',
            padding: '0.2rem',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};
