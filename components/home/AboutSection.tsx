"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
  ArrowRight,
  CheckCircle2,
  Award,
  ShieldCheck,
  Sparkles,
  BrainCircuit,
  Globe2,
  Layers3,
} from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";

const features = [
  "Custom Software Development",
  "Enterprise ERP Solutions",
  "AI & Automation",
  "Cloud Infrastructure",
  "24/7 Support",
  "Agile Development",
];

const stats = [
  {
    value: 250,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 150,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    value: 98,
    suffix: "%",
    label: "Success Rate",
  },
  {
    value: 12,
    suffix: "+",
    label: "Countries Served",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 lg:py-14">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-100/40 blur-3xl" />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,#e2e8f010_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f010_1px,transparent_1px)]
            bg-[size:80px_80px]
          "
        />

      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">

        {/* ============================ */}
        {/* HEADER */}
        {/* ============================ */}

        <AnimatedSection>

          <div className="mx-auto max-w-4xl text-center">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-cyan-200
                bg-cyan-50
                px-5
                py-2
                text-sm
                font-semibold
                text-cyan-700
              "
            >
              <Sparkles className="h-4 w-4" />
              About Ace Soft Solution
            </motion.div>

            <h2
              className="
                mt-7
                font-poppins
                text-4xl
                font-bold
                leading-tight
                text-slate-900
                md:text-5xl
                xl:text-6xl
              "
            >
              Building Future-Ready

              <span
                className="
                  mt-2
                  block
                  bg-gradient-to-r
                  from-blue-700
                  via-cyan-500
                  to-teal-500
                  bg-clip-text
                  text-transparent
                "
              >
                Digital Experiences
              </span>

            </h2>

            <p
              className="
                mx-auto
                mt-7
                max-w-3xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              We partner with startups, SMEs, and enterprises to design,
              develop, and scale modern software solutions that combine
              innovation, performance, and long-term business value.
            </p>

          </div>

        </AnimatedSection>

        {/* ============================ */}
        {/* ABOUT CONTENT */}
        {/* ============================ */}

        <div
          className="
            mt-16
            grid
            items-center
            gap-12
            lg:grid-cols-[1.1fr_.9fr]
          "
        >

          {/* LEFT SIDE */}
          <AnimatedSection direction="left">

            <div>

              <span
                className="
                  inline-flex
                  rounded-full
                  bg-blue-50
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-blue-700
                "
              >
                Who We Are
              </span>

              <h3
                className="
                  mt-6
                  text-4xl
                  font-bold
                  leading-tight
                  text-slate-900
                "
              >
                Your Long-Term
                <br />
                Technology Partner
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Ace Soft Solution helps businesses transform ideas into
                scalable digital products. From enterprise software and
                AI automation to mobile apps, cloud platforms and ERP
                systems—we build technology that drives measurable
                business growth.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our team combines engineering excellence, user-centric
                design, and modern technologies to deliver secure,
                scalable, and future-ready digital solutions.
              </p>

              <Link
                href="/about"
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-700
                  via-cyan-500
                  to-teal-500
                  px-7
                  py-4
                  font-semibold
                  text-white
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Explore Our Company

                <ArrowRight className="h-5 w-5" />
              </Link>

            </div>

          </AnimatedSection>

          {/* RIGHT SIDE */}
                    {/* RIGHT SIDE */}

          <AnimatedSection direction="right">

            <div className="relative mx-auto w-full max-w-[520px]">

              {/* Background Glow */}

              <div
                className="
                  absolute
                  inset-0
                  scale-110
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-200/40
                  via-blue-200/40
                  to-teal-200/40
                  blur-3xl
                "
              />

              {/* Floating Circle */}

            


              <motion.div
                animate={{
                  y: [-10, 10, -10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-0
                  bottom-12
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  shadow-xl
                "
              >
                <Layers3 className="h-8 w-8 text-teal-600" />
              </motion.div>

              {/* Main Glass Card */}

              <motion.div
                whileHover={{
                  y: -8,
                  rotate: -1,
                }}
                transition={{
                  duration: .3,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/60
                  bg-white/80
                  p-8
                  shadow-2xl
                  backdrop-blur-xl
                "
              >

                {/* Gradient */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-2
                    bg-gradient-to-r
                    from-blue-600
                    via-cyan-500
                    to-teal-500
                  "
                />

                {/* Icon */}

                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    bg-gradient-to-br
                    from-blue-700
                    via-cyan-500
                    to-teal-500
                    shadow-xl
                  "
                >
                  <BrainCircuit className="h-10 w-10 text-white" />
                </div>

                <h3
                  className="
                    mt-8
                    text-3xl
                    font-bold
                    text-slate-900
                  "
                >
                  Modern Software.
                  <br />
                  Intelligent Solutions.
                </h3>

                <p
                  className="
                    mt-5
                    leading-8
                    text-slate-600
                  "
                >
                  We combine software engineering, AI automation,
                  cloud technologies, and intuitive user experiences
                  to help businesses innovate faster and scale
                  confidently.
                </p>

                {/* Mini Cards */}

                <div className="mt-8 grid gap-4">

                  <motion.div
                    whileHover={{
                      x: 6,
                    }}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      p-4
                    "
                  >
                    <Award className="h-6 w-6 text-blue-600" />

                    <div>

                      <h4 className="font-semibold text-slate-900">
                        Enterprise Quality
                      </h4>

                      <p className="text-sm text-slate-500">
                        Built for long-term scalability
                      </p>

                    </div>

                  </motion.div>

                  <motion.div
                    whileHover={{
                      x: 6,
                    }}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      p-4
                    "
                  >
                    <ShieldCheck className="h-6 w-6 text-green-600" />

                    <div>

                      <h4 className="font-semibold text-slate-900">
                        Secure Development
                      </h4>

                      <p className="text-sm text-slate-500">
                        Performance, security & reliability
                      </p>

                    </div>

                  </motion.div>

                </div>

              </motion.div>

          

            </div>

          </AnimatedSection>

        </div>

        {/* ============================ */}
        {/* COUNTER SECTION */}
        {/* Part 3 Starts Here */}
        {/* ============================ */}  

                <AnimatedSection className="mt-16">

          <div className="rounded-[36px] border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 lg:p-12">

            <div className="text-center">

              <span
                className="
                  inline-flex
                  rounded-full
                  bg-white/10
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-cyan-300
                "
              >
                Trusted Worldwide
              </span>

              <h3
                className="
                  mt-5
                  text-3xl
                  font-bold
                  text-white
                  lg:text-4xl
                "
              >
                Numbers That Reflect Our Commitment
              </h3>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-3xl
                  text-lg
                  leading-8
                  text-slate-300
                "
              >
                Every project represents innovation, collaboration, and measurable
                business impact. Our growing portfolio reflects years of delivering
                high-quality digital solutions across industries.
              </p>

            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

              {stats.map((item, index) => (

                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.12,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-8
                    text-center
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:border-cyan-400/30
                    hover:bg-white/10
                  "
                >

                  {/* Background Glow */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-cyan-500/0
                      via-blue-500/0
                      to-teal-500/0
                      opacity-0
                      transition-all
                      duration-500
                      group-hover:opacity-100
                      group-hover:from-cyan-500/10
                      group-hover:via-blue-500/10
                      group-hover:to-teal-500/10
                    "
                  />

                  {/* Number */}

                  <div className="relative">

                    <div
                      className="
                        text-5xl
                        font-black
                        tracking-tight
                        text-white
                      "
                    >
                      <CountUp
                        end={item.value}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                      {item.suffix}
                    </div>

                    <div
                      className="
                        mt-3
                        text-base
                        font-medium
                        text-slate-300
                      "
                    >
                      {item.label}
                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </AnimatedSection>

        {/* ============================ */}
        {/* FEATURES GRID */}
        {/* Part 4 Starts Here */}
        {/* ============================ */}

                {/* ===================================== */}
        {/* FEATURES */}
        {/* ===================================== */}

        <AnimatedSection className="mt-16">

          <div className="text-center">

            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-sm font-semibold text-cyan-700">
              Why Choose Ace Soft Solution
            </span>

            <h3 className="mt-5 text-3xl font-bold text-slate-900 lg:text-4xl">
              Everything You Need Under One Roof
            </h3>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              We combine strategy, design, engineering, cloud technologies,
              artificial intelligence, and continuous support to help
              businesses build future-ready digital products.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {features.map((feature, index) => (

              <motion.div
                key={feature}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * .08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-cyan-300
                  hover:shadow-xl
                "
              >

                {/* Gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-cyan-50
                    via-blue-50
                    to-teal-50
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative">

                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-blue-700
                      via-cyan-500
                      to-teal-500
                      shadow-lg
                    "
                  >
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>

                  <h4
                    className="
                      mt-6
                      text-xl
                      font-semibold
                      text-slate-900
                    "
                  >
                    {feature}
                  </h4>

                  <p
                    className="
                      mt-3
                      leading-7
                      text-slate-600
                    "
                  >
                    We deliver secure, scalable and business-focused
                    solutions using modern technologies and proven
                    development practices.
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </AnimatedSection>

        {/* ===================================== */}
        {/* CTA */}
        {/* ===================================== */}

        <AnimatedSection className="mt-16">

          <div
            className="
              relative
              overflow-hidden
              rounded-[36px]
              bg-gradient-to-r
              from-blue-700
              via-cyan-600
              to-teal-500
              p-10
              lg:p-14
            "
          >

            <div
              className="
                absolute
                -left-24
                -top-24
                h-72
                w-72
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div
              className="
                absolute
                -right-24
                bottom-0
                h-72
                w-72
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                items-center
                justify-between
                gap-8
                text-center
                lg:flex-row
                lg:text-left
              "
            >

              <div className="max-w-3xl">

                <span
                  className="
                    inline-flex
                    rounded-full
                    bg-white/15
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  Let's Build Together
                </span>

                <h3
                  className="
                    mt-5
                    text-4xl
                    font-bold
                    leading-tight
                    text-white
                  "
                >
                  Ready to Turn Your Ideas
                  <br />
                  Into Powerful Digital Products?
                </h3>

                <p
                  className="
                    mt-5
                    max-w-2xl
                    text-lg
                    leading-8
                    text-white/90
                  "
                >
                  Whether you're launching a startup, modernizing enterprise
                  software, or scaling your business with AI, our team is ready
                  to help you achieve your goals.
                </p>

              </div>

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: .96,
                }}
              >

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-white
                    px-8
                    py-4
                    font-semibold
                    text-slate-900
                    shadow-xl
                  "
                >
                  Start Your Project

                  <ArrowRight className="h-5 w-5" />

                </Link>

              </motion.div>

            </div>

          </div>

        </AnimatedSection>

      </div>

    </section>

  );
}