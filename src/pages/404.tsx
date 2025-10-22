// src/pages/404.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Footer, Button } from '@/components';
import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  const popularPages = [
    { name: 'Services', href: '/services', icon: '🔧' },
    { name: 'Book Appointment', href: '/book', icon: '📅' },
    { name: 'Gallery', href: '/gallery', icon: '🖼️' },
    { name: 'Contact Us', href: '/contact', icon: '📧' },
  ];

  return (
    <>
      <Head>
        <title>404 - Page Not Found | Bo's Auto Detail</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>

      <div className="min-h-screen bg-white flex flex-col">
        <Navigation />

        <section className="flex-1 flex items-center justify-center px-4 py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* 404 Animation */}
              <motion.div
                className="mb-8"
                initial={{ y: -20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <h1 className="text-9xl md:text-[12rem] font-bold text-amber-400 leading-none">
                  404
                </h1>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                Oops! Page Not Found
              </h2>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Looks like this page took a detour. Don't worry, we'll help you get back on track.
              </p>

              {/* Popular Pages */}
              <div className="mb-8">
                <p className="text-gray-400 mb-4">Try visiting these popular pages:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {popularPages.map((page, index) => (
                    <motion.div
                      key={page.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link href={page.href}>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all cursor-pointer group">
                          <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                            {page.icon}
                          </div>
                          <p className="text-white font-semibold">{page.name}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button size="lg" variant="primary">
                    Go to Homepage
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold text-blue-900 mb-4">
              Need Help Finding Something?
            </h3>
            <p className="text-gray-600 mb-8">
              Our team is here to assist you. Contact us and we'll help you find what you're looking for.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-4xl mb-3">📞</div>
                <h4 className="font-semibold text-blue-900 mb-2">Call Us</h4>
                <p className="text-gray-600 text-sm">(808) 555-0123</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-4xl mb-3">✉️</div>
                <h4 className="font-semibold text-blue-900 mb-2">Email Us</h4>
                <p className="text-gray-600 text-sm">info@bosautodetail.com</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-4xl mb-3">📍</div>
                <h4 className="font-semibold text-blue-900 mb-2">Visit Us</h4>
                <p className="text-gray-600 text-sm">1142 Bethel St., Honolulu</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
