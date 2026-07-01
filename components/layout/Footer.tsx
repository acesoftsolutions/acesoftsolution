"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUp,
  Send,
} from "lucide-react";

const services = [
  {
    name: "Custom Software Development",
    href: "/services/custom-software-development",
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
  },
  {
    name: "UI/UX Design",
    href: "/services/ui-ux-design",
  },
  {
    name: "ERP Software Solutions",
    href: "/services/erp-software-solutions",
  },
  {
    name: "AI & Machine Learning",
    href: "/services/ai-machine-learning",
  },
];

const companyLinks = [
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Work",
    href: "/portfolio",
  },
  {
    name: "Insights",
    href: "/blog",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
  },
  {
    name: "Terms & Conditions",
    href: "/terms",
  },
];

const legalLinks = [
  {
    name: "Privacy Policy",
    href: "/privacy",
  },
  {
    name: "Terms & Conditions",
    href: "/terms",
  },
  {
    name: "Sitemap",
    href: "/sitemap",
  },
  {
    name: "Cookie Policy",
    href: "/cookie-policy",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "#",
    label: "LinkedIn",
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Wire this up to your newsletter provider / API route
    setSubscribed(true);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-dark-light">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
        {/* ================= CTA banner ================= */}
        <div className="pt-16 lg:pt-20">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-500 p-8 lg:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 left-1/3 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <h3 className="text-2xl font-bold text-white lg:text-3xl">
                  Have a project in mind?
                </h3>
                <p className="mt-2 max-w-xl text-white/80">
                  Let's talk about how we can help you build scalable
                  software that drives real business growth.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Start a Conversation
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* ================= Main Footer ================= */}
        <div className="py-16 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[1.5fr_0.9fr_0.9fr_1.1fr]">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-flex items-center gap-4 mb-6">
                <Image
                  src="/logo.png"
                  alt="Ace Soft Solution"
                  width={165}
                  height={60}
                  priority
                  className="rounded-sm"
                />
              </Link>

              <p className="text-muted max-w-md leading-relaxed mb-8">
                Ace Soft Solution is a trusted software development company
                helping startups, SMEs, and enterprises build custom software,
                mobile apps, ERP systems, AI-powered solutions, and scalable
                digital products that drive measurable business growth.
              </p>


              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-11 w-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white hover:border-cyan-400/30 hover:text-cyan-400 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Services
              </h4>

              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-2 text-muted hover:text-white transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-cyan-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                      {service.name.trim()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Company
              </h4>

              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-muted hover:text-white transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-cyan-400 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">
                Contact Us
              </h4>

              <div className="space-y-5">
                <a
                  href="mailto:info@acesoftsolution.com"
                  className="group flex items-start gap-3 text-muted hover:text-white transition-colors"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 text-cyan-400 transition-colors group-hover:from-blue-600/30 group-hover:to-cyan-500/30">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="pt-1.5">info@acesoftsolution.com</span>
                </a>

                <a
                  href="tel:+919999999999"
                  className="group flex items-start gap-3 text-muted hover:text-white transition-colors"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 text-cyan-400 transition-colors group-hover:from-blue-600/30 group-hover:to-cyan-500/30">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="pt-1.5">+91 99999 89999</span>
                </a>

                <div className="flex items-start gap-3 text-muted">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 text-cyan-400">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="pt-1.5">
                    Ahmedabad,
                    <br />
                    Gujarat, India
                  </span>
                </div>
                <div className="flex items-start gap-3 text-muted">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 text-cyan-400">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="pt-1.5">
                    Ahmedabad,
                    <br />
                    Gujarat, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Bottom Bar ================= */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted text-center md:text-left">
              © {new Date().getFullYear()} Ace Soft Solution. All Rights
              Reserved. 
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <motion.button
                type="button"
                onClick={scrollToTop}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white hover:border-cyan-400/30 hover:text-cyan-400 transition-all"
              >
                <ArrowUp className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}