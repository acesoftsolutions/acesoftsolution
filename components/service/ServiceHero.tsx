"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { useEffect, useRef } from "react";

interface ServiceHeroProps {
  service: any;
}

// Animated Counter Component
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, end, {
      duration: 2.2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [end]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const Icon = service.icon;

  return (
    <section className="relative overflow-hidden bg-[#020617] py-10 md:py-12 lg:py-14">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
          

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.04em] text-white">
              {service.heroTitle}
            </h1>

            <p className="mt-8 max-w-[620px] text-lg md:text-xl text-slate-400 leading-relaxed">
              {service.heroDescription}
            </p>

            {/* Benefits */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Custom-Built Solutions",
                "Scalable Architecture",
                "Dedicated Development Team",
                "Long-Term Technical Support",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="rounded-full bg-cyan-500/10 p-1">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-9 py-4 font-semibold text-slate-950 hover:bg-white/90 transition-all hover:-translate-y-0.5 text-base sm:text-lg"
              >
                Start Your Project
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all text-base sm:text-lg"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] mx-auto lg:mx-0">
              {/* Growth Badge */}
              <div className="absolute -top-6 -right-4 z-30 rounded-3xl border border-white/10 bg-[#0B1120]/95 px-6 py-4 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-emerald-400" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">Growth</p>
                    <p className="text-3xl font-bold text-white">+127%</p>
                  </div>
                </div>
              </div>

              {/* Main Device Frame */}
              <div
                className={`relative rounded-[42px] p-[3px] shadow-2xl bg-gradient-to-br ${service.gradient || "from-cyan-500 via-blue-600 to-purple-600"}`}
              >
                <div className="rounded-[38px] bg-[#0A0F1C] overflow-hidden">
                  {/* Browser Header */}
                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs text-slate-500">Enterprise Platform</span>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 md:p-10 pt-10 md:pt-12 pb-12 md:pb-14 text-center">
                    {/* Icon Container */}
                    {/* {Icon && (
                      <div className="mx-auto mb-10 flex h-28 w-28 md:h-32 md:w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-white to-slate-100 shadow-xl ring-1 ring-white/20">
                        <Icon className="h-14 w-14 md:h-16 md:w-16 text-slate-900" />
                      </div>
                    )} */}

                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-slate-400 max-w-[260px] mx-auto text-sm md:text-base">
                      Secure, scalable, and future-ready digital solutions built for modern businesses.
                    </p>

                    {/* Technologies */}
                    <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-2">
                      {service.technologies?.slice(0, 4).map((tech: string) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Progress */}
                    <div className="mt-10 md:mt-12">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Success Rate</span>
                        <span className="font-semibold text-white">96%</span>
                      </div>
                      <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[96%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stats with Counter Animation */}
                  <div className="grid grid-cols-3 border-t border-white/10">
                    {[
                      { end: 250, label: "Projects" },
                      { end: 150, label: "Clients" },
                      { end: 99, suffix: "%", label: "Uptime" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="py-6 md:py-8 text-center border-r border-white/10 last:border-0"
                      >
                        <div className="text-2xl md:text-3xl font-bold text-white">
                          <Counter end={item.end} suffix={item.suffix || "+"} />
                        </div>
                        <div className="text-xs md:text-sm text-slate-500 mt-1">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}