"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, Shield, ChevronLeft, ChevronRight, Car, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Ray T.",
    rating: 5,
    text: "Took my car to Bo's for wash and wax package. They did an awesome job. My black car came out sparkling!",
    service: "Wash & Wax",
    vehicle: "Sedan",
  },
  {
    name: "Sean G.",
    rating: 5,
    text: "With 4 children, stains were living rent-free inside my Mazda SUV. These guys made it look like I wasn't a parent for years. Completely recommend them. Very friendly staff, phenomenal owner, and outstanding work.",
    service: "Full Detail",
    vehicle: "Mazda SUV",
  },
  {
    name: "Mandy R.",
    rating: 5,
    text: "I cannot recommend this spot enough. Far superior job to nearby competitors. They went above and beyond with pet hair removal, even cleaning the dog hammock in the back seat.",
    service: "Interior Detail",
    vehicle: "SUV",
  },
  {
    name: "Ashley B.",
    rating: 5,
    text: "Absolutely amazing work. They take such great care of the car and pay attention to detail. Thorough, friendly, and considerate.",
    service: "Full Detail",
    vehicle: "Sedan",
  },
  {
    name: "Michael K.",
    rating: 5,
    text: "I hadn't cleaned my car in 4 years. Bo and his team made it look brand new again. Extremely happy with the service, work they did and the reasonable price.",
    service: "Full Detail",
    vehicle: "Sedan",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "Bo fit me in last minute for a shipment. Worth the money for sure. Customer service is great. They made sure I was 100% happy before leaving.",
    service: "Shipping Prep",
    vehicle: "Vehicle Transport",
  },
  {
    name: "David H.",
    rating: 5,
    text: "They are very knowledgeable about cars and made sure to point out that my paint was oxidizing from the rain. Saved me from bigger problems down the road.",
    service: "Paint Correction",
    vehicle: "Truck",
  },
  {
    name: "Sarah M.",
    rating: 5,
    text: "Bo is a cool guy, and despite me being late both times he was still able to fit me in and make it work. The attention to detail is incredible.",
    service: "Full Detail",
    vehicle: "SUV",
  },
  {
    name: "Chris P.",
    rating: 5,
    text: "Best detailing shop in Honolulu hands down. Been coming here for years. Bo treats every car like it's his own.",
    service: "Regular Customer",
    vehicle: "Multiple Vehicles",
  },
  {
    name: "Linda W.",
    rating: 5,
    text: "They removed years of grime and made my interior look showroom new. The leather conditioning was perfect. Highly recommend!",
    service: "Interior Detail",
    vehicle: "Lexus",
  },
  {
    name: "James T.",
    rating: 5,
    text: "Brought in my classic car for oxidation removal. The team worked magic on the paint. It looks better than when I bought it 20 years ago.",
    service: "Oxidation Removal",
    vehicle: "Classic Car",
  },
  {
    name: "Karen S.",
    rating: 5,
    text: "Professional service from start to finish. They explained everything they would do and delivered exactly as promised. My Tesla looks amazing!",
    service: "Full Detail",
    vehicle: "Tesla",
  },
];

// Split testimonials into featured (first 4) and carousel (rest)
const featuredTestimonials = testimonials.slice(0, 4);
const carouselTestimonials = testimonials.slice(4);

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(carouselTestimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentCarouselItems = carouselTestimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-24 bg-dark-900">
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

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="text-center p-4 rounded-xl bg-dark-800/50 border border-dark-700">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-2xl font-bold text-dark-50">5.0</p>
            <p className="text-xs text-dark-400">Google Rating</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-dark-800/50 border border-dark-700">
            <Shield className="h-6 w-6 text-gold mx-auto mb-2" />
            <p className="text-2xl font-bold text-dark-50">A+</p>
            <p className="text-xs text-dark-400">BBB Rating</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-dark-800/50 border border-dark-700">
            <Car className="h-6 w-6 text-gold mx-auto mb-2" />
            <p className="text-2xl font-bold text-dark-50">10,000+</p>
            <p className="text-xs text-dark-400">Cars Detailed</p>
          </div>
          <div className="text-center p-4 rounded-xl bg-dark-800/50 border border-dark-700">
            <Sparkles className="h-6 w-6 text-gold mx-auto mb-2" />
            <p className="text-2xl font-bold text-dark-50">34+</p>
            <p className="text-xs text-dark-400">Years Experience</p>
          </div>
        </motion.div>

        {/* Featured Testimonials Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredTestimonials.map((testimonial, index) => (
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
              <p className="mt-4 text-sm text-dark-300 leading-relaxed line-clamp-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-dark-800">
                <p className="font-semibold text-dark-50">{testimonial.name}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gold">{testimonial.service}</p>
                  <p className="text-xs text-dark-500">{testimonial.vehicle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-dark-200">More Reviews</h3>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-dark-800 border border-dark-700 text-dark-400 transition-all hover:border-gold hover:text-gold"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-dark-800 border border-dark-700 text-dark-400 transition-all hover:border-gold hover:text-gold"
                aria-label="Next reviews"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 md:grid-cols-2"
              >
                {currentCarouselItems.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="relative rounded-2xl border border-dark-800 bg-dark-950/50 p-6"
                  >
                    <Quote className="absolute top-4 right-4 h-8 w-8 text-gold/10" />

                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-gold text-gold"
                        />
                      ))}
                    </div>

                    <p className="text-sm text-dark-300 leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    <div className="mt-6 pt-4 border-t border-dark-800 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-dark-50">{testimonial.name}</p>
                        <p className="text-xs text-gold">{testimonial.service}</p>
                      </div>
                      <p className="text-xs text-dark-500">{testimonial.vehicle}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-6 bg-gold"
                    : "w-2 bg-dark-700 hover:bg-dark-600"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Trust Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-dark-500">
            Serving Honolulu since 1991 &bull; Located at Mark&apos;s Garage, Chinatown &bull; BBB Accredited Since 2017
          </p>
        </motion.div>
      </div>
    </section>
  );
}
