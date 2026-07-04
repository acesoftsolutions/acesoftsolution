"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  TrendingUp,
  Users,
  Rocket,
} from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";
import { portfolios } from "@/data/portfolios";



const AUTOPLAY_DELAY = 5000;

export default function PortfolioShowcase() {
  // Stable array reference — computed once, not re-created every render
  const featuredProjects = useRef(portfolios).current;
  
  // Autoplay plugin must be a stable ref, not useMemo, or Embla will
  // silently re-init the plugin on every render and cause micro-stutters.
  const autoplayRef = useRef(
    Autoplay({
      delay: AUTOPLAY_DELAY,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      duration: 22, // lower = snappier, higher = floatier. 22 feels smooth without dragging.
      dragFree: false,
      containScroll: false,
      skipSnaps: false,
    },
    [autoplayRef.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback((api: NonNullable<typeof emblaApi>) => {
    setSelectedIndex(api.selectedScrollSnap());
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    // Restart the autoplay progress bar animation on every slide change
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Keyboard navigation when the carousel is focused
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "ArrowLeft") scrollPrev();
      if (event.key === "ArrowRight") scrollNext();
    },
    [scrollPrev, scrollNext],
  );

  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-14">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* ====================== Header ====================== */}
        <AnimatedSection>
          <div className="mx-auto max-w-4xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-5 py-2 text-sm font-semibold text-sky-700 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              Our Featured Work
            </motion.span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl xl:text-6xl">
              Proven Projects.
              <span className="mt-2 block bg-gradient-to-r from-blue-700 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                Measurable Business Impact.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              Discover how we've helped businesses accelerate growth through
              enterprise software, AI automation, ERP solutions, cloud
              technologies, and end-to-end digital transformation initiatives.
            </p>
          </div>
        </AnimatedSection>

        {/* ================= Navigation ================= */}
        <div className="mt-14 mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Featured Case Studies
            </h3>
            <p className="mt-1 text-slate-500">
              Swipe or use the arrows to explore our latest work.
            </p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Previous project"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-cyan-400 hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5 text-slate-700" />
            </button>

            <button
              type="button"
              aria-label="Next project"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-teal-500 text-white shadow-lg transition-transform duration-200 hover:shadow-xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ================= Embla ================= */}
        <div
          className="overflow-hidden rounded-[36px] outline-none"
          ref={emblaRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured case studies"
          onKeyDown={handleKeyDown}
        >
          {/*
            IMPORTANT for smoothness:
            Embla owns the transform on this flex track. Do NOT put any
            framer-motion `animate`/`scale` transform on the slide wrapper —
            two competing transform animations on the same paint layer is
            what caused the stutter/tearing before. Per-slide emphasis is
            now done with a plain CSS opacity transition instead.
          */}
          <div className="flex touch-pan-y">
            {featuredProjects.map((project, index) => {
              const isActive = selectedIndex === index;
              return (
                <div
                  key={project._id}
                  className="min-w-0 flex-[0_0_100%] px-1"
                  aria-hidden={!isActive}
                >
                  <div
                    className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-opacity duration-500 ease-out"
                    style={{ opacity: isActive ? 1 : 0.55 }}
                  >
                    <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                      {/* ================= Left Image ================= */}
                      <div className="relative overflow-hidden">
                        <div className="group relative h-full min-h-[380px] lg:min-h-[520px]">
                          {/* Image */}
                          <img
                            src={project.image}
                            alt={project.title}
                            loading={index === 0 ? "eager" : "lazy"}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          />

                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent" />
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-transparent to-blue-900/10" />

                          {/* Top Right */}
                          <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/90 shadow-xl backdrop-blur transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
                            <ExternalLink className="h-5 w-5 text-slate-700" />
                          </div>

                          {/* Enterprise Card */}
                          <div className="absolute left-6 top-8 hidden rounded-2xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur lg:block">
                            <div className="flex items-center gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                                <Users className="h-6 w-6" />
                              </div>
                              <div>
                                <div className="font-bold text-slate-900">
                                  Enterprise
                                </div>
                                <div className="text-sm text-slate-500">
                                  Production Ready
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Growth Card */}
                          <div className="absolute bottom-8 right-6 hidden rounded-2xl border border-white/20 bg-white/90 p-5 shadow-xl backdrop-blur lg:block">
                            <div className="flex items-center gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white">
                                <Rocket className="h-6 w-6" />
                              </div>
                              <div>
                                <div className="font-bold text-slate-900">
                                  High Growth
                                </div>
                                <div className="text-sm text-slate-500">
                                  Business Impact
                                </div>
                              </div>
                            </div>
                          </div>

                 

                          {/* Bottom Info */}
                          <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
                            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                              {project.category}
                            </span>
                         
                          </div>
                        </div>
                      </div>

                      {/* ================= Right Content ================= */}
                      <div className="relative flex flex-col justify-center p-8 lg:p-12">
                        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

                        <div className="relative">
                          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                            {project.category}
                          </span>

                          <h3 className="mt-6 text-3xl font-bold leading-tight text-slate-900 xl:text-4xl">
                            {project.title}
                          </h3>

                          <p className="mt-6 text-lg leading-8 text-slate-600">
                            {project.shortDescription}
                          </p>

                          <div className="mt-10">
                            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                              Technology Stack
                            </div>
                            <div className="flex flex-wrap gap-3">
                              {project.technologies?.slice(0, 6).map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-10">
                            <Link
                              href={`/portfolio/${project.slug}`}
                              className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-700 via-cyan-500 to-teal-500 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                              View Case Study
                              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= Slider Footer ================= */}
        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Slide Counter */}
          <div className="flex items-center gap-3">
            <div className="text-3xl font-bold text-slate-900 tabular-nums">
              {(selectedIndex + 1).toString().padStart(2, "0")}
            </div>
            <div className="h-10 w-px bg-slate-300" />
            <div>
              <div className="text-sm font-semibold text-slate-900">
                Featured Projects
              </div>
              <div className="text-sm text-slate-500">
                {featuredProjects.length} Case Studies
              </div>
            </div>
          </div>

          {/* Progress Dots with autoplay progress fill */}
          <div className="flex items-center justify-center gap-3">
            {featuredProjects.map((_, index) => {
              const isActive = selectedIndex === index;
              return (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to project ${index + 1}`}
                  aria-current={isActive}
                  onClick={() => scrollTo(index)}
                  className="group relative h-3 overflow-hidden rounded-full bg-slate-200 transition-all duration-500 ease-out"
                  style={{ width: isActive ? 42 : 12 }}
                >
                  {isActive ? (
                    <motion.span
                      key={progressKey}
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-teal-500"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
                    />
                  ) : (
                    <span className="absolute inset-0 rounded-full bg-slate-300 transition-colors group-hover:bg-slate-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              aria-label="Previous project"
              onClick={scrollPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md active:scale-95"
            >
              <ChevronLeft className="h-5 w-5 text-slate-700" />
            </button>

            <button
              type="button"
              aria-label="Next project"
              onClick={scrollNext}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-teal-500 text-white shadow-lg active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ================= Bottom Accent ================= */}
        <div className="pointer-events-none mt-14 flex justify-center">
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        </div>
      </div>
    </section>
  );
}