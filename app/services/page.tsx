"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Droplets,
  Car,
  Check,
  ArrowRight,
  Truck,
  Wrench,
} from "lucide-react";

// Main service packages with real pricing
const mainServices = [
  {
    id: "basic-wash",
    icon: Droplets,
    title: "Basic Wash",
    description: "Quick exterior hand wash for regular maintenance.",
    pricing: { car: "$50", suv: "$60", truck: "$90" },
  },
  {
    id: "wash-vac-dress",
    icon: Car,
    title: "Wash, Vac & Dress",
    description: "Exterior wash plus interior vacuum and dressing for a clean, fresh look.",
    pricing: { car: "$100", suv: "$125", truck: "$150" },
  },
  {
    id: "wash-vac-dress-wax",
    icon: Sparkles,
    title: "Wash, Vac, Dress & Wax",
    description: "Complete wash package with wax protection for lasting shine.",
    pricing: { car: "$150", suv: "$200", truck: "$275" },
  },
  {
    id: "exterior",
    icon: Droplets,
    title: "Exterior Detail",
    description: "Full exterior transformation including clay bar and polish.",
    pricing: { car: "$250", suv: "$300", truck: "$375" },
  },
  {
    id: "interior",
    icon: Car,
    title: "Interior Detail",
    description: "Deep interior cleaning, conditioning, and restoration.",
    pricing: { car: "$250", suv: "$300", truck: "$375" },
  },
  {
    id: "full-detail",
    icon: Sparkles,
    title: "Full Detail",
    description: "Complete interior and exterior detail for the ultimate transformation.",
    pricing: { car: "$300", suv: "$300", truck: "$375" },
    popular: true,
  },
];

// Premium services with real pricing
const premiumServices = [
  {
    id: "clay",
    title: "Clay Treatment",
    description: "Remove contaminants for a smooth finish",
    pricing: { car: "$400", suv: "$500", truck: "$600" },
  },
  {
    id: "clay-engine",
    title: "Clay + Engine Clean",
    description: "Clay treatment plus engine bay detailing",
    pricing: { car: "$450", suv: "$550", truck: "$650" },
  },
  {
    id: "clay-buff",
    title: "Clay + Buff",
    description: "Clay treatment with machine buffing for deep shine",
    pricing: { car: "$500", suv: "$600", truck: "$700" },
  },
  {
    id: "clay-buff-engine",
    title: "Clay + Buff + Engine",
    description: "The complete premium package",
    pricing: { car: "$550", suv: "$650", truck: "$750+" },
  },
  {
    id: "oxidation",
    title: "Oxidation Removal",
    description: "Remove oxidation from entire vehicle (quote required)",
    pricing: { car: "$550*", suv: "$650*", truck: "$750+*" },
  },
];

// Ala Carte services
const alaCarteServices = [
  { name: "Water Spot Glass", car: "$100 EQ", suv: "$150 EQ", truck: "$250 EQ" },
  { name: "Water Spot Paint", car: "$200 EQ", suv: "$300 EQ", truck: "$500 EQ" },
  { name: "Machine Wax Buff", car: "$150 EQ", suv: "$250 EQ", truck: "$350 EQ" },
  { name: "Orbit Wax", car: "$100", suv: "$200", truck: "$300" },
  { name: "Acid Wash", car: "$250", suv: "$350", truck: "$450" },
  { name: "Clay Bar (Over Spray Removal)", car: "$350", suv: "$450", truck: "$550" },
  { name: "Hot Water Extraction", car: "$100", suv: "$200", truck: "$300" },
  { name: "Interior Wipe Down", car: "$50", suv: "$75", truck: "$100" },
  { name: "Interior Dress", car: "$100", suv: "$150", truck: "$200" },
  { name: "Motor Cleaned", car: "$75", suv: "$75", truck: "$75" },
  { name: "Restore Headlights", car: "$50/pair", suv: "$50/pair", truck: "$50/pair" },
  { name: "Shipping Prep", car: "$225", suv: "$275", truck: "$350" },
];

