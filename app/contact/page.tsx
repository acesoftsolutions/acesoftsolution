'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@acesoftsolutions.com',
    link: 'mailto:info@acesoftsolutions.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+1 (234) 567-890',
    link: 'tel:+1234567890',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: '123 Tech Innovators Avenue, Suite 100, San Francisco, CA 94102',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon - Fri: 9:00 AM - 6:00 PM',
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Contact form data:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
    toast({
      title: 'Message Sent!',
      description: 'We will get back to you within 24 hours.',
    });
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <section className="pt-32 pb-20 bg-dark">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
                Contact Us
              </span>
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Let&apos;s Start Your <span className="text-gradient">Project</span>
              </h1>
              <p className="text-muted text-lg">
                Have a project in mind? We&apos;d love to hear about it. Get in touch with us
                and let&apos;s create something amazing together.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-dark-light">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              <AnimatedSection direction="left">
                <div className="glass rounded-3xl p-8 md:p-10">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-8">
                    Send Us a Message
                  </h2>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-accent" />
                      </div>
                      <h3 className="font-poppins text-2xl font-bold text-white mb-4">
                        Thank You!
                      </h3>
                      <p className="text-muted mb-6">
                        Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        className="btn-primary"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <input
                            {...register('name')}
                            type="text"
                            placeholder="John Doe"
                            className="input-field"
                          />
                          {errors.name && (
                            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-white text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <input
                            {...register('email')}
                            type="email"
                            placeholder="john@example.com"
                            className="input-field"
                          />
                          {errors.email && (
                            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <input
                            {...register('phone')}
                            type="tel"
                            placeholder="+1 234 567 890"
                            className="input-field"
                          />
                        </div>
                        <div>
                          <label className="block text-white text-sm font-medium mb-2">
                            Company
                          </label>
                          <input
                            {...register('company')}
                            type="text"
                            placeholder="Your Company"
                            className="input-field"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <input
                          {...register('subject')}
                          type="text"
                          placeholder="How can we help you?"
                          className="input-field"
                        />
                        {errors.subject && (
                          <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Message *
                        </label>
                        <textarea
                          {...register('message')}
                          rows={5}
                          placeholder="Tell us about your project..."
                          className="input-field resize-none"
                        />
                        {errors.message && (
                          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <h2 className="font-poppins text-2xl font-bold text-white mb-8">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {info.link ? (
                        <a
                          href={info.link}
                          className="glass rounded-2xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors block"
                        >
                          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-white mb-1">{info.title}</h3>
                            <p className="text-muted">{info.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="glass rounded-2xl p-6 flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                            <info.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-white mb-1">{info.title}</h3>
                            <p className="text-muted">{info.value}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 glass rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948085!3d37.757809555184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1645564756836!5m2!1sen!2sus"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
