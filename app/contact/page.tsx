"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Navigation } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          href="https://www.google.com/maps/dir//1142+Bethel+St,+Honolulu,+HI+96813"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
          aria-label="Get Directions"
        >
          <Navigation className="h-6 w-6" />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-dark-800 text-dark-50 text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Get Directions
          </span>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          href="sms:+18087821526"
          className="group flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all hover:scale-110"
          aria-label="Send Text Message"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-dark-800 text-dark-50 text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Text Us
          </span>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          href="tel:+18087821526"
          className="group flex items-center justify-center w-14 h-14 rounded-full bg-gold text-dark-950 shadow-lg hover:bg-gold-light transition-all hover:scale-110"
          aria-label="Call Now"
        >
          <Phone className="h-6 w-6" />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-dark-800 text-dark-50 text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Call Now
          </span>
        </motion.a>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-dark-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-semibold uppercase tracking-wider text-gold"
          >
            Contact Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-playfair text-5xl font-bold text-dark-50"
          >
            Get In
            <br />
            <span className="text-gradient-gold">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-dark-400"
          >
            Ready to transform your vehicle? Give us a call or stop by the shop.
            We&apos;re located at Mark&apos;s Garage in Chinatown.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-playfair text-2xl font-bold text-dark-50">
                Contact Information
              </h2>
              <p className="mt-4 text-dark-400">
                We&apos;d love to hear from you. Stop by, give us a call, or send a text.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gold/10 p-3">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-50">Location</h3>
                    <p className="mt-1 text-dark-400">
                      1142 Bethel St (Mark&apos;s Garage)
                      <br />
                      Honolulu, HI 96813
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gold/10 p-3">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-50">Phone</h3>
                    <a
                      href="tel:+18087821526"
                      className="mt-1 text-dark-400 hover:text-gold transition-colors"
                    >
                      (808) 782-1526
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gold/10 p-3">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-50">Email</h3>
                    <a
                      href="mailto:bosautodetail@gmail.com"
                      className="mt-1 text-dark-400 hover:text-gold transition-colors"
                    >
                      bosautodetail@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gold/10 p-3">
                    <Clock className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-50">Hours</h3>
                    <p className="mt-1 text-dark-400">
                      Mon - Fri: 8am - 4pm
                      <br />
                      Saturday: 9am - 5pm
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                <a
                  href="tel:+18087821526"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gold/10 border border-gold/20 text-gold hover:bg-gold hover:text-dark-950 transition-all"
                >
                  <Phone className="h-6 w-6" />
                  <span className="text-xs font-medium">Call</span>
                </a>
                <a
                  href="sms:+18087821526"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 hover:bg-green-500 hover:text-white transition-all"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="text-xs font-medium">Text</span>
                </a>
                <a
                  href="https://www.google.com/maps/dir//1142+Bethel+St,+Honolulu,+HI+96813"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 hover:bg-blue-500 hover:text-white transition-all"
                >
                  <Navigation className="h-6 w-6" />
                  <span className="text-xs font-medium">Directions</span>
                </a>
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="rounded-2xl bg-dark-800 overflow-hidden border border-dark-700 h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.1876!2d-157.8632!3d21.3107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006df6b79f9a8d%3A0x9a6c5c7e3f8b2a1d!2s1142%20Bethel%20St%2C%20Honolulu%2C%20HI%2096813!5e0!3m2!1sen!2sus!4v1705000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bo's Auto Detail Location - 1142 Bethel St, Honolulu"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-dark-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl font-bold text-dark-50"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-dark-400"
          >
            Give us a call or stop by the shop. No appointment necessary for estimates.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+18087821526"
              className="flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-dark-950 transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              <Phone className="h-5 w-5" />
              (808) 782-1526
            </a>
            <a
              href="https://www.google.com/maps/dir//1142+Bethel+St,+Honolulu,+HI+96813"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-dark-600 bg-dark-950/50 px-8 py-4 text-sm font-semibold text-dark-200 transition-all hover:border-gold hover:text-gold"
            >
              <Navigation className="h-5 w-5" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
