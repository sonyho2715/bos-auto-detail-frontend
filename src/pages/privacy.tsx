// src/pages/privacy.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Footer } from '@/components';
import Link from 'next/link';

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">
              Your privacy is important to us. Learn how we protect your information.
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
                At Bo's Auto Detail, we've been serving the Honolulu community since 1992 with honesty and integrity.
                This same commitment extends to how we handle your personal information. This Privacy Policy explains
                what information we collect, how we use it, and your rights regarding your data.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Information We Collect
              </h2>

              <h3 className="text-2xl font-semibold text-slate-800 mb-4 mt-8">
                Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you book a service or contact us, we may collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Name and contact information (phone number, email address)</li>
                <li>Vehicle information (make, model, year, license plate)</li>
                <li>Service location for mobile detailing</li>
                <li>Payment information (processed securely through our payment processor)</li>
                <li>Service preferences and history</li>
              </ul>

              <h3 className="text-2xl font-semibold text-slate-800 mb-4 mt-8">
                Automatically Collected Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Browser type and device information</li>
                <li>IP address and location data</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your information to provide you with the best possible service:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Schedule and confirm your detailing appointments</li>
                <li>Process payments and send receipts</li>
                <li>Send appointment reminders and service updates</li>
                <li>Respond to your questions and customer service requests</li>
                <li>Improve our services and website experience</li>
                <li>Send promotional offers (only with your consent)</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Information Sharing
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We respect your privacy and do not sell your personal information. We may share your data only in these situations:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Service Providers:</strong> Trusted third parties who help us operate our business (payment processors, email services, scheduling tools)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger or sale of our business</li>
                <li><strong>With Your Consent:</strong> When you explicitly agree to share information</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We take the security of your information seriously. We implement industry-standard security measures
                including encrypted data transmission (SSL), secure payment processing, and limited employee access to
                personal information. While no system is 100% secure, we continuously work to protect your data from
                unauthorized access, alteration, or destruction.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to improve your browsing experience. Cookies help us:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Provide personalized content</li>
                <li>Analyze website traffic and performance</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can control cookies through your browser settings. Note that disabling cookies may affect
                some website functionality.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Your Privacy Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Ask us to update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request your data in a portable format</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, please contact us at{' '}
                <a href="tel:8087821526" className="text-blue-600 hover:text-blue-800">(808) 782-1526</a> or{' '}
                <a href="mailto:bosautodetail1@gmail.com" className="text-blue-600 hover:text-blue-800">bosautodetail1@gmail.com</a>.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Children's Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our services are not directed to children under 13. We do not knowingly collect personal information
                from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Third-Party Websites
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for their privacy practices.
                We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal
                reasons. We will post the updated policy on this page with a new "Last Updated" date. Significant
                changes will be communicated through email or a notice on our website.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or how we handle your information, we're here to help:
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

            {/* CTA */}
            <div className="mt-16 p-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-lg text-center">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">
                Ready to Experience Premium Detailing?
              </h3>
              <p className="text-gray-300 mb-6">
                Trust us with your vehicle, just as you trust us with your information.
              </p>
              <Link href="/book">
                <button className="bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 transition-colors">
                  Book Your Service
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
