// src/pages/index.tsx
import React from 'react';
import Link from 'next/link';
import { Navigation, HeroSection, ServiceCard, Footer } from '@/components';
import { SEO } from '@/components/SEO/SEO';
import { Schema } from '@/components/Schema/Schema';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: 'Premium Detail',
    description: 'Complete interior and exterior detailing service for your luxury vehicle.',
    icon: '✨',
    features: [
      'Hand wash and dry',
      'Interior deep clean',
      'Leather conditioning',
      'Paint decontamination',
      'Tire dressing',
    ],
    price: 299,
    highlighted: false,
  },
  {
    title: 'Ceramic Coating',
    description: 'Long-lasting protection with our professional-grade ceramic coating.',
    icon: '🛡️',
    features: [
      'Paint correction',
      '5-year protection',
      'Hydrophobic finish',
      'UV resistance',
      'Enhanced gloss',
    ],
    price: 1299,
    highlighted: true,
  },
  {
    title: 'Mobile Service',
    description: 'Premium detailing at your location - home or office.',
    icon: '🚗',
    features: [
      'Full mobile setup',
      'Water & power included',
      'Same premium service',
      'Convenient scheduling',
      'Honolulu area',
    ],
    price: 349,
    highlighted: false,
  },
];

export default function Home() {
  return (
    <>
      <SEO />
      <Schema type="home" />
      <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection />

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-600 text-sm uppercase tracking-widest font-semibold mb-4">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">
              Premium Auto Detailing Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our expertly crafted services designed for luxury vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
                price={service.price}
                highlighted={service.highlighted}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 text-sm uppercase tracking-widest font-semibold mb-4">
              Excellence Since 1992
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Why Choose Bo's Auto Detail
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-amber-400">30+ Years Experience</h3>
              <p className="text-gray-300">
                Three decades of expertise in luxury vehicle care and detailing excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-amber-400">Premium Products</h3>
              <p className="text-gray-300">
                We use only the finest professional-grade products for superior results.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-serif font-bold mb-3 text-amber-400">Expert Technicians</h3>
              <p className="text-gray-300">
                Our certified team treats your vehicle with the care it deserves.
              </p>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </>
  );
}
