'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import AnimatedSection from '@/components/shared/AnimatedSection';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: 'What services does Ace Soft Solution offer?',
        answer: 'We offer a comprehensive range of IT services including web development, mobile app development, SEO optimization, digital marketing, UI/UX design, ERP software, AI solutions, and e-commerce development. Our team is equipped to handle projects of any scale and complexity.',
      },
      {
        question: 'How can I get started with your services?',
        answer: 'Getting started is easy! Simply contact us through our contact form, email, or phone. We will schedule a consultation to discuss your project requirements and provide a detailed proposal.',
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve a wide range of industries including finance, healthcare, e-commerce, education, logistics, and more. Our solutions are customized to meet the specific needs of each industry.',
      },
    ],
  },
  {
    category: 'Process',
    questions: [
      {
        question: 'What is your development process?',
        answer: 'We follow an agile development methodology with five key phases: Discovery, Strategy, Development, Launch, and Support. This ensures transparent communication, iterative development, and successful delivery of your project.',
      },
      {
        question: 'How long does a typical project take?',
        answer: 'Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while a complex enterprise application could take 3-6 months. We provide detailed timelines during the proposal phase.',
      },
      {
        question: 'Will I be involved in the development process?',
        answer: "Absolutely! We believe in transparent communication and regular updates. You'll have access to project management tools and regular meetings to track progress and provide feedback.",
      },
    ],
  },
  {
    category: 'Pricing',
    questions: [
      {
        question: 'How do you determine pricing?',
        answer: 'Our pricing is based on project scope, complexity, timeline, and required resources. We provide detailed proposals after understanding your requirements. We offer competitive rates while maintaining high quality.',
      },
      {
        question: 'Do you offer fixed-price or hourly billing?',
        answer: 'We offer both options depending on project nature. Fixed-price is ideal for well-defined projects with clear requirements, while hourly billing works better for ongoing development or evolving requirements.',
      },
      {
        question: 'What payment terms do you offer?',
        answer: "Typically, we require a percentage upfront with the remainder divided into milestones. We're flexible and can discuss payment terms that work for your business.",
      },
    ],
  },
  {
    category: 'Support',
    questions: [
      {
        question: 'Do you provide ongoing support and maintenance?',
        answer: 'Yes, we provide comprehensive post-launch support and maintenance services. Our team is available 24/7 to address any issues, implement updates, and ensure your solution continues to perform optimally.',
      },
      {
        question: 'What kind of warranty do you offer?',
        answer: 'All our projects come with a warranty period during which we fix any bugs or issues at no additional cost. The duration depends on the project scope and complexity.',
      },
      {
        question: 'How do I report issues or request changes?',
        answer: 'We have a dedicated support system where you can submit tickets, track status, and communicate with our team. Premium support packages include dedicated account managers.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <section className="pt-32 pb-20 bg-dark">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
                FAQ
              </span>
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h1>
              <p className="text-muted text-lg">
                Find answers to common questions about our services, process, and policies.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-dark-light">
          <div className="container-custom max-w-4xl">
            <div className="space-y-12">
              {faqs.map((category, catIndex) => (
                <AnimatedSection key={category.category} delay={catIndex * 0.1}>
                  <div>
                    <h2 className="font-poppins text-2xl font-bold text-white mb-6">
                      {category.category}
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`${catIndex}-${index}`}
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
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
