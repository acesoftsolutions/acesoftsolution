'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
 <section className="relative overflow-hidden bg-[#080c14] pt-32 pb-24">

  {/* Background Glow */}

  <div className="absolute inset-0">

    <div className="absolute top-0 left-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[160px]" />

    <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[160px]" />

  </div>

  <div className="relative z-10 mx-auto max-w-[1280px] px-5">

    {/* Badge */}

    <div className="mb-8 flex justify-center">

      <div className="
        rounded-full
        border
        border-cyan-500/20
        bg-white/5
        px-5
        py-2
        text-sm
        text-cyan-300
      ">
        🚀 Trusted Technology Partner
      </div>

    </div>

    {/* Heading */}

    <h1 className="
      mx-auto
      max-w-5xl
      text-center
      text-5xl
      font-bold
      leading-tight
      text-white
      md:text-7xl
    ">

      Accelerate Your Business

      <span className="
        block
        bg-gradient-to-r
        from-[#0E4DB7]
        via-[#3CC8F5]
        to-[#12C7B5]
        bg-clip-text
        text-transparent
      ">
        With Future-Ready Technology
      </span>

    </h1>

    <p className="
      mx-auto
      mt-8
      max-w-3xl
      text-center
      text-xl
      text-white/70
    ">
      We build scalable software, ERP systems,
      AI solutions and digital products that
      help businesses grow faster.
    </p>

    {/* Buttons */}

    <div className="
      mt-10
      flex
      justify-center
      gap-4
      flex-wrap
    ">

      <button className="
        rounded-2xl
        bg-gradient-to-r
        from-[#0E4DB7]
        via-[#3CC8F5]
        to-[#12C7B5]
        px-8
        py-4
        text-white
        font-semibold
      ">
        Start Your Project
      </button>

      <button className="
        rounded-2xl
        border
        border-cyan-500/20
        bg-white/5
        px-8
        py-4
        text-white
      ">
        View Portfolio
      </button>

    </div>

    {/* Main Cards Area */}

    <div className="
      mt-24
      grid
      gap-8
      lg:grid-cols-3
    ">

      {/* Service Cards */}

      <div className="space-y-6">

        {[
          "Web Development",
          "Mobile Apps",
          "ERP Software",
          "AI Solutions"
        ].map((service) => (

          <div
            key={service}
            className="
              rounded-3xl
              border
              border-cyan-500/10
              bg-white/[0.03]
              p-6
              backdrop-blur-xl
            "
          >
            <h3 className="text-xl font-semibold text-white">
              {service}
            </h3>

            <p className="mt-2 text-white/60">
              Enterprise-grade solutions tailored for growth.
            </p>

          </div>

        ))}

      </div>

      {/* Dashboard */}

      <div className="lg:col-span-2">

        <div className="
          rounded-[32px]
          border
          border-cyan-500/10
          bg-[#0B1220]
          p-6
          shadow-[0_25px_100px_rgba(60,200,245,0.15)]
        ">

          <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            p-8
          ">

            <div className="
              grid
              gap-4
              md:grid-cols-3
            ">

              <div className="
                rounded-2xl
                bg-white/5
                p-5
              ">
                <p className="text-white/60">
                  Revenue Growth
                </p>

                <h4 className="mt-2 text-4xl font-bold text-white">
                  +248%
                </h4>
              </div>

              <div className="
                rounded-2xl
                bg-white/5
                p-5
              ">
                <p className="text-white/60">
                  Active Clients
                </p>

                <h4 className="mt-2 text-4xl font-bold text-white">
                  150+
                </h4>
              </div>

              <div className="
                rounded-2xl
                bg-white/5
                p-5
              ">
                <p className="text-white/60">
                  Success Rate
                </p>

                <h4 className="mt-2 text-4xl font-bold text-white">
                  98%
                </h4>
              </div>

            </div>

            {/* Chart Area */}

            <div className="
              mt-8
              h-[320px]
              rounded-3xl
              bg-gradient-to-br
              from-[#0E4DB7]/30
              via-[#3CC8F5]/20
              to-[#12C7B5]/20
            " />

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
  );
}
