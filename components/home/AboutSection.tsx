"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Award, Target } from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";

const features = [
  "Custom Software Development",
  "Enterprise ERP Solutions",
  "AI & Intelligent Automation",
  "Cloud Infrastructure Services",
  "24/7 Support & Maintenance",
  "Agile & Scalable Development",
];

const stats = [
  {
    value: "250+",
    label: "Projects Delivered",
  },
  {
    value: "150+",
    label: "Global Clients",
  },
  {
    value: "98%",
    label: "Client Success Rate",
  },
  {
    value: "12+",
    label: "Countries Served",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-[#F8FAFC] py-14 lg:py-14">
      {" "}
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        {/* Header */}

        <AnimatedSection>
          <div className="mx-auto max-w-4xl text-center">
            <span
              className="
            inline-flex
            items-center
            rounded-full
            border
            border-blue-100
            bg-blue-50
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-700
          "
            >
              About Ace Soft Solution
            </span>

            <h2
              className="
            mt-6
            font-poppins
            text-3xl
            font-bold
            leading-tight
            text-slate-900
            md:text-4xl
            xl:text-5xl
          "
            >
              Delivering Future-Ready
              <span
                className="
              block
              bg-gradient-to-r
              from-blue-700
              via-cyan-500
              to-teal-500
              bg-clip-text
              text-transparent
            "
              >
                Software & Digital Solutions
              </span>
            </h2>

            <p
              className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-relaxed
            text-slate-600
          "
            >
              We help startups, SMEs, and enterprises turn ideas into
              market-ready digital products through expert software development,
              AI solutions, ERP systems, and scalable cloud technologies.
            </p>
          </div>
        </AnimatedSection>

        {/* Content */}

        <div
          className="
        mt-20
        grid
        gap-8
        lg:grid-cols-[1.2fr_0.8fr]
        items-stretch
      "
        >
          {/* Left Column */}

          <AnimatedSection direction="left">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="
            h-full
            rounded-[32px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-sm
            transition-all
            duration-300
            hover:shadow-xl
            lg:p-10
          "
            >
              <h3 className="text-3xl font-bold text-slate-900">Who We Are</h3>

              <p className="mt-5 leading-relaxed text-slate-600">
                Ace Soft Solution is a trusted software development company
                helping startups, SMEs, and enterprises build scalable websites,
                mobile apps, ERP systems, and AI-powered digital products that
                deliver real results.
              </p>

              <p className="mt-5 leading-relaxed text-slate-600">
                Our expert team blends deep technical knowledge, innovation, and
                strategic thinking to build future-ready solutions tailored to
                every client's goals, ensuring long-term success in a rapidly
                evolving digital landscape.
              </p>

              {/* Features */}

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  py-4
                "
                  >
                    <div
                      className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    bg-green-100
                  "
                    >
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    </div>

                    <span className="text-sm font-medium text-slate-700">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}

              <Link
                href="/about"
                className="
              mt-10
              inline-flex
              items-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-blue-700
              via-cyan-500
              to-teal-500
              px-8
              py-4
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-105
            "
              >
                Discover Our Story
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </AnimatedSection>

          {/* Right Column */}

          <AnimatedSection direction="right">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="
            h-full
            rounded-[32px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-sm
            transition-all
            duration-300
            hover:shadow-xl
            lg:p-10
          "
            >
              <h3 className="text-3xl font-bold text-slate-900">
                Why Businesses Trust Us
              </h3>

              {/* Stats */}

              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-6
                  text-center
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:shadow-md
                "
                  >
                    <h4
                      className="
                    text-4xl
                    font-bold
                    text-slate-900
                  "
                    >
                      {item.value}
                    </h4>

                    <p
                      className="
                    mt-2
                    text-sm
                    font-medium
                    text-slate-500
                  "
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Experience Card */}

              <div
                className="
              mt-8
              overflow-hidden
              rounded-[32px]
              bg-gradient-to-r
              from-blue-700
              via-cyan-600
              to-teal-500
              p-8
              text-white
            "
              >
                <div className="flex items-center gap-4">
                  <div
                    className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white/20
                "
                  >
                    <Award className="h-8 w-8" />
                  </div>

                  <div>
                    <h4 className="text-4xl font-bold">10+ Years</h4>

                    <p className="text-white/80">Proven Industry Experience</p>
                  </div>
                </div>

                <p className="mt-5 leading-relaxed text-white/90">
                  Trusted by businesses across industries to deliver enterprise
                  software, ERP, AI automation, and digital transformation
                  projects with a consistent focus on quality, innovation, and
                  measurable outcomes.
                </p>
              </div>

              {/* Trust Card */}

              <div
                className="
              mt-6
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
              p-6
            "
              >
                <div className="flex items-start gap-4">
                  <div
                    className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-100
                "
                  >
                    <Target className="h-6 w-6 text-blue-700" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Your Trusted Long-Term Technology Partner
                    </h4>

                    <p className="mt-2 text-slate-600">
                      From initial strategy and development through deployment,
                      ongoing optimization, and dedicated support, we help
                      businesses scale confidently with future-proof technology
                      solutions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
