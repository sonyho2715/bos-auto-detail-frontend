// src/pages/services.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, ServiceCard, Footer, Button } from '@/components';
import Link from 'next/link';

const servicesData = [
  {
    title: 'Express Detail',
    description: 'Quick and efficient detailing for vehicles needing a refresh.',
    icon: '⚡',
    features: [
      'Exterior hand wash',
      'Vacuum interior',
      'Window cleaning',
      'Tire shine',
      'Quick interior wipe-down',
    ],
    price: 149,
    duration: '1-2 hours',
    highlighted: false,
  },
  {
    title: 'Premium Detail',
    description: 'Our most popular comprehensive interior and exterior service.',
    icon: '✨',
    features: [
      'Complete hand wash & dry',
      'Clay bar treatment',
      'Interior deep clean & vacuum',
      'Leather conditioning',
      'Engine bay cleaning',
      'Paint decontamination',
      'Tire & wheel detailing',
      'Chrome polishing',
    ],
    price: 299,
    duration: '3-4 hours',
    highlighted: true,
  },
  {
    title: 'Luxury Detail',
    description: 'The ultimate treatment for your high-end luxury vehicle.',
    icon: '👑',
    features: [
      'Everything in Premium Detail',
      'Paint correction (1-step)',
      'Premium wax application',
      'Headlight restoration',
      'Odor elimination treatment',
      'Leather deep conditioning',
      'Fabric protection',
      'Pet hair removal',
    ],
    price: 499,
    duration: '5-6 hours',
    highlighted: false,
  },
  {
    title: 'Ceramic Coating',
    description: 'Professional-grade ceramic coating for long-lasting protection.',
    icon: '🛡️',
    features: [
      'Full paint correction (2-step)',
      'Surface preparation',
      'Premium ceramic coating',
      '5-year protection warranty',
      'Hydrophobic finish',
      'UV resistance',
      'Enhanced gloss & depth',
      'Easy maintenance',
    ],
    price: 1299,
    duration: '2-3 days',
    highlighted: false,
  },
  {
    title: 'Interior Only',
    description: 'Focused deep cleaning for your vehicle\'s interior.',
    icon: '🧼',
    features: [
      'Deep vacuum (seats, carpet, trunk)',
      'Leather cleaning & conditioning',
      'Dashboard & console detailing',
      'Door panel cleaning',
      'Window cleaning (interior)',
      'Odor treatment',
      'Floor mat cleaning',
    ],
    price: 199,
    duration: '2-3 hours',
    highlighted: false,
  },
  {
    title: 'Mobile Service',
    description: 'We come to your location with all equipment and supplies.',
    icon: '🚗',
    features: [
      'Any service at your location',
      'Full mobile setup',
      'Water & power included',
      'Convenient scheduling',
      'Honolulu & surrounding areas',
      'Same premium quality',
    ],
    price: 349,
    duration: 'Varies by service',
    highlighted: false,
  },
];

const addOnsData = [
  { name: 'Headlight Restoration', price: 79, icon: '💡' },
  { name: 'Engine Bay Detailing', price: 89, icon: '⚙️' },
  { name: 'Pet Hair Removal', price: 59, icon: '🐕' },
  { name: 'Odor Elimination', price: 69, icon: '🌬️' },
  { name: 'Scratch Removal', price: 149, icon: '🔧' },
  { name: 'Paint Sealant', price: 99, icon: '💎' },
];

export default function Services() {
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
              Premium Auto Detailing
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From quick details to full ceramic coating, we offer comprehensive services
              tailored to your luxury vehicle's needs.
            </p>
            <Link href="/book">
              <Button size="lg">Book Your Service</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">
              Service Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the perfect service package for your vehicle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div key={service.title}>
                <ServiceCard {...service} />
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Duration:</span> {service.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">
              Available Add-Ons
            </h2>
            <p className="text-lg text-gray-600">
              Enhance your service with these popular additions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnsData.map((addon) => (
              <motion.div
                key={addon.name}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-amber-600 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{addon.icon}</span>
                    <div>
                      <h3 className="font-semibold text-lg text-blue-900">{addon.name}</h3>
                      <p className="text-amber-600 font-bold">${addon.price}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-300">
              What to expect when you choose Bo's Auto Detail
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Book Online', desc: 'Choose your service and schedule a convenient time' },
              { step: '2', title: 'Vehicle Inspection', desc: 'We assess your vehicle and confirm the service plan' },
              { step: '3', title: 'Expert Detailing', desc: 'Our team performs meticulous work using premium products' },
              { step: '4', title: 'Final Review', desc: 'Quality check and walk-through with you' },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-amber-400">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your appointment today and experience the Bo's difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button variant="secondary" size="lg">
                  Book Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
