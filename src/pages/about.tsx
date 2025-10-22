// src/pages/about.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Footer, Button } from '@/components';
import Link from 'next/link';

export default function About() {
  const timeline = [
    {
      year: '1992',
      title: 'The Beginning',
      description: 'Bo founded the company with a passion for automotive excellence and a single bay shop in downtown Honolulu.',
    },
    {
      year: '2000',
      title: 'Expansion',
      description: 'Moved to our current location at 1142 Bethel St. with state-of-the-art facilities and expanded team.',
    },
    {
      year: '2010',
      title: 'Ceramic Coating Pioneer',
      description: 'First in Hawaii to offer professional ceramic coating services, setting new standards in paint protection.',
    },
    {
      year: '2015',
      title: 'Mobile Service Launch',
      description: 'Introduced mobile detailing to bring our premium service directly to clients\' locations.',
    },
    {
      year: '2025',
      title: 'Continuing Excellence',
      description: 'Over 15,000 luxury vehicles detailed, maintaining our reputation as Honolulu\'s premier auto detailing service.',
    },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Attention to Detail',
      description: 'Every vehicle receives meticulous care, from the smallest crevice to the largest panel.',
    },
    {
      icon: '🏆',
      title: 'Excellence',
      description: 'We use only premium products and proven techniques to deliver exceptional results.',
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'Building long-term relationships with clients who trust us with their most valuable vehicles.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Staying ahead with the latest technology and methods in automotive care.',
    },
  ];

  const team = [
    {
      name: 'Bo Nakamura',
      role: 'Founder & Master Detailer',
      bio: '30+ years of experience in luxury vehicle care',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    },
    {
      name: 'Kenji Tanaka',
      role: 'Lead Ceramic Coating Specialist',
      bio: 'Certified in advanced paint correction and coating',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
    },
    {
      name: 'Lisa Wong',
      role: 'Interior Detailing Expert',
      bio: 'Specializes in luxury leather and fabric restoration',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-amber-400 text-sm uppercase tracking-widest font-semibold mb-4">
                Since 1992
              </p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
                Our Story
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                For over three decades, Bo's Auto Detail has been Honolulu's trusted name in luxury
                vehicle care. What started as one man's passion has grown into a premier detailing
                service, trusted by luxury car owners across the island.
              </p>
              <div className="flex gap-4">
                <Link href="/book">
                  <Button size="lg">Book Service</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">Contact Us</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800"
                alt="Auto Detailing"
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-amber-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '30+', label: 'Years Experience' },
              { number: '15K+', label: 'Vehicles Detailed' },
              { number: '500+', label: '5-Star Reviews' },
              { number: '98%', label: 'Client Retention' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">
              Over 30 years of excellence in luxury vehicle care
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-amber-600 hidden md:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                }`}
              >
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                  }`}
                >
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-blue-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-blue-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-300">
              Expert professionals dedicated to your vehicle's care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Experience 30+ Years of Excellence
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Trust your luxury vehicle to Honolulu's premier detailing experts
            </p>
            <Link href="/book">
              <Button variant="secondary" size="lg">
                Book Your Service
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
