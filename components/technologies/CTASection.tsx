"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1C] py-12 lg:py-14">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Glow Effects - Adjusted for Dark Theme */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Small Label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-slate-300">
            Ready To Start?
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>

          {/* Main Heading */}
          <h2 className="mx-auto mt-10 max-w-6xl text-center text-3xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-4xl lg:text-5xl xl:text-[6rem]">
            READY TO BUILD
            <br />
            WITH CLARITY &
            <br />
            CONFIDENCE?
          </h2>

          {/* Highlighted Clickable CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 transition-all hover:scale-[1.02]"
            >
              <span
                className="
                  bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 
                  bg-clip-text text-3xl font-black uppercase text-transparent 
                  md:text-4xl lg:text-5xl hover:brightness-110 transition
                "
              >
                LET'S CONNECT
              </span>

              <div className="transition-transform group-hover:rotate-45">
                <ArrowUpRight
                  className="h-14 w-14 text-white md:h-20 md:w-20"
                />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}