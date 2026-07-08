"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUp,
  Twitter,
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
    href: "/technology",
  },
  {
    name: "Industry",
    href: "/industries",
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
    label: "Facebook",
    href: "https://www.facebook.com/acesoftsolution/",
    icon: Facebook,
    color: "text-[#1877F2]",
    bg: "hover:bg-[#1877F2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/acesoftsolution/",
    icon: Instagram,
    color: "text-[#E4405F]",
    bg: "hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/acesoftsolution/",
    icon: Linkedin,
    color: "text-[#0A66C2]",
    bg: "hover:bg-[#0A66C2]",
  },
  {
    label: "Twitter",
    href: "https://x.com/AceSoftSolution",
    icon: Twitter,
    color: "text-[#1DA1F2]",
    bg: "hover:bg-[#1DA1F2]",
  },
];

// TODO: replace with your real office details
const offices = [
  {
    country: "India",
    code: "IN",
    tag: "Head Office",
    address: "2144, Diamond Park, Sachin-394230, Surat",
    phone: "+91 76963 73145",
    gradient: "from-orange-500 via-white to-green-500",
  },

  {
    country: "United Kingdom",
    code: "GB",
    tag: "",
    address: "40b Scarle Rd, Wembley HA0 4SN",
    phone: "+44 7551 781254",
    gradient: "from-blue-700 via-white to-red-600",
  },
    {
    country: "Belgium",
    code: "BE",
    tag: "",
    address: "Boesbergstraat 4, Sterrebeek, Belgium",
    phone: "+32 486 52 14 09",
    gradient: "from-black via-yellow-400 to-red-500",
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
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-6 mx-4 text-lg font-semibold text-slate-900">
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
              <h4 className="mb-6 mx-4 text-lg font-semibold text-slate-900">
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
                  href="tel:+91 76963 73145"
                  className="group flex items-start gap-3 text-slate-600 transition-colors hover:text-slate-900"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/10 to-cyan-500/10 text-cyan-600 transition-colors group-hover:from-blue-600/20 group-hover:to-cyan-500/20">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="pt-1.5">+91 76963 73145</span>
                </a>
              </div>
              <div className="mt-4 flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{
                      y: -5,
                      scale: 1.08,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className={`
        group
        relative
        flex
        h-12
        w-12
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-md
        transition-all
        duration-300
        ${social.bg}
      `}
                    aria-label={social.label}
                  >
                    <social.icon
                      className={`
          h-5
          w-5
          ${social.color}
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-white
        `}
                    />

                    <div
                      className="
          absolute
          inset-0
          rounded-2xl
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
          ring-2
          ring-white/20
        "
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* ================= Offices ================= */}
          {/* ================= Offices ================= */}
          <div className="mt-5 border-t border-slate-200 pt-5">
            <h4 className="mb-5 text-lg font-semibold text-slate-900">
              Our Offices
            </h4>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {offices.map((office, index) => (
                <motion.div
                  key={office.country}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-cyan-200 hover:shadow-lg"
                >
                  <div
                    className={`h-1 w-full bg-gradient-to-r ${office.gradient}`}
                  />

                  <div className="relative p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-50 shadow-sm ring-1 ring-slate-200 transition-all duration-300 group-hover:scale-105">
                          <ReactCountryFlag
                            countryCode={office.code}
                            svg
                            style={{
                              width: "32px",
                              height: "32px",
                            }}
                            title={office.country}
                          />
                        </div>

                        <div>
                          <h3 className="text-base font-bold text-slate-900">
                            {office.country}
                          </h3>

                          <span className="mt-1 inline-flex rounded-full bg-cyan-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
                            {office.tag}
                          </span>
                        </div>
                      </div>

                      <div className="rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-2 text-white shadow-sm">
                        <MapPin className="h-4 w-4" />
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {office.address}
                    </p>

                    <div className="mt-4 border-t border-slate-100 pt-4">
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                      >
                        <Phone className="h-4 w-4" />
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
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
