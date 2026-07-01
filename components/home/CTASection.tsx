"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,

  Brain,
  Cloud,
  Megaphone,
} from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CTASection() {
  const services = [
    {
      name: "Web Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Mobile Apps",
      icon: Smartphone,
      color: "from-violet-500 to-fuchsia-500",
    },
 
    {
      name: "AI & ML Solutions",
      icon: Brain,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Cloud & DevOps",
      icon: Cloud,
      color: "from-sky-500 to-blue-600",
    },
    {
      name: "Digital Marketing",
      icon: Megaphone,
      color: "from-orange-500 to-amber-500",
    },
  ];

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
                text-3xl
                font-black
                uppercase
                leading-[0.95]
                tracking-tight
                text-slate-900
                md:text-5xl
                xl:text-[6rem]
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
              Whether you're launching a startup, scaling operations, automating
              workflows, or building enterprise-grade software - our expert team
              is ready to turn your vision into a high-performance digital
              product.
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
            </div>

            {/* Premium Service Pills */}

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.45,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -8,
                      scale: 1.06,
                    }}
                    className="group relative cursor-pointer"
                  >
                    {/* Glow */}

                    <div
                      className={`
            absolute
            -inset-0.5
            rounded-full
            bg-gradient-to-r
            ${service.color}
            opacity-0
            blur-lg
            transition-all
            duration-500
            group-hover:opacity-40
          `}
                    />

                    {/* Card */}

                    <div
                      className="
            relative
            overflow-hidden
            rounded-full
            border
            border-slate-200
            bg-white/90
            backdrop-blur-xl
            px-5
            py-3
            shadow-md
            transition-all
            duration-500
            group-hover:border-blue-300
            group-hover:shadow-2xl
          "
                    >
                      {/* Shine */}

                      <div
                        className="
              absolute
              inset-y-0
              -left-24
              w-16
              -skew-x-12
              bg-white/70
              transition-all
              duration-700
              group-hover:left-[140%]
            "
                      />

                      <div className="relative flex items-center gap-3">
                        <div
                          className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                ${service.color}
                text-white
                shadow-lg
                transition-transform
                duration-500
                group-hover:rotate-12
                group-hover:scale-110
              `}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        <span
                          className="
                font-semibold
                text-slate-700
                transition-colors
                duration-300
                group-hover:text-slate-900
              "
                        >
                          {service.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
