"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Info } from "lucide-react";

import { useToast } from "@/hooks/use-toast";

// ======================================================
// DATA LAYER TYPE DECLARATION
// ======================================================
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter your phone number"),
  company: z.string().min(1, "Please enter your company name or website"),
  message: z.string().min(10, "Please describe your project"),

  needsNDA: z.enum(["yes", "no"], {
    required_error: "Please let us know if you need an NDA",
  }),

  marketingConsent: z.boolean().optional(),

  notRobot: z.boolean().refine((val) => val === true, {
    message: "Please confirm you are not a robot",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // ======================================================
  // FORM SUBMIT
  // ======================================================
  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone,
            company: data.company,
            message: data.message,
            needsNDA: data.needsNDA,
            marketingConsent: data.marketingConsent ?? false,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit enquiry.");
      }

      // ==================================================
      // DATA LAYER - SUCCESSFUL CONTACT ENQUIRY
      // ==================================================
      if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({
          event: "generate_lead",
          form_name: "contact_form",
          form_location: "contact_page",
          page_path: window.location.pathname,
          needs_nda: data.needsNDA,
          marketing_consent: data.marketingConsent ?? false,
        });
      }

      // ==================================================
      // SUCCESS MESSAGE
      // ==================================================
      toast({
        title: "Message Sent Successfully 🎉",
        description: "Thank you! We have received your enquiry.",
      });

      reset();

      // Redirect after successful enquiry
      setTimeout(() => {
        router.push("/thank-you");
      }, 1200);
    } catch (error) {
      console.error(error);

      toast({
        variant: "destructive",
        title: "Submission Failed",
        description:
          error instanceof Error ? error.message : "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white pt-12 pb-14 lg:pt-14 lg:pb-12">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            HEADER
        ================================================== */}
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold leading-none text-slate-900 md:text-7xl">
            You have an Idea.{" "}
            <span className="text-[#12C7B5]">
              Let&apos;s Talk.
            </span>
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-600">
            Share a few details and we will start with a short conversation to
            understand your goals, timelines, and expectations before any next
            steps.
          </p>
        </div>

        {/* ==================================================
            CONTACT FORM
        ================================================== */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-20"
        >
          <div className="grid gap-x-12 gap-y-12 lg:grid-cols-2">

            {/* ================= NAME ================= */}
            <div>
              <label className="mb-3 block text-lg font-medium text-slate-900">
                What&apos;s Your Name?{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                {...register("name")}
                type="text"
                className="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-lg outline-none transition-colors focus:border-emerald-500"
              />

              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* ================= EMAIL ================= */}
            <div>
              <label className="mb-3 block text-lg font-medium text-slate-900">
                Email{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                {...register("email")}
                type="email"
                className="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-lg outline-none transition-colors focus:border-emerald-500"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* ================= PHONE ================= */}
            <div>
              <label className="mb-3 block text-lg font-medium text-slate-900">
                Phone Number{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                {...register("phone")}
                type="tel"
                className="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-lg outline-none transition-colors focus:border-emerald-500"
              />

              {errors.phone && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* ================= COMPANY ================= */}
            <div>
              <label className="mb-3 block text-lg font-medium text-slate-900">
                Company Name Or Website{" "}
                <span className="text-red-500">*</span>
              </label>

              <input
                {...register("company")}
                type="text"
                className="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-lg outline-none transition-colors focus:border-emerald-500"
              />

              {errors.company && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.company.message}
                </p>
              )}
            </div>

            {/* ================= PROJECT BRIEF ================= */}
            <div>
              <label className="mb-3 block text-lg font-medium text-slate-900">
                Project Brief{" "}
                <span className="text-red-500">*</span>
              </label>

              <textarea
                {...register("message")}
                rows={1}
                className="w-full resize-none border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-lg outline-none transition-colors focus:border-emerald-500"
              />

              {errors.message && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>
                        {/* ================= NDA + MARKETING ================= */}
            <div className="flex flex-col gap-8">

              {/* NDA */}
              <div>
                <label className="mb-3 block text-lg font-medium text-slate-900">
                  Need a copy of our NDA?
                </label>

                <div className="flex items-center gap-8">

                  <label className="flex cursor-pointer items-center gap-2 text-lg text-slate-900">
                    <input
                      {...register("needsNDA")}
                      type="radio"
                      value="yes"
                      className="h-5 w-5 accent-emerald-500"
                    />
                    Yes
                  </label>

                  <label className="flex cursor-pointer items-center gap-2 text-lg text-slate-900">
                    <input
                      {...register("needsNDA")}
                      type="radio"
                      value="no"
                      className="h-5 w-5 accent-emerald-500"
                    />
                    No
                  </label>

                </div>

                {errors.needsNDA && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.needsNDA.message}
                  </p>
                )}
              </div>

              {/* Marketing Consent */}
              <label className="flex cursor-pointer items-start gap-2 text-base text-slate-700">

                <input
                  {...register("marketingConsent")}
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-emerald-500"
                />

                I agree to receive marketing updates from Ace Soft Solution.

                <Info className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />

              </label>

            </div>

          </div>

          {/* ==================================================
              ROBOT VERIFICATION + SUBMIT
          ================================================== */}

          <div className="mt-16 flex flex-wrap items-center gap-8">

            {/* Robot Verification */}
            <label className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 px-7 py-5 transition-all hover:border-emerald-200 hover:bg-white">

              <input
                {...register("notRobot")}
                type="checkbox"
                className="h-6 w-6 cursor-pointer accent-emerald-600 ring-1 ring-slate-300"
              />

              <div>
                <span className="text-[17px] font-medium text-slate-700">
                  I am not a robot
                </span>

                <p className="mt-0.5 text-sm text-slate-500">
                  Help us keep our form secure
                </p>
              </div>

            </label>

            {/* ================= SUBMIT BUTTON ================= */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                relative
                rounded-none
                border-2
                border-slate-900
                bg-white
                px-12
                py-7
                text-lg
                font-semibold
                text-slate-900
                shadow-[8px_8px_0px_0px_#111827]
                transition-all
                duration-300
                hover:translate-x-1
                hover:translate-y-1
                hover:shadow-none
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >

              {isSubmitting ? (
                <div className="flex items-center gap-3">

                  <svg
                    className="h-5 w-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      opacity=".25"
                    />

                    <path
                      d="M22 12a10 10 0 0 1-10 10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                  </svg>

                  Sending...

                </div>
              ) : (
                "Submit Enquiry"
              )}

            </button>

          </div>

          {/* Robot Error */}
          {errors.notRobot && (
            <p className="mt-2 text-sm text-red-500">
              {errors.notRobot.message}
            </p>
          )}

        </form>

      </div>
    </main>
  );
}