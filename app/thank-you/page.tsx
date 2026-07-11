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
    title: "We Review Your Enquiry",
    description:
      "Our team carefully reviews your project requirements and business goals.",
  },
  {
    icon: MessageSquare,
    title: "We Contact You",
    description:
      "One of our experts will reach out to discuss your project in detail.",
  },
  {
    icon: Clock3,
    title: "Project Planning",
    description:
      "We'll prepare the best solution, timeline and execution strategy.",
  },
];

export default function ThankYouPage() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">

      {/* Decorative Background */}

      <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[140px]" />

      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-10">

        <div className="mx-auto w-full max-w-4xl">

          {/* Success Card */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="rounded-[34px] border border-slate-200 bg-white/80 p-8 shadow-2xl backdrop-blur-xl lg:p-14"
          >

            {/* Success Icon */}

            <motion.div
              initial={{ scale: .6 }}
              animate={{ scale: 1 }}
              transition={{
                delay: .2,
                type: "spring",
                stiffness: 180,
              }}
              className="flex justify-center"
            >
              <div className="relative">

                <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl" />

                <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 shadow-xl">

                  <CheckCircle2 className="h-14 w-14 text-white" />

                </div>

              </div>
            </motion.div>

            {/* Heading */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .3 }}
              className="mt-10 text-center"
            >
              <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
                Submission Successful
              </span>

              <h1 className="mt-6 text-4xl font-black text-slate-900 md:text-6xl">
                Thank You!
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                We've successfully received your enquiry.
                Our experts will carefully review your
                requirements and contact you shortly to
                discuss the next steps.
              </p>
            </motion.div>

            {/* Divider */}

            <div className="my-14 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

            {/* What Happens Next */}

            <div>

              <h2 className="text-center text-3xl font-bold text-slate-900">
                What Happens Next?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
                Our process is quick, transparent and designed
                to help you move from idea to execution.
              </p>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">

                {steps.map((step, index) => {

                  const Icon = step.icon;

                  return (

                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: .25 + index * .15,
                      }}
                      className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl"
                    >

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-white shadow-lg">

                        <Icon className="h-8 w-8" />

                      </div>

                      <h3 className="mt-6 text-xl font-bold text-slate-900">

                        {step.title}

                      </h3>

                      <p className="mt-4 leading-7 text-slate-600">

                        {step.description}

                      </p>

                    </motion.div>

                  );

                })}
              </div>
                            {/* Contact Card */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-10"
              >
                <div className="text-center">

                  <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                    Need Immediate Assistance?
                  </span>

                  <h3 className="mt-5 text-3xl font-bold text-slate-900">
                    Our Team is Ready to Help
                  </h3>

                  <p className="mx-auto mt-4 max-w-2xl text-slate-600 leading-7">
                    If your project is urgent or you'd like to discuss your
                    requirements immediately, feel free to contact us using
                    the details below.
                  </p>

                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">

                  <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-sm">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">

                      <Mail className="h-7 w-7 text-cyan-600" />

                    </div>

                    <div>

                      <p className="text-sm font-medium text-slate-500">
                        Email Address
                      </p>

                      <p className="mt-1 text-lg font-semibold text-slate-900">
                        acesoftsolutionofficial@gmail.com
                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-sm">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">

                      <Phone className="h-7 w-7 text-emerald-600" />

                    </div>

                    <div>

                      <p className="text-sm font-medium text-slate-500">
                        Contact Number
                      </p>

                      <p className="mt-1 text-lg font-semibold text-slate-900">
                        +91 XXXXX XXXXX
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>

              {/* Buttons */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row"
              >

                <Link
                  href="/"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    px-8
                    py-4
                    font-semibold
                    text-slate-800
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-500
                    hover:shadow-lg
                  "
                >
                  Back to Home
                </Link>

                <Link
                  href="/services"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-cyan-500
                    to-emerald-500
                    px-8
                    py-4
                    font-semibold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-2xl
                  "
                >
                  Explore Services

                  <ArrowRight className="h-5 w-5" />

                </Link>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}