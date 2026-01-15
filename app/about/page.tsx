"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, Clock, Heart } from "lucide-react";

const stats = [
  { value: "34", label: "Years in Business" },
  { value: "1991", label: "Established" },
  { value: "A+", label: "BBB Rating" },
  { value: "5.0", label: "Customer Rating" },
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
                Since 1991, Bo&apos;s Auto Detail has been Honolulu&apos;s trusted name in
                premium auto detailing. For over 34 years, we&apos;ve built our
                reputation on meticulous craftsmanship, honest service, and a
                genuine passion for making vehicles shine.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-dark-400 leading-relaxed"
              >
                Located at Mark&apos;s Garage in the heart of Chinatown, we treat
                every vehicle with the same level of care and precision, whether
                it&apos;s a daily driver or a collector&apos;s dream car. Our BBB A+
                rating reflects our commitment to customer satisfaction.
              </motion.p>
            </div>

            {/* Owner Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-[4/5] rounded-2xl bg-dark-800 overflow-hidden"
            >
              <Image
                src="/images/bo-owner.jpg"
                alt="Bo - Owner of Bo's Auto Detail"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xl font-playfair font-bold text-dark-50">Bo Moore</p>
                <p className="text-sm text-gold">Owner & Master Detailer</p>
                <p className="text-xs text-dark-300 mt-1">Serving Honolulu Since 1991</p>
              </div>
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
                In 1991, Bo opened the doors of Bo&apos;s Auto Detail with a simple
                vision: to provide Honolulu with auto detailing services that
                truly exceed expectations. What started as a one-man operation
                driven by passion has grown into a trusted institution in the
                Hawaiian automotive community.
              </p>
              <p>
                Over three decades later, that same dedication to perfection
                remains at the heart of everything we do. We&apos;ve earned our BBB
                A+ rating and accreditation since 2017 by treating every
                customer like family and every vehicle like our own.
              </p>
              <p>
                Today, operating out of Mark&apos;s Garage in historic Chinatown,
                we continue to serve our community with the same passion and
                dedication that started it all. From basic washes to complete
                paint corrections, we pour our expertise into every detail.
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
