'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What services does Ace Soft Solution offer?',
    answer: 'We offer a comprehensive range of IT services including web development, mobile app development, SEO optimization, digital marketing, UI/UX design, ERP software, AI solutions, and e-commerce development. Our team is equipped to handle projects of any scale and complexity.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during the proposal phase after understanding your requirements.',
  },
  {
    question: 'What is your development process?',
    answer: 'We follow an agile development methodology with five key phases: Discovery, Strategy, Development, Launch, and Support. This ensures transparent communication, iterative development, and successful delivery of your project.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'Yes, we provide comprehensive post-launch support and maintenance services. Our team is available 24/7 to address any issues, implement updates, and ensure your solution continues to perform optimally.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'We specialize in modern technologies including React, Next.js, Node.js, Python, MongoDB, PostgreSQL, AWS, Docker, and more. We stay updated with the latest frameworks and tools to deliver cutting-edge solutions.',
  },
];

export default function FAQSection() {
  return (
    <section className="section-padding bg-dark-light">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection direction="left">
            <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-6">
              Frequently Asked{' '}
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted mb-8">
              Have questions? We&apos;ve got answers. If you can&apos;t find what
              you&apos;re looking for, feel free to contact us.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center"
            >
              Ask a Question
            </motion.a>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-white font-medium hover:text-accent py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
