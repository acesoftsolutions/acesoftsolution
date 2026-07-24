"use client";

import { useEffect } from "react";
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

// ======================================================
// DATA LAYER TYPE
// ======================================================

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

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

  // ======================================================
  // DATA LAYER - SUCCESSFUL LEAD
  // ======================================================

  useEffect(() => {
    const submissionData = sessionStorage.getItem(
      "contact_submission_success"
    );

    // Don't fire lead if user directly visits /thank-you
    if (!submissionData) {
      return;
    }

    try {
      const data = JSON.parse(submissionData);

      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: "generate_lead",

        form_name: data.form_name || "contact_form",

        form_location:
          data.form_location || "contact_page",

        page_path: window.location.pathname,

        needs_nda: data.needs_nda,

        marketing_consent:
          data.marketing_consent ?? false,
      });

      // IMPORTANT:
      // Remove flag so refresh doesn't count another lead
      sessionStorage.removeItem(
        "contact_submission_success"
      );

      console.log(
        "Data Layer: generate_lead event fired"
      );

    } catch (error) {
      console.error(
        "Failed to process contact tracking data:",
        error
      );

      sessionStorage.removeItem(
        "contact_submission_success"
      );
    }
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-white">

      <section className="relative mx-auto min-h-screen w-full max-w-[1280px] px-5 py-10 lg:px-10 lg:py-10">

        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid gap-10 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl lg:grid-cols-2 lg:gap-16"
          >

            {/* ==================== LEFT SIDE ==================== */}

            <div className="relative flex flex-col justify-center bg-gradient-to-br from-cyan-600 to-emerald-600 p-10 lg:p-16">

              <div className="flex justify-center lg:justify-start">

                <motion.div
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="flex h-28 w-28 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-xl"
                >
                  <CheckCircle2 className="h-16 w-16 text-white" />
                </motion.div>

              </div>

              <div className="mt-10 text-center lg:text-left">

                <h1 className="text-5xl font-bold leading-none tracking-tight text-white lg:text-6xl">
                  Thank You!
                </h1>

                <p className="mt-6 text-xl leading-relaxed text-white/90">
                  Your enquiry has been successfully received.
                  Our team is already reviewing your project details.
                </p>

              </div>

              <div className="mt-auto hidden pt-12 lg:block">

                <p className="text-sm text-white/70">
                  We usually respond within{" "}
                  <span className="font-semibold text-white">
                    24 business hours
                  </span>
                </p>

              </div>

            </div>

            {/* ==================== RIGHT SIDE ==================== */}

            <div className="flex flex-col p-8 lg:p-14">

              <div className="mb-10">

                <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
                  SUBMISSION SUCCESSFUL
                </span>

              </div>

              {/* What Happens Next */}

              <h2 className="mb-8 text-3xl font-bold text-slate-900">
                What Happens Next?
              </h2>

              <div className="flex-1 space-y-8">

                {steps.map((step, index) => {

                  const Icon = step.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: -20,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.15,
                      }}
                      className="group flex gap-5"
                    >

                      <div className="flex-shrink-0">

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-white shadow-md transition-transform group-hover:scale-110">

                          <Icon className="h-6 w-6" />

                        </div>

                      </div>

                      <div>

                        <h3 className="text-xl font-semibold text-slate-900">
                          {step.title}
                        </h3>

                        <p className="mt-2 leading-relaxed text-slate-600">
                          {step.description}
                        </p>

                      </div>

                    </motion.div>
                  );
                })}

              </div>

              {/* ==================== CONTACT INFO ==================== */}

              <div className="mt-12 border-t border-slate-200 pt-10">

                <p className="mb-4 text-slate-500">
                  Need faster response?
                </p>

                <div className="space-y-4">

                  <a
                    href="mailto:info@acedsoftsolution.com"
                    className="flex items-center gap-3 text-slate-700 transition-colors hover:text-cyan-600"
                  >
                    <Mail className="h-5 w-5" />

                    <span>
                      info@acedsoftsolution.com
                    </span>
                  </a>

                  <a
                    href="tel:+917696373145"
                    className="flex items-center gap-3 text-slate-700 transition-colors hover:text-emerald-600"
                  >
                    <Phone className="h-5 w-5" />

                    <span>
                      +91 76963 73145
                    </span>
                  </a>

                </div>

              </div>

              {/* ==================== BUTTONS ==================== */}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <Link
                  href="/"
                  className="flex-1 rounded-2xl border border-slate-300 py-4 text-center font-medium text-slate-700 transition-all hover:bg-slate-50"
                >
                  Back to Home
                </Link>

                <Link
                  href="/services"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-emerald-500 py-4 font-semibold text-white transition-all hover:shadow-lg"
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