// src/pages/reviews.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Footer, Button } from '@/components';
import { TestimonialCard } from '@/components/TestimonialCard/TestimonialCard';
import Link from 'next/link';

const reviews = [
  {
    name: 'Michael Chen',
    rating: 5,
    date: 'October 15, 2025',
    review: 'Absolutely phenomenal service! My Tesla Model S looks brand new after their ceramic coating treatment. The attention to detail is unmatched. Worth every penny!',
    service: 'Ceramic Coating',
    verified: true,
  },
  {
    name: 'Sarah Johnson',
    rating: 5,
    date: 'October 10, 2025',
    review: 'Bo\'s team has been taking care of my Porsche 911 for over 5 years. They treat it like their own. The premium detail package is exceptional, and the mobile service is so convenient!',
    service: 'Premium Detail',
    verified: true,
  },
  {
    name: 'David Martinez',
    rating: 5,
    date: 'October 5, 2025',
    review: 'I was skeptical about the price initially, but after seeing the results on my Range Rover, I understand why Bo\'s is considered the best in Honolulu. The paint correction was incredible.',
    service: 'Luxury Detail',
    verified: true,
  },
  {
    name: 'Jennifer Wong',
    rating: 5,
    date: 'September 28, 2025',
    review: 'The mobile service is a game-changer! They came to my office and detailed my BMW X5 while I was in meetings. Came out to a showroom-quality vehicle. Highly recommend!',
    service: 'Mobile Service',
    verified: true,
  },
  {
    name: 'Robert Taylor',
    rating: 5,
    date: 'September 20, 2025',
    review: 'Been coming to Bo\'s since 1998. The consistency in quality and service is remarkable. My Mercedes S-Class always looks pristine after their care.',
    service: 'Premium Detail',
    verified: true,
  },
  {
    name: 'Lisa Anderson',
    rating: 5,
    date: 'September 15, 2025',
    review: 'The interior detailing on my Lexus was outstanding. They removed stains I thought were permanent and the leather conditioning made my seats look brand new!',
    service: 'Interior Only',
    verified: true,
  },
  {
    name: 'James Kim',
    rating: 5,
    date: 'September 8, 2025',
    review: 'Professional, courteous, and meticulous. The headlight restoration made a huge difference. My Audi A8 looks 5 years younger. Thank you Bo\'s!',
    service: 'Luxury Detail',
    verified: true,
  },
  {
    name: 'Amanda Rodriguez',
    rating: 5,
    date: 'September 1, 2025',
    review: 'First time customer and I\'m blown away! The express detail exceeded my expectations. Fast, thorough, and affordable. Will definitely be back!',
    service: 'Express Detail',
    verified: true,
  },
  {
    name: 'Christopher Lee',
    rating: 5,
    date: 'August 25, 2025',
    review: 'The ceramic coating on my Ferrari is still beading water perfectly after a year. Best investment for protecting my vehicle. Bo\'s knows luxury cars!',
    service: 'Ceramic Coating',
    verified: true,
  },
];

const stats = [
  { value: '500+', label: '5-Star Reviews' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '30+', label: 'Years in Business' },
  { value: '15K+', label: 'Vehicles Detailed' },
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
            {reviews.map((review, index) => (
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
