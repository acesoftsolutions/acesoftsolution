"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ChevronRight, MessageCircle, ArrowRight } from "lucide-react";

import AnimatedSection from "@/components/shared/AnimatedSection";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  
  "General",
  "Services",
  "Development",
  "AI Solutions",
  "Support",
];

const faqs = [
  {
    category: "General",
    question: "What is Ace Soft Solution and what does it do?",
    answer:
      "Ace Soft Solution is a full-service software development company specializing in custom software, mobile applications, ERP systems, AI-powered solutions, and digital transformation services. We partner with startups, SMEs, and enterprises across industries to build scalable, future-ready digital products that drive measurable business growth.",
  },

  {
    category: "General",
    question: "How long has Ace Soft Solution been in business?",
    answer:
      "Ace Soft Solution has over 10 years of proven industry experience. During this time, we have successfully delivered 500+ projects for 150+ global clients across 12+ countries, maintaining a 98% client retention rate - reflecting our consistent commitment to quality, innovation, and long-term client partnerships.",
  },

  {
    category: "General",
    question: "Which industries does Ace Soft Solution serve?",
    answer:
      "We serve a wide range of industries including healthcare, e-commerce, education, fintech, real estate, logistics, manufacturing, retail, hospitality, and professional services. Our cross-industry expertise allows us to build domain-specific solutions tailored to each sector's unique workflows, compliance requirements, and growth objectives.",
  },

  {
    category: "General",
    question:
      "Where is Ace Soft Solution located and do you work with international clients?",
    answer:
      "Ace Soft Solution is headquartered in India and actively works with clients across 12+ countries including the US, UK, UAE, Australia, Canada, and Europe. We operate across global time zones and use collaborative tools to ensure seamless communication and project transparency regardless of your location.",
  },

  {
    category: "General",
    question:
      "What makes Ace Soft Solution different from other software companies?",
    answer:
      "What sets us apart is our combination of deep technical expertise, business-first thinking, and a transparent 6-Step Delivery Framework that ensures every project is delivered on time, within budget, and to the highest quality standard. We don't just build software - we build solutions that solve real business problems and deliver measurable ROI.",
  },

  {
    category: "General",
    question:
      "Can Ace Soft Solution handle both small and large-scale projects?",
    answer:
      "Yes. We work with projects of all scales — from MVPs and startup prototypes to complex enterprise-grade platforms and large-scale ERP implementations. Our agile development methodology and scalable team structure allow us to adapt to any project size, scope, or timeline requirement.",
  },

  {
    category: "General",
    question: "Do you sign NDAs and maintain client confidentiality?",
    answer:
      "Absolutely. We take data privacy and intellectual property protection extremely seriously. Before any project begins, we sign mutual Non-Disclosure Agreements (NDAs) and adhere to strict confidentiality protocols. All client data, project details, and proprietary information are fully protected throughout and after the engagement.",
  },

  {
    category: "General",
    question: "How do I get started with Ace Soft Solution?",
    answer:
      "Getting started is simple. You can reach out through our Contact Us page, fill out our project inquiry form, or schedule a free consultation call. Our team will respond within 24 hours to understand your requirements, discuss your goals, and propose a tailored solution roadmap at no obligation.",
  },

  {
    category: "General",
    question: "Does Ace Soft Solution provide free consultations?",
    answer:
      "Yes. We offer a complimentary initial consultation for all new clients. During this session, our expert team will evaluate your project requirements, identify key technical challenges, and provide strategic recommendations — completely free, with no commitment required.",
  },

  {
    category: "General",
    question: "What is Ace Soft Solution's client satisfaction rating?",
    answer:
      "Ace Soft Solution holds a 4.9/5 rating based on verified client feedback, with a 98% client retention rate. Our clients consistently highlight our technical excellence, transparent communication, on-time delivery, and ability to translate complex business needs into elegant, high-performing digital solutions.",
  },

  // Services FAQs

  {
    category: "Services",
    question: "What services does Ace Soft Solution offer?",
    answer:
      "Ace Soft Solution offers a comprehensive range of technology services including custom software development, mobile app development (iOS & Android), ERP software solutions, AI & machine learning integration, UI/UX design, web development, e-commerce development, digital marketing, cloud infrastructure & DevOps, and ongoing technical support & maintenance.",
  },

  {
    category: "Services",
    question:
      "Do you offer custom software development for specific business needs?",
    answer:
      "Yes. Custom software development is our core expertise. We analyze your specific business workflows, operational challenges, and growth objectives to design and build tailor-made software solutions — from CRM systems and SaaS platforms to industry-specific tools — that align precisely with your processes and deliver measurable efficiency gains.",
  },

  {
    category: "Services",
    question: "Can you develop both web and mobile applications?",
    answer:
      "Absolutely. We develop high-performance web applications using modern frameworks such as React, Angular, Vue.js, Node.js, and Laravel, as well as native and cross-platform mobile apps for iOS (Swift) and Android (Kotlin/Java) using Flutter and React Native. We ensure consistent performance, UX quality, and scalability across all platforms.",
  },

  {
    category: "Services",
    question: "Do you offer UI/UX design as a standalone service?",
    answer:
      "Yes. Our UI/UX design team offers standalone design services including user research, wireframing, prototyping, interaction design, and visual design. Whether you need a full product design from scratch or a redesign of an existing interface, we deliver user-centric designs that maximize engagement, usability, and conversion performance.",
  },

  {
    category: "Services",
    question: "What e-commerce platforms and technologies do you work with?",
    answer:
      "We build custom e-commerce solutions as well as implement and customize platforms such as Shopify, WooCommerce, Magento, and custom-built storefronts. Our e-commerce development services include product catalog management, secure payment gateway integration, inventory systems, order management, and conversion rate optimization.",
  },

  {
    category: "Services",
    question:
      "Do you provide digital marketing services alongside development?",
    answer:
      "Yes. We offer integrated digital marketing services including SEO, pay-per-click advertising (PPC/Google Ads), social media marketing, content marketing, email marketing, and conversion rate optimization. This allows clients to launch their digital products and immediately drive qualified traffic and leads through a single trusted partner.",
  },

  {
    category: "Services",
    question:
      "Can you integrate third-party APIs and tools into existing systems?",
    answer:
      "Yes. We have extensive experience integrating third-party APIs, payment gateways (Stripe, PayPal, Razorpay), CRM systems (Salesforce, HubSpot), communication platforms (Twilio, SendGrid), logistics APIs, and enterprise tools into both new and existing software systems — ensuring seamless data flow and operational efficiency.",
  },

  {
    category: "Services",
    question: "Do you offer cloud migration and DevOps services?",
    answer:
      "Yes. Our cloud and DevOps team specializes in cloud migration strategies, infrastructure setup on AWS, Azure, and Google Cloud, CI/CD pipeline implementation, containerization using Docker and Kubernetes, server monitoring, auto-scaling architecture, and ongoing cloud cost optimization for enterprises at any stage of digital transformation.",
  },

  {
    category: "Services",
    question: "Can you redesign or upgrade our existing software or website?",
    answer:
      "Absolutely. We offer comprehensive software audit, redesign, and modernization services. Whether your existing system needs a UI overhaul, performance optimization, technology migration, or a full re-architecture, our team conducts a thorough technical assessment and delivers a structured upgrade roadmap to maximize your investment.",
  },

  {
    category: "Services",
    question: "Do you offer white-label software development services?",
    answer:
      "Yes. We provide white-label software development for agencies, SaaS companies, and technology resellers. Our team operates as a silent development partner — building fully branded, client-ready products under your label with complete confidentiality, quality assurance, and on-time delivery guaranteed.",
  },

  // Development FAQs
  {
    category: "Development",
    question: "What is your software development methodology?",
    answer:
      "We follow an Agile development methodology with structured sprint cycles, regular milestone reviews, and continuous client collaboration. Our proven 6-Step Delivery Framework — covering Discovery, Planning, Design, Development, Testing & Launch, and Growth & Support — ensures complete transparency, predictable delivery, and consistently high-quality outcomes.",
  },

  {
    category: "Development",
    question: "What programming languages and frameworks does your team use?",
    answer:
      "Our development team is proficient across a wide technology stack including Python, JavaScript, TypeScript, PHP, Java, Swift, Kotlin, and Dart. For frameworks, we work with React, Angular, Vue.js, Node.js, Laravel, Django, Flutter, React Native, and Spring Boot — selecting the optimal stack based on your project's specific performance, scalability, and budget requirements.",
  },

  {
    category: "Development",
    question: "How long does it typically take to develop a software product?",
    answer:
      "Development timelines vary based on project complexity and scope. A standard MVP or basic web application typically takes 6–12 weeks. Mid-complexity platforms with custom features generally require 3–6 months. Large-scale enterprise systems or ERP implementations may take 6–12 months or more. We provide a detailed project timeline during the planning phase with clear milestone breakdowns.",
  },

  {
    category: "Development",
    question: "How do you ensure the quality of your software development?",
    answer:
      "We implement a rigorous multi-layered quality assurance process including unit testing, integration testing, functional testing, performance load testing, security vulnerability assessments, and user acceptance testing (UAT). Our dedicated QA engineers ensure every product meets industry-standard benchmarks before release, with zero-compromise on performance or security.",
  },

  {
    category: "Development",
    question: "Do you follow secure coding practices?",
    answer:
      "Yes. Security is embedded into every layer of our development process. We follow OWASP security guidelines, implement end-to-end data encryption, conduct regular code reviews and vulnerability scanning, ensure secure authentication protocols (OAuth 2.0, JWT), and perform penetration testing before deployment — ensuring your software is protected against modern cybersecurity threats.",
  },

  {
    category: "Development",
    question: "Can you work with our existing in-house development team?",
    answer:
      "Yes. We offer flexible engagement models that include team augmentation, where our developers integrate directly into your existing workflow and tools. We adapt to your project management platforms (Jira, Trello, Asana), communication channels (Slack, Teams), and version control systems (Git, Bitbucket) to ensure smooth, frictionless collaboration.",
  },

  {
    category: "Development",
    question:
      "How do you handle project management and client communication during development?",
    answer:
      "Each project is assigned a dedicated Project Manager who serves as your single point of contact throughout the engagement. We conduct regular progress updates, weekly sprint review calls, and provide real-time access to project tracking dashboards. Clients maintain full visibility into every development milestone, ensuring no surprises at any stage.",
  },

  {
    category: "Development",
    question: "What programming languages and frameworks does your team use?",
    answer:
      "We understand that business needs evolve. Our agile process is built to accommodate change. Requirement changes are managed through a structured change request process — we assess the impact on timeline and budget, communicate transparently, and adjust the development roadmap accordingly — ensuring flexibility without compromising delivery quality.",
  },

  {
    category: "Development",
    question: "Do you provide source code ownership and complete IP rights?",
    answer:
      "Yes. Upon full project completion and payment, clients receive complete source code ownership and full intellectual property rights for the developed product. We transfer all code, documentation, design assets, and credentials — ensuring you have 100% control and ownership of your digital product with no vendor lock-in.",
  },

  {
    category: "Development",
    question: "What databases and cloud platforms do you work with?",
    answer:
      "We work with a comprehensive range of databases including MySQL, PostgreSQL, MongoDB, Redis, Firebase, and Microsoft SQL Server. For cloud infrastructure, we deploy and manage solutions on Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP) - selecting the optimal environment based on your security, scalability, and cost requirements.",
  },


  // AI Solutions FAQs

  {
    category: "AI Solutions",
    question: "What AI and machine learning services does Ace Soft Solution offer?",
    answer:
      "We offer end-to-end AI and machine learning services including custom AI model development, natural language processing (NLP), computer vision, predictive analytics, recommendation engines, intelligent process automation (RPA), AI chatbot development, large language model (LLM) integration, and AI-powered business intelligence solutions tailored to your specific industry and use case.",
  },

  {
    category: "AI Solutions",
    question: "Can you integrate AI into our existing software or business systems?",
    answer:
      "Yes. We specialize in AI integration into existing platforms. Whether you need to add a predictive analytics layer to your ERP, integrate an NLP-powered chatbot into your CRM, or embed computer vision into your production workflow, our AI engineers design and implement seamless integration solutions that enhance your existing systems without requiring full rebuilds.",
  },

   {
    category: "AI Solutions",
    question: "Do you develop custom AI chatbots and virtual assistants?",
    answer:
      "Yes. We build custom AI chatbots and virtual assistants powered by large language models (LLMs) such as GPT-4, Claude, and Gemini, as well as custom-trained models. Our chatbots handle customer support automation, lead qualification, appointment scheduling, internal knowledge base queries, and multi-channel deployment across web, mobile, and messaging platforms.",
  },

   {
    category: "AI Solutions",
    question: "What industries can benefit from your AI solutions?",
    answer:
      "AI solutions from Ace Soft Solution are applicable across virtually every industry. Key sectors include healthcare (diagnostic AI, patient data analysis), e-commerce (personalization, demand forecasting), fintech (fraud detection, credit scoring), logistics (route optimization, predictive maintenance), manufacturing (quality control, predictive analytics), education (adaptive learning), and retail (inventory intelligence and customer behavior analysis).",
  },

   {
    category: "AI Solutions",
    question: "How do you ensure AI models are accurate and unbiased?",
    answer:
      "We follow responsible AI development practices including rigorous dataset curation, bias detection and mitigation protocols, model validation across diverse data samples, continuous performance monitoring post-deployment, and regular model retraining. We also document model decision logic to ensure interpretability and compliance with emerging AI governance standards.",
  },

   {
    category: "AI Solutions",
    question: "CCan you build AI-powered data analytics and business intelligence tools?",
    answer:
      "Yes. We develop custom AI-powered analytics dashboards, predictive reporting tools, and business intelligence platforms that transform raw data into actionable insights. Our solutions integrate with existing data warehouses, ERP systems, and third-party data sources to deliver real-time intelligence that supports faster, more confident business decision-making.",
  },

   {
    category: "AI Solutions",
    question: "What is the difference between AI automation and traditional automation?",
    answer:
      "Traditional automation follows fixed, rule-based logic and can only handle predefined scenarios. AI automation, by contrast, uses machine learning and predictive models to handle variable, unstructured, and evolving scenarios — learning and improving with each interaction. AI automation is therefore more adaptive, scalable, and capable of handling complex, real-world business processes that traditional automation cannot.",
  },

   {
    category: "AI Solutions",
    question: "How long does it take to develop and deploy an AI solution?",
    answer:
      "Timelines depend on the complexity of the AI use case and data availability. A pre-trained LLM integration or chatbot can typically be deployed in 4–8 weeks. Custom machine learning model development, training, and deployment generally takes 2–6 months depending on data volume, model complexity, and required accuracy thresholds. We provide a detailed timeline following an initial AI feasibility assessment.",
  },

   {
    category: "AI Solutions",
    question: "Do you provide AI model training using our own business data?",
    answer:
      "Yes. We offer custom AI model training using your proprietary business data, industry-specific datasets, or curated third-party datasets — subject to data privacy compliance. Our data science team handles data preprocessing, feature engineering, model selection, training, validation, and deployment, ensuring the AI model is precisely tuned to your business context and objectives.",
  },

   {
    category: "AI Solutions",
    question: "Is our data secure when you develop AI solutions for us?",
    answer:
      "Absolutely. Data security is a top priority in all our AI engagements. We implement end-to-end data encryption, strict access control protocols, GDPR-compliant data handling practices, and execute mutual NDAs before any data sharing occurs. All training data and model outputs remain fully owned by and confidential to the client throughout and after the engagement.",
  },


  // Support FAQs
  {
    category: "Support",
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes. We provide comprehensive post-launch support and maintenance packages for all projects we deliver. Our support services include bug fixing, performance monitoring, security updates, feature enhancements, server management, and technical troubleshooting — ensuring your product remains stable, secure, and optimized long after go-live.",
  },

  {
    category: "Support",
    question: "What support plans do you offer?",
    answer:
      "We offer flexible support plans tailored to your needs: Basic Support (bug fixes and critical updates), Standard Support (bug fixes, performance monitoring, and minor enhancements), and Premium Support (dedicated support team, priority response, proactive monitoring, feature development, and strategic growth consultation). All plans include defined SLAs and dedicated communication channels.",
  },

    {
    category: "Support",
    question: "What is your typical response time for support requests?",
    answer:
      "Response times depend on the priority level of the issue. Critical production-blocking issues are addressed within 2–4 hours. High-priority issues receive a response within 8 business hours. Standard support tickets are responded to within 24 business hours. Premium support clients receive priority queue access with guaranteed same-day response for all severity levels.",
  },

    {
    category: "Support",
    question: "Do you offer 24/7 technical support?",
    answer:
      "Yes. Our Premium Support plan includes 24/7 monitoring and emergency technical support for mission-critical systems. For standard and basic plans, dedicated support is available during business hours with after-hours emergency escalation procedures in place. All clients receive direct access to a dedicated support contact for streamlined issue resolution.",
  },

    {
    category: "Support",
    question: "Can you take over support and maintenance of a project built by another company?",
    answer:
      "Yes. We offer third-party codebase adoption and ongoing support services. Our team conducts a thorough technical audit of the existing system, documents the architecture, identifies any technical debt or security vulnerabilities, and then transitions into a structured maintenance and support engagement — giving you continuity without the need to rebuild from scratch.",
  },

    {
    category: "Support",
    question: "How do you handle bug fixes after product launch?",
    answer:
      "All bugs identified within 30 days of launch are addressed free of charge under our standard warranty policy. Post-warranty bugs are handled through your active support plan or on a time-and-materials basis. Critical bugs that affect core functionality or user experience are always treated as priority issues regardless of plan level.",
  },

    {
    category: "Support",
    question: "Do you provide training for our team on systems you develop?",
    answer:
      "Yes. We provide comprehensive training and documentation for all products we deliver. This includes user manuals, admin guides, video walkthroughs, and live training sessions for your team to ensure confident, independent operation of the system. Training can be delivered remotely or on-site depending on project requirements and client preference.",
  },

    {
    category: "Support",
    question: "Can you scale or upgrade our software after the initial launch?",
    answer:
      "Absolutely. We design all our products with future scalability in mind. Post-launch, we offer feature development, module additions, third-party integrations, infrastructure scaling, and technology upgrades as your business grows. Our Growth & Support package is specifically designed to evolve your product strategically alongside your expanding business needs.",
  },

    {
    category: "Support",
    question: "Do you offer performance monitoring for live applications?",
    answer:
      "Yes. We implement real-time application performance monitoring (APM) using industry-leading tools such as New Relic, Datadog, and AWS CloudWatch. Our monitoring setup tracks uptime, server response times, error rates, API performance, and database query efficiency — enabling proactive identification and resolution of issues before they impact your end users.",
  },

    {
    category: "Support",
    question: "How do I raise a support ticket or contact your support team?",
    answer:
      "You can raise a support ticket through our dedicated client support portal, email our support team directly, or reach out via your assigned project manager's contact. All tickets are logged, prioritized by severity, assigned to the appropriate technical resource, and tracked to resolution with full status updates communicated to you at every stage.",
  },

  
 
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("General");

  const [searchTerm, setSearchTerm] = useState("");

 const filteredFaqs = useMemo(() => {
  return faqs.filter((faq) => {
    const categoryMatch = faq.category === activeCategory;

    const searchMatch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });
}, [activeCategory, searchTerm]);
  return (
    <section className="bg-[#F8FAFC] py-14 lg:py-12">
      {" "}
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}

        <AnimatedSection>
          <div className="mx-auto max-w-4xl text-center">
            <span
              className="
            inline-flex
            items-center
            rounded-full
            border
            border-blue-100
            bg-blue-50
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-700
          "
            >
              Frequently Asked Questions
            </span>

            <h2
              className="
            mt-6
            text-3xl
            font-bold
            text-slate-900
            md:text-4xl
            xl:text-5xl
          "
            >
              Get Answers To
              <span
                className="
              block
              bg-gradient-to-r
              from-blue-700
              via-cyan-500
              to-teal-500
              bg-clip-text
              text-transparent
            "
              >
                Your Most Common Questions
              </span>
            </h2>

            <p
              className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-relaxed
            text-slate-600
          "
            >
              Find detailed answers about our services, technology stack,
              development process, AI solutions, pricing, and ongoing support,  
              everything you need to make a confident decision.
            </p>
          </div>
        </AnimatedSection>

        {/* Main Layout */}

        <div
          className="
        mt-20
        grid
        gap-8
        lg:grid-cols-[280px_1fr]
      "
        >
          {/* Sidebar */}

          <AnimatedSection>
            <div className="lg:sticky lg:top-28">
              <div
                className="
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
            "
              >
                <h3
                  className="
                mb-4
                px-3
                text-sm
                font-semibold
                uppercase
                tracking-wider
                text-slate-500
              "
                >
                  Categories
                </h3>

                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-2xl
                      px-4
                      py-4
                      text-left
                      font-medium
                      transition-all
                      duration-300

                      ${
                        activeCategory === category
                          ? `
                            border
                            border-blue-200
                            bg-blue-50
                            text-blue-700
                          `
                          : `
                            border
                            border-transparent
                            text-slate-700
                            hover:bg-slate-50
                          `
                      }
                    `}
                    >
                      {category}

                      <ChevronRight className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* FAQ Content */}

          <AnimatedSection>
            <div>
              {/* Search */}

              <div
                className="
              mb-8
              flex
              items-center
              gap-3
              rounded-[24px]
              border
              border-slate-200
              bg-white
              px-5
              py-4
              shadow-sm
            "
              >
                <Search className="h-5 w-5 text-slate-400" />

                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="
                w-full
                bg-transparent
                outline-none
                placeholder:text-slate-400
              "
                />
              </div>

              {/* FAQ List */}

              <div
                className="
              rounded-[32px]
              border
              border-slate-200
              bg-white
              shadow-sm
            "
              >
                <Accordion type="single" collapsible className="w-full">
                  {filteredFaqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="
                      border-b
                      border-slate-200
                      px-6
                      last:border-none
                    "
                    >
                      <AccordionTrigger
                        className="
                        py-7
                        text-left
                        text-lg
                        font-semibold
                        text-slate-900
                        hover:no-underline
                      "
                      >
                        {faq.question}
                      </AccordionTrigger>

                      <AccordionContent
                        className="
                        pb-7
                        leading-relaxed
                        text-slate-600
                      "
                      >
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {filteredFaqs.length === 0 && (
                  <div className="p-10 text-center">
                    <p className="text-slate-500">
                      No FAQs found matching your search.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
