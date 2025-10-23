// src/pages/pricing.tsx
import React from 'react';
import { Navigation, Footer } from '@/components';
import { PriceCalculator } from '@/components/PriceCalculator/PriceCalculator';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider/BeforeAfterSlider';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Pricing() {
  const beforeAfterExamples = [
    {
      beforeImage: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800',
      afterImage: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800',
      title: 'Premium Detail - Luxury Sedan',
    },
    {
      beforeImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
      afterImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
      title: 'Ceramic Coating - Sports Car',
    },
  ];

  return (
    <>
      <Head>
        <title>Pricing Calculator - Bo's Auto Detail | Instant Quote</title>
        <meta name="description" content="Get an instant price quote for your auto detailing service. Interactive calculator with real-time pricing." />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-amber-400 text-sm uppercase tracking-widest font-semibold mb-4">
                Transparent Pricing
              </p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
                Get Your Instant Quote
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See exactly what your detail will cost with our interactive price calculator
              </p>
            </motion.div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <PriceCalculator />
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold text-blue-900 mb-4">
                See The Transformation
              </h2>
              <p className="text-lg text-gray-600">
                Drag the slider to see before and after results
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {beforeAfterExamples.map((example) => (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <BeforeAfterSlider {...example} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 px-4 bg-blue-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {[
                { value: '33+', label: 'Years in Business' },
                { value: 'A+', label: 'BBB Rating' },
                { value: '15K+', label: 'Vehicles Detailed' },
                { value: '85%', label: 'Repeat Customers' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-4xl font-bold text-amber-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
