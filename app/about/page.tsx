"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Heart } from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Vehicles Detailed" },
  { value: "5.0", label: "Google Rating" },
  { value: "100%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We never settle for 'good enough.' Every vehicle receives our absolute best effort and attention.",
  },
  {
    icon: Users,
    title: "Integrity",
    description:
      "Honest pricing, transparent service. We treat every customer the way we'd want to be treated.",
  },
  {
    icon: Clock,
    title: "Dedication",
    description:
      "We take the time needed to do things right. Quality cannot be rushed.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We genuinely love what we do. Every car is an opportunity to create something beautiful.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-dark-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm font-semibold uppercase tracking-wider text-gold"
              >
                About Us
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-2 font-playfair text-5xl font-bold text-dark-50"
              >
                Crafting Automotive
                <br />
                <span className="text-gradient-gold">Excellence</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-dark-400 leading-relaxed"
              >
                Bo&apos;s Auto Detail was founded with a simple mission: to provide
                the highest quality auto detailing services with unmatched
                attention to detail. What started as a passion project has grown
                into a trusted name in premium vehicle care.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-dark-400 leading-relaxed"
              >
                Every vehicle that comes through our doors is treated with the
                same level of care and precision, whether it&apos;s a daily driver or
                a collector&apos;s dream car. We believe that every vehicle deserves
                to look its best.
              </motion.p>
            </div>

            {/* Placeholder for owner image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square rounded-2xl bg-dark-800 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-gradient-gold">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-dark-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-dark-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-playfair text-3xl font-bold text-dark-50">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-dark-400 leading-relaxed">
              <p>
                It all started with a love for cars and a commitment to
                perfection. After years of working in the automotive industry
                and seeing how detailing services often cut corners, Bo decided
                to create something different.
              </p>
              <p>
                Bo&apos;s Auto Detail was built on the belief that true quality takes
                time, expertise, and genuine care. We invested in the best
                equipment, trained in the latest techniques, and sourced premium
                products that deliver results you can see and feel.
              </p>
              <p>
                Today, we&apos;re proud to serve our community with the same passion
                and dedication that started it all. Every vehicle is an
                opportunity to demonstrate our commitment to excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-playfair text-3xl font-bold text-dark-50"
            >
              Our Values
            </motion.h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mx-auto inline-flex rounded-xl bg-gold/10 p-3">
                  <value.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="mt-4 font-semibold text-dark-50">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