// What's included in special services
const specialIncludes = [
  "Wash & Clay Bar Vehicle",
  "Clean Tires & Rims Inside & Out",
  "Under Carriage Cleaning",
  "Trunk & Truck Beds",
  "Shampoo Carpet & Upholstery",
  "Dress Leather, Vinyl & Rubber",
  "Windows Inside & Out",
  "Air Vents Cleaning",
  "Cup Holders & Glove Pockets",
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
            <span className="text-gradient-gold">Services & Pricing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-dark-400"
          >
            Hawaii&apos;s #1 Auto Detailing Service since 1991. Transparent pricing
            for every vehicle size.
          </motion.p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-playfair text-3xl font-bold text-dark-50 mb-12"
          >
            Detailing Packages
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl border ${
                  service.popular
                    ? "border-gold bg-gold/5"
                    : "border-dark-800 bg-dark-950/50"
                } p-6`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gold px-3 py-1 text-xs font-semibold text-dark-950">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="inline-flex rounded-xl bg-gold/10 p-3">
                  <service.icon className="h-6 w-6 text-gold" />
                </div>

                <h3 className="mt-4 font-playfair text-xl font-bold text-dark-50">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-dark-400">
                  {service.description}
                </p>

                {/* Pricing Grid */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-dark-400">
                      <Car className="h-4 w-4" /> Car
                    </span>
                    <span className="font-semibold text-gold">{service.pricing.car}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-dark-400">
                      <Car className="h-4 w-4" /> SUV/Van
                    </span>
                    <span className="font-semibold text-gold">{service.pricing.suv}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-dark-400">
                      <Truck className="h-4 w-4" /> Truck/Ext.
                    </span>
                    <span className="font-semibold text-gold">{service.pricing.truck}</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-6 block w-full rounded-lg bg-dark-800 py-3 text-center text-sm font-semibold text-dark-200 transition-all hover:bg-gold hover:text-dark-950"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services */}
      <section className="py-16 bg-dark-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-playfair text-3xl font-bold text-dark-50 mb-4"
          >
            Premium Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-dark-400 mb-12"
          >
            Advanced treatments for the ultimate finish
          </motion.p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-dark-800">
                  <th className="py-4 text-left text-sm font-semibold text-dark-300">Service</th>
                  <th className="py-4 text-center text-sm font-semibold text-dark-300">Car</th>
                  <th className="py-4 text-center text-sm font-semibold text-dark-300">SUV/Van</th>
                  <th className="py-4 text-center text-sm font-semibold text-dark-300">Truck/Ext.</th>
                </tr>
              </thead>
              <tbody>
                {premiumServices.map((service, index) => (
                  <motion.tr
                    key={service.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-dark-800/50"
                  >
                    <td className="py-4">
                      <div className="font-semibold text-dark-50">{service.title}</div>
                      <div className="text-sm text-dark-500">{service.description}</div>
                    </td>
                    <td className="py-4 text-center font-semibold text-gold">{service.pricing.car}</td>
                    <td className="py-4 text-center font-semibold text-gold">{service.pricing.suv}</td>
                    <td className="py-4 text-center font-semibold text-gold">{service.pricing.truck}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ala Carte Services */}
      <section className="py-16 bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-playfair text-3xl font-bold text-dark-50 mb-4"
          >
            Ala Carte Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-dark-400 mb-12"
          >
            Add-on services to customize your detail
          </motion.p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-dark-800">
                  <th className="py-4 text-left text-sm font-semibold text-dark-300">Service</th>
                  <th className="py-4 text-center text-sm font-semibold text-dark-300">Car</th>
                  <th className="py-4 text-center text-sm font-semibold text-dark-300">SUV/Van</th>
                  <th className="py-4 text-center text-sm font-semibold text-dark-300">Truck/Ext.</th>
                </tr>
              </thead>
              <tbody>
                {alaCarteServices.map((service, index) => (
                  <motion.tr
                    key={service.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="border-b border-dark-800/50"
                  >
                    <td className="py-3 text-dark-200">{service.name}</td>
                    <td className="py-3 text-center text-dark-400">{service.car}</td>
                    <td className="py-3 text-center text-dark-400">{service.suv}</td>
                    <td className="py-3 text-center text-dark-400">{service.truck}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-sm text-dark-500">
            EQ = Quote required based on condition
          </p>
        </div>
      </section>

      {/* Dealer/Wholesale Section */}
      <section className="py-16 bg-dark-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex rounded-xl bg-gold/10 p-3 mb-4">
                <Wrench className="h-8 w-8 text-gold" />
              </div>
              <h2 className="font-playfair text-3xl font-bold text-dark-50">
                Dealer & Wholesale Accounts
              </h2>
              <p className="mt-4 text-dark-400">
                Special pricing for dealerships and businesses with volume needs.
                Minimum 5 cars monthly for complete packages.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between rounded-lg bg-dark-800 px-6 py-4">
                  <span className="text-dark-200">Cars</span>
                  <span className="text-2xl font-bold text-gold">$300</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-dark-800 px-6 py-4">
                  <span className="text-dark-200">SUVs, Vans & Trucks</span>
                  <span className="text-2xl font-bold text-gold">$350</span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-dark-800 px-6 py-4">
                  <span className="text-dark-200">Extended Vehicles</span>
                  <span className="text-2xl font-bold text-gold">$400+</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-dark-950 transition-all hover:bg-gold-light"
              >
                Contact for Wholesale Pricing
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-dark-800 bg-dark-900/50 p-8"
            >
              <h3 className="text-lg font-semibold text-dark-50 mb-6">
                Special Services Include:
              </h3>
              <ul className="space-y-3">
                {specialIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-dark-300">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-dark-500">
                *Upon request: Engine Clean & Dress at owner&apos;s risk
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-900">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-3xl font-bold text-dark-50"
          >
            Ready to Transform Your Vehicle?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-dark-400"
          >
            Contact us today for a free quote. We&apos;re located at Mark&apos;s Garage
            in Chinatown, serving Honolulu since 1991.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-dark-950 transition-all hover:bg-gold-light"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+18087821526"
              className="flex items-center gap-2 rounded-full border border-dark-700 px-8 py-4 text-sm font-semibold text-dark-200 transition-all hover:border-gold hover:text-gold"
            >
              Call (808) 782-1526
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
