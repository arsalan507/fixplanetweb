import React from 'react';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  telephone?: string;
  email?: string;
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name = 'FIXplanet',
  description = 'Premium Apple device care service in Bangalore',
  telephone = process.env.NEXT_PUBLIC_PHONE || '+91-XXXX-XXXXXX',
  email = process.env.NEXT_PUBLIC_EMAIL || 'hello@fixplanet.in',
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    telephone,
    email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9716,
      longitude: 77.5946,
    },
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://fixplanet.in',
    priceRange: '₹₹',
    openingHours: 'Mo-Su 09:00-21:00',
    areaServed: [
      'Koramangala',
      'Indiranagar',
      'Whitefield',
      'HSR Layout',
      'Marathahalli',
      'Bellandur',
      'Electronic City',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface ServiceSchemaProps {
  serviceType: string;
  description: string;
  priceRange: string;
  warrantyMonths?: number;
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceType,
  description,
  priceRange,
  warrantyMonths = 12,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'FIXplanet',
    },
    areaServed: {
      '@type': 'City',
      name: 'Bangalore',
    },
    priceRange,
    warranty: {
      '@type': 'WarrantyPromise',
      durationOfWarranty: {
        '@type': 'QuantitativeValue',
        value: warrantyMonths,
        unitCode: 'MON',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
