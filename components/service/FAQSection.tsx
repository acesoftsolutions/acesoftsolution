"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  MessageSquareMore,
  Sparkles,
} from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  service: {
    faqs: FAQ[];
  };
}

export default function ServiceFAQ({ service }: ServiceFAQProps) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50/40 py-10 lg:py-12">
      {/* Background */}

      <div className="absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute -left-32 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-100/35 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-cyan-100/35 blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#2563eb 1px,transparent 1px),
            linear-gradient(to bottom,#2563eb 1px,transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid gap-12 lg:grid-cols-[420px_1fr]">
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
              <Sparkles className="h-4 w-4" />
              Frequently Asked Questions
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Answers To
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-slate-900 bg-clip-text text-transparent">
                Common Questions
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Everything you need to know about our services, development
              process, pricing, timelines, communication and ongoing support.
            </p>

            {/* Support Card */}

            <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50">
                <MessageSquareMore className="h-8 w-8 text-blue-600" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Need Personal Assistance?
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Our experts are available to discuss your project, recommend the
                right technology stack and answer any business or technical
                questions.
              </p>

              <button className="mt-8 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700">
                Talk To Our Experts
              </button>
            </div>
          </motion.div>

          {/* FAQ List */}

          <div className="space-y-5">
            {service.faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className={`group overflow-hidden rounded-[28px] border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-blue-200 shadow-[0_20px_60px_rgba(37,99,235,.10)]"
                      : "border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-lg"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-start gap-5 p-7 text-left"
                  >
                    {/* Number */}

                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-lg font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-gradient-to-br from-blue-50 to-cyan-50 text-blue-600"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Content */}

                    <div className="min-w-0 flex-1">
                      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">
                        Question
                      </span>

                      <h3 className="mt-3 text-xl font-bold leading-8 text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Toggle */}

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600"
                      }`}
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
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
                          duration: 0.28,
                        }}
                      >
                        <div className="border-t border-slate-100 bg-gradient-to-b from-slate-50 to-white px-7 py-7">
                          <div className="flex gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50">
                              <HelpCircle className="h-6 w-6 text-emerald-600" />
                            </div>

                            <div>
                              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600">
                                Answer
                              </span>

                              <p className="mt-3 leading-8 text-slate-600">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
