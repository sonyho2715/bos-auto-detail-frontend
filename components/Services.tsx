"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Droplets, Shield, Sparkles, Car } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Full Detail",
    description:
      "Complete interior and exterior transformation. Every surface meticulously cleaned and restored.",
    price: "From $199",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description:
      "Long-lasting protection with professional-grade ceramic coating. Years of protection in one application.",
    price: "From $599",
  },
  {
    icon: Droplets,
    title: "Paint Correction",
    description:
      "Remove swirls, scratches, and imperfections. Restore your paint to better than showroom condition.",
    price: "From $399",
  },
  {
    icon: Car,
    title: "Interior Detail",
    description:
      "Deep cleaning, conditioning, and protection for all interior surfaces. Fresh and luxurious inside.",
    price: "From $149",
  },
];

export function Services() {
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
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-playfair text-4xl font-bold text-dark-50"
          >
            Premium Detailing Packages
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-dark-400"
          >
            Choose from our curated selection of detailing services, each
            designed to bring out the absolute best in your vehicle.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl border border-dark-800 bg-dark-950/50 p-8 transition-all hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5"
            >
              <div className="inline-flex rounded-xl bg-gold/10 p-3">
                <service.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-dark-50">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-dark-400 leading-relaxed">
                {service.description}
              </p>
              <p className="mt-4 text-lg font-semibold text-gold">
                {service.price}
              </p>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
