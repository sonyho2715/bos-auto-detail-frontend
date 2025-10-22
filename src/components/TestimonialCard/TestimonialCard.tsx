// src/components/TestimonialCard/TestimonialCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  rating: number;
  date: string;
  review: string;
  service?: string;
  verified?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  rating,
  date,
  review,
  service,
  verified = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
            {name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-blue-900">{name}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        {verified && (
          <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded text-xs text-blue-900">
            <span>✓</span>
            <span>Verified</span>
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'text-amber-500' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-700 mb-4 leading-relaxed">{review}</p>

      {/* Service Tag */}
      {service && (
        <div className="inline-block bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
          {service}
        </div>
      )}
    </motion.div>
  );
};
