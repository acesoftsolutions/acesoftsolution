"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Quote,
  Star,
  Users,
  TrendingUp,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

import AnimatedSection from "@/components/shared/AnimatedSection";
import { testimonials } from "@/data/testimonials";

const AUTOPLAY_DELAY = 5500;

// Rotating gradient palette for the symbolic (non-photo) avatars
const AVATAR_GRADIENTS = [
  "from-blue-600 to-cyan-500",
  "from-violet-600 to-fuchsia-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-400",
  "from-rose-500 to-pink-500",
  "from-indigo-600 to-blue-500",
];

function getInitials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

interface InitialsAvatarProps {
  name: string;
  index: number;
  size?: "sm" | "md" | "lg";
  active?: boolean;
}

function InitialsAvatar({
  name,
  index,
  size = "md",
  active = true,
}: InitialsAvatarProps) {
  const gradient = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];

  const sizeClasses =
    size === "lg"
      ? "h-16 w-16 text-xl"
      : size === "sm"
        ? "h-10 w-10 text-sm"
        : "h-12 w-12 text-base";

  return (
    <div
      className={`flex ${sizeClasses} shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradient} font-bold text-white shadow-md ring-4 ring-white transition-all duration-300 ${
        active ? "opacity-100 grayscale-0" : "opacity-50 grayscale"
      }`}
    >
      {getInitials(name)}
    </div>
  );
}

export default function TestimonialsSection() {
  // Stable plugin instance — a ref (not useMemo) so Embla never silently
  // re-inits the plugin mid-scroll, which is what causes carousel stutter.
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
      align: "start",
      duration: 22,
    },
    [autoplayRef.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );
  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
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

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-12 lg:py-14">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* ====================== Left: heading & copy | Right: sliding testimonial ====================== */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* -------- Left column (static) -------- */}
          <AnimatedSection>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                Client Testimonials
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-5xl xl:text-6xl">
                Trusted By
                <span className="mt-1 block bg-gradient-to-r from-blue-700 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  Growing Businesses
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
                Empowering startups, SMEs, and enterprises with scalable digital
                solutions, expert development, and strategies that consistently
                drive measurable, real-world growth.
              </p>

              {/* Rating row */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">4.9/5</h3>
                  <p className="text-sm text-slate-500">
                    Rated by verified clients
                  </p>
                </div>
              </div>

              {/* Compact stat chips */}
              <div className="mt-10 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-semibold text-slate-800">
                    150+ Clients
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-semibold text-slate-800">
                    98% Retention
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <Award className="h-5 w-5 text-cyan-600" />
                  <span className="text-sm font-semibold text-slate-800">
                    250+ Projects
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* -------- Right column (sliding testimonial, one at a time) -------- */}
          <AnimatedSection delay={0.1}>
            <div className="relative">
              <div
                className="overflow-hidden outline-none rounded-[40px]"
                ref={emblaRef}
                tabIndex={0}
                role="region"
                aria-roledescription="carousel"
                aria-label="Client testimonials"
              >
                <div className="flex touch-pan-y">
                  {testimonials.map((item, index) => (
                    <div key={item._id} className="min-w-0 flex-[0_0_100%]">
                      <div className="relative overflow-hidden rounded-[40px] bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10 lg:p-12">
                        <Quote className="absolute -right-4 -top-4 h-32 w-32 text-blue-50" />

                        <Quote className="relative h-12 w-12 text-blue-600" />

                        <p className="relative mt-6 min-h-[9rem] text-lg leading-relaxed text-slate-700 md:text-xl">
                          "{item.content}"
                        </p>

                        <div className="relative mt-6 flex gap-1">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>

                        <div className="relative mt-8 flex items-center gap-4">
                          <InitialsAvatar
                            name={item.name}
                            index={index}
                            size="lg"
                          />
                          <div>
                            <h4 className="text-lg font-bold text-slate-900">
                              {item.name}
                            </h4>
                            <p className="text-slate-500">{item.position}</p>
                            <p className="font-medium text-blue-700">
                              {item.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Controls: arrows + progress dots */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => {
                    const isActive = selectedIndex === index;
                    return (
                      <button
                        key={index}
                        type="button"
                        aria-label={`Go to testimonial ${index + 1}`}
                        aria-current={isActive}
                        onClick={() => scrollTo(index)}
                        className="relative h-2.5 overflow-hidden rounded-full bg-slate-200 transition-all duration-500 ease-out"
                        style={{ width: isActive ? 32 : 10 }}
                      >
                        {isActive && (
                          <motion.span
                            key={progressKey}
                            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-teal-500"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{
                              duration: AUTOPLAY_DELAY / 1000,
                              ease: "linear",
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={scrollPrev}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-cyan-400 hover:shadow-md active:scale-95"
                  >
                    <ChevronLeft className="h-4 w-4 text-slate-700" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={scrollNext}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-700 via-cyan-500 to-teal-500 text-white shadow-md transition-transform duration-200 hover:shadow-lg active:scale-95"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
