"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/promo.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-dark-950/80" />
      </div>

      {/* Background Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/50 via-transparent to-dark-950" />

      {/* Animated Gold Accent Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-sm px-4 py-2 mb-8"
        >
          <Sparkles className="h-4 w-4 text-gold" />
          <span className="text-sm text-gold font-medium">Serving Honolulu Since 1991</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
        >
          <span className="text-dark-50">Your Vehicle Deserves</span>
          <br />
          <span className="text-gradient-gold">Perfection</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-dark-300 leading-relaxed"
        >
          Experience luxury auto detailing from Hawaii&apos;s trusted name for over 34 years.
          Meticulous attention to detail, premium products, and unmatched
          craftsmanship.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-dark-950 transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="flex items-center gap-2 rounded-full border border-dark-600 bg-dark-950/50 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-dark-200 transition-all hover:border-gold hover:text-gold"
          >
            View Services
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-dark-400"
        >
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-gold" />
            <span className="text-sm font-medium">BBB A+ Rated</span>
          </div>
          <div className="h-6 w-px bg-dark-700 hidden sm:block" />
          <div className="text-sm">
            <span className="text-gold font-semibold">5.0</span> Rating on
            Google
          </div>
          <div className="h-6 w-px bg-dark-700 hidden sm:block" />
          <div className="text-sm font-medium">34+ Years Experience</div>
        </motion.div>
      </div>
    </section>
  );
}
