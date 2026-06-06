'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function PrivacyPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <section className="pt-32 pb-20 bg-dark">
          <div className="container-custom">
            <AnimatedSection className="text-center max-w-4xl mx-auto">
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
                Legal
              </span>
              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-6">
                Privacy <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-muted text-lg">
                Last updated: March 2024
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-dark-light">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <AnimatedSection>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    Introduction
                  </h2>
                  <p className="text-muted">
                    Ace Soft Solution (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                    when you visit our website or use our services.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    Information We Collect
                  </h2>
                  <p className="text-muted mb-4">
                    We may collect information about you in various ways, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>Personal Data: Name, email address, phone number, and company information</li>
                    <li>Usage Data: IP address, browser type, pages visited, and time spent on pages</li>
                    <li>Device Data: Device type, operating system, and unique device identifiers</li>
                    <li>Cookies and Tracking Technologies: Information collected through cookies and similar technologies</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    How We Use Your Information
                  </h2>
                  <p className="text-muted mb-4">
                    We use the collected information for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>Providing, operating, and maintaining our services</li>
                    <li>Improving, personalizing, and expanding our services</li>
                    <li>Understanding how users use our services</li>
                    <li>Communicating with you about products, services, and events</li>
                    <li>Sending marketing and promotional communications</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    Data Security
                  </h2>
                  <p className="text-muted">
                    We implement appropriate technical and organizational security measures designed to protect
                    the security of any personal information we process. These measures include encryption,
                    secure servers, and regular security assessments.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    Your Rights
                  </h2>
                  <p className="text-muted mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>Access and receive a copy of your personal data</li>
                    <li>Rectify inaccurate personal data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Object to processing of your personal data</li>
                    <li>Request restriction of processing</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    Contact Us
                  </h2>
                  <p className="text-muted">
                    If you have questions or comments about this Privacy Policy, please contact us at:
                    <br /><br />
                    Email: privacy@acesoftsolutions.com
                    <br />
                    Phone: +1 (234) 567-890
                    <br />
                    Address: 123 Tech Innovators Avenue, Suite 100, San Francisco, CA 94102
                  </p>
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
