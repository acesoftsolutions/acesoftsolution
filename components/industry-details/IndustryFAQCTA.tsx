'use client';

import { useState } from 'react';

import Link from 'next/link';

import {
ChevronDown,
ArrowRight,
CalendarDays,
CheckCircle2,
Sparkles,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

interface IndustryFAQCTAProps {
industry: any;
}

const benefits = [
'Industry-Focused Expertise',
'Dedicated Development Teams',
'Agile & Transparent Delivery',
'Long-Term Technology Partnership',
];

export default function IndustryFAQCTA({
industry,
}: IndustryFAQCTAProps) {
const [openFaq, setOpenFaq] =
useState(0);

return ( <section className="bg-white pt-12 pb-12 lg:pb-16"> <div className="mx-auto max-w-7xl px-6 lg:px-8"> <AnimatedSection>
{/* FAQ SECTION */}

      <div className="grid gap-16 lg:grid-cols-12">
        {/* Left Content */}

        <div className="lg:col-span-5">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-5
              py-2
              text-sm
              font-medium
              text-blue-700
            "
          >
            <Sparkles className="h-4 w-4" />
            Knowledge Center
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              tracking-tight
              text-slate-900
              md:text-5xl
            "
          >
            Frequently Asked
            <span className="block text-blue-600">
              Questions
            </span>
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-relaxed
              text-slate-600
            "
          >
            Explore answers to common
            questions about our
            {` `}
            {industry.title}
            {` `}
            software development,
            delivery process,
            technologies, and engagement
            models.
          </p>
        </div>

        {/* FAQ Right */}

        <div className="lg:col-span-7">
          <div className="space-y-4">
            {industry.faqs.map(
              (
                faq: {
                  question: string;
                  answer: string;
                },
                index: number
              ) => (
                <div
                  key={faq.question}
                  className="
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-slate-200
                    bg-white
                    transition-all
                    duration-300
                  "
                >
                  <button
                    onClick={() =>
                      setOpenFaq(
                        openFaq === index
                          ? -1
                          : index
                      )
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      p-7
                      text-left
                    "
                  >
                    <h3
                      className="
                        pr-4
                        text-lg
                        font-semibold
                        text-slate-900
                      "
                    >
                      {faq.question}
                    </h3>

                    <ChevronDown
                      className={`
                        h-5
                        w-5
                        shrink-0
                        transition-transform
                        duration-300
                        ${
                          openFaq === index
                            ? 'rotate-180'
                            : ''
                        }
                      `}
                    />
                  </button>

                  {openFaq === index && (
                    <div className="px-7 pb-7">
                      <p
                        className="
                          leading-relaxed
                          text-slate-600
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* STRATEGIC CTA */}

      <div
        className="
          relative
          mt-24
          overflow-hidden
          rounded-[40px]
          bg-gradient-to-r
          from-slate-900
          via-slate-800
          to-slate-900
          p-10
          lg:p-16
        "
      >
        {/* Background Glow */}

        <div
          className="
            absolute
            -right-24
            -top-24
            h-80
            w-80
            rounded-full
            bg-blue-500/20
            blur-3xl
          "
        />

        <div className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Left */}

            <div className="lg:col-span-7">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-blue-300
                "
              >
                Strategic Consultation
              </div>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-bold
                  tracking-tight
                  text-white
                  md:text-5xl
                "
              >
                {industry.cta.title}
              </h2>

              <p
                className="
                  mt-6
                  max-w-2xl
                  text-lg
                  leading-relaxed
                  text-slate-300
                "
              >
                {industry.cta.description}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {benefits.map(
                  (item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-3
                      "
                    >
                      <CheckCircle2
                        className="
                          h-5
                          w-5
                          text-emerald-400
                        "
                      />

                      <span className="text-slate-200">
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Right */}

            <div className="lg:col-span-5">
              <div
                className="
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                "
              >
                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  Talk to Our Experts
                </h3>

                <p
                  className="
                    mt-3
                    text-slate-300
                  "
                >
                  Discuss your goals,
                  challenges, and project
                  requirements with our
                  consulting team.
                </p>

                <div className="mt-8 space-y-4">
                  <Link
                    href="/contact"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-blue-600
                      px-6
                      py-3
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:bg-blue-700
                    "
                  >
                    {
                      industry.cta
                        .primaryButton
                    }

                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/contact"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      px-6
                      py-3
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:bg-white/5
                    "
                  >
                    {
                      industry.cta
                        .secondaryButton
                    }

                    <CalendarDays size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </div>
</section>

);
}
