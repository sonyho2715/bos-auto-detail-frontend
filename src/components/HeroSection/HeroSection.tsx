// src/components/HeroSection/HeroSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <motion.div
        className="relative z-10 h-full flex items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div variants={itemVariants}>
            <p className="text-amber-400 text-sm uppercase tracking-widest font-semibold mb-4">
              Since 1992 • Honolulu's Premier Service
            </p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Prestige Preservation for
            <span className="text-amber-400 block">Your Luxury Car</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Experience unparalleled auto detailing for your high-end vehicle. Our expert team brings 30+ years of excellence to every service.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors duration-300 text-lg"
              >
                Book Premium Service
              </motion.button>
            </Link>
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-blue-900 font-semibold rounded-lg transition-all duration-300 text-lg"
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row gap-8 justify-center text-white"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-amber-400">30+</span>
              <span className="text-sm">Years of Excellence</span>
            </div>
            <div className="h-8 w-px bg-gray-600 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-amber-400">5★</span>
              <span className="text-sm">Luxury Car Specialists</span>
            </div>
            <div className="h-8 w-px bg-gray-600 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-amber-400">Mobile</span>
              <span className="text-sm">Service Available</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </div>
  );
};
