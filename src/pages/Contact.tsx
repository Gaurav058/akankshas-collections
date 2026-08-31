import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { storeConfig } from '../data/storeConfig';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'Stitched Suits',
    enquiryType: 'Stock & Size Availability',
    message: '',
    honeypot: '' // Honeypot spam trap
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Honeypot check (if filled by bot, silently block)
    if (formData.honeypot.trim() !== '') {
      setSubmitted(true);
      return;
    }

    // Validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg('Please enter a valid phone number.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please enter your enquiry message.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div style={{ backgroundColor: '#0D0D0D', minHeight: '100vh', paddingBottom: '6rem' }}>
      <SeoHead
        title="Contact Us | Akanksha's Collections Hamirpur"
        description="Get in touch with Akanksha's Collections in Hamirpur. Contact us for suit customisation, jewellery availability, or store visit inquiries."
      />

      {/* HEADER */}
      <section style={{
        backgroundColor: '#141414',
        borderBottom: '1px solid var(--border-gold)',
        padding: '5rem 0 3.5rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="editorial-label">Get In Touch</span>
          <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
            Contact Akanksha's Collections
          </h1>
          <div className="gold-line" style={{ margin: '1rem auto', maxWidth: '140px' }}></div>
          <p style={{ maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)' }}>
            Have a question about a suit design, artificial jewellery piece, or store hours? Send us a message or connect directly via WhatsApp.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem' }}>
            {/* DIRECT CONTACT CARDS */}
            <div>
              <span className="editorial-label">Direct Reach</span>
              <h2 className="font-serif" style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>
                Quick Assistance
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <a
                  href={`https://wa.me/${storeConfig.contact.whatsapp}?text=${encodeURIComponent("Hello Akanksha's Collections, I am reaching out from your website.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card"
                  style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', textDecoration: 'none' }}
                >
                  <div style={{ background: '#25D366', color: '#000', padding: '0.85rem', borderRadius: '50%', flexShrink: 0 }}>
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <span className="editorial-label" style={{ margin: 0, fontSize: '0.7rem' }}>Instant Support</span>
                    <h3 className="font-serif" style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>Chat on WhatsApp</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Quickest response for stock availability & photos</p>
                  </div>
                </a>

                <a
                  href={`tel:${storeConfig.contact.phone}`}
                  className="glass-card"
                  style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', textDecoration: 'none' }}
                >
                  <div style={{ background: 'var(--gold-primary)', color: '#000', padding: '0.85rem', borderRadius: '50%', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="editorial-label" style={{ margin: 0, fontSize: '0.7rem' }}>Call Boutique</span>
                    <h3 className="font-serif" style={{ fontSize: '1.3rem', color: 'var(--text-primary)' }}>{storeConfig.contact.phoneDisplay}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Speak directly with our store team in Hamirpur</p>
                  </div>
                </a>

                <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                  <div style={{ background: '#1A1A1A', border: '1px solid var(--border-gold)', color: 'var(--gold-primary)', padding: '0.85rem', borderRadius: '50%', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="editorial-label" style={{ margin: 0, fontSize: '0.7rem' }}>Store Location</span>
                    <h3 className="font-serif" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>Satya Complex, Hamirpur</h3>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Shop No. 101, Near Nadaun Chowk, HP – 177001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECURE ENQUIRY FORM */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <span className="editorial-label">Send An Enquiry</span>
              <h2 className="font-serif" style={{ fontSize: '2.2rem', marginBottom: '1.5rem' }}>
                Boutique Enquiry Form
              </h2>

              {submitted ? (
                <div style={{
                  padding: '2.5rem',
                  backgroundColor: '#121212',
                  border: '1px solid var(--border-gold)',
                  textAlign: 'center'
                }}>
                  <CheckCircle size={48} style={{ color: 'var(--gold-primary)', margin: '0 auto 1rem auto' }} />
                  <h3 className="font-serif" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Thank You for Reaching Out</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Your message has been received. Our team at Satya Complex, Hamirpur will review your request and contact you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', category: 'Stitched Suits', enquiryType: 'Stock & Size Availability', message: '', honeypot: '' });
                    }}
                    className="btn-outline-gold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Honeypot hidden input */}
                  <input
                    type="text"
                    name="website_hp"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errorMsg && (
                    <div style={{
                      backgroundColor: 'rgba(220, 53, 69, 0.15)',
                      border: '1px solid rgba(220, 53, 69, 0.4)',
                      color: '#FF6B6B',
                      padding: '0.75rem 1rem',
                      fontSize: '0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <AlertCircle size={16} /> {errorMsg}
                    </div>
                  )}

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Sharma"
                      style={{
                        width: '100%',
                        backgroundColor: '#0D0D0D',
                        border: '1px solid var(--border-subtle)',
                        padding: '0.8rem 1rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98166 XXXXX"
                        style={{
                          width: '100%',
                          backgroundColor: '#0D0D0D',
                          border: '1px solid var(--border-subtle)',
                          padding: '0.8rem 1rem',
                          color: 'var(--text-primary)',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ananya@example.com"
                        style={{
                          width: '100%',
                          backgroundColor: '#0D0D0D',
                          border: '1px solid var(--border-subtle)',
                          padding: '0.8rem 1rem',
                          color: 'var(--text-primary)',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                        Category Preference
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: '#0D0D0D',
                          border: '1px solid var(--border-subtle)',
                          padding: '0.8rem 1rem',
                          color: 'var(--text-primary)',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      >
                        <option value="Kurtas & Kurtis">Kurtas & Kurtis</option>
                        <option value="Stitched Suits">Stitched Suits</option>
                        <option value="Unstitched Suits">Unstitched Suits</option>
                        <option value="Partywear">Partywear</option>
                        <option value="Bridal Wear">Bridal Wear</option>
                        <option value="Artificial Jewellery">Artificial Jewellery</option>
                        <option value="Bangles">Bangles & Accessories</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                        Enquiry Type
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        style={{
                          width: '100%',
                          backgroundColor: '#0D0D0D',
                          border: '1px solid var(--border-subtle)',
                          padding: '0.8rem 1rem',
                          color: 'var(--text-primary)',
                          fontSize: '0.9rem',
                          outline: 'none'
                        }}
                      >
                        <option value="Stock & Size Availability">Stock & Size Availability</option>
                        <option value="Custom Tailoring Guidance">Custom Tailoring Guidance</option>
                        <option value="Bridal Appointment">Bridal Appointment</option>
                        <option value="Jewellery Matching">Jewellery Matching</option>
                        <option value="General Store Inquiry">General Store Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify size, color preferences, or specific design details..."
                      style={{
                        width: '100%',
                        backgroundColor: '#0D0D0D',
                        border: '1px solid var(--border-subtle)',
                        padding: '0.8rem 1rem',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-gold"
                    style={{ width: '100%', marginTop: '0.5rem', opacity: submitting ? 0.7 : 1 }}
                  >
                    <Send size={16} /> {submitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
