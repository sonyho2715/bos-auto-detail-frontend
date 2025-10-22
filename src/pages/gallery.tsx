// src/pages/gallery.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation, Footer } from '@/components';

// Using placeholder images from Unsplash (free car detailing images)
const galleryItems = [
  {
    id: 1,
    before: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800',
    after: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800',
    title: 'Luxury Sedan - Full Detail',
    category: 'Premium Detail',
  },
  {
    id: 2,
    before: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800',
    after: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    title: 'Sports Car - Ceramic Coating',
    category: 'Ceramic Coating',
  },
  {
    id: 3,
    before: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800',
    after: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800',
    title: 'SUV - Interior Deep Clean',
    category: 'Interior Only',
  },
  {
    id: 4,
    before: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800',
    after: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
    title: 'Classic Car - Paint Correction',
    category: 'Luxury Detail',
  },
  {
    id: 5,
    before: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
    after: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
    title: 'Luxury Vehicle - Mobile Service',
    category: 'Mobile Service',
  },
  {
    id: 6,
    before: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800',
    after: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800',
    title: 'Executive Sedan - Express Detail',
    category: 'Express Detail',
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = ['All', ...Array.from(new Set(galleryItems.map((item) => item.category)))];

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

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
              Our Work
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Before & After Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the transformation we bring to luxury vehicles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                {/* Before/After Slider */}
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <div className="absolute inset-0">
                    <img
                      src={item.before}
                      alt={`${item.title} - Before`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <img
                      src={item.after}
                      alt={`${item.title} - After`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Before/After Labels */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold">
                    BEFORE
                  </div>
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    AFTER
                  </div>

                  {/* Hover Instruction */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Hover to see after
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {item.title}
                  </h3>
                  <span className="inline-block bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-amber-400 transition-colors"
              >
                ×
              </button>

              {galleryItems
                .filter((item) => item.id === selectedImage)
                .map((item) => (
                  <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-white text-sm font-semibold mb-2">BEFORE</p>
                      <img
                        src={item.before}
                        alt="Before"
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-amber-400 text-sm font-semibold mb-2">AFTER</p>
                      <img
                        src={item.after}
                        alt="After"
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us bring your vehicle back to showroom condition
            </p>
            <a href="/book">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg text-lg transition-colors"
              >
                Book Your Detail Today
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
