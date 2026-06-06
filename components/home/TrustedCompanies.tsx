'use client';

import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { name: 'Google', logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100' },
  { name: 'Microsoft', logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100' },
  { name: 'Amazon', logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100' },
  { name: 'Meta', logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100' },
  { name: 'Apple', logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100' },
  { name: 'Netflix', logo: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=100' },
];

export default function TrustedCompanies() {
  return (
    <section className="py-16 border-y border-white/5 bg-dark-light/30">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted text-sm mb-8 uppercase tracking-wider"
        >
          Trusted by Industry Leaders
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <p className="font-poppins font-semibold text-xl text-white">{company.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
