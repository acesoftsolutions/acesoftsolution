"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    name: "Michael Anderson",
    position: "CEO",
    company: "GrowthTech Solutions",
    review:
      "Ace Soft Solution transformed our business processes with a powerful enterprise platform. Their team delivered exceptional quality, communication, and technical expertise throughout the project.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },

  {
    name: "Sarah Johnson",
    position: "Founder",
    company: "HealthConnect",
    review:
      "The team exceeded expectations by delivering a modern healthcare platform that improved efficiency and user engagement significantly.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  },

  {
    name: "David Wilson",
    position: "CTO",
    company: "CommerceHub",
    review:
      "Their technical expertise and attention to detail helped us launch a scalable marketplace that continues to grow rapidly.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-12 lg:py-14">
      {/* Background Effects */}{" "}
      <div className="absolute inset-0 overflow-hidden">
        {" "}
        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[180px]" />
       
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
          inline-flex
          rounded-full
          border
          border-blue-100
          bg-blue-50
          px-5
          py-2
          text-sm
          font-semibold
          text-blue-600
        "
          >
            Client Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Trusted By
            <span
              className="
            block
            bg-gradient-to-r
            from-blue-600
            via-cyan-500
            to-violet-500
            bg-clip-text
            text-transparent
          "
            >
              Growing Businesses
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Hear what our clients say about working with Ace Soft Solution and
            the impact our digital solutions have created for their
            organizations.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
        relative
        mt-16
        overflow-hidden
        rounded-[40px]
        border
        border-slate-200
        bg-white/80
        p-10
        backdrop-blur-xl
        shadow-[0_25px_80px_rgba(15,23,42,0.08)]
        lg:p-14
      "
        >
          <Quote className="h-16 w-16 text-blue-100" />

          <div className="mt-6 flex gap-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p
            className="
          mt-8
          max-w-5xl
          text-2xl
          font-medium
          leading-relaxed
          text-slate-800
          lg:text-3xl
        "
          >
            "{testimonials[0].review}"
          </p>

          <div className="mt-10 flex items-center gap-4">
            <img
              src={testimonials[0].image}
              alt={testimonials[0].name}
              className="h-16 w-16 rounded-full object-cover"
            />

            <div>
              <h4 className="font-bold text-slate-900">
                {testimonials[0].name}
              </h4>

              <p className="text-slate-600">
                {testimonials[0].position} · {testimonials[0].company}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Small Testimonials */}
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {testimonials.slice(1).map((item, index) => (
            <motion.div
              key={item.name}
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
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
            rounded-[32px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-sm
            transition-all
            duration-300
            hover:shadow-xl
          "
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-6 leading-relaxed text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>

                  <p className="text-sm text-slate-500">
                    {item.position} · {item.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        {/* <div className="mt-20">
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-400">
            Trusted By Innovative Companies
          </p>

          <div
            className="
          mt-8
          grid
          grid-cols-2
          gap-6
          md:grid-cols-5
        "
          >
            {[
              "TECHCORP",
              "HEALTHCONNECT",
              "FINEDGE",
              "COMMERCEHUB",
              "EDUTECH",
            ].map((logo) => (
              <div
                key={logo}
                className="
              flex
              h-20
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-200
              bg-white
              font-bold
              text-slate-400
            "
              >
                {logo}
              </div>
            ))}
          </div>
        </div> */}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            className="
          inline-flex
          items-center
          gap-2
          rounded-2xl
          bg-slate-950
          px-8
          py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:scale-105
        "
          >
            Become Our Next Success Story
            <ArrowUpRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
