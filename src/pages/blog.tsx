// src/pages/blog.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Footer } from '@/components';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: '5 Reasons Why Ceramic Coating is Worth the Investment',
    excerpt: 'Discover why ceramic coating is the ultimate protection for your luxury vehicle and how it can save you money in the long run.',
    image: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800',
    category: 'Product Guide',
    date: 'October 20, 2025',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'How Often Should You Detail Your Luxury Car?',
    excerpt: 'Learn the recommended detailing schedule for high-end vehicles to maintain their value and appearance.',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800',
    category: 'Maintenance Tips',
    date: 'October 15, 2025',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'The Difference Between Waxing and Ceramic Coating',
    excerpt: 'Understanding the pros and cons of traditional wax versus modern ceramic coating technology.',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800',
    category: 'Product Comparison',
    date: 'October 10, 2025',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Protecting Your Vehicle\'s Interior in Hawaii\'s Climate',
    excerpt: 'Special considerations for maintaining your car\'s interior in tropical conditions.',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
    category: 'Local Tips',
    date: 'October 5, 2025',
    readTime: '5 min read',
  },
  {
    id: 5,
    title: 'Paint Correction: What It Is and When You Need It',
    excerpt: 'Everything you need to know about paint correction and how it can restore your vehicle\'s finish.',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800',
    category: 'Services Explained',
    date: 'September 28, 2025',
    readTime: '7 min read',
  },
  {
    id: 6,
    title: 'Top 10 Detailing Mistakes to Avoid',
    excerpt: 'Common car care mistakes that could be damaging your luxury vehicle without you knowing.',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800',
    category: 'DIY Tips',
    date: 'September 20, 2025',
    readTime: '6 min read',
  },
];

export default function Blog() {
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
              Expert Insights
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Detailing Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tips, guides, and insights from luxury auto care professionals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-serif font-bold text-blue-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-700 mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link href={`/blog/${post.id}`}>
                      <span className="text-amber-600 font-semibold hover:text-amber-700 cursor-pointer">
                        Read More →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest tips and exclusive offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
              <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
