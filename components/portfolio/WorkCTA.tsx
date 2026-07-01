"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Phone } from "lucide-react";

export default function PortfolioCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-14">
      {/* Background Effects */}{" "}
      <div className="absolute inset-0 overflow-hidden">
        {" "}
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[200px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[200px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
          border-blue-100
          bg-blue-50
          px-5
          py-2
        "
          >
            <Sparkles className="h-4 w-4 text-blue-600" />

            <span className="text-sm font-semibold text-blue-600">
              Let's Build Something Amazing
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="
          mx-auto
          mt-10
          max-w-6xl
          text-center
          text-3xl
          font-black
          uppercase
          leading-[0.95]
          tracking-tight
          text-slate-950
          md:text-4xl
          lg:text-5xl
          xl:text-[6rem]
        "
          >
            READY TO BUILD
            <br />
            YOUR NEXT DIGITAL PRODUCT?
          </h2>

          {/* Gradient Line */}
          <div
            className="
          mt-8
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-violet-500
          bg-clip-text
          text-3xl
          font-black
          uppercase
          text-transparent
          md:text-4xl
          lg:text-5xl
        "
          >
            Let's Create Something Exceptional
          </div>

          {/* Description */}
          <p
            className="
          mx-auto
          mt-10
          max-w-3xl
          text-lg
          leading-relaxed
          text-slate-600
          md:text-xl
        "
          >
            Whether you're launching a startup, modernizing enterprise software,
            building a SaaS platform, mobile app, AI product, or digital
            ecosystem — Ace Soft Solution is ready to help bring your vision to
            life.
          </p>

          {/* CTA Buttons */}
          <div
            className="
          mt-12
          flex
          flex-col
          items-center
          justify-center
          gap-5
          sm:flex-row
        "
          >
            <button
              className="
            group
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-violet-500
            px-8
            py-4
            text-lg
            font-semibold
            text-white
            shadow-[0_20px_40px_rgba(37,99,235,0.25)]
            transition-all
            duration-300
            hover:-translate-y-1
          "
            >
              Start Your Project
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
