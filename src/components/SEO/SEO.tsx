// src/components/SEO/SEO.tsx
import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Bo's Auto Detail - Premier Luxury Car Detailing in Honolulu",
  description = "Honolulu's trusted luxury auto detailing service since 1992. Premium packages, ceramic coating, mobile service. Expert care for your high-end vehicle.",
  keywords = "auto detailing Honolulu, luxury car detailing, ceramic coating Hawaii, mobile detailing, paint correction, car wash Honolulu, premium auto care",
  ogImage = "/images/og-image.jpg",
  ogUrl = "https://bosautodetail.com",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional */}
      <link rel="canonical" href={ogUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Bo's Auto Detail" />
    </Head>
  );
};
