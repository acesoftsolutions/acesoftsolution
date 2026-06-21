'use client';

import React from 'react';
import Link from 'next/link';

import {
  ShieldCheck,
  Lock,
  Database,
  Eye,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from 'lucide-react';

import ScrollProgress from '@/components/shared/ScrollProgress';
import AnimatedSection from '@/components/shared/AnimatedSection';

const navigationItems = [
  {
    id: 'introduction',
    label: 'Introduction',
  },
  {
    id: 'collection',
    label: 'Information Collection',
  },
  {
    id: 'usage',
    label: 'Use of Information',
  },
  {
    id: 'cookies',
    label: 'Cookies & Analytics',
  },
  {
    id: 'third-party',
    label: 'Third-Party Services',
  },
  {
    id: 'security',
    label: 'Data Security',
  },
  {
    id: 'retention',
    label: 'Data Retention',
  },
  {
    id: 'rights',
    label: 'Your Rights',
  },
  {
    id: 'children',
    label: "Children's Privacy",
  },
  {
    id: 'updates',
    label: 'Policy Updates',
  },
];

const policySections = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    content:
      'Ace Soft Solution is committed to protecting the privacy and security of our clients, partners, and website visitors. This Privacy Policy explains how we collect, use, store, process, and safeguard personal information when you interact with our website, products, and services.',
  },

  {
    id: 'collection',
    number: '02',
    title: 'Information We Collect',
    content:
      'We may collect personal information such as your name, email address, phone number, company information, project requirements, and other information voluntarily submitted through forms, consultations, or communications. We may also collect technical data including browser type, IP address, device information, and website usage analytics.',
  },

  {
    id: 'usage',
    number: '03',
    title: 'How We Use Information',
    content:
      'Collected information is used to provide services, respond to inquiries, improve user experience, manage projects, deliver support, process transactions, send service updates, and enhance our business operations.',
  },

  {
    id: 'cookies',
    number: '04',
    title: 'Cookies & Analytics',
    content:
      'We use cookies, analytics platforms, and similar technologies to understand website performance, analyze visitor behavior, improve functionality, and optimize the overall user experience.',
  },

  {
    id: 'third-party',
    number: '05',
    title: 'Third-Party Services',
    content:
      'Our website and services may integrate with trusted third-party platforms including analytics providers, cloud infrastructure services, CRM systems, communication tools, and payment providers that help us operate effectively.',
  },

  {
    id: 'security',
    number: '06',
    title: 'Data Security',
    content:
      'We implement industry-standard security measures including encrypted communications, secure hosting environments, controlled access permissions, monitoring systems, and internal security practices designed to protect personal information.',
  },

  {
    id: 'retention',
    number: '07',
    title: 'Data Retention',
    content:
      'Information is retained only for as long as necessary to fulfill contractual obligations, legal requirements, business operations, or legitimate interests. Data is securely removed when no longer required.',
  },

  {
    id: 'rights',
    number: '08',
    title: 'Your Privacy Rights',
    content:
      'Depending on applicable regulations, you may have the right to access, update, correct, delete, restrict processing, or request a copy of your personal information. Requests can be submitted through our contact channels.',
  },

  {
    id: 'children',
    number: '09',
    title: "Children's Privacy",
    content:
      'Our services are not intended for children under the applicable legal age. We do not knowingly collect personal information from children.',
  },

  {
    id: 'updates',
    number: '10',
    title: 'Policy Updates',
    content:
      'This Privacy Policy may be updated periodically to reflect changes in our services, legal obligations, or privacy practices. Updates will be published on this page with a revised effective date.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <ScrollProgress />

      <main className="bg-white">
                {/* Hero Section */}

        <section className="relative overflow-hidden bg-white pt-14 pb-14">

          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

            <AnimatedSection>

              <div className="max-w-4xl">

                <span
                  className="
                    inline-flex
                    items-center
                    rounded-full
                    border
                    border-blue-200
                    bg-blue-50
                    px-5
                    py-2
                    text-sm
                    font-medium
                    text-blue-700
                  "
                >
                  Privacy & Data Protection
                </span>

                <h1
                  className="
                    mt-8
                    text-5xl
                    font-bold
                    leading-tight
                    tracking-tight
                    text-slate-900
                    md:text-7xl
                  "
                >
                  Privacy Policy
                </h1>

                <p
                  className="
                    mt-8
                    max-w-3xl
                    text-lg
                    leading-relaxed
                    text-slate-600
                    md:text-xl
                  "
                >
                  At Ace Soft Solution, we value transparency,
                  trust, and responsible data management.
                  This Privacy Policy explains how we collect,
                  use, store, and protect your information
                  while delivering our digital solutions and services.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                  <div
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      px-6
                      py-4
                      shadow-sm
                    "
                  >
                    <p className="text-sm text-slate-500">
                      Last Updated
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      June 2026
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      px-6
                      py-4
                      shadow-sm
                    "
                  >
                    <p className="text-sm text-slate-500">
                      Compliance
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      GDPR Ready
                    </p>
                  </div>

                  <div
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      px-6
                      py-4
                      shadow-sm
                    "
                  >
                    <p className="text-sm text-slate-500">
                      Security Standard
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      Enterprise Grade
                    </p>
                  </div>

                </div>

              </div>

            </AnimatedSection>

          </div>

        </section>

        {/* Privacy Highlights */}

        <section className="bg-white pb-20">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {[
                {
                  icon: ShieldCheck,
                  title: 'Data Protection',
                  description:
                    'Strong privacy-first policies and secure handling practices.',
                },

                {
                  icon: Lock,
                  title: 'Secure Systems',
                  description:
                    'Protected infrastructure with modern security standards.',
                },

                {
                  icon: Database,
                  title: 'Data Management',
                  description:
                    'Responsible collection, storage, and processing of information.',
                },

                {
                  icon: Eye,
                  title: 'Transparency',
                  description:
                    'Clear communication about how information is used.',
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <AnimatedSection
                    key={item.title}
                    delay={index * 0.1}
                  >
                    <div
                      className="
                        h-full
                        rounded-[28px]
                        border
                        border-slate-200
                        bg-white
                        p-8
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-blue-200
                        hover:shadow-xl
                      "
                    >
                      <div
                        className="
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-2xl
                          bg-blue-50
                        "
                      >
                        <Icon
                          className="
                            h-7
                            w-7
                            text-blue-600
                          "
                        />
                      </div>

                      <h3
                        className="
                          mt-6
                          text-xl
                          font-bold
                          text-slate-900
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          leading-relaxed
                          text-slate-600
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}

            </div>

          </div>

        </section>
                {/* Main Content */}

        <section className="bg-slate-50 py-20">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid gap-12 lg:grid-cols-[280px_1fr]">

              {/* Sidebar */}

              <aside className="hidden lg:block">

                <div className="sticky top-28">

                  <div
                    className="
                      rounded-[28px]
                      border
                      border-slate-200
                      bg-white
                      p-6
                      shadow-sm
                    "
                  >
                    <h3
                      className="
                        text-lg
                        font-bold
                        text-slate-900
                      "
                    >
                      Quick Navigation
                    </h3>

                    <div className="mt-6 space-y-2">

                      {navigationItems.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="
                            group
                            flex
                            items-center
                            justify-between
                            rounded-xl
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-slate-600
                            transition-all
                            duration-300
                            hover:bg-blue-50
                            hover:text-blue-600
                          "
                        >
                          <span>
                            {item.label}
                          </span>

                          <ChevronRight
                            className="
                              h-4
                              w-4
                              transition-transform
                              duration-300
                              group-hover:translate-x-1
                            "
                          />
                        </a>
                      ))}

                    </div>

                  </div>

                </div>

              </aside>

              {/* Content */}

              <div className="space-y-8"> 
                                {policySections.slice(0, 5).map((section, index) => (
                  <AnimatedSection
                    key={section.id}
                    delay={index * 0.05}
                  >
                    <div
                      id={section.id}
                      className="
                        rounded-[32px]
                        border
                        border-slate-200
                        bg-white
                        p-8
                        md:p-10
                        shadow-sm
                      "
                    >
                      <div className="flex items-start gap-5">

                        <div
                          className="
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-blue-50
                            text-blue-600
                            font-bold
                          "
                        >
                          {section.number}
                        </div>

                        <div>

                          <h2
                            className="
                              text-3xl
                              font-bold
                              text-slate-900
                            "
                          >
                            {section.title}
                          </h2>

                          <p
                            className="
                              mt-5
                              text-lg
                              leading-relaxed
                              text-slate-600
                            "
                          >
                            {section.content}
                          </p>

                        </div>

                      </div>
                    </div>
                  </AnimatedSection>
                ))}
                                <AnimatedSection>

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[32px]
                      bg-gradient-to-r
                      from-blue-600
                      to-blue-700
                      p-10
                      md:p-14
                    "
                  >
                    <div
                      className="
                        absolute
                        right-0
                        top-0
                        h-72
                        w-72
                        rounded-full
                        bg-white/10
                        blur-3xl
                      "
                    />

                    <div className="relative z-10">

                      <span
                        className="
                          inline-flex
                          rounded-full
                          bg-white/15
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-white
                        "
                      >
                        Enterprise Security
                      </span>

                      <h3
                        className="
                          mt-6
                          max-w-2xl
                          text-3xl
                          font-bold
                          text-white
                          md:text-4xl
                        "
                      >
                        Your Data Is Protected By
                        Industry Best Practices
                      </h3>

                      <p
                        className="
                          mt-5
                          max-w-3xl
                          text-lg
                          leading-relaxed
                          text-blue-100
                        "
                      >
                        We continuously invest in secure
                        infrastructure, monitoring systems,
                        encryption standards, and operational
                        safeguards to ensure your information
                        remains protected.
                      </p>

                      <div className="mt-10 grid gap-6 md:grid-cols-3">

                        <div>
                          <h4
                            className="
                              text-4xl
                              font-bold
                              text-white
                            "
                          >
                            24/7
                          </h4>

                          <p className="mt-2 text-blue-100">
                            Infrastructure Monitoring
                          </p>
                        </div>

                        <div>
                          <h4
                            className="
                              text-4xl
                              font-bold
                              text-white
                            "
                          >
                            100%
                          </h4>

                          <p className="mt-2 text-blue-100">
                            Secure Data Handling
                          </p>
                        </div>

                        <div>
                          <h4
                            className="
                              text-4xl
                              font-bold
                              text-white
                            "
                          >
                            Enterprise
                          </h4>

                          <p className="mt-2 text-blue-100">
                            Security Standards
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>

                </AnimatedSection>
                                {policySections.slice(5).map((section, index) => (
                  <AnimatedSection
                    key={section.id}
                    delay={index * 0.05}
                  >
                    <div
                      id={section.id}
                      className="
                        rounded-[32px]
                        border
                        border-slate-200
                        bg-white
                        p-8
                        md:p-10
                        shadow-sm
                      "
                    >
                      <div className="flex items-start gap-5">

                        <div
                          className="
                            flex
                            h-14
                            w-14
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-blue-50
                            text-blue-600
                            font-bold
                          "
                        >
                          {section.number}
                        </div>

                        <div>

                          <h2
                            className="
                              text-3xl
                              font-bold
                              text-slate-900
                            "
                          >
                            {section.title}
                          </h2>

                          <p
                            className="
                              mt-5
                              text-lg
                              leading-relaxed
                              text-slate-600
                            "
                          >
                            {section.content}
                          </p>

                        </div>

                      </div>
                    </div>
                  </AnimatedSection>
                ))}
                                <AnimatedSection>

                  <div
                    className="
                      overflow-hidden
                      rounded-[32px]
                      border
                      border-blue-200
                      bg-gradient-to-br
                      from-blue-50
                      via-white
                      to-sky-50
                      p-10
                    "
                  >
                    <div className="max-w-4xl">

                      <span
                        className="
                          inline-flex
                          rounded-full
                          border
                          border-blue-200
                          bg-white
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-blue-700
                        "
                      >
                        Your Privacy Matters
                      </span>

                      <h2
                        className="
                          mt-6
                          text-4xl
                          font-bold
                          text-slate-900
                        "
                      >
                        Your Rights & Control
                      </h2>

                      <p
                        className="
                          mt-5
                          text-lg
                          leading-relaxed
                          text-slate-600
                        "
                      >
                        We believe individuals should have
                        transparency and control over how their
                        information is handled. Depending on
                        applicable regulations, you may request
                        access, correction, deletion, or export
                        of your personal information.
                      </p>

                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2">

                      {[
                        'Request access to personal information',
                        'Correct inaccurate information',
                        'Request data deletion',
                        'Object to data processing',
                        'Request data export',
                        'Withdraw consent where applicable',
                      ].map((item) => (
                        <div
                          key={item}
                          className="
                            flex
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-blue-100
                            bg-white
                            p-5
                          "
                        >
                          <ShieldCheck
                            className="
                              h-5
                              w-5
                              text-blue-600
                            "
                          />

                          <span
                            className="
                              font-medium
                              text-slate-700
                            "
                          >
                            {item}
                          </span>

                        </div>
                      ))}

                    </div>

                  </div>

                </AnimatedSection>
                                <AnimatedSection>

                  <div
                    className="
                      rounded-[32px]
                      border
                      border-slate-200
                      bg-white
                      p-10
                      shadow-sm
                    "
                  >
                    <div className="grid gap-8 lg:grid-cols-2">

                      <div>

                        <h3
                          className="
                            text-2xl
                            font-bold
                            text-slate-900
                          "
                        >
                          Compliance & Governance
                        </h3>

                        <p
                          className="
                            mt-4
                            leading-relaxed
                            text-slate-600
                          "
                        >
                          Ace Soft Solution follows
                          responsible privacy practices,
                          internal security controls,
                          and data governance processes
                          designed to protect client and
                          business information.
                        </p>

                      </div>

                      <div>

                        <h3
                          className="
                            text-2xl
                            font-bold
                            text-slate-900
                          "
                        >
                          Transparency Commitment
                        </h3>

                        <p
                          className="
                            mt-4
                            leading-relaxed
                            text-slate-600
                          "
                        >
                          We strive to communicate clearly
                          how information is collected,
                          processed, stored, and protected
                          throughout our services and
                          digital platforms.
                        </p>

                      </div>

                    </div>

                  </div>

                </AnimatedSection>
                                {/* Contact Section */}

                <AnimatedSection>

                  <section id="contact">

                    <div
                      className="
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-slate-200
                        bg-white
                        shadow-sm
                      "
                    >
                      <div className="grid lg:grid-cols-2">

                        {/* Left */}

                        <div
                          className="
                            relative
                            overflow-hidden
                            bg-gradient-to-br
                            from-blue-600
                            via-blue-700
                            to-sky-600
                            p-10
                            md:p-14
                          "
                        >
                          <div
                            className="
                              absolute
                              right-0
                              top-0
                              h-72
                              w-72
                              rounded-full
                              bg-white/10
                              blur-3xl
                            "
                          />

                          <div className="relative z-10">

                            <span
                              className="
                                inline-flex
                                rounded-full
                                bg-white/15
                                px-4
                                py-2
                                text-sm
                                font-medium
                                text-white
                              "
                            >
                              Contact Our Team
                            </span>

                            <h2
                              className="
                                mt-6
                                text-4xl
                                font-bold
                                text-white
                              "
                            >
                              Questions About Your Privacy?
                            </h2>

                            <p
                              className="
                                mt-5
                                max-w-xl
                                text-lg
                                leading-relaxed
                                text-blue-100
                              "
                            >
                              If you have any questions regarding
                              this Privacy Policy, data requests,
                              information security practices, or
                              personal data concerns, our team is
                              ready to assist.
                            </p>

                          </div>

                        </div>

                        {/* Right */}

                        <div className="p-10 md:p-14">

                          <div className="space-y-8">

                            <div className="flex gap-4">

                              <div
                                className="
                                  flex
                                  h-12
                                  w-12
                                  items-center
                                  justify-center
                                  rounded-xl
                                  bg-blue-50
                                "
                              >
                                <Mail
                                  className="
                                    h-5
                                    w-5
                                    text-blue-600
                                  "
                                />
                              </div>

                              <div>

                                <p
                                  className="
                                    text-sm
                                    text-slate-500
                                  "
                                >
                                  Email Address
                                </p>

                                <p
                                  className="
                                    mt-1
                                    text-lg
                                    font-semibold
                                    text-slate-900
                                  "
                                >
                                  info@acesoftsolution.com
                                </p>

                              </div>

                            </div>

                            <div className="flex gap-4">

                              <div
                                className="
                                  flex
                                  h-12
                                  w-12
                                  items-center
                                  justify-center
                                  rounded-xl
                                  bg-blue-50
                                "
                              >
                                <Phone
                                  className="
                                    h-5
                                    w-5
                                    text-blue-600
                                  "
                                />
                              </div>

                              <div>

                                <p
                                  className="
                                    text-sm
                                    text-slate-500
                                  "
                                >
                                  Phone Number
                                </p>

                                <p
                                  className="
                                    mt-1
                                    text-lg
                                    font-semibold
                                    text-slate-900
                                  "
                                >
                                  +91 XXXXX XXXXX
                                </p>

                              </div>

                            </div>

                            <div className="flex gap-4">

                              <div
                                className="
                                  flex
                                  h-12
                                  w-12
                                  items-center
                                  justify-center
                                  rounded-xl
                                  bg-blue-50
                                "
                              >
                                <MapPin
                                  className="
                                    h-5
                                    w-5
                                    text-blue-600
                                  "
                                />
                              </div>

                              <div>

                                <p
                                  className="
                                    text-sm
                                    text-slate-500
                                  "
                                >
                                  Office Address
                                </p>

                                <p
                                  className="
                                    mt-1
                                    text-lg
                                    font-semibold
                                    text-slate-900
                                  "
                                >
                                  Ahmedabad, Gujarat, India
                                </p>

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                  </section>

                </AnimatedSection>

                                <AnimatedSection>

                  <div className="grid gap-6 md:grid-cols-3">

                    {[
                      {
                        title: 'Access Request',
                        description:
                          'Request access to personal information we may hold.',
                      },

                      {
                        title: 'Correction Request',
                        description:
                          'Update or correct inaccurate personal information.',
                      },

                      {
                        title: 'Deletion Request',
                        description:
                          'Request deletion of personal information where applicable.',
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="
                          rounded-[28px]
                          border
                          border-slate-200
                          bg-white
                          p-8
                          shadow-sm
                        "
                      >
                        <h3
                          className="
                            text-xl
                            font-bold
                            text-slate-900
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-4
                            leading-relaxed
                            text-slate-600
                          "
                        >
                          {item.description}
                        </p>

                      </div>
                    ))}

                  </div>

                </AnimatedSection>
                                <AnimatedSection>

                  <div
                    className="
                      overflow-hidden
                      rounded-[32px]
                      border
                      border-blue-200
                      bg-gradient-to-br
                      from-blue-50
                      via-white
                      to-sky-50
                      p-10
                      md:p-14
                    "
                  >
                    <div className="max-w-3xl">

                      <span
                        className="
                          inline-flex
                          rounded-full
                          border
                          border-blue-200
                          bg-white
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-blue-700
                        "
                      >
                        Need Assistance?
                      </span>

                      <h2
                        className="
                          mt-6
                          text-4xl
                          font-bold
                          text-slate-900
                        "
                      >
                        We're Committed To Protecting
                        Your Privacy
                      </h2>

                      <p
                        className="
                          mt-5
                          text-lg
                          leading-relaxed
                          text-slate-600
                        "
                      >
                        If you need further clarification about
                        our privacy practices, data protection
                        standards, or information handling
                        procedures, our team is available
                        to help.
                      </p>

                      <div className="mt-8">

                        <Link
                          href="/contact"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-blue-600
                            px-6
                            py-3
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:bg-blue-700
                          "
                        >
                          Contact Us

                          <ArrowRight
                            className="
                              h-4
                              w-4
                            "
                          />
                        </Link>

                      </div>

                    </div>

                  </div>

                </AnimatedSection>
                                {/* Legal Footer */}

                <AnimatedSection>

                  <div
                    className="
                      rounded-[32px]
                      border
                      border-slate-200
                      bg-white
                      p-8
                      md:p-10
                      shadow-sm
                    "
                  >
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                      <div>

                        <h3
                          className="
                            text-xl
                            font-bold
                            text-slate-900
                          "
                        >
                          Ace Soft Solution Privacy Commitment
                        </h3>

                        <p
                          className="
                            mt-3
                            max-w-3xl
                            leading-relaxed
                            text-slate-600
                          "
                        >
                          We are committed to protecting the
                          confidentiality, integrity, and
                          availability of information entrusted
                          to us. Our privacy practices are
                          designed to support transparency,
                          accountability, and long-term trust
                          with clients, partners, and users.
                        </p>

                      </div>

                      <div
                        className="
                          rounded-2xl
                          border
                          border-blue-200
                          bg-blue-50
                          px-6
                          py-4
                        "
                      >
                        <p
                          className="
                            text-sm
                            font-medium
                            text-blue-700
                          "
                        >
                          Effective Date
                        </p>

                        <p
                          className="
                            mt-1
                            font-semibold
                            text-slate-900
                          "
                        >
                          June 2026
                        </p>

                      </div>

                    </div>

                  </div>

                </AnimatedSection>

              </div>
              {/* End Content */}

            </div>
            {/* End Grid */}

          </div>
          {/* End Container */}

        </section>

      </main>

    </>
  );
}