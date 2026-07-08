"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Layers3,
  Headphones,
} from "lucide-react";

export default function ServiceCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-12 lg:py-16">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* Grid Pattern */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div className="text-center">
            {/* Badge */}

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
                text-cyan-300
                backdrop-blur-xl
              "
            >
              <Sparkles size={16} />
              Ready To Start?
            </div>

            {/* Huge Heading */}

            <h2
              className="
                mx-auto
                mt-10
                max-w-6xl
                font-black
                uppercase
                tracking-tight
                text-white
                text-[42px]
                leading-[0.9]
                sm:text-[60px]
                md:text-[80px]
                lg:text-[110px]
              "
            >
              BUILD YOUR
              <br />
              NEXT DIGITAL
              <br />
              PRODUCT
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-lg
                leading-relaxed
                text-slate-400
              "
            >
              From strategy and design to development, deployment, and long-term
              support, we help businesses launch scalable digital solutions that
              drive measurable growth.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
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
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Trust Features */}

            <div className="mt-8 flex justify-center">
              <div className="inline-flex flex-wrap overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {[
                  {
                    icon: CheckCircle2,
                    title: "Custom Development",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Enterprise Solutions",
                  },
                  {
                    icon: Layers3,
                    title: "Scalable Architecture",
                  },
                  {
                    icon: Headphones,
                    title: "Dedicated Support",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className={`group flex items-center gap-3 px-5 py-4 transition-all duration-300 hover:bg-blue-50 ${
                        index !== 3 ? "border-r border-slate-200" : ""
                      }`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">
                        <Icon className="h-5 w-5 text-blue-600 transition-all duration-300 group-hover:text-white" />
                      </div>

                      <span className="text-sm font-semibold whitespace-nowrap text-slate-700">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
