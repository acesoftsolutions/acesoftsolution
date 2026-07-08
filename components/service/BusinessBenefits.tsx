"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Gauge,
  Users,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface BusinessBenefitsProps {
  service: {
    benefits: string[];
  };
}

const benefitIcons = [
  TrendingUp,
  Gauge,
  ShieldCheck,
  Users,
  BarChart3,
  CheckCircle2,
];

const benefitDescriptions = [
  "Accelerate business growth with modern digital solutions that improve operational efficiency.",
  "Automate workflows and increase productivity through intelligent digital transformation.",
  "Strengthen security, reliability and long-term scalability using enterprise architecture.",
  "Create exceptional customer experiences through intuitive digital products.",
  "Make faster decisions using business intelligence and real-time insights.",
  "Build a future-ready technology foundation that supports continuous innovation.",
];

export default function BusinessBenefits({ service }: BusinessBenefitsProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-10 lg:py-12">
      {/* Blueprint Background */}

      <div
        className="absolute inset-0 -z-20 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#2563eb 1px,transparent 1px),
            linear-gradient(to bottom,#2563eb 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-100/40 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-cyan-100/40 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6">
        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
            <Sparkles className="h-4 w-4" />
            Business Benefits
          </div>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Technology That Creates
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-slate-900 bg-clip-text text-transparent">
              Measurable Business Value
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Every solution we build is designed to improve efficiency,
            strengthen operations, enhance customer experiences and deliver
            sustainable long-term business growth.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {service.benefits.map((benefit, index) => {
            const Icon = benefitIcons[index % benefitIcons.length];

            const description =
              benefitDescriptions[index] ??
              "Helping organizations improve productivity and long-term growth.";
            return (
              <motion.div
                key={benefit}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/90 p-6 backdrop-blur-sm transition-all duration-500 hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(37,99,235,.10)]"
              >
                {/* Top Accent */}

                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 transition-all duration-500 group-hover:w-full" />

                {/* Number */}

                <span className="absolute right-5 top-5 text-5xl font-black text-slate-100 transition-all duration-300 group-hover:text-blue-100">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}

                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:from-blue-600 group-hover:to-cyan-500">
                  <Icon className="h-7 w-7 text-blue-600 transition-all duration-500 group-hover:text-white" />
                </div>

                {/* Content */}

                <div className="relative z-10 mt-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                    Benefit {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 text-xl font-bold leading-snug text-slate-900">
                    {benefit}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">{description}</p>
                </div>

                {/* Bottom Glow */}

                <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-blue-50/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Information */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          viewport={{
            once: true,
          }}
          className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white"
        >
          <div className="grid gap-6 lg:grid-cols-[1.3fr_.7fr]">
            {/* Left */}

            <div className="p-8 md:p-10 lg:border-r lg:border-slate-200">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">
                Business Impact
              </span>

              <h3 className="mt-4 text-3xl font-bold leading-tight text-slate-900">
                Delivering Measurable Results
                <span className="block">Through Modern Technology</span>
              </h3>

              <p className="mt-6 max-w-3xl leading-8 text-slate-600">
                Every solution is engineered to improve operational efficiency,
                enhance customer experiences, strengthen security, and provide a
                scalable foundation for long-term business growth. Our focus is
                on delivering technology that creates real and measurable
                business value.
              </p>
            </div>

            {/* Right */}

            <div className="grid grid-cols-2 border-t border-slate-200 lg:border-t-0">
              {[
                {
                  value: "Growth",
                  label: "Performance",
                },
                {
                  value: "Secure",
                  label: "Architecture",
                },
                {
                  value: "Scalable",
                  label: "Solutions",
                },
                {
                  value: "Reliable",
                  label: "Delivery",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.06,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`flex flex-col justify-center p-6 transition-all duration-300 hover:bg-slate-50 ${
                    index < 2 ? "border-b border-slate-200" : ""
                  } ${index % 2 === 0 ? "border-r border-slate-200" : ""}`}
                >
                  <h4 className="text-xl font-bold text-slate-900">
                    {item.value}
                  </h4>

                  <p className="mt-2 text-sm text-slate-600">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
