import React from 'react';
import { SeoHead } from '../components/SeoHead';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'shipping' | 'returns';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const contentMap = {
    privacy: {
      title: "Privacy Policy",
      subtitle: "How we protect and handle customer information",
      body: (
        <div>
          <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>1. Information We Collect</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            At Akanksha's Collections, we respect your privacy. When you use our website or contact us via our enquiry form, WhatsApp, or phone, we collect information such as your name, contact details, and style preferences strictly to fulfill your boutique requests.
          </p>
          <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>2. How Information is Used</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Information provided is solely used for customer communication, stock inquiries, order consultations, and improving our boutique service at Satya Complex, Hamirpur. We do not sell or rent customer data to third parties.
          </p>
          <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>3. Contact & Inquiries</h3>
          <p>
            If you have questions regarding our privacy practices, please contact us at akankshaguleria4@gmail.com or visit our store in Satya Complex, Hamirpur.
          </p>
        </div>
      )
    },
    terms: {
      title: "Terms & Conditions",
      subtitle: "General terms governing boutique catalog browsing",
      body: (
        <div>
          <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>1. Boutique Catalog Notice</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Images and product descriptions displayed on our website represent items available at our physical store (Shop No. 101, Satya Complex, Hamirpur). Due to screen variations and hand-crafted detailing, exact fabric shades may vary slightly.
          </p>
          <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>2. Pricing & Availability</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Item availability and prices are subject to store stock. Direct inquiries via WhatsApp or phone provide real-time updates from our Hamirpur boutique.
          </p>
        </div>
      )
    },
    shipping: {
      title: "Shipping & Pick-Up Policy",
      subtitle: "In-store pickup and regional delivery information",
      body: (
        <div>
          <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>1. In-Store Pick-Up</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Customers in Hamirpur and nearby districts can reserve items via WhatsApp and collect them directly from our boutique at Shop No. 101, Satya Complex, Near Nadaun Chowk.
          </p>
          <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>2. Regional Out-of-Station Shipping</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            For customers requesting delivery across Himachal Pradesh or other parts of India, shipping rates and courier options are shared upon WhatsApp order confirmation.
          </p>
        </div>
      )
    },
    returns: {
      title: "Returns & Exchange Policy",
      subtitle: "Guidelines for store exchanges and inspections",
      body: (
        <div>
          <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>1. In-Store Fitting & Inspection</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            We encourage all customers to inspect and try on garments at our Satya Complex boutique prior to purchase to ensure absolute satisfaction with size, fabric, and embroidery.
          </p>
          <h3 className="font-serif" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>2. Exchange Conditions</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Exchanges are accepted for unwashed, unused apparel in original condition with tags within 7 days of purchase at our Hamirpur store. Artificial jewellery items are final sale due to hygiene standards.
          </p>
        </div>
      )
    }
  };

  const current = contentMap[type];

  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh', paddingBottom: '6rem' }}>
      <SeoHead
        title={`${current.title} | Akanksha's Collections Hamirpur`}
        description={`${current.title} for Akanksha's Collections located in Satya Complex, Hamirpur, HP.`}
      />

      <section style={{
        backgroundColor: '#141414',
        borderBottom: '1px solid var(--border-gold)',
        padding: '5rem 0 3.5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="editorial-label">Legal & Policy</span>
          <h1 className="font-serif" style={{ fontSize: '3.2rem', marginBottom: '1rem' }}>
            {current.title}
          </h1>
          <div className="gold-line" style={{ margin: '1rem auto', maxWidth: '140px' }}></div>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            {current.subtitle}
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="glass-card" style={{ padding: '3rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            {current.body}
          </div>
        </div>
      </section>
    </div>
  );
};
