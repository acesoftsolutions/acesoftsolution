'use client';

import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/shared/ScrollProgress';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function TermsPage() {
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
                Terms of <span className="text-gradient">Service</span>
              </h1>
              <p className="text-muted text-lg">
                Last updated: March 2024
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="section-padding bg-dark-light">
          <div className="container-custom max-w-4xl">
            <div className="space-y-8">
              <AnimatedSection>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    Acceptance of Terms
                  </h2>
                  <p className="text-muted">
                    By accessing and using the services provided by Ace Soft Solution, you acknowledge that
                    you have read, understood, and agree to be bound by these Terms of Service. If you do
                    not agree to these terms, please do not use our services.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    Services Description
                  </h2>
                  <p className="text-muted">
                    Ace Soft Solution provides IT services including but not limited to web development,
                    mobile app development, digital marketing, UI/UX design, and consulting services.
                    The specific services and deliverables will be outlined in individual project agreements.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    Client Responsibilities
                  </h2>
                  <p className="text-muted mb-4">
                    As a client, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>Provide accurate and complete project requirements</li>
                    <li>Respond to requests for information in a timely manner</li>
                    <li>Provide necessary access and resources for project completion</li>
                    <li>Review and provide feedback within agreed timeframes</li>
                    <li>Make payments according to agreed terms</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    Intellectual Property
                  </h2>
                  <p className="text-muted mb-4">
                    Upon full payment, clients receive ownership of custom work created specifically for their project.
                    Ace Soft Solution retains ownership of:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted">
                    <li>Pre-existing tools, frameworks, and components</li>
                    <li>Internal processes and methodologies</li>
                    <li>General knowledge and skills acquired during the project</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    Payment Terms
                  </h2>
                  <p className="text-muted">
                    Payment terms will be specified in individual project proposals and contracts.
                    Late payments may incur interest charges and may result in project suspension.
                    All fees are non-refundable unless otherwise specified in the project agreement.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    Limitation of Liability
                  </h2>
                  <p className="text-muted">
                    Ace Soft Solution shall not be liable for any indirect, incidental, special, consequential,
                    or punitive damages resulting from your use or inability to use our services.
                    Our total liability shall not exceed the amount paid for the specific service giving rise to the claim.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.6}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    Governing Law
                  </h2>
                  <p className="text-muted">
                    These Terms of Service shall be governed by and construed in accordance with the laws of
                    the State of California, without regard to its conflict of law provisions. Any disputes
                    shall be resolved through arbitration in San Francisco, California.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.7}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    Changes to Terms
                  </h2>
                  <p className="text-muted">
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective
                    immediately upon posting on our website. Your continued use of our services after any changes
                    indicates your acceptance of the modified terms.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.8}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="font-poppins text-2xl font-bold text-white mb-4">
                    Contact
                  </h2>
                  <p className="text-muted">
                    If you have any questions about these Terms of Service, please contact us at:
                    <br /><br />
                    Email: legal@acesoftsolutions.com
                    <br />
                    Phone: +1 (234) 567-890
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
