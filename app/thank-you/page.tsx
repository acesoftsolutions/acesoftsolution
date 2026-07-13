"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  Clock3,
  Search,
  MessageSquare,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Review Your Enquiry",
    description: "Our team carefully analyzes your project requirements.",
  },
  {
    icon: MessageSquare,
    title: "Expert Consultation",
    description: "We’ll contact you to discuss your vision in detail.",
  },
  {
    icon: Clock3,
    title: "Project Strategy",
    description: "Receive a clear plan, timeline & proposal.",
  },
];

export default function ThankYouPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white min-h-screen">

      <section className="relative mx-auto min-h-screen w-full max-w-[1280px] px-5 py-10 lg:py-10 lg:px-10">

        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
          >

            {/* ==================== LEFT SIDE ==================== */}
            <div className="bg-gradient-to-br from-cyan-600 to-emerald-600 p-10 lg:p-16 flex flex-col justify-center relative">

              <div className="flex justify-center lg:justify-start">
                <motion.div
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex h-28 w-28 items-center justify-center rounded-full bg-white/20 backdrop-blur-xl border border-white/30"
                >
                  <CheckCircle2 className="h-16 w-16 text-white" />
                </motion.div>
              </div>

              <div className="mt-10 text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none">
                  Thank You!
                </h1>
                <p className="mt-6 text-xl text-white/90 leading-relaxed">
                  Your enquiry has been successfully received. 
                  Our team is already reviewing your project details.
                </p>
              </div>

              <div className="mt-auto pt-12 hidden lg:block">
                <p className="text-white/70 text-sm">
                  We usually respond within <span className="font-semibold text-white">24 business hours</span>
                </p>
              </div>
            </div>

            {/* ==================== RIGHT SIDE ==================== */}
            <div className="p-8 lg:p-14 flex flex-col">

              <div className="mb-10">
                <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
                  SUBMISSION SUCCESSFUL
                </span>
              </div>

              {/* What Happens Next */}
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                What Happens Next?
              </h2>

              <div className="space-y-8 flex-1">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 }}
                      className="flex gap-5 group"
                    >
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-white shadow-md group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-10 border-t border-slate-200">
                <p className="text-slate-500 mb-4">Need faster response?</p>
                
                <div className="space-y-4">
                  <a href="mailto:acesoftsolutionofficial@gmail.com" className="flex items-center gap-3 text-slate-700 hover:text-cyan-600 transition-colors">
                    <Mail className="h-5 w-5" />
                    <span>info@acedsoftsolution.com</span>
                  </a>
                  <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-3 text-slate-700 hover:text-emerald-600 transition-colors">
                    <Phone className="h-5 w-5" />
                    <span>+91 76963 73145</span>
                  </a>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/"
                  className="flex-1 text-center py-4 rounded-2xl border border-slate-300 font-medium text-slate-700 hover:bg-slate-50 transition-all"
                >
                  Back to Home
                </Link>
                <Link
                  href="/services"
                  className="flex-1 text-center py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  Explore Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

          </motion.div>
        </div>
      </section>
    </main>
  );
}