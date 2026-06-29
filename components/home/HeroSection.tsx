"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "150+",
    label: "Clients Worldwide",
  },
  {
    value: "250+",
    label: "Projects Delivered",
  },
  {
    value: "98%",
    label: "Success Rate",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#080c14] pt-28 md:pt-12 lg:pt-20 pb-16 md:pb-24">
      {/* Background Grid */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}

            <div
              className="
               mb-6
inline-flex
items-center
rounded-full
border
border-cyan-500/20
bg-white/[0.03]
px-4
py-2
text-xs
sm:text-sm
font-medium
text-cyan-300
              "
            >
              Award-Winning Software Development Company
            </div>

            {/* Heading */}

            <h1
              className="
                text-4xl
sm:text-4xl
lg:text-5xl
xl:text-6xl
font-bold
leading-[1.1]
tracking-tight
text-white
              "
            >
              Custom Software Solutions
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
                Engineered to Scale
              </span>
            </h1>

            {/* Description */}

            <p
              className="
               mt-6
max-w-xl
text-base
sm:text-lg
leading-relaxed
text-white/70
              "
            >
             We empower startups, SMEs, and enterprises with custom
              software development, mobile apps, ERP systems, and
              AI-driven solutions designed to optimize workflows and
              accelerate scalable growth.

            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#0E4DB7]
                  px-7
                  py-4
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-[#0b3f97]
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
                  rounded-xl
                  border
                  border-white/10
                  px-7
                  py-4
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-white/5
                "
              >
                Explore Our Work
              </Link>
            </div>

            {/* Trust Points */}

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-white/70">
              <div>✓ Custom Software Development</div>
              <div>✓ Mobile App Development</div>
              <div>✓ ERP & Business Automation </div>
              <div>✓ AI & Machine Learning</div>
              <div>✓ Cloud Infrastructure & DevOps</div>
              <div>✓ Digital Transformation</div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main Image */}

            <div
              className="
              overflow-hidden
rounded-2xl
lg:rounded-[28px]
border
border-white/10
              "
            >
              <Image
                src="/images/hero-image.jpg"
                alt="Ace Soft Solution"
                width={900}
                height={700}
                priority
                className="
                  h-auto
                  w-full
                  object-cover
                "
              />
            </div>

            {/* Statistics Bar */}

            <div
              className="
                mt-6
                grid
                grid-cols-2
                gap-4
                md:grid-cols-4
              "
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-5
                    text-center
                  "
                >
                  <h3 className="text-3xl font-bold text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
