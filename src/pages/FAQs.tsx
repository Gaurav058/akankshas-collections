import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, MessageCircle } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { storeConfig } from '../data/storeConfig';

export const FAQs: React.FC = () => {
  const faqList = [
    {
      q: "Where is Akanksha's Collections store located?",
      a: "Our boutique is located at Shop No. 101, Satya Complex, Near Nadaun Chowk, Hamirpur, Himachal Pradesh – 177001."
    },
    {
      q: "What product categories do you offer?",
      a: "We offer women's ethnic wear, ready-stitched suits, unstitched dress materials, kurtas & kurtis, partywear, bridal wear, Himachali coat suits, and artificial jewellery including Kundan sets, earrings, and bangles."
    },
    {
      q: "Can I try on outfits before purchasing?",
      a: "Yes! We have an authentic boutique fitting area at our Satya Complex store where you can try on stitched suits and select matching jewellery."
    },
    {
      q: "How can I inquire about outfit availability or pricing?",
      a: "You can click 'Enquire on WhatsApp' on any product page or contact us directly at +91 9816647320 for quick stock updates."
    },
    {
      q: "Do you offer custom tailoring for unstitched suits?",
      a: "We provide expert styling advice and guidance for tailoring unstitched suit materials to your bespoke measurements."
    },
    {
      q: "What are your store operating hours?",
      a: "We are open Monday to Saturday from 10:00 AM to 7:30 PM. On Sundays, we open for appointments and during festive shopping seasons."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh', paddingBottom: '6rem' }}>
      <SeoHead
        title="Frequently Asked Questions (FAQs) | Akanksha's Collections"
        description="Find answers to common questions about Akanksha's Collections boutique in Hamirpur, outfit fitting, artificial jewellery, and store hours."
        jsonLdSchema={faqSchema}
      />

      <section style={{
        backgroundColor: '#141414',
        borderBottom: '1px solid var(--border-gold)',
        padding: '5rem 0 3.5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="editorial-label">Help & Guidance</span>
          <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h1>
          <div className="gold-line" style={{ margin: '1rem auto', maxWidth: '140px' }}></div>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Everything you need to know about visiting our boutique, selecting outfits, and enquiring online.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {faqList.map((faq, i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <HelpCircle size={20} style={{ color: 'var(--gold-primary)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{faq.q}</span>
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', paddingLeft: '1.75rem', lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem', padding: '2.5rem', backgroundColor: '#161616', border: '1px solid var(--border-gold)' }}>
            <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Have Another Question?</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Reach out directly to our store team via WhatsApp or phone.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/${storeConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle size={16} /> WhatsApp Inquiry
              </a>
              <Link to="/contact" className="btn-outline-gold">
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
