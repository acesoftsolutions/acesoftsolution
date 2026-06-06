'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-medium uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Don&apos;t just take our word for it. Here&apos;s what our valued clients
            have to say about working with us.
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 md:p-12 text-center"
            >
              <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />

              <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-4 mb-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-primary"
                />
                <div className="text-left">
                  <p className="font-poppins font-semibold text-white">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted text-sm">
                    {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>

              <div className="flex justify-center gap-1">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-accent transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-accent w-8'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:text-accent transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
