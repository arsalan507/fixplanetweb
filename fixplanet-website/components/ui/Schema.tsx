import React from 'react';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  telephone?: string;
  email?: string;
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name = 'FIXplanet',
  description = 'Premium doorstep Apple device repair service in Bangalore. iPhone, MacBook, iPad, Apple Watch repair with 12-month warranty.',
  telephone = process.env.NEXT_PUBLIC_PHONE || '+91 8105955009',
  email = process.env.NEXT_PUBLIC_EMAIL || 'hello@fixplanet.in',
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    image: 'https://www.fixplanet.in/images/og-image.jpg',
    url: 'https://www.fixplanet.in',
    telephone,
    email,
    priceRange: '₹2500-₹45000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9716,
      longitude: 77.5946,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
    areaServed: {
      '@type': 'City',
      name: 'Bangalore',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Apple Device Repair Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'iPhone Screen Replacement',
            description: 'Same-day doorstep iPhone screen replacement in Bangalore',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'INR',
            minPrice: '3500',
            maxPrice: '12000',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'iPhone Battery Replacement',
            description: 'iPhone battery replacement with 12-month warranty',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'INR',
            minPrice: '2500',
            maxPrice: '5500',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'iPhone Back Glass Replacement',
            description: 'iPhone back glass repair at your doorstep',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'INR',
            minPrice: '4500',
            maxPrice: '9000',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MacBook Display Replacement',
            description: 'MacBook screen replacement in Bangalore',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'INR',
            minPrice: '12000',
            maxPrice: '45000',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MacBook Battery Replacement',
            description: 'MacBook battery replacement with warranty',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'INR',
            minPrice: '8500',
            maxPrice: '18000',
          },
        },
      ],
    },
    sameAs: [],
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
      telephone: '+918105955009',
      url: 'https://www.fixplanet.in',
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

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageSchemaProps {
  faqs: FAQItem[];
}

export const FAQPageSchema: React.FC<FAQPageSchemaProps> = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface ServiceAreaSchemaProps {
  areaName: string;
  responseTime: string;
  landmarks: string[];
}

export const ServiceAreaSchema: React.FC<ServiceAreaSchemaProps> = ({
  areaName,
  responseTime,
  landmarks,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `FIXplanet - Apple Repair in ${areaName}`,
    description: `Doorstep iPhone, MacBook, iPad repair in ${areaName}, Bangalore. ${responseTime} response time. 12-month warranty. Near ${landmarks.slice(0, 2).join(', ')}.`,
    image: 'https://www.fixplanet.in/images/og-image.jpg',
    url: `https://www.fixplanet.in/areas/${areaName.toLowerCase().replace(/\s+/g, '-')}`,
    telephone: '+918105955009',
    email: 'hello@fixplanet.in',
    priceRange: '₹2500-₹45000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'Place',
      name: `${areaName}, Bangalore`,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
