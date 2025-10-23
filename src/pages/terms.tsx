// src/pages/terms.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Footer } from '@/components';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300">
              Our commitment to quality service and your satisfaction.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last Updated: October 23, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-700 leading-relaxed">
                Welcome to Bo's Auto Detail. Since 1992, we've built our reputation on honest service, quality work,
                and treating every vehicle like our own. These Terms of Service outline our policies and your
                responsibilities when you use our services. By booking with us, you agree to these terms.
              </p>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Our Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bo's Auto Detail offers professional automotive detailing services including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Exterior detailing (hand washing, waxing, paint correction, ceramic coating)</li>
                <li>Interior detailing (vacuuming, steam cleaning, leather conditioning)</li>
                <li>Paint protection and restoration services</li>
                <li>Mobile detailing at your location</li>
                <li>Specialty treatments for luxury and high-end vehicles</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to refuse service or modify our service offerings at any time. Service descriptions
                on our website are general guidelines; actual services may vary based on your vehicle's condition and needs.
              </p>
            </div>

            {/* Booking and Appointments */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Booking and Appointments
              </h2>

              <h3 className="text-2xl font-semibold text-slate-800 mb-4 mt-8">
                Scheduling
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Appointments can be scheduled by phone at{' '}
                <a href="tel:8087821526" className="text-blue-600 hover:text-blue-800">(808) 782-1526</a>,
                through our website, or by visiting our shop at 1142 Bethel St, Honolulu.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>We recommend booking 3-5 days in advance, especially during peak seasons</li>
                <li>Walk-ins are welcome based on availability</li>
                <li>For mobile services, we'll confirm your location and access details</li>
                <li>Service duration varies by package (typically 2-8 hours)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-800 mb-4 mt-8">
                Cancellations and Rescheduling
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We understand plans change. Here's our policy:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Please provide at least 24 hours' notice for cancellations or rescheduling</li>
                <li>Cancellations with less than 24 hours' notice may incur a $50 fee</li>
                <li>No-shows will be charged 50% of the service fee</li>
                <li>For mobile services, we require 48 hours' notice</li>
                <li>We'll do our best to accommodate your schedule changes</li>
              </ul>
            </div>

            {/* Pricing and Payment */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Pricing and Payment
              </h2>

              <h3 className="text-2xl font-semibold text-slate-800 mb-4 mt-8">
                Rates
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our pricing is based on your vehicle size, condition, and selected services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Prices listed on our website are estimates for standard vehicles in average condition</li>
                <li>Final pricing may vary based on vehicle size (sedans, SUVs, trucks), condition, and specific needs</li>
                <li>We'll provide a detailed quote before beginning work</li>
                <li>Additional fees may apply for heavily soiled vehicles, pet hair removal, or specialty treatments</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-800 mb-4 mt-8">
                Payment Terms
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Payment is due upon completion of service</li>
                <li>We accept cash, all major credit cards, and digital payments</li>
                <li>For large projects, a 50% deposit may be required</li>
                <li>All prices are in U.S. dollars and subject to Hawaii General Excise Tax</li>
              </ul>
            </div>

            {/* Customer Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Customer Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To ensure the best service, we ask that you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Remove all personal belongings and valuables from your vehicle</li>
                <li>Inform us of any existing damage, modifications, or special concerns</li>
                <li>Provide accurate vehicle information when booking</li>
                <li>Ensure your vehicle is accessible at the scheduled time</li>
                <li>For mobile services, provide a suitable location with water and electrical access</li>
                <li>Notify us immediately of any scheduling conflicts</li>
              </ul>
            </div>

            {/* Quality Guarantee */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Quality Guarantee
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We stand behind our work. Your satisfaction is our priority:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>If you're not satisfied with our work, let us know within 48 hours</li>
                <li>We'll re-detail any areas that don't meet our standards at no charge</li>
                <li>Our ceramic coating services come with manufacturer warranties</li>
                <li>We use only professional-grade products and proven techniques</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Note: Our guarantee covers workmanship, not wear and tear from normal vehicle use or environmental factors.
              </p>
            </div>

            {/* Liability and Insurance */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Liability and Insurance
              </h2>

              <h3 className="text-2xl font-semibold text-slate-800 mb-4 mt-8">
                Our Coverage
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bo's Auto Detail is fully insured for your peace of mind. However:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>We are not responsible for pre-existing damage not disclosed at drop-off</li>
                <li>We cannot guarantee results on severely damaged or neglected paint</li>
                <li>Existing clear coat failure, paint chips, or scratches cannot be repaired through detailing alone</li>
                <li>We are not liable for personal items left in vehicles</li>
                <li>Electronic issues unrelated to our cleaning process are not our responsibility</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-800 mb-4 mt-8">
                Vehicle Inspection
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We perform a thorough inspection before and after service. We'll document and notify you of any
                pre-existing damage. If damage occurs during our service, we'll repair or compensate you fairly.
                We ask that you inspect your vehicle before leaving and report any concerns immediately.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Service Disclaimers
              </h2>

              <h3 className="text-2xl font-semibold text-slate-800 mb-4 mt-8">
                Results May Vary
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive for excellence, results depend on your vehicle's condition:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Heavy oxidation, sun damage, or clear coat failure may not be fully reversible</li>
                <li>Some stains (ink, dye transfer, permanent marker) may not be removable</li>
                <li>Odor removal depends on the source and severity</li>
                <li>Paint correction cannot fix chips, dents, or deep scratches</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-800 mb-4 mt-8">
                Environmental Factors
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Hawaii's tropical climate affects detailing results. Salt air, volcanic ash, and intense sun can impact
                how long treatments last. We'll advise you on proper maintenance to extend the life of our work.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                All content on our website, including text, images, logos, and designs, is the property of Bo's Auto Detail
                or our licensors. You may not use, reproduce, or distribute our content without written permission.
              </p>
            </div>

            {/* Photography and Marketing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Photography and Marketing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may photograph your vehicle before and after service for our portfolio and marketing materials.
                By using our services, you grant us permission to use these images on our website, social media,
                and promotional materials. We will not include identifying information (license plates, personal items)
                without your explicit consent.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you prefer we not photograph your vehicle, please let us know at booking.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We value our relationship with every customer. If you have a concern:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-6">
                <li>Contact us directly at <a href="tel:8087821526" className="text-blue-600 hover:text-blue-800">(808) 782-1526</a> - we'll work to resolve it</li>
                <li>If needed, we'll arrange a meeting to inspect the issue in person</li>
                <li>Most concerns can be resolved through open communication</li>
              </ol>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by Hawaii state law. Any disputes will be resolved in Honolulu County courts.
              </p>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms of Service to reflect changes in our business practices or legal requirements.
                Updates will be posted on this page with a new "Last Updated" date. Continued use of our services after
                changes constitutes acceptance of the new terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Questions About These Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We're here to help clarify anything. Reach out anytime:
              </p>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <p className="font-semibold text-slate-900 mb-2">Bo's Auto Detail</p>
                <p className="text-gray-700">1142 Bethel St</p>
                <p className="text-gray-700 mb-4">Honolulu, HI 96813</p>
                <p className="text-gray-700">Phone: <a href="tel:8087821526" className="text-blue-600 hover:text-blue-800">(808) 782-1526</a></p>
                <p className="text-gray-700">Email: <a href="mailto:bosautodetail1@gmail.com" className="text-blue-600 hover:text-blue-800">bosautodetail1@gmail.com</a></p>
                <p className="text-gray-700 mt-4">Hours: Monday - Saturday, 8:00 AM - 4:00 PM</p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="mb-12 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Thank You for Choosing Bo's Auto Detail
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We appreciate your trust in our team. For over 30 years, we've treated every vehicle with the care
                and attention it deserves. These terms are designed to ensure a smooth, professional experience for
                everyone. If you ever have questions or concerns, we're just a phone call away.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 p-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-lg text-center">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Ready to Book Your Service?
              </h3>
              <p className="text-gray-300 mb-6">
                Experience the quality and care that's made us Honolulu's trusted choice since 1992.
              </p>
              <Link href="/book">
                <button className="bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors">
                  Schedule Your Appointment
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
