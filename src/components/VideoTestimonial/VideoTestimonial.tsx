// src/components/VideoTestimonial/VideoTestimonial.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoTestimonialProps {
  name: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  quote: string;
}

export const VideoTestimonial: React.FC<VideoTestimonialProps> = ({
  name,
  title,
  thumbnail,
  videoUrl,
  quote,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
      onClick={() => setIsPlaying(true)}
    >
      {!isPlaying ? (
        <div className="relative aspect-video">
          <img
            src={thumbnail}
            alt={name}
            className="w-full h-full object-cover"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center shadow-2xl"
            >
              <svg
                className="w-8 h-8 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </div>

          {/* Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white font-semibold text-lg mb-1">{name}</h3>
            <p className="text-gray-300 text-sm mb-2">{title}</p>
            <p className="text-white/90 text-sm italic">"{quote}"</p>
          </div>
        </div>
      ) : (
        <div className="relative aspect-video bg-black">
          <iframe
            src={videoUrl}
            title={name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(false);
            }}
            className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
          >
            ×
          </button>
        </div>
      )}
    </motion.div>
  );
};

export const VideoTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'John Smith',
      title: 'Luxury Vehicle Owner',
      thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'Bo\'s transformed my car beyond expectations!',
    },
    {
      name: 'Maria Garcia',
      title: 'Business Executive',
      thumbnail: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'The mobile service saves me so much time!',
    },
    {
      name: 'David Chen',
      title: 'Car Enthusiast',
      thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      quote: 'Best ceramic coating in Hawaii, hands down!',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">
            Hear From Our Clients
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from real luxury vehicle owners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <VideoTestimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
