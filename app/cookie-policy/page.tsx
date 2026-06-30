'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Cookie,
  Settings2,
  BarChart3,
  Megaphone,
  ShieldCheck,
  Mail,
} from 'lucide-react';

const sections = [
  { id: 'what-are-cookies', label: 'What Are Cookies' },
  { id: 'how-we-use', label: 'How We Use Cookies' },
  { id: 'types', label: 'Types of Cookies' },
  { id: 'third-party', label: 'Third-Party Cookies' },
  { id: 'managing', label: 'Managing Cookies' },
  { id: 'updates', label: 'Updates to This Policy' },
  { id: 'contact', label: 'Contact Us' },
];

const cookieTypes = [
  {
    icon: ShieldCheck,
    color: 'blue',
    title: 'Essential Cookies',
    desc: 'Required for the website to function — secure pages, navigation, and basic site features. These cannot be switched off.',
  },
  {
    icon: Settings2,
    color: 'cyan',
    title: 'Functional Cookies',
    desc: 'Remember your preferences, such as language or region, to give you a more personalized experience on return visits.',
  },
  {
    icon: BarChart3,
    color: 'violet',
    title: 'Analytics Cookies',
    desc: 'Help us understand how visitors use our site, so we can improve performance, content, and usability over time.',
  },
  {
    icon: Megaphone,
    color: 'emerald',
    title: 'Marketing Cookies',
    desc: 'Used to deliver relevant ads and measure the effectiveness of our campaigns across other platforms.',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-600' },
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-100', text: 'text-cyan-600' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-100', text: 'text-violet-600' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-600' },
};

export default function CookiePolicy() {
  return (
    <section className="relative overflow-hidden bg-white from-blue-50/60 via-white to-white pt-12 pb-24">
      {/* Background accents */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.08),transparent_40%)]" /> */}

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-10 text-sm"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold tracking-wide">
            <Cookie size={14} />
            Legal
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 leading-[1.05] tracking-tight">
            Cookie Policy
          </h1>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            This policy explains how Ace Soft Solution uses cookies and
            similar technologies to recognize you when you visit our
            website, and what choices you have.
          </p>

          <p className="mt-4 text-sm text-slate-400">
            Last updated: June 30, 2026
          </p>
        </motion.div>

        {/* Body: sidebar nav + content */}
        <div className="grid lg:grid-cols-12 gap-8 mt-14">
          {/* Sticky table of contents */}
          <aside className="lg:col-span-3 hidden lg:block">
            <nav className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.10)]">
              <p className="text-xs uppercase tracking-widest text-slate-400 font-medium mb-3 px-2">
                On this page
              </p>
              <ul className="space-y-1">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="block px-2 py-2 rounded-lg text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="lg:col-span-9 space-y-6">
            <motion.div
              id="what-are-cookies"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-7 lg:p-8 scroll-mt-24"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                What Are Cookies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Cookies are small text files placed on your device when you
                visit a website. They are widely used to make websites work
                more efficiently, remember your preferences, and provide
                information to the site owners. Cookies do not contain
                viruses or harm your device.
              </p>
            </motion.div>

            <motion.div
              id="how-we-use"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-7 lg:p-8 scroll-mt-24"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                How We Use Cookies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Ace Soft Solution uses cookies to keep our website secure,
                remember your preferences, understand how visitors interact
                with our pages, and improve the overall experience of our
                services, portfolio, and client resources.
              </p>
            </motion.div>

            {/* Types of cookies — card grid */}
            <motion.div
              id="types"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-7 lg:p-8 scroll-mt-24"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-5">
                Types of Cookies We Use
              </h2>

              <div className="grid sm:grid-cols-2 gap-5">
                {cookieTypes.map((c) => {
                  const Icon = c.icon;
                  const colors = colorMap[c.color];
                  return (
                    <div
                      key={c.title}
                      className="rounded-2xl border border-slate-100 bg-slate-50/60 p-5"
                    >
                      <div
                        className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-3`}
                      >
                        <Icon className={`w-4.5 h-4.5 ${colors.text}`} />
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-1.5 text-[15px]">
                        {c.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              id="third-party"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-7 lg:p-8 scroll-mt-24"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Third-Party Cookies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Some cookies on our site are set by trusted third-party
                services we use, such as analytics and advertising
                partners. These providers may use cookies to collect data
                about your visits to this and other websites in order to
                provide relevant content and measure campaign performance.
              </p>
            </motion.div>

            <motion.div
              id="managing"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-7 lg:p-8 scroll-mt-24"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Managing Cookies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Most web browsers let you control cookies through their
                settings. You can choose to block or delete cookies, though
                doing so may affect how parts of our website function.
                Refer to your browser's help section for instructions on
                managing cookie preferences.
              </p>
            </motion.div>

            <motion.div
              id="updates"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-7 lg:p-8 scroll-mt-24"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Updates to This Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Cookie Policy from time to time to
                reflect changes in technology, regulation, or our
                practices. Any changes will be posted on this page with a
                revised "last updated" date.
              </p>
            </motion.div>

            {/* Contact card */}
            <motion.div
              id="contact"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl bg-slate-900 p-7 lg:p-8 text-white scroll-mt-24 relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="relative flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-2xl bg-cyan-500/15 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-1.5">
                    Questions about this policy?
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    If you have questions about how we use cookies, reach
                    out to our team at{' '}
                    <a
                      href="mailto:privacy@acesoftsolution.com"
                      className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                    >
                      privacy@acesoftsolution.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}