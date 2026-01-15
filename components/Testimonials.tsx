"use client";

import { motion } from "framer-motion";
import { Star, Quote, Shield } from "lucide-react";

const testimonials = [
  {
    name: "Ray T.",
    rating: 5,
    text: "Took my car to Bo&apos;s for wash and wax package. They did an awesome job. My black car came out sparkling!",
    service: "Wash & Wax",
  },
  {
    name: "Sean G.",
    rating: 5,
    text: "These guys are terrific. Made it look like I wasn&apos;t a parent for years. Completely recommend them. Friendly staff, phenomenal owner, outstanding work.",
    service: "Full Detail",
  },
  {
    name: "Mandy R.",
    rating: 5,
    text: "I cannot recommend this spot enough. Far superior job to nearby competitors. They went above and beyond with pet hair removal.",
    service: "Interior Detail",
  },
  {
    name: "Ashley B.",
    rating: 5,
    text: "Absolutely amazing work. They take such great care of the car and pay attention to detail. Thorough, friendly, and considerate.",
    service: "Full Detail",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-dark-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-gold"
          >
            Customer Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-playfair text-4xl font-bold text-dark-50"
          >
            What Our <span className="text-gradient-gold">Customers Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-dark-400"
          >
            Over 34 years of excellence in auto detailing. See why Honolulu trusts us with their vehicles.
          </motion.p>
        </div>

        {/* BBB Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-dark-800 border border-dark-700 px-6 py-3">
            <Shield className="h-6 w-6 text-gold" />
            <div className="text-left">
              <p className="text-sm font-semibold text-dark-50">BBB A+ Rating</p>
              <p className="text-xs text-dark-400">Accredited Business Since 2017</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative rounded-2xl border border-dark-800 bg-dark-950/50 p-6 transition-all hover:border-gold/30 hover:bg-dark-900/50"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 h-8 w-8 text-gold/10" />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="mt-4 text-sm text-dark-300 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-dark-800">
                <p className="font-semibold text-dark-50">{testimonial.name}</p>
                <p className="text-xs text-gold">{testimonial.service}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-dark-500">
            Serving Honolulu since 1991 &bull; Located at Mark&apos;s Garage, Chinatown
          </p>
        </motion.div>
      </div>
    </section>
  );
}
