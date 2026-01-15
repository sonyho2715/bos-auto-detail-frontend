"use client";

import { motion } from "framer-motion";
import { Award, Clock, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Craftsmanship",
    description:
      "10+ years of experience with luxury vehicles. We treat every car like it is our own.",
  },
  {
    icon: Shield,
    title: "Premium Products",
    description:
      "We use only the finest ceramic coatings, polishes, and protection products available.",
  },
  {
    icon: Clock,
    title: "Attention to Detail",
    description:
      "We never rush. Every vehicle receives the time and care it deserves for perfect results.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We are not happy until you are amazed.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-dark-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-wider text-gold"
            >
              Why Choose Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 font-playfair text-4xl font-bold text-dark-50"
            >
              The Bo&apos;s Auto Detail
              <br />
              <span className="text-gradient-gold">Difference</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-dark-400 leading-relaxed"
            >
              When you bring your vehicle to Bo&apos;s Auto Detail, you&apos;re not
              just getting a car wash. You&apos;re getting a premium transformation
              experience backed by years of expertise and a genuine passion for
              automotive excellence.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-dark-800 bg-dark-900/50 p-6"
              >
                <div className="inline-flex rounded-lg bg-gold/10 p-2">
                  <feature.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mt-3 font-semibold text-dark-50">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm text-dark-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
