"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Shield,
  Droplets,
  Car,
  Check,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "full-detail",
    icon: Sparkles,
    title: "Full Detail Package",
    description:
      "Our signature service. Complete interior and exterior transformation that leaves your vehicle looking better than showroom new.",
    price: "$199",
    priceNote: "Sedans & Coupes",
    duration: "4-6 hours",
    includes: [
      "Hand wash and dry",
      "Clay bar treatment",
      "Machine polish",
      "Paint sealant application",
      "Full interior vacuum",
      "Leather conditioning",
      "Dashboard and trim detail",
      "Glass cleaning inside and out",
      "Tire and wheel detail",
      "Air freshener",
    ],
  },
  {
    id: "ceramic-coating",
    icon: Shield,
    title: "Ceramic Coating",
    description:
      "Professional-grade ceramic coating that provides years of protection. The ultimate in paint protection technology.",
    price: "$599",
    priceNote: "Starting price",
    duration: "1-2 days",
    includes: [
      "Full paint decontamination",
      "Single-stage polish",
      "IGL Kenzo ceramic coating",
      "5-year protection warranty",
      "Hydrophobic surface",
      "UV protection",
      "Chemical resistance",
      "Enhanced gloss finish",
      "Annual inspection included",
      "Touch-up service included",
    ],
  },
  {
    id: "paint-correction",
    icon: Droplets,
    title: "Paint Correction",
    description:
      "Remove years of swirl marks, scratches, and oxidation. Restore your paint to its original clarity and depth.",
    price: "$399",
    priceNote: "Single-stage",
    duration: "6-8 hours",
    includes: [
      "Paint thickness measurement",
      "Full decontamination wash",
      "Clay bar treatment",
      "Machine compounding",
      "Machine polishing",
      "Swirl mark removal",
      "Scratch removal",
      "Hologram removal",
      "Paint sealant application",
      "Final inspection",
    ],
  },
  {
    id: "interior-detail",
    icon: Car,
    title: "Interior Detail",
    description:
      "Deep cleaning and conditioning for all interior surfaces. Restore that new car feeling with our comprehensive interior service.",
    price: "$149",
    priceNote: "Sedans & Coupes",
    duration: "2-3 hours",
    includes: [
      "Complete vacuum",
      "Steam cleaning",
      "Leather cleaning and conditioning",
      "Fabric shampooing",
      "Dashboard detail",
      "Console and door panels",
      "Cup holder cleaning",
      "Vent cleaning",
      "Glass cleaning",
      "Odor elimination",
    ],
  },
];

export default function ServicesPage() {
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
            Our Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 font-playfair text-5xl font-bold text-dark-50"
          >
            Premium Detailing
            <br />
            <span className="text-gradient-gold">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-dark-400"
          >
            From basic maintenance to complete transformations, we offer a full
            range of detailing services tailored to your vehicle&apos;s needs.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-start"
              >
                {/* Service Info */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="inline-flex rounded-xl bg-gold/10 p-3">
                    <service.icon className="h-8 w-8 text-gold" />
                  </div>
                  <h2 className="mt-4 font-playfair text-3xl font-bold text-dark-50">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-dark-400 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gold">
                      {service.price}
                    </span>
                    <span className="text-dark-500">{service.priceNote}</span>
                  </div>
                  <p className="mt-2 text-sm text-dark-500">
                    Duration: {service.duration}
                  </p>
                  <Link
                    href="/contact"
                    className="group mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-dark-950 transition-all hover:bg-gold-light"
                  >
                    Book This Service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* What&apos;s Included */}
                <div
                  className={`rounded-2xl border border-dark-800 bg-dark-950/50 p-8 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-lg font-semibold text-dark-50">
                    What&apos;s Included
                  </h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                        <span className="text-sm text-dark-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-dark-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-dark-400">
            <span className="text-gold">*</span> Prices shown are for standard
            sedans and coupes. SUVs, trucks, and larger vehicles may have
            additional charges. Contact us for a personalized quote.
          </p>
        </div>
      </section>
    </div>
  );
}
