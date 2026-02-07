"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does a full detail typically take?",
    answer:
      "A full detail typically takes 4-8 hours depending on the vehicle's condition and size. We never rush the process - your vehicle deserves meticulous attention to detail. We recommend dropping off your vehicle in the morning and picking it up in the afternoon.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "No appointment is necessary for estimates! We welcome walk-ins during business hours. However, for the actual detailing service, we recommend scheduling in advance to ensure availability, especially for our premium services like ceramic coating and paint correction.",
  },
  {
    question: "What's the difference between a wash and a detail?",
    answer:
      "A wash is a quick exterior clean. A detail is comprehensive - we clean, polish, and protect every surface inside and out. This includes deep cleaning the interior, paint correction, machine polishing, waxing or ceramic coating, engine bay detailing, and much more. Think of it as a spa day for your car.",
  },
  {
    question: "How do I protect my car in Hawaii's climate?",
    answer:
      "Hawaii's salt air and intense UV rays are tough on vehicles. We recommend ceramic coating for long-term protection, regular washing (every 2 weeks), and UV-resistant interior protection. Our detailing services include special treatments designed specifically for Hawaii's unique environment.",
  },
  {
    question: "Do you detail boats and motorcycles?",
    answer:
      "Yes! We detail boats, motorcycles, RVs, and other vehicles. The same attention to detail we give to luxury cars applies to all vehicles. Call us to discuss your specific needs and get a custom quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit cards (Visa, Mastercard, American Express, Discover), and digital payments. Payment is due upon completion of service.",
  },
  {
    question: "How long will my detail last?",
    answer:
      "With proper maintenance, a full detail can last 3-6 months. Ceramic coating can protect your vehicle for 2-5 years. We provide aftercare instructions to help you maintain that just-detailed look. Regular maintenance washes every 2-4 weeks will keep your vehicle looking its best.",
  },
  {
    question: "Can you remove scratches and swirl marks?",
    answer:
      "Yes! Our paint correction service uses multi-stage machine polishing to remove or minimize scratches, swirl marks, and oxidation. Deep scratches that go through the clear coat may require touch-up paint first, but we can dramatically improve the appearance of most paint imperfections.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're located at Mark's Garage, 1142 Bethel St in Chinatown, Honolulu. This is a well-known landmark in the area. Parking is available nearby, and we're easily accessible from downtown and the surrounding areas.",
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer:
      "Your satisfaction is our priority. We've been serving Honolulu for 34 years because we stand behind our work. If you're not completely satisfied, let us know immediately and we'll make it right. We take pride in our 5.0 Google rating and BBB A+ rating.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-dark-800 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left transition-colors hover:text-gold"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-dark-50 text-lg pr-4">
          {question}
        </span>
        <ChevronDown
          className={`h-6 w-6 text-gold flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-dark-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section className="py-20 bg-dark-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-6"
          >
            <HelpCircle className="h-8 w-8 text-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl sm:text-5xl font-bold text-dark-50"
          >
            Frequently Asked{" "}
            <span className="text-gradient-gold">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-dark-400 text-lg"
          >
            Got questions? We&apos;ve got answers. 34 years of detailing
            experience at your service.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="rounded-2xl border border-dark-800 bg-dark-950/50 p-6 sm:p-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-dark-400 mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+18087821526"
              className="flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-dark-950 transition-all hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
            >
              Call (808) 782-1526
            </a>
            <a
              href="sms:+18087821526"
              className="flex items-center gap-2 rounded-full border border-dark-600 px-8 py-4 text-sm font-semibold text-dark-200 transition-all hover:border-gold hover:text-gold"
            >
              Text Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
