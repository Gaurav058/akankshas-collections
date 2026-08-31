import React from 'react';
import { MessageCircle } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';

export const WhatsAppFloat: React.FC = () => {
  const message = "Hello Akanksha's Collections, I would like to inquire about your women's fashion and ethnic wear collections.";

  return (
    <a
      href={`https://wa.me/${storeConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Enquire on WhatsApp"
      title="Enquire on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};
