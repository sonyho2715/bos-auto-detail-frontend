// src/pages/book.tsx
import React from 'react';
import { Navigation, Footer } from '@/components';
import { BookingTool } from '@/components/BookingTool/BookingTool';

export default function Book() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-600 text-sm uppercase tracking-widest font-semibold mb-4">
              Easy Online Booking
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-blue-900 mb-6">
              Book Your Service
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Schedule your appointment in just a few simple steps
            </p>
          </div>

          <BookingTool />
        </div>
      </section>

      <Footer />
    </div>
  );
}
