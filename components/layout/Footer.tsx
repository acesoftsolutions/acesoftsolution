"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const services = [
  {
    name: "Web Development",
    href: "/services/web-development",
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
  },
  {
    name: "SEO Optimization",
    href: "/services/seo-optimization",
  },
  {
    name: "Digital Marketing",
    href: "/services/digital-marketing",
  },
  {
    name: "AI Solutions",
    href: "/services/ai-solutions",
  },
];

const companyLinks = [
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Team",
    href: "/team",
  },
  {
    name: "Testimonials",
    href: "/testimonials",
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
  return (
    <footer className="border-t border-white/10 bg-dark-light">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-8">
        {/* Main Footer */}
        <div className="py-20">
          <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
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
                We help startups, businesses, and enterprises build scalable
                software solutions, websites, mobile apps, AI-powered products,
                and digital experiences that drive measurable business growth.
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      h-11
                      w-11
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      flex
                      items-center
                      justify-center
                      text-white
                      hover:border-cyan-400/30
                      hover:text-cyan-400
                      transition-all
                    "
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
                      className="
                        text-muted
                        hover:text-white
                        transition-colors
                      "
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Company</h4>

              <ul className="space-y-4">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="
                        text-muted
                        hover:text-white
                        transition-colors
                      "
                    >
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
                  className="
                    flex
                    items-start
                    gap-3
                    text-muted
                    hover:text-white
                    transition-colors
                  "
                >
                  <Mail className="w-5 h-5 text-primary mt-0.5" />

                  <span>info@acesoftsolution.com</span>
                </a>

                <a
                  href="tel:+919999999999"
                  className="
                    flex
                    items-start
                    gap-3
                    text-muted
                    hover:text-white
                    transition-colors
                  "
                >
                  <Phone className="w-5 h-5 text-primary mt-0.5" />

                  <span>+91 99999 89999</span>
                </a>

                <div
                  className="
                    flex
                    items-start
                    gap-3
                    text-muted
                  "
                >
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />

                  <span>
                    Ahmedabad,
                    <br />
                    Gujarat, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              items-center
              gap-4
            "
          >
            <p className="text-sm text-muted text-center md:text-left">
              © {new Date().getFullYear()} ACE SOFT SOLUTION. All Rights
              Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="
                    text-sm
                    text-muted
                    hover:text-white
                    transition-colors
                  "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}