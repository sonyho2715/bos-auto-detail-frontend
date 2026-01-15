"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="pt-20">
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
            Ready to transform your vehicle? Contact us for a free quote or to
            schedule your appointment.
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
                We&apos;d love to hear from you. Reach out to us through any of these
                channels.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-gold/10 p-3">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-50">Location</h3>
                    <p className="mt-1 text-dark-400">
                      123 Detail Lane
                      <br />
                      Honolulu, HI 96815
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
                      href="tel:+18081234567"
                      className="mt-1 text-dark-400 hover:text-gold"
                    >
                      (808) 123-4567
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
                      href="mailto:info@bosautodetail.com"
                      className="mt-1 text-dark-400 hover:text-gold"
                    >
                      info@bosautodetail.com
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
                      Mon - Fri: 8am - 6pm
                      <br />
                      Saturday: 9am - 5pm
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video rounded-xl bg-dark-800 overflow-hidden">
                <div className="h-full w-full flex items-center justify-center text-dark-600">
                  Map placeholder
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="rounded-2xl border border-dark-800 bg-dark-950/50 p-8">
                <h2 className="font-playfair text-2xl font-bold text-dark-50">
                  Request a Quote
                </h2>
                <p className="mt-2 text-dark-400">
                  Fill out the form below and we&apos;ll get back to you within 24
                  hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-8 text-center py-12"
                  >
                    <div className="mx-auto inline-flex rounded-full bg-green-500/10 p-4">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-dark-50">
                      Message Sent!
                    </h3>
                    <p className="mt-2 text-dark-400">
                      Thank you for contacting us. We&apos;ll be in touch soon.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 text-sm text-gold hover:text-gold-light"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-dark-300"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="mt-1 block w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-dark-50 placeholder-dark-500 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-dark-300"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="mt-1 block w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-dark-50 placeholder-dark-500 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-dark-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-dark-50 placeholder-dark-500 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-dark-300"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="mt-1 block w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-dark-50 placeholder-dark-500 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                        placeholder="(808) 123-4567"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="vehicle"
                        className="block text-sm font-medium text-dark-300"
                      >
                        Vehicle Make & Model
                      </label>
                      <input
                        type="text"
                        id="vehicle"
                        name="vehicle"
                        className="mt-1 block w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-dark-50 placeholder-dark-500 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                        placeholder="2024 Mercedes-Benz S-Class"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-dark-300"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="mt-1 block w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-dark-50 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none"
                      >
                        <option value="">Select a service</option>
                        <option value="full-detail">Full Detail</option>
                        <option value="ceramic-coating">Ceramic Coating</option>
                        <option value="paint-correction">Paint Correction</option>
                        <option value="interior-detail">Interior Detail</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-dark-300"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="mt-1 block w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-dark-50 placeholder-dark-500 focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none resize-none"
                        placeholder="Tell us about your vehicle and what you're looking for..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-4 text-sm font-semibold text-dark-950 transition-all hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
