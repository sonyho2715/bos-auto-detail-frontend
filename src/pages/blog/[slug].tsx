// src/pages/blog/[slug].tsx
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import { Navigation, Footer } from '@/components';
import { BlogPost, getBlogPostBySlug, getAllBlogSlugs } from '@/data/blogPosts';
import Link from 'next/link';
import Head from 'next/head';

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  if (!post) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{post.title} - Bo's Auto Detail Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/blog">
                <span className="text-amber-400 hover:text-amber-300 cursor-pointer text-sm font-semibold mb-4 inline-block">
                  ← Back to Blog
                </span>
              </Link>

              <div className="flex items-center gap-3 mb-6">
                <span className="bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <span className="text-gray-300 text-sm">{post.readTime}</span>
                <span className="text-gray-300 text-sm">•</span>
                <span className="text-gray-300 text-sm">{post.date}</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                {post.title}
              </h1>

              <p className="text-xl text-gray-300 mb-6">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{post.author}</p>
                  <p className="text-gray-400 text-sm">Master Detailer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 px-4 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-xl shadow-2xl"
            />
          </motion.div>
        </section>

        {/* Article Content */}
        <article className="py-12 px-4 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto prose prose-lg prose-blue
              prose-headings:font-serif prose-headings:text-blue-900
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-amber-600 prose-a:no-underline hover:prose-a:text-amber-700
              prose-strong:text-blue-900 prose-strong:font-semibold
              prose-ul:text-gray-700 prose-ol:text-gray-700
              prose-li:my-1"
          >
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
          </motion.div>
        </article>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-serif font-bold text-white mb-4">
                Ready to Transform Your Vehicle?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the Bo's Auto Detail difference
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book">
                  <button className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg text-lg transition-colors">
                    Book Service
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-lg text-lg transition-all">
                    Contact Us
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Share Buttons */}
        <section className="py-8 px-4 bg-gray-50 border-t border-gray-200">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-gray-600 mb-4">Share this article:</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Facebook
              </button>
              <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                Twitter
              </button>
              <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                LinkedIn
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllBlogSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getBlogPostBySlug(params?.slug as string);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
