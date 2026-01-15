"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-dark-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 p-12 lg:p-16"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />

          <div className="relative z-10 text-center">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-dark-50">
              Ready to Transform
              <br />
              <span className="text-gradient-gold">Your Vehicle?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-dark-400">
              Get a free, no-obligation quote today. We&apos;ll discuss your
              vehicle&apos;s needs and recommend the perfect detailing package.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-dark-950 transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+18081234567"
                className="flex items-center gap-2 rounded-full border border-dark-700 px-8 py-4 text-sm font-semibold text-dark-200 transition-all hover:border-gold hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                (808) 123-4567
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
