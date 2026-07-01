"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-14">
      {/* Grid Background */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
          bg-[size:64px_64px]
          opacity-60
        "
      />

      {/* Glow Effects */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center"
        >
          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white/80
              px-5
              py-3
              text-sm
              font-medium
              text-slate-700
              backdrop-blur-xl
            "
          >
            <Sparkles size={14} />
            Ready To Start?
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </div>

          {/* Heading */}
          <h2
            className="
    mx-auto
    mt-10
    max-w-6xl
    font-black
    uppercase
    tracking-tight
    text-[#020617]
    text-[40px]
    leading-[0.9]
    sm:text-[30px]
    md:text-[48px]
    lg:text-[64px]
    xl:text-[88px]
  "
          >
            READY TO BUILD
            <br />
            DIGITAL PRODUCTS
            <br />
            THAT SCALE?
          </h2>

          {/* CTA Link */}

          <div className="mt-6 lg:mt-8">
            <Link
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-4
                font-black
                uppercase
                tracking-tight
                text-[24px]
                sm:text-[32px]
                md:text-[40px]
                lg:text-[48px]
              "
            >
              <span
                className="
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-emerald-500
                  bg-clip-text
                  text-transparent
                "
              >
                LET'S CONNECT
              </span>

              <ArrowUpRight
                className="
                  h-8
                  w-8
                  text-slate-900
                  transition-all
                  duration-300
                  sm:h-10
                  sm:w-10
                  md:h-12
                  md:w-12
                  group-hover:translate-x-2
                  group-hover:-translate-y-2
                "
              />
            </Link>
          </div>

          {/* Small Description */}

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-sm
              leading-relaxed
              text-slate-500
              md:text-base
            "
          >
            Partner with Ace Soft Solution to design, develop, and scale digital
            products that create measurable business impact.
          </p>

       
        </motion.div>
      </div>
    </section>
  );
}
