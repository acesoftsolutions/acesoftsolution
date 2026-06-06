'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = '1234567890';
  const message = 'Hello! I would like to inquire about your services.';

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16,4C9.4,4,4,9.4,4,16c0,2.7,0.8,5.3,2.4,7.5L4.1,28l4.7-2.2c2.1,1.3,4.6,2.2,7.2,2.2c6.6,0,12-5.4,12-12S22.6,4,16,4z M16,26c-2.3,0-4.5-0.6-6.4-1.8l-0.5-0.3l-3.1,1.5l1.5-3l-0.3-0.5C6.1,20,5.3,18,5.3,16c0-5.9,4.8-10.7,10.7-10.7S26.7,10.1,26.7,16S21.9,26,16,26z M21,18.6c-0.3-0.2-1.8-0.9-2.1-1c-0.3-0.1-0.5-0.2-0.7,0.2c-0.2,0.3-0.8,1-1,1.2c-0.2,0.2-0.4,0.2-0.7,0.1c-0.3-0.2-1.3-0.5-2.5-1.5c-0.9-0.8-1.5-1.8-1.7-2.1c-0.2-0.3,0-0.5,0.1-0.6c0.1-0.1,0.3-0.4,0.5-0.5c0.2-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.1-0.4,0-0.5c-0.1-0.2-0.7-1.6-0.9-2.2c-0.2-0.6-0.5-0.5-0.7-0.5c-0.2,0-0.4,0-0.6,0c-0.2,0-0.5,0.1-0.8,0.4c-0.3,0.3-1,1-1,2.4s1,2.8,1.2,3c0.2,0.2,2,3.1,4.9,4.3c0.7,0.3,1.2,0.5,1.6,0.6c0.7,0.2,1.3,0.2,1.8,0.1c0.5-0.1,1.6-0.7,1.9-1.3c0.2-0.6,0.2-1.2,0.1-1.3C21.5,18.9,21.3,18.8,21,18.6z"/>
      </svg>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
    </motion.a>
  );
}
