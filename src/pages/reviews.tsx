// src/pages/reviews.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Footer, Button } from '@/components';
import { TestimonialCard } from '@/components/TestimonialCard/TestimonialCard';
import { realTestimonials, businessStats } from '@/data/realTestimonials';
import Link from 'next/link';

const stats = [
  { value: `${businessStats.totalReviews}+`, label: 'Customer Reviews' },
  { value: businessStats.bbbRating, label: 'BBB Rating' },
  { value: `${businessStats.yearsInBusiness}+`, label: 'Years in Business' },
  { value: businessStats.vehiclesDetailed, label: 'Vehicles Detailed' },
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber-400 text-sm uppercase tracking-widest font-semibold mb-4">
              Customer Testimonials
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Don't just take our word for it - hear from luxury vehicle owners who trust Bo's Auto Detail
            </p>

            {/* Google Review Widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-6 py-4"
            >
              <div className="text-4xl">⭐</div>
              <div className="text-left">
                <div className="text-3xl font-bold text-white">4.9</div>
                <div className="text-sm text-gray-300">Google Rating</div>
              </div>
              <div className="ml-4 text-left">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-300">Reviews</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-amber-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">
              Recent Reviews
            </h2>
            <p className="text-lg text-gray-600">
              Read what luxury vehicle owners are saying about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {realTestimonials.map((review, index) => (
              <TestimonialCard key={index} {...review} />
            ))}
          </div>

          {/* Google Review CTA */}
          <div className="text-center">
            <a
              href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                Leave a Google Review
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-900 mb-4">
              Trusted & Certified
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'Best of Honolulu', year: '2025' },
              { icon: '✓', title: 'Certified Detailer', year: 'Since 1992' },
              { icon: '⭐', title: 'Top Rated', year: 'Google' },
              { icon: '🛡️', title: 'Insured & Bonded', year: 'Licensed' },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 border-2 border-gray-200 rounded-xl hover:border-amber-600 transition-colors"
              >
                <div className="text-5xl mb-3">{badge.icon}</div>
                <h3 className="font-semibold text-blue-900 mb-1">{badge.title}</h3>
                <p className="text-sm text-gray-600">{badge.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Experience the Bo's Difference
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of satisfied luxury vehicle owners
            </p>
            <Link href="/book">
              <Button size="lg" variant="primary">
                Book Your Service Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
