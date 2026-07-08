"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
  Layers3,
  ShieldCheck,
} from "lucide-react";

interface ServiceContentProps {
  service: any;
}

export default function ServiceContent({ service }: ServiceContentProps) {
  const [openFaq, setOpenFaq] = useState(0);

  const serviceHighlights = [
    {
      icon: Layers3,
      title: "Business-Focused Strategy",
      description:
        "Every solution is designed around measurable business outcomes, operational efficiency, and long-term growth.",
    },
    {
      icon: ShieldCheck,
      title: "Scalable Architecture",
      description:
        "Future-ready systems built with performance, security, maintainability, and scalability in mind.",
    },
    {
      icon: ArrowUpRight,
      title: "Growth-Oriented Delivery",
      description:
        "From planning to deployment, we focus on delivering digital products that create real business value.",
    },
  ];

  return (
    <section className="bg-white py-10 lg:py-12">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Overview Section - Professional & Compact */}

        <div className="relative">
          <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-700">
                  <Sparkles size={16} />
                  Service Overview
                </span>

                <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
                  Delivering Technology Solutions That Drive
                  <span className="block bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text text-transparent">
                    Business Growth
                  </span>
                </h2>

                <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-600">
                  <p>{service.description}</p>
                  <p>
                    We help businesses transform ideas into scalable digital
                    products through strategic planning, modern technologies,
                    and expert engineering practices.
                  </p>
                </div>

                {/* Features */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    "Enterprise Ready",
                    "Scalable Solutions",
                    "Agile Delivery",
                    "Dedicated Support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white px-6 py-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      </div>
                      <span className="font-medium text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Card - Professional */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg">
                  <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                    Business Outcomes
                  </span>

                  <h3 className="mt-4 text-3xl font-semibold text-slate-900">
                    Results That Matter
                  </h3>

                  {/* Outcomes */}
                  <div className="mt-8 space-y-5">
                    {service.outcomes.map((outcome: string) => (
                      <div
                        key={outcome}
                        className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all hover:border-emerald-200"
                      >
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-600">
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                        <p className="text-slate-700">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose This Service - Professional Company Style */}

        <section className="w-full bg-gray-100 py-14">
          <div className="mx-auto max-w-screen-2xl px-6 lg:px-12">
            {/* Section Header */}
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-6 py-2.5 text-sm font-semibold text-slate-700">
                WHY CHOOSE US
              </span>

              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
                Why Businesses
                <span className="block bg-gradient-to-r from-blue-700 to-slate-800 bg-clip-text text-transparent">
                  Choose This Service
                </span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Designed to help organizations improve efficiency, accelerate
                growth, and stay competitive in an increasingly digital world.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {serviceHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative rounded-3xl border border-slate-100 bg-white p-8 transition-all hover:border-slate-200 hover:shadow-lg"
                  >
                    {/* Number */}
                    <span className="absolute right-8 top-8 text-6xl font-bold text-slate-100 transition-colors group-hover:text-slate-50">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 transition-colors group-hover:bg-blue-50">
                      <Icon className="h-8 w-8 text-slate-600 transition-colors group-hover:text-blue-600" />
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[17px] leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Core Capabilities */}

        <div className="relative mt-32">
          {/* Background Effects */}

          <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

          {/* Header */}

          <div className="relative max-w-4xl">
            <span
              className="
        inline-flex
        items-center
        rounded-full
        border
        border-blue-200
        bg-gradient-to-r
        from-blue-50
        to-cyan-50
        px-5
        py-2.5
        text-sm
        font-semibold
        text-blue-700
      "
            >
              Core Capabilities
            </span>

            <h2
              className="
        mt-6
        text-4xl
        font-bold
        leading-tight
        text-slate-900
        md:text-5xl
        xl:text-6xl
      "
            >
              Comprehensive Expertise
              <span
                className="
          block
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-blue-700
          bg-clip-text
          text-transparent
        "
              >
                Across Every Stage
              </span>
            </h2>

            <p
              className="
        mt-6
        max-w-3xl
        text-lg
        leading-relaxed
        text-slate-600
      "
            >
              Our team combines strategy, design, engineering, testing, and
              deployment expertise to deliver reliable digital products tailored
              to business objectives.
            </p>
          </div>

          {/* Capability Cards */}

          <div className="relative mt-16 grid gap-7 lg:grid-cols-2">
            {service.features.map(
              (
                feature: {
                  title: string;
                  description: string;
                },
                index: number,
              ) => (
                <motion.div
                  key={feature.title}
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
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-slate-200
            bg-white/80
            p-8
            backdrop-blur-sm
            shadow-[0_10px_40px_rgba(15,23,42,0.05)]
            transition-all
            duration-500
            hover:-translate-y-3
            hover:border-blue-200
            hover:shadow-[0_25px_80px_rgba(37,99,235,0.12)]
          "
                >
                  {/* Hover Top Border */}

                  <div
                    className="
              absolute
              left-0
              top-0
              h-1
              w-0
              bg-gradient-to-r
              from-blue-600
              via-cyan-500
              to-blue-600
              transition-all
              duration-500
              group-hover:w-full
            "
                  />

                  {/* Background Number */}

                  <span
                    className="
              absolute
              right-6
              top-4
              text-7xl
              font-bold
              text-slate-100
              transition-all
              duration-500
              group-hover:text-blue-50
            "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Top Section */}

                  <div className="relative z-10 flex items-start justify-between">
                    <div
                      className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-blue-50
                to-cyan-50
                text-xl
                font-bold
                text-blue-600
                transition-all
                duration-500
                group-hover:scale-110
                group-hover:rotate-3
                group-hover:from-blue-600
                group-hover:to-cyan-500
                group-hover:text-white
              "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div
                      className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-slate-50
                transition-all
                duration-500
                group-hover:bg-blue-600
              "
                    >
                      <ArrowUpRight
                        className="
                  h-5
                  w-5
                  text-slate-500
                  transition-all
                  duration-500
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  group-hover:text-white
                "
                      />
                    </div>
                  </div>

                  {/* Content */}

                  <div className="relative z-10">
                    <h3
                      className="
                mt-8
                text-2xl
                font-bold
                text-slate-900
              "
                    >
                      {feature.title}
                    </h3>

                    <p
                      className="
                mt-4
                leading-relaxed
                text-slate-600
              "
                    >
                      {feature.description}
                    </p>

                    {/* Hover CTA */}

                    <div
                      className="
                mt-6
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-blue-600
                opacity-0
                transition-all
                duration-500
                group-hover:translate-x-1
                group-hover:opacity-100
              "
                    >
                      Explore Capability
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Bottom Glow */}

                  <div
                    className="
              absolute
              bottom-0
              left-0
              h-24
              w-full
              bg-gradient-to-t
              from-blue-50/70
              to-transparent
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
                  />
                </motion.div>
              ),
            )}
          </div>
        </div>

        {/* Technology Ecosystem */}

        <div className="mt-32">
          <div className="text-center">
            <span
              className="
        inline-flex
        items-center
        rounded-full
        border
        border-slate-200
        bg-white
        px-5
        py-2
        text-sm
        font-medium
        text-slate-700
      "
            >
              Technology Ecosystem
            </span>

            <h2
              className="
        mt-5
        text-4xl
        font-bold
        text-slate-900
        md:text-5xl
      "
            >
              Built With Modern Technologies
            </h2>

            <p
              className="
        mx-auto
        mt-5
        max-w-3xl
        text-lg
        leading-relaxed
        text-slate-600
      "
            >
              We leverage industry-leading frameworks, tools, and cloud
              technologies to build scalable, secure, and future-ready
              solutions.
            </p>
          </div>

          <div
            className="
      mt-14
      rounded-[40px]
      border
      border-slate-200
      bg-gradient-to-b
      from-white
      to-slate-50
      p-8
      md:p-12
    "
          >
            {/* Technology Tags */}

            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech: string) => (
                <motion.div
                  key={tech}
                  whileHover={{
                    y: -2,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-6
            py-4
            text-sm
            font-semibold
            text-slate-700
            shadow-sm
            transition-all
            duration-300
            hover:border-blue-200
            hover:shadow-md
          "
                >
                  {tech}
                </motion.div>
              ))}
            </div>

            {/* Capability Areas */}

            <div
              className="
        mt-12
        grid
        gap-6
        md:grid-cols-3
      "
            >
              <div
                className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-7
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-200
          hover:shadow-lg
        "
              >
                <h4
                  className="
            text-lg
            font-bold
            text-slate-900
          "
                >
                  Frontend
                </h4>

                <p
                  className="
            mt-3
            leading-relaxed
            text-slate-600
          "
                >
                  Modern user experiences built using responsive, accessible,
                  and performance-focused technologies.
                </p>
              </div>

              <div
                className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-7
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-200
          hover:shadow-lg
        "
              >
                <h4
                  className="
            text-lg
            font-bold
            text-slate-900
          "
                >
                  Backend
                </h4>

                <p
                  className="
            mt-3
            leading-relaxed
            text-slate-600
          "
                >
                  Reliable APIs and scalable infrastructure powering
                  mission-critical business applications.
                </p>
              </div>

              <div
                className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-7
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-200
          hover:shadow-lg
        "
              >
                <h4
                  className="
            text-lg
            font-bold
            text-slate-900
          "
                >
                  Cloud & DevOps
                </h4>

                <p
                  className="
            mt-3
            leading-relaxed
            text-slate-600
          "
                >
                  Secure deployment, automation, monitoring, and infrastructure
                  optimization for long-term scalability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Process */}

        <div className="mt-32">
          {/* Header */}

          <div className="text-center">
            <span
              className="
        inline-flex
        items-center
        rounded-full
        border
        border-slate-200
        bg-white
        px-5
        py-2
        text-sm
        font-medium
        text-slate-700
      "
            >
              Delivery Process
            </span>

            <h2
              className="
        mt-5
        text-4xl
        font-bold
        text-slate-900
        md:text-5xl
      "
            >
              Our Delivery Process
            </h2>

            <p
              className="
        mx-auto
        mt-5
        max-w-3xl
        text-lg
        leading-relaxed
        text-slate-600
      "
            >
              A structured and transparent approach that ensures quality,
              predictability, and successful project execution from discovery
              through deployment.
            </p>
          </div>

          {/* Process Steps */}

          <div className="relative mt-16">
            {/* Desktop Connector */}

            <div
              className="
        absolute
        left-0
        right-0
        top-14
        hidden
        h-px
        bg-slate-200
        lg:block
      "
            />

            <div className="grid gap-6 lg:grid-cols-4">
              {service.process.map((step: string, index: number) => (
                <div
                  key={step}
                  className="
              group
              relative
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-8
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-200
              hover:shadow-lg
            "
                >
                  {/* Step Number */}

                  <div
                    className="
                relative
                z-10
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-blue-100
                bg-blue-50
                text-lg
                font-bold
                text-blue-600
                transition-all
                duration-300
                group-hover:border-blue-200
                group-hover:bg-blue-100
              "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Large Background Number */}

                  <div
                    className="
                absolute
                right-6
                top-6
                text-6xl
                font-black
                text-slate-100
                transition-colors
                duration-300
                group-hover:text-slate-200
              "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Content */}

                  <h3
                    className="
                mt-8
                text-xl
                font-bold
                text-slate-900
              "
                  >
                    {step}
                  </h3>

                  <p
                    className="
                mt-4
                leading-relaxed
                text-slate-600
              "
                  >
                    Strategic execution, stakeholder collaboration, and
                    continuous quality assurance throughout this phase of the
                    project lifecycle.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business Benefits */}

        <div className="mt-32">
          {/* Header */}

          <div className="text-center">
            <span
              className="
        inline-flex
        items-center
        rounded-full
        border
        border-slate-200
        bg-white
        px-5
        py-2
        text-sm
        font-medium
        text-slate-700
      "
            >
              Business Benefits
            </span>

            <h2
              className="
        mt-5
        text-4xl
        font-bold
        text-slate-900
        md:text-5xl
      "
            >
              Key Business Benefits
            </h2>

            <p
              className="
        mx-auto
        mt-5
        max-w-3xl
        text-lg
        leading-relaxed
        text-slate-600
      "
            >
              Strategic advantages that help organizations operate more
              efficiently, improve productivity, and achieve long-term digital
              growth.
            </p>
          </div>

          {/* Benefits Grid */}

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit: string, index: number) => (
              <motion.div
                key={benefit}
                whileHover={{
                  y: -3,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
            group
            rounded-[28px]
            border
            border-slate-200
            bg-white
            p-7
            shadow-sm
            transition-all
            duration-300
            hover:border-blue-200
            hover:shadow-lg
          "
              >
                {/* Icon */}

                <div
                  className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-emerald-50
              transition-colors
              duration-300
              group-hover:bg-emerald-100
            "
                >
                  <CheckCircle2
                    className="
                h-6
                w-6
                text-emerald-500
              "
                  />
                </div>

                {/* Number */}

                <span
                  className="
              mt-6
              block
              text-sm
              font-semibold
              text-blue-600
            "
                >
                  Benefit {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}

                <h3
                  className="
              mt-2
              text-xl
              font-bold
              text-slate-900
            "
                >
                  {benefit}
                </h3>

                {/* Description */}

                <p
                  className="
              mt-4
              leading-relaxed
              text-slate-600
            "
                >
                  Helping businesses improve performance, scalability,
                  operational efficiency, and sustainable growth through
                  technology-driven solutions.
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}

        <div className="mt-32">
          {/* Header */}

          <div className="text-center">
            <span
              className="
        inline-flex
        items-center
        rounded-full
        border
        border-slate-200
        bg-white
        px-5
        py-2
        text-sm
        font-medium
        text-slate-700
      "
            >
              FAQs
            </span>

            <h2
              className="
        mt-5
        text-4xl
        font-bold
        text-slate-900
        md:text-5xl
      "
            >
              Frequently Asked Questions
            </h2>

            <p
              className="
        mx-auto
        mt-5
        max-w-3xl
        text-lg
        leading-relaxed
        text-slate-600
      "
            >
              Everything you need to know about our services, development
              process, project timelines, engagement models, and ongoing
              support.
            </p>
          </div>

          {/* FAQ List */}

          <div className="mx-auto mt-14 max-w-4xl">
            <div className="space-y-4">
              {service.faqs.map(
                (
                  faq: {
                    question: string;
                    answer: string;
                  },
                  index: number,
                ) => (
                  <div
                    key={faq.question}
                    className={`
              overflow-hidden
              rounded-[24px]
              border
              bg-white
              shadow-sm
              transition-all
              duration-300
              ${
                openFaq === index
                  ? "border-blue-200 shadow-md"
                  : "border-slate-200 hover:border-slate-300"
              }
            `}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                      className="
                flex
                w-full
                items-center
                justify-between
                gap-5
                p-7
                text-left
              "
                    >
                      <div>
                        <span
                          className="
                    mb-2
                    block
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-blue-600
                  "
                        >
                          FAQ {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3
                          className="
                    text-lg
                    font-semibold
                    leading-relaxed
                    text-slate-900
                  "
                        >
                          {faq.question}
                        </h3>
                      </div>

                      <div
                        className={`
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  transition-all
                  duration-300
                  ${
                    openFaq === index
                      ? "bg-blue-50 text-blue-600"
                      : "bg-slate-100 text-slate-500"
                  }
                `}
                      >
                        <ChevronDown
                          className={`
                    h-5
                    w-5
                    transition-transform
                    duration-300
                    ${openFaq === index ? "rotate-180" : ""}
                  `}
                        />
                      </div>
                    </button>

                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                        >
                          <div
                            className="
                      border-t
                      border-slate-100
                      px-7
                      pb-7
                      pt-5
                    "
                          >
                            <p
                              className="
                        leading-relaxed
                        text-slate-600
                      "
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
