// src/pages/contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation, Footer, Input, Button } from '@/components';
import { Spinner } from '@/components/Spinner/Spinner';
import { useFormValidation } from '@/hooks/useFormValidation';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationRules = {
    name: (value: string) => (!value ? 'Name is required' : null),
    email: (value: string) => {
      if (!value) return 'Email is required';
      if (!/\S+@\S+\.\S+/.test(value)) return 'Email is invalid';
      return null;
    },
    phone: (value: string) => (!value ? 'Phone is required' : null),
    message: (value: string) => (!value ? 'Message is required' : null),
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateAll,
    reset,
  } = useFormValidation(
    {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validationRules
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateAll()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-amber-400 text-sm uppercase tracking-widest font-semibold mb-4">
              Get In Touch
            </p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to us anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: '📍',
                title: 'Visit Us',
                info: '1142 Bethel St.',
                info2: 'Honolulu, Hawaii 96817',
              },
              {
                icon: '📞',
                title: 'Call Us',
                info: '(808) 782-1526',
                info2: 'Mon-Sat: 8am - 4pm',
              },
              {
                icon: '✉️',
                title: 'Email Us',
                info: 'bosautodetail1@gmail.com',
                info2: 'We reply within 24 hours',
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 font-medium">{item.info}</p>
                <p className="text-gray-600 text-sm">{item.info2}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">
                Send Us a Message
              </h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                >
                  ✓ Thank you! We'll get back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Full Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.name ? errors.name : ''}
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email ? errors.email : ''}
                    required
                  />
                  <Input
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone ? errors.phone : ''}
                    required
                  />
                </div>

                <Input
                  label="Subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                />

                <Input
                  label="Message"
                  name="message"
                  isTextarea
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.message ? errors.message : ''}
                  required
                  placeholder="Tell us about your vehicle and what service you're interested in..."
                />

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Spinner size="sm" color="white" />
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map & Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Google Map */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.2689595478!2d-157.86173842394365!3d21.312094580411838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006de1b8b0e78f%3A0x3e0c5a5f5d5c5d5c!2s1142%20Bethel%20St%2C%20Honolulu%2C%20HI%2096817!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bo's Auto Detail Location"
                ></iframe>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-serif font-bold text-blue-900 mb-6">
                  Business Hours
                </h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Saturday', hours: '8:00 AM - 4:00 PM' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0"
                    >
                      <span className="font-semibold text-gray-700">{schedule.day}</span>
                      <span className="text-amber-600 font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong className="text-blue-900">Note:</strong> Mobile services available
                    7 days a week with advance booking.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-blue-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Do you offer mobile services?',
                a: 'Yes! We offer full mobile detailing services throughout Honolulu and surrounding areas. We bring all equipment, water, and power.',
              },
              {
                q: 'How long does a typical detail take?',
                a: 'Service times vary: Express Detail (1-2 hours), Premium Detail (3-4 hours), Luxury Detail (5-6 hours). Ceramic coating requires 2-3 days.',
              },
              {
                q: 'Do I need an appointment?',
                a: 'Yes, we work by appointment only to ensure we give each vehicle the attention it deserves. Book online or call us.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept cash, all major credit cards, Apple Pay, and Venmo for your convenience.',
              },
            ].map((faq) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-blue-900 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
