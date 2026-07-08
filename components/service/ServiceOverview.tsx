"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";

interface ServiceOverviewProps {
  service: {
    description: string;
    outcomes: string[];
  };
}

const features = [
  "Enterprise Ready",
  "Scalable Solutions",
  "Agile Delivery",
  "Dedicated Support",
];

export default function ServiceOverview({ service }: ServiceOverviewProps) {
  return (
    <section className="relative overflow-hidden py-10 lg:py-12">
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-slate-50/60 to-white" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6">
        {/* Heading */}

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
            <Sparkles size={15} />
            Service Overview
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Delivering Technology
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-slate-900 bg-clip-text text-transparent">
              That Drives Growth
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {service.description}
          </p>
        </motion.div>

        {/* Main Layout */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mt-14 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,.06)]"
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT */}

            <div className="flex flex-col border-b border-slate-200 p-8 md:p-10 lg:border-b-0 lg:border-r">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Our Approach
                </span>

                <h3 className="mt-4 text-3xl font-bold leading-tight text-slate-900">
                  Building Reliable &
                  <br />
                  Scalable Digital Solutions
                </h3>

                <p className="mt-6 leading-8 text-slate-600">
                  We partner with startups, SMEs, and enterprises to transform
                  innovative ideas into scalable digital products. Our team
                  combines strategic planning, modern technologies, agile
                  development methodologies, and engineering best practices to
                  build secure, high-performing software.
                </p>
              </div>

              {/* Divider */}

              <div className="my-8 h-px bg-slate-200" />

              {/* Feature Grid */}

              <div className="grid gap-4 sm:grid-cols-2">
                {features.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 transition-all duration-300 group-hover:bg-emerald-600">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 transition-all duration-300 group-hover:text-white" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900">{item}</h4>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          Secure, scalable and business-focused delivery.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Highlight */}
              <div className="mt-8 rounded-2xl border border-dark/10 bg-dark/90 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15">
                    <Sparkles className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                      Commitment
                    </p>

                    <h4 className="mt-1 text-lg font-semibold text-white">
                      Quality in Every Delivery
                    </h4>
                  </div>
                </div>

                <p className="mt-4 leading-7 text-white/80">
                  Every project is delivered with enterprise-grade quality
                  standards, modern architecture, and a long-term focus on
                  business success. From strategic planning and user experience
                  to development, testing, deployment, and ongoing optimization,
                  we ensure every solution is secure, scalable, high-performing,
                  and aligned with your business objectives to deliver
                  measurable value, operational efficiency, and sustainable
                  digital growth.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-10">
              {/* Header */}
              <div>
                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 backdrop-blur">
                  Business Outcomes
                </span>

                <h3 className="mt-5 text-3xl font-bold leading-tight text-white">
                  Results That
                  <span className="block text-cyan-300">Matter Most</span>
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  Every solution is designed to improve efficiency, customer
                  experience, scalability and measurable business growth.
                </p>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-white/10" />

              {/* Outcome Cards */}
              <div className="flex flex-1 flex-col justify-center gap-4">
                {service.outcomes.map((outcome, index) => (
                  <motion.div
                    key={outcome}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>

                      <div className="flex-1">
                        <p className="font-medium leading-7 text-white">
                          {outcome}
                        </p>

                        <div className="mt-3 h-px w-14 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-300 group-hover:w-24" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
