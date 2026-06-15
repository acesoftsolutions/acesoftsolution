'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
answer:
'We provide Web Development, Mobile App Development, ERP Software, AI Solutions, UI/UX Design, SEO, Digital Marketing, Cloud Solutions, and Custom Software Development services.',
},
{
question: 'How long does a typical project take?',
answer:
'Project timelines vary depending on complexity and requirements. A standard business website typically takes 3–6 weeks, while enterprise-grade solutions may require several months.',
},
{
question: 'What technologies do you specialize in?',
answer:
'We specialize in React, Next.js, TypeScript, Node.js, Python, MongoDB, PostgreSQL, AWS, Docker, Flutter, React Native, and AI-powered technologies.',
},
{
question: 'Do you provide ongoing support and maintenance?',
answer:
'Yes. We provide continuous support, monitoring, updates, performance optimization, security enhancements, and maintenance services.',
},
{
question: 'Can you redesign an existing website or application?',
answer:
'Absolutely. We help businesses modernize outdated websites and applications with improved UI/UX, performance, scalability, and security.',
},
{
question: 'Do you work with startups and enterprises?',
answer:
'Yes. We work with startups, SMEs, and enterprise organizations, delivering solutions tailored to their specific business goals.',
},
];

export default function FAQSection() {
return ( <section className="py-24 lg:py-32 bg-dark-light"> <div className="max-w-[1280px] mx-auto px-5 lg:px-8">

```
    {/* Section Heading */}
    <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-secondary mb-5">
        Frequently Asked Questions
      </span>

      <h2 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
        Got Questions?
        <span className="block text-gradient">
          We've Got Answers
        </span>
      </h2>

      <p className="text-muted text-lg">
        Find answers to common questions about our development process,
        technologies, support, and software solutions.
      </p>
    </AnimatedSection>

    <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">

      {/* FAQ Area */}
      <AnimatedSection>
        <Accordion
          type="single"
          collapsible
          className="space-y-5"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                overflow-hidden
                px-6
              "
            >
              <AccordionTrigger
                className="
                  py-6
                  text-left
                  text-white
                  text-lg
                  font-semibold
                  hover:no-underline
                "
              >
                {faq.question}
              </AccordionTrigger>

              <AccordionContent
                className="
                  pb-6
                  text-muted
                  leading-relaxed
                "
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>

      {/* Contact Card */}
      <AnimatedSection>
        <div className="lg:sticky lg:top-28">
          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
            "
          >
            <span className="text-sm text-secondary font-medium uppercase tracking-wider">
              Need More Help?
            </span>

            <h3 className="text-3xl font-bold text-white mt-4 mb-4">
              Let's Discuss
              <span className="block text-gradient">
                Your Project
              </span>
            </h3>

            <p className="text-muted mb-8">
              Connect with our experts and get tailored software solutions
              for your business goals.
            </p>

            <div className="space-y-4 mb-8">

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-[#12C7B5]" />
                <span className="text-white">
                  Custom Software Development
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-[#3CC8F5]" />
                <span className="text-white">
                  Mobile App Development
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-[#5B21FF]" />
                <span className="text-white">
                  AI & Automation Solutions
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-[#0E4DB7]" />
                <span className="text-white">
                  ERP & Business Software
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-2.5 w-2.5 rounded-full bg-[#12C7B5]" />
                <span className="text-white">
                  SEO & Digital Marketing
                </span>
              </div>

            </div>

            <div className="space-y-4">
              <motion.a
                href="/contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="
                  flex
                  justify-center
                  items-center
                  w-full
                  py-4
                  rounded-xl
                  text-white
                  font-semibold
                  bg-gradient-to-r
                  from-[#0E4DB7]
                  via-[#3CC8F5]
                  to-[#12C7B5]
                "
              >
                Schedule Consultation
              </motion.a>

              <a
                href="tel:+919999999999"
                className="
                  flex
                  justify-center
                  items-center
                  w-full
                  py-4
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-white
                  font-medium
                "
              >
                Call Our Team
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="grid grid-cols-3 gap-4 text-center">

                <div>
                  <h4 className="text-gradient text-2xl font-bold">
                    50+
                  </h4>
                  <p className="text-xs text-muted">
                    Projects
                  </p>
                </div>

                <div>
                  <h4 className="text-gradient text-2xl font-bold">
                    98%
                  </h4>
                  <p className="text-xs text-muted">
                    Satisfaction
                  </p>
                </div>

                <div>
                  <h4 className="text-gradient text-2xl font-bold">
                    24/7
                  </h4>
                  <p className="text-xs text-muted">
                    Support
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>

    </div>
  </div>
</section>


);
}
