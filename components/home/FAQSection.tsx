'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
Search,
ChevronRight,
MessageCircle,
ArrowRight,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from '@/components/ui/accordion';

const categories = [
'All',
'General',
'Services',
'Development',
'AI Solutions',
'Support',
];

const faqs = [
{
category: 'General',
question:
'What industries do you serve?',
answer:
'We work with startups, SMEs and enterprises across healthcare, finance, manufacturing, education, logistics, retail and technology sectors.',
},

{
category: 'Services',
question:
'What services does Ace Soft Solution provide?',
answer:
'We provide Web Development, Mobile App Development, ERP Solutions, AI Automation, UI/UX Design, Cloud Services, Digital Marketing and Custom Software Development.',
},

{
category: 'Development',
question:
'How long does a typical software project take?',
answer:
'Project timelines depend on complexity and requirements. Small business websites may take 3–6 weeks, while enterprise applications can require several months.',
},

{
category: 'Development',
question:
'What technologies do you specialize in?',
answer:
'We specialize in React, Next.js, TypeScript, Node.js, Python, MongoDB, PostgreSQL, AWS, Docker, Flutter, React Native and modern cloud technologies.',
},

{
category: 'AI Solutions',
question:
'Can you develop AI-powered applications?',
answer:
'Yes. We build AI chatbots, automation systems, recommendation engines, predictive analytics platforms and Generative AI solutions.',
},

{
category: 'AI Solutions',
question:
'Do you integrate AI into existing software?',
answer:
'Absolutely. We can integrate AI capabilities into your existing ERP systems, web applications, mobile apps and enterprise platforms.',
},

{
category: 'Support',
question:
'Do you provide post-launch support?',
answer:
'Yes. We provide maintenance, updates, monitoring, performance optimization, bug fixing and long-term support services.',
},

{
category: 'Support',
question:
'Do you offer dedicated development teams?',
answer:
'Yes. We provide dedicated developers, designers and complete development teams for long-term projects.',
},

{
category: 'Services',
question:
'Can you redesign an existing website or application?',
answer:
'Yes. We modernize outdated systems with improved UI/UX, enhanced security, better performance and scalable architecture.',
},

{
category: 'General',
question:
'Do you work with startups and enterprises?',
answer:
'Yes. We work with startups, growing businesses and enterprise organizations, delivering solutions tailored to their goals and budgets.',
},
];

export default function FAQSection() {
const [activeCategory, setActiveCategory] =
useState('All');

const [searchTerm, setSearchTerm] =
useState('');

const filteredFaqs = useMemo(() => {
return faqs.filter((faq) => {
const categoryMatch =
activeCategory === 'All'
? true
: faq.category === activeCategory;

  const searchMatch =
    faq.question
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()
      ) ||
    faq.answer
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()
      );

  return categoryMatch && searchMatch;
});


}, [activeCategory, searchTerm]);

return ( <section className="bg-[#F8FAFC] py-24 lg:py-32"> <div className="mx-auto max-w-7xl px-5 lg:px-8">
{/* Header */}


    <AnimatedSection>
      <div className="mx-auto max-w-4xl text-center">
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-blue-100
            bg-blue-50
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-700
          "
        >
          Frequently Asked Questions
        </span>

        <h2
          className="
            mt-6
            text-4xl
            font-bold
            text-slate-900
            md:text-5xl
            xl:text-6xl
          "
        >
          Find Answers To
          <span
            className="
              block
              bg-gradient-to-r
              from-blue-700
              via-cyan-500
              to-teal-500
              bg-clip-text
              text-transparent
            "
          >
            Common Questions
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-relaxed
            text-slate-600
          "
        >
          Explore answers related to our
          services, technologies, development
          process, AI solutions and ongoing
          support.
        </p>
      </div>
    </AnimatedSection>

    {/* Main Layout */}

    <div
      className="
        mt-20
        grid
        gap-8
        lg:grid-cols-[280px_1fr]
      "
    >
      {/* Sidebar */}

      <AnimatedSection>
        <div className="lg:sticky lg:top-28">
          <div
            className="
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
            "
          >
            <h3
              className="
                mb-4
                px-3
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-slate-500
              "
            >
              Categories
            </h3>

            <div className="space-y-2">
              {categories.map(
                (category) => (
                  <button
                    key={category}
                    onClick={() =>
                      setActiveCategory(
                        category
                      )
                    }
                    className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-2xl
                      px-4
                      py-4
                      text-left
                      font-medium
                      transition-all
                      duration-300

                      ${
                        activeCategory ===
                        category
                          ? `
                            border
                            border-blue-200
                            bg-blue-50
                            text-blue-700
                          `
                          : `
                            border
                            border-transparent
                            text-slate-700
                            hover:bg-slate-50
                          `
                      }
                    `}
                  >
                    {category}

                    <ChevronRight className="h-4 w-4" />
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Content */}

      <AnimatedSection>
        <div>
          {/* Search */}

          <div
            className="
              mb-8
              flex
              items-center
              gap-3
              rounded-[24px]
              border
              border-slate-200
              bg-white
              px-5
              py-4
              shadow-sm
            "
          >
            <Search className="h-5 w-5 text-slate-400" />

            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(
                  e.target.value
                )
              }
              className="
                w-full
                bg-transparent
                outline-none
                placeholder:text-slate-400
              "
            />
          </div>

          {/* FAQ List */}

          <div
            className="
              rounded-[32px]
              border
              border-slate-200
              bg-white
              shadow-sm
            "
          >
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {filteredFaqs.map(
                (faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="
                      border-b
                      border-slate-200
                      px-6
                      last:border-none
                    "
                  >
                    <AccordionTrigger
                      className="
                        py-7
                        text-left
                        text-lg
                        font-semibold
                        text-slate-900
                        hover:no-underline
                      "
                    >
                      {faq.question}
                    </AccordionTrigger>

                    <AccordionContent
                      className="
                        pb-7
                        leading-relaxed
                        text-slate-600
                      "
                    >
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                )
              )}
            </Accordion>

            {filteredFaqs.length === 0 && (
              <div className="p-10 text-center">
                <p className="text-slate-500">
                  No FAQs found matching your
                  search.
                </p>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>

  </div>
</section>


);
}
