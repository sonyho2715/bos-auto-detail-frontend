// src/components/Navigation/Navigation.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <Link href="/">
              <div className="text-2xl font-serif font-bold">
                <span className="text-blue-900">Bo's</span>
                <span className="text-amber-600"> Auto Detail</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ scale: 1.1 }}>
                <Link href={link.href}>
                  <span className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors relative group">
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/book">
              <button className="hidden md:block px-6 py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300">
                Book Now
              </button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
          >
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-amber-600">
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/book">
              <button className="w-full mt-4 px-6 py-2 bg-blue-900 text-white rounded-lg font-semibold">
                Book Now
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
