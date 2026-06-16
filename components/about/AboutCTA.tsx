'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import AnimatedSection from '@/components/shared/AnimatedSection';

export default function AboutCTA() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <AnimatedSection>
          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              bg-gradient-to-r
              from-[#0E4DB7]
              via-[#3CC8F5]
              to-[#12C7B5]
              px-8
              py-16
              lg:px-16
              lg:py-24
            "
          >
            <div
              className="
                absolute
                right-0
                top-0
                h-80
                w-80
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div
              className="
                absolute
                bottom-0
                left-0
                h-80
                w-80
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div className="relative z-10 text-center">
              <span
                className="
                  inline-flex
                  rounded-full
                  bg-white/15
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-white
                "
              >
                Let's Build Together
              </span>

              <h2
                className="
                  mx-auto
                  mt-8
                  max-w-4xl
                  text-4xl
                  font-black
                  text-white
                  md:text-6xl
                "
              >
                Ready To Transform
                Your Business?
              </h2>

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-3xl
                  text-lg
                  leading-relaxed
                  text-white/90
                "
              >
                Whether you're launching a startup,
                scaling operations, implementing AI,
                or building enterprise software,
                we're ready to help you succeed.
              </p>

              <div
                className="
                  mt-10
                  flex
                  flex-col
                  justify-center
                  gap-4
                  sm:flex-row
                "
              >
                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-white
                    px-8
                    py-4
                    font-semibold
                    text-slate-900
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Start Your Project

                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/portfolio"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/20
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white/10
                  "
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}