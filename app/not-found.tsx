"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-playfair text-9xl font-bold text-gradient-gold mb-4">
            404
          </h1>
          <h2 className="font-playfair text-4xl font-bold text-dark-50 mb-4">
            Page Not Found
          </h2>
          <p className="text-dark-400 text-lg mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have
            been removed, renamed, or doesn&apos;t exist.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-dark-950 transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full border border-dark-600 px-8 py-4 text-sm font-semibold text-dark-200 transition-all hover:border-gold hover:text-gold"
          >
            <Phone className="h-5 w-5" />
            Contact Us
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-dark-500"
        >
          <p className="text-sm mb-4">Popular Pages:</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/services"
              className="text-sm hover:text-gold transition-colors"
            >
              Services
            </Link>
            <span className="text-dark-700">•</span>
            <Link
              href="/gallery"
              className="text-sm hover:text-gold transition-colors"
            >
              Gallery
            </Link>
            <span className="text-dark-700">•</span>
            <Link
              href="/quiz"
              className="text-sm hover:text-gold transition-colors"
            >
              Service Quiz
            </Link>
            <span className="text-dark-700">•</span>
            <Link
              href="/blog"
              className="text-sm hover:text-gold transition-colors"
            >
              Blog
            </Link>
            <span className="text-dark-700">•</span>
            <Link
              href="/about"
              className="text-sm hover:text-gold transition-colors"
            >
              About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
