'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
} from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-14 lg:py-12">
      {/* Background Blur */}

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-[-100px]
            top-[-100px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#3CC8F5]/10
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[-100px]
            bottom-[-100px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#12C7B5]/10
            blur-[120px]
          "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-200
                bg-white
                px-5
                py-2
                shadow-sm
              "
            >
              <Sparkles className="h-4 w-4 text-cyan-600" />

              <span
                className="
                  text-sm
                  font-semibold
                  text-slate-700
                "
              >
                Let's Build Together
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                mx-auto
                mt-10
                max-w-6xl
                text-center
                text-4xl
                font-black
                uppercase
                leading-[0.95]
                tracking-tight
                text-slate-900
                md:text-6xl
                xl:text-[7rem]
              "
            >
              Ready To 
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-[#0E4DB7]
                  via-[#3CC8F5]
                  to-[#12C7B5]
                  bg-clip-text
                  text-transparent
                "
              >
                SCALE YOUR BUSINESS?                       
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-lg
                leading-relaxed
                text-slate-600
              "
            >
              Whether you're launching a startup, scaling operations,
              automating workflows, or building enterprise-grade
              software - our expert team is ready to turn your vision
              into a high-performance digital product.

            </p>

            {/* CTA Buttons */}

            <div
              className="
                mt-12
                flex
                flex-col
                items-center
                justify-center
                gap-4
                sm:flex-row
              "
            >
              <motion.div
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-[#0E4DB7]
                    via-[#3CC8F5]
                    to-[#12C7B5]
                    px-8
                    py-4
                    text-lg
                    font-semibold
                    text-white
                    shadow-lg
                    shadow-cyan-500/20
                  "
                >
                  Start Your Project

                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
              >
                <Link
                  href="/portfolio"
                  className="
                    inline-flex
                    items-center
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-8
                    py-4
                    text-lg
                    font-semibold
                    text-slate-700
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-cyan-300
                  "
                >
                  Explore Our Portfolio 
                </Link>
              </motion.div>
            </div>

            {/* Service Pills */}

            <div
              className="
                mt-14
                flex
                flex-wrap
                justify-center
                gap-3
              "
            >
              {[
                'Web Development',
                'Mobile Apps',
                'ERP Software',
                'AI & ML Solutions',
                'Cloud & DevOps',
                'Digital Marketing',
              ].map((service) => (
                <span
                  key={service}
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-2
                    text-sm
                    font-medium
                    text-slate-600
                    shadow-sm
                  "
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}