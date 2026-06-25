
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(8, 'Please enter your phone number'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Please describe your project'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);

      console.log(data);

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      toast({
        title: 'Message Sent Successfully',
        description:
          'Our team will contact you shortly.',
      });

      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-5xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600">
            Contact Us
          </span>

          <h1 className="mt-4 text-5xl font-bold leading-none text-slate-900 md:text-7xl">
            Have a Project?
            <span className="block text-cyan-600">
              Let's Talk.
            </span>
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-600">
            Share a few details and we'll start with a
            short conversation to understand your goals,
            timelines, and expectations before any next
            steps.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-20"
        >
          <div className="grid gap-x-12 gap-y-12 lg:grid-cols-2">
            {/* Name */}
            <div>
              <label className="mb-3 block text-lg font-medium text-slate-900">
                What's Your Name? *
              </label>

              <input
                {...register('name')}
                type="text"
                className="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-lg outline-none transition-colors focus:border-cyan-600"
              />

              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-3 block text-lg font-medium text-slate-900">
                Email *
              </label>

              <input
                {...register('email')}
                type="email"
                className="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-lg outline-none transition-colors focus:border-cyan-600"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="mb-3 block text-lg font-medium text-slate-900">
                Phone Number *
              </label>

              <input
                {...register('phone')}
                type="tel"
                className="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-lg outline-none transition-colors focus:border-cyan-600"
              />

              {errors.phone && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Company */}
            <div>
              <label className="mb-3 block text-lg font-medium text-slate-900">
                Company Name Or Website
              </label>

              <input
                {...register('company')}
                type="text"
                className="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-lg outline-none transition-colors focus:border-cyan-600"
              />
            </div>

            {/* Service */}
            <div>
              <label className="mb-3 block text-lg font-medium text-slate-900">
                Service Required *
              </label>

              <select
                {...register('service')}
                className="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-lg outline-none transition-colors focus:border-cyan-600"
              >
                <option value="">
                  Select Service
                </option>
                <option value="web-development">
                  Web Development
                </option>
                <option value="mobile-app">
                  Mobile App Development
                </option>
                <option value="ui-ux">
                  UI/UX Design
                </option>
                <option value="software">
                  Custom Software
                </option>
                <option value="marketing">
                  Digital Marketing
                </option>
              </select>

              {errors.service && (
                <p className="mt-2 text-sm text-red-500">
                  {errors.service.message}
                </p>
              )}
            </div>

            {/* Budget */}
            <div>
              <label className="mb-3 block text-lg font-medium text-slate-900">
                Estimated Budget
              </label>

              <select
                {...register('budget')}
                className="w-full border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-lg outline-none transition-colors focus:border-cyan-600"
              >
                <option value="">
                  Select Budget
                </option>
                <option value="under-1000">
                  Under $1,000
                </option>
                <option value="1000-5000">
                  $1,000 - $5,000
                </option>
                <option value="5000-10000">
                  $5,000 - $10,000
                </option>
                <option value="10000-plus">
                  $10,000+
                </option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mt-12">
            <label className="mb-3 block text-lg font-medium text-slate-900">
              Project Brief *
            </label>

            <textarea
              {...register('message')}
              rows={6}
              className="w-full resize-none border-0 border-b border-slate-300 bg-transparent px-0 py-4 text-lg outline-none transition-colors focus:border-cyan-600"
            />

            {errors.message && (
              <p className="mt-2 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="mt-16">
            <Button
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
              "
            >
              {isSubmitting
                ? 'Submitting...'
                : 'Submit'}
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

