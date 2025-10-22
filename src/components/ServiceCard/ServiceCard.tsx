// src/components/ServiceCard/ServiceCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  price?: number;
  highlighted?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features = [],
  price,
  highlighted = false,
}) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
        highlighted
          ? 'bg-gradient-to-br from-blue-900 to-blue-800 ring-2 ring-amber-600 shadow-2xl'
          : 'bg-white shadow-lg hover:shadow-2xl'
      }`}
    >
      <div className={`h-1 ${highlighted ? 'bg-amber-400' : 'bg-amber-600'}`} />

      <div className="p-8">
        <div className="text-5xl mb-4">{icon}</div>

        {highlighted && (
          <div className="inline-block bg-amber-400 text-blue-900 px-3 py-1 rounded-full text-xs font-semibold mb-4">
            MOST POPULAR
          </div>
        )}

        <h3 className={`text-2xl font-serif font-bold mb-3 ${highlighted ? 'text-white' : 'text-blue-900'}`}>
          {title}
        </h3>

        <p className={`mb-6 leading-relaxed ${highlighted ? 'text-gray-100' : 'text-gray-600'}`}>
          {description}
        </p>

        {price && (
          <div className="mb-6">
            <p className={`text-sm font-semibold mb-1 ${highlighted ? 'text-amber-300' : 'text-gray-600'}`}>
              Starting at
            </p>
            <p className={`text-4xl font-serif font-bold ${highlighted ? 'text-white' : 'text-blue-900'}`}>
              ${price}
            </p>
          </div>
        )}

        {features.length > 0 && (
          <ul className="space-y-2 mb-8">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center text-sm ${highlighted ? 'text-gray-100' : 'text-gray-700'}`}
              >
                <span className="text-amber-600 mr-3 font-bold">✓</span>
                {feature}
              </motion.li>
            ))}
          </ul>
        )}

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/book">
            <button
              className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                highlighted
                  ? 'bg-amber-400 text-blue-900 hover:bg-amber-500'
                  : 'bg-blue-900 text-white hover:bg-blue-950'
              }`}
            >
              Learn More
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
