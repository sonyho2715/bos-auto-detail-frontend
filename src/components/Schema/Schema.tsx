// src/components/Schema/Schema.tsx
import React from 'react';
import Head from 'next/head';

interface SchemaProps {
  type?: 'home' | 'service' | 'review' | 'about' | 'contact';
}

export const Schema: React.FC<SchemaProps> = ({ type = 'home' }) => {
  const getSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': 'AutoRepair',
      name: "Bo's Auto Detail",
      image: 'https://bosautodetail.com/images/logo.png',
      '@id': 'https://bosautodetail.com',
      url: 'https://bosautodetail.com',
      telephone: '(808) 555-0123',
      priceRange: '$149 - $1299',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1142 Bethel St.',
        addressLocality: 'Honolulu',
        addressRegion: 'HI',
        postalCode: '96817',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 21.312094,
        longitude: -157.861738,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '17:00',
        },
      ],
      sameAs: [
        'https://www.facebook.com/bosautodetail',
        'https://www.instagram.com/bosautodetail',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
      },
    };

    if (type === 'service') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Auto Detailing',
        provider: {
          '@type': 'AutoRepair',
          name: "Bo's Auto Detail",
          telephone: '(808) 555-0123',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1142 Bethel St.',
            addressLocality: 'Honolulu',
            addressRegion: 'HI',
            postalCode: '96817',
            addressCountry: 'US',
          },
        },
        areaServed: {
          '@type': 'City',
          name: 'Honolulu',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Auto Detailing Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Premium Detail',
                description: 'Complete interior and exterior detailing service',
                offers: {
                  '@type': 'Offer',
                  price: '299',
                  priceCurrency: 'USD',
                },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Ceramic Coating',
                description: 'Professional-grade ceramic coating with 5-year warranty',
                offers: {
                  '@type': 'Offer',
                  price: '1299',
                  priceCurrency: 'USD',
                },
              },
            },
          ],
        },
      };
    }

    if (type === 'review') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: "Bo's Auto Detail",
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '500',
          bestRating: '5',
          worstRating: '1',
        },
      };
    }

    return baseSchema;
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }}
      />
    </Head>
  );
};
