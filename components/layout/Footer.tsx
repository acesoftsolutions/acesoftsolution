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
  CheckCircle2,
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
    name: "Technologies",
    href: "/technologies",
  },
  {
    name: "Industry",
    href: "/industry",
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

// TODO: replace with your real office details
const offices = [
  {
    city: "Ahmedabad",
    tag: "Head Office",
    address: "SG Highway, Ahmedabad, Gujarat, India – 380015",
    phone: "+91 99999 89999",
  },
  {
    city: "Surat",
    tag: "Branch Office",
    address: "Adajan, Surat, Gujarat, India – 395009",
    phone: "+91 99999 12345",
  },
  {
    city: "Rajkot",
    tag: "Branch Office",
    address: "150 Feet Ring Road, Rajkot, Gujarat, India – 360005",
    phone: "+91 99999 54321",
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
    <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute right-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
      </div>

      {/* Subtle grid texture */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      <div className="relative max-w-[1280px] mx-auto px-5 lg:px-8">
        {/* ================= CTA banner ================= */}
   

        {/* ================= Main Footer ================= */}
        <div className="py-12 lg:py-14">
          <div className="grid gap-14 lg:grid-cols-[1.4fr_0.9fr_0.9fr_1.1fr]">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-flex items-center gap-4 mb-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="Ace Soft Solution"
                    width={150}
                    height={54}
                    priority
                    className="rounded-sm"
                  />
                </div>
              </Link>

              <p className="max-w-md leading-relaxed text-slate-600 mb-8">
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
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-cyan-400/50 hover:text-cyan-600"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-6 text-lg font-semibold text-slate-900">
                Services
              </h4>

              <ul className="space-y-4">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="group inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900"
                    >
                      <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-cyan-500 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                      {service.name.trim()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-6 text-lg font-semibold text-slate-900">
                Company
              </h4>

              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900"
                    >
                      <ArrowRight className="h-3.5 w-3.5 -translate-x-1 text-cyan-500 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-6 text-lg font-semibold text-slate-900">
                Contact Us
              </h4>

              <div className="space-y-5">
                <a
                  href="mailto:info@acesoftsolution.com"
                  className="group flex items-start gap-3 text-slate-600 transition-colors hover:text-slate-900"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-500/10 text-cyan-600 transition-colors group-hover:from-blue-600/20 group-hover:to-cyan-500/20">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="pt-1.5">info@acesoftsolution.com</span>
                </a>

                <a
                  href="tel:+919999989999"
                  className="group flex items-start gap-3 text-slate-600 transition-colors hover:text-slate-900"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-500/10 text-cyan-600 transition-colors group-hover:from-blue-600/20 group-hover:to-cyan-500/20">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="pt-1.5">+91 99999 89999</span>
                </a>

                <div className="flex items-start gap-3 text-slate-600">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-500/10 text-cyan-600">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="pt-1.5">
                    Head Office — Ahmedabad,
                    <br />
                    Gujarat, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Offices ================= */}
          <div className="mt-6 border-t border-slate-200 pt-6">
            <h4 className="mb-8 text-lg font-semibold text-slate-900">
              Our Offices
            </h4>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {offices.map((office) => (
                <div
                  key={office.city}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                      <MapPin className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {office.city}
                      </p>
                      <p className="text-xs font-medium uppercase tracking-wide text-cyan-600">
                        {office.tag}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {office.address}
                  </p>

                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-cyan-600"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {office.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= Bottom Bar ================= */}
        <div className="border-t border-slate-200 py-2z">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-slate-500 md:text-left">
              © {new Date().getFullYear()} Ace Soft Solution. All Rights
              Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-cyan-400/50 hover:text-cyan-600"
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