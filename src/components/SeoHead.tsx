import React, { useEffect } from 'react';
import { storeConfig } from '../data/storeConfig';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  jsonLdSchema?: Record<string, any> | Array<Record<string, any>>;
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalPath = '',
  image = '/assets/akankshas-collections-storefront.png',
  jsonLdSchema
}) => {
  useEffect(() => {
    // 1. Title
    const fullTitle = title.includes("Akanksha's Collections") ? title : `${title} | Akanksha's Collections`;
    document.title = fullTitle;

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    // 4. OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // 5. OpenGraph Image
    let ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', image);

    // 6. JSON-LD Schema
    const existingSchema = document.getElementById('seo-json-ld');
    if (existingSchema) {
      existingSchema.remove();
    }

    const defaultLocalBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["ClothingStore", "LocalBusiness"],
      "name": storeConfig.brandName,
      "description": storeConfig.subtagline,
      "url": "https://akankshascollections.com",
      "telephone": storeConfig.contact.phoneDisplay,
      "email": storeConfig.contact.email,
      "image": "https://akankshascollections.com/assets/akankshas-collections-storefront.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No. 101, Satya Complex, Near Nadaun Chowk",
        "addressLocality": storeConfig.address.city,
        "addressRegion": storeConfig.address.state,
        "postalCode": storeConfig.address.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "31.6862",
        "longitude": "76.5213"
      },
      "openingHoursSpecification": storeConfig.openingHours.map(oh => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": oh.day,
        "opens": "10:00",
        "closes": "19:30"
      }))
    };

    const schemaToInject = jsonLdSchema ? jsonLdSchema : defaultLocalBusinessSchema;

    const script = document.createElement('script');
    script.id = 'seo-json-ld';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemaToInject);
    document.head.appendChild(script);

  }, [title, description, canonicalPath, image, jsonLdSchema]);

  return null;
};
