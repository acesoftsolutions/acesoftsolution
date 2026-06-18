export interface CaseStudy {
  id: number;
  featured?: boolean;

  slug: string;
  title: string;

  industry: string;
  client: string;
  duration: string;

  description: string;
  image: string;

  technologies: string[];

  metrics: {
    primary: {
      label: string;
      value: string;
    };
    secondary: {
      label: string;
      value: string;
    };
  };

  challenge: string;
  solution: string;
  result: string;

  businessGoal: string;
  launchStatus: string;

  overview: string;

  objectives: string[];

  keyFeatures: string[];

  projectGallery: string[];

  businessImpacts: {
    title: string;
    value: string;
  }[];

  testimonial: {
    quote: string;
    name: string;
    role: string;
    company: string;
  };

  services: string[];

  websiteUrl?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,

    featured: true,

    slug: "enterprise-crm-platform",

    title: "Enterprise CRM Platform",

    industry: "Business Management",

    client: "TechCorp Solutions",

    duration: "4 Months",

    description:
      "A scalable CRM platform designed to centralize customer interactions, automate workflows, and improve team productivity.",

    overview:
      "TechCorp Solutions needed a modern CRM system capable of managing thousands of customer interactions across multiple departments. The goal was to eliminate disconnected systems, improve collaboration, and provide real-time business insights.",

    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600",

    projectGallery: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600",
    ],

    technologies: ["React", "Next.js", "Node.js", "MongoDB", "AWS"],

    services: [
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Cloud Deployment",
    ],

    objectives: [
      "Centralize customer data",
      "Automate sales workflows",
      "Improve team productivity",
      "Provide real-time reporting",
    ],

    keyFeatures: [
      "Customer Management",
      "Sales Pipeline Tracking",
      "Workflow Automation",
      "Analytics Dashboard",
      "Role-Based Access Control",
      "Reporting System",
    ],

    metrics: {
      primary: {
        value: "45%",
        label: "Productivity Increase",
      },

      secondary: {
        value: "15K+",
        label: "Active Users",
      },
    },

    businessImpacts: [
      {
        title: "Revenue Growth",
        value: "+32%",
      },

      {
        title: "Lead Conversion",
        value: "+41%",
      },

      {
        title: "Operational Efficiency",
        value: "+45%",
      },
    ],

    challenge:
      "Disconnected systems and manual processes reduced operational efficiency and made it difficult for teams to access customer information.",

    solution:
      "We developed a centralized CRM ecosystem featuring workflow automation, real-time analytics, role-based permissions, and seamless integrations.",

    result:
      "Improved team productivity by 45%, reduced operational overhead, and streamlined customer relationship management.",

    businessGoal: "Improve team efficiency and customer engagement.",

    launchStatus: "Delivered on schedule",

    testimonial: {
      quote:
        "Ace Soft Solution delivered a powerful CRM platform that transformed how our teams collaborate and manage customer relationships.",

      name: "David Anderson",

      role: "Chief Operations Officer",

      company: "TechCorp Solutions",
    },

    websiteUrl: "https://example.com",
  },

  {
    id: 2,

    slug: "healthcare-management-system",

    title: "Healthcare Management System",

    industry: "Healthcare",

    client: "MediCare Plus",

    duration: "6 Months",

    description:
      "Secure healthcare management solution for patient records, appointment scheduling, telemedicine, and doctor communication.",

    overview:
      "MediCare Plus required a centralized healthcare platform to digitize patient management, streamline appointment scheduling, improve doctor-patient communication, and ensure compliance with healthcare security standards. The objective was to eliminate paper-based processes while providing healthcare professionals with instant access to critical patient information.",

    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1600",

    projectGallery: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1600",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1600",
    ],

    technologies: ["Next.js", "PostgreSQL", "Node.js", "AWS"],

    services: [
      "Healthcare Software Development",
      "UI/UX Design",
      "Backend Development",
      "Cloud Infrastructure",
      "Database Architecture",
    ],

    objectives: [
      "Digitize patient records",
      "Improve appointment management",
      "Enhance doctor-patient communication",
      "Reduce administrative workload",
      "Ensure healthcare data security",
    ],

    keyFeatures: [
      "Electronic Health Records (EHR)",
      "Appointment Scheduling System",
      "Doctor Dashboard",
      "Patient Portal",
      "Telemedicine Integration",
      "Prescription Management",
      "Medical Reports & Analytics",
      "Role-Based Access Control",
    ],

    metrics: {
      primary: {
        value: "60%",
        label: "Process Efficiency",
      },

      secondary: {
        value: "25K+",
        label: "Patient Records",
      },
    },

    businessImpacts: [
      {
        title: "Administrative Time Reduction",
        value: "-60%",
      },

      {
        title: "Appointment Accuracy",
        value: "+85%",
      },

      {
        title: "Patient Satisfaction",
        value: "+40%",
      },
    ],

    challenge:
      "Healthcare providers struggled with fragmented patient management systems, manual scheduling processes, and delayed access to patient records. These inefficiencies increased administrative costs and negatively impacted patient experience.",

    solution:
      "Ace Soft Solution developed a secure healthcare ecosystem featuring centralized patient records, intelligent appointment scheduling, telemedicine support, automated notifications, and advanced analytics dashboards for healthcare professionals.",

    result:
      "Reduced administration time by 60%, improved patient engagement, enhanced operational efficiency, and enabled healthcare staff to deliver faster and more personalized patient care.",

    businessGoal: "Improve patient care and streamline healthcare operations.",

    launchStatus: "Successfully deployed",

    testimonial: {
      quote:
        "The healthcare platform developed by Ace Soft Solution transformed our operations. Patient management became seamless, appointments are better organized, and our staff can focus more on patient care rather than paperwork.",

      name: "Dr. Sarah Mitchell",

      role: "Medical Director",

      company: "MediCare Plus",
    },

    websiteUrl: "https://example-healthcare.com",
  },

  {
    id: 3,

    slug: "ecommerce-marketplace",

    title: "E-Commerce Marketplace",

    industry: "Retail & Commerce",

    client: "CommerceHub",

    duration: "5 Months",

    description:
      "A scalable multi-vendor e-commerce marketplace with secure payments, inventory management, vendor onboarding, and advanced business analytics.",

    overview:
      "CommerceHub wanted to build a modern multi-vendor marketplace capable of handling thousands of products, vendors, and customers simultaneously. The goal was to create a seamless shopping experience while providing vendors with powerful tools for inventory management, order tracking, and sales analytics.",

    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600",

    projectGallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600",
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600",
    ],

    technologies: ["React", "Node.js", "MongoDB", "Stripe"],

    services: [
      "Marketplace Development",
      "UI/UX Design",
      "Payment Gateway Integration",
      "Backend Development",
      "Cloud Deployment",
    ],

    objectives: [
      "Launch a scalable multi-vendor marketplace",
      "Increase online sales revenue",
      "Improve customer shopping experience",
      "Automate vendor management",
      "Enable real-time business analytics",
    ],

    keyFeatures: [
      "Multi-Vendor Management",
      "Secure Stripe Payments",
      "Inventory Management System",
      "Order Tracking",
      "Product Reviews & Ratings",
      "Analytics Dashboard",
      "Vendor Portal",
      "Customer Account Management",
    ],

    metrics: {
      primary: {
        value: "120%",
        label: "Revenue Growth",
      },

      secondary: {
        value: "50K+",
        label: "Monthly Users",
      },
    },

    businessImpacts: [
      {
        title: "Online Revenue Growth",
        value: "+120%",
      },

      {
        title: "Vendor Onboarding Speed",
        value: "+70%",
      },

      {
        title: "Customer Retention",
        value: "+45%",
      },
    ],

    challenge:
      "The client needed a marketplace capable of supporting rapid business growth while maintaining excellent user experience, fast performance, and secure payment processing. Managing thousands of products and vendors efficiently was a key challenge.",

    solution:
      "Ace Soft Solution developed a scalable marketplace architecture with vendor automation, secure Stripe payment integration, inventory management tools, advanced analytics, and a highly optimized shopping experience across all devices.",

    result:
      "The platform achieved 120% revenue growth within the first year, attracted over 50,000 monthly users, streamlined vendor operations, and significantly improved customer satisfaction.",

    businessGoal: "Increase online revenue and scale marketplace operations.",

    launchStatus: "Launched successfully",

    testimonial: {
      quote:
        "Ace Soft Solution delivered a marketplace platform that exceeded our expectations. The user experience, vendor management tools, and performance improvements have directly contributed to our rapid business growth.",

      name: "Michael Roberts",

      role: "Founder & CEO",

      company: "CommerceHub",
    },

    websiteUrl: "https://example-commercehub.com",
  },
  {
    id: 4,

    slug: "learning-management-system",

    title: "Learning Management System",

    industry: "Education",

    client: "EduTech Global",

    duration: "4 Months",

    description:
      "Interactive online learning platform with course management, assessments, progress tracking, and virtual classroom capabilities.",

    overview:
      "EduTech Global needed a scalable Learning Management System (LMS) to support online education, course delivery, student engagement, and performance tracking. The objective was to create a modern digital learning ecosystem capable of serving thousands of learners while providing educators with powerful course management and analytics tools.",

    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600",

    projectGallery: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1600",
    ],

    technologies: ["Next.js", "Node.js", "MongoDB", "AWS"],

    services: [
      "Educational Platform Development",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "Cloud Infrastructure",
    ],

    objectives: [
      "Enable digital learning at scale",
      "Increase student engagement",
      "Improve course completion rates",
      "Provide real-time learning analytics",
      "Support educators with advanced course management tools",
    ],

    keyFeatures: [
      "Course Management System",
      "Student Dashboard",
      "Interactive Assessments",
      "Virtual Classrooms",
      "Progress Tracking",
      "Certificates & Achievements",
      "Discussion Forums",
      "Learning Analytics Dashboard",
    ],

    metrics: {
      primary: {
        value: "70%",
        label: "Student Engagement",
      },

      secondary: {
        value: "80K+",
        label: "Students",
      },
    },

    businessImpacts: [
      {
        title: "Course Completion Rate",
        value: "+55%",
      },

      {
        title: "Student Retention",
        value: "+48%",
      },

      {
        title: "Learning Efficiency",
        value: "+70%",
      },
    ],

    challenge:
      "Traditional learning systems lacked scalability, engagement features, and data-driven insights. Students struggled to stay engaged, while educators had limited visibility into learner progress and performance.",

    solution:
      "Ace Soft Solution developed a cloud-native Learning Management System featuring interactive learning modules, virtual classrooms, assessments, progress tracking, and comprehensive analytics dashboards for educators and administrators.",

    result:
      "The platform significantly increased student engagement, improved course completion rates, enhanced learning outcomes, and enabled educators to deliver more personalized learning experiences.",

    businessGoal:
      "Drive digital learning transformation and improve educational outcomes.",

    launchStatus: "Production ready",

    testimonial: {
      quote:
        "Ace Soft Solution helped us modernize our education platform with an intuitive learning experience, powerful analytics, and scalable infrastructure. Student engagement and course completion rates have improved dramatically.",

      name: "Jennifer Wilson",

      role: "Director of Digital Learning",

      company: "EduTech Global",
    },

    websiteUrl: "https://example-edutech.com",
  },

  {
    id: 5,

    slug: "real-estate-platform",

    title: "Real Estate Portal",

    industry: "Real Estate",

    client: "Prime Properties",

    duration: "3 Months",

    description:
      "Modern real estate marketplace platform with property listings, virtual tours, CRM integration, lead automation, and advanced property search capabilities.",

    overview:
      "Prime Properties required a digital platform to streamline property discovery, improve lead management, and provide prospective buyers with an immersive property browsing experience. The objective was to modernize traditional real estate operations through automation, virtual property tours, and centralized lead tracking.",

    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600",

    projectGallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600",
    ],

    technologies: ["React", "Node.js", "MongoDB"],

    services: [
      "Real Estate Portal Development",
      "UI/UX Design",
      "Frontend Development",
      "Backend Development",
      "CRM Integration",
    ],

    objectives: [
      "Increase qualified property leads",
      "Improve buyer engagement",
      "Automate lead management",
      "Enhance property discovery experience",
      "Accelerate property sales cycles",
    ],

    keyFeatures: [
      "Advanced Property Search",
      "Interactive Property Listings",
      "Virtual Property Tours",
      "Lead Management System",
      "CRM Integration",
      "Property Comparison Tool",
      "Agent Dashboard",
      "Inquiry & Booking Management",
    ],

    metrics: {
      primary: {
        value: "40%",
        label: "Lead Conversion",
      },

      secondary: {
        value: "35K+",
        label: "Property Visitors",
      },
    },

    businessImpacts: [
      {
        title: "Qualified Leads",
        value: "+40%",
      },

      {
        title: "Property Inquiries",
        value: "+65%",
      },

      {
        title: "Sales Cycle Reduction",
        value: "-30%",
      },
    ],

    challenge:
      "Manual lead management processes slowed down response times, caused missed opportunities, and made it difficult for sales teams to effectively track potential buyers throughout the property acquisition journey.",

    solution:
      "Ace Soft Solution developed a modern real estate platform featuring advanced search capabilities, virtual property tours, CRM integration, automated lead nurturing workflows, and centralized property management tools.",

    result:
      "The platform generated more qualified leads, improved buyer engagement, accelerated sales processes, and provided real estate agents with better visibility into customer interactions.",

    businessGoal:
      "Increase qualified leads and improve property sales performance.",

    launchStatus: "Delivered successfully",

    testimonial: {
      quote:
        "Ace Soft Solution transformed our property sales process with a powerful and intuitive real estate platform. The automation features and lead management tools have significantly improved our conversion rates and customer experience.",

      name: "Robert Harrison",

      role: "Managing Director",

      company: "Prime Properties",
    },

    websiteUrl: "https://example-primeproperties.com",
  },
  {
    id: 6,

    slug: "fintech-dashboard",

    title: "FinTech Analytics Dashboard",

    industry: "Finance",

    client: "FinEdge Capital",

    duration: "5 Months",

    description:
      "Advanced financial analytics platform for reporting, forecasting, portfolio management, and real-time investment tracking.",

    overview:
      "FinEdge Capital required a modern analytics platform to provide investors, analysts, and executives with real-time financial insights. The objective was to replace manual reporting processes with an intelligent dashboard capable of delivering automated reporting, forecasting, portfolio monitoring, and data-driven investment decisions.",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",

    projectGallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600",
    ],

    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],

    services: [
      "FinTech Software Development",
      "Dashboard Design",
      "Data Visualization",
      "Backend Development",
      "Financial Reporting Automation",
    ],

    objectives: [
      "Improve financial visibility",
      "Automate reporting workflows",
      "Provide real-time portfolio insights",
      "Enhance forecasting accuracy",
      "Support faster investment decisions",
    ],

    keyFeatures: [
      "Real-Time Analytics Dashboard",
      "Portfolio Performance Tracking",
      "Automated Financial Reports",
      "Revenue Forecasting",
      "Investment Monitoring",
      "Interactive Data Visualization",
      "Role-Based Access Control",
      "Executive KPI Dashboard",
    ],

    metrics: {
      primary: {
        value: "50%",
        label: "Reporting Speed",
      },

      secondary: {
        value: "20K+",
        label: "Investors",
      },
    },

    businessImpacts: [
      {
        title: "Reporting Efficiency",
        value: "+50%",
      },

      {
        title: "Forecast Accuracy",
        value: "+35%",
      },

      {
        title: "Decision-Making Speed",
        value: "+40%",
      },
    ],

    challenge:
      "Financial teams lacked real-time access to critical performance data, resulting in delayed reporting, inefficient workflows, and slower decision-making processes. Existing systems relied heavily on spreadsheets and manual data consolidation.",

    solution:
      "Ace Soft Solution developed a secure FinTech analytics platform featuring automated reporting, real-time portfolio monitoring, advanced forecasting models, interactive visualizations, and centralized financial data management.",

    result:
      "The solution improved reporting efficiency by 50%, enabled faster executive decision-making, enhanced forecasting accuracy, and provided investors with transparent access to portfolio performance metrics.",

    businessGoal:
      "Improve financial visibility and support data-driven investment decisions.",

    launchStatus: "Enterprise launch completed",

    testimonial: {
      quote:
        "Ace Soft Solution delivered an exceptional analytics platform that transformed how we monitor investments and generate financial reports. The real-time insights and automation capabilities have significantly improved our operational efficiency.",

      name: "James Richardson",

      role: "Chief Financial Officer",

      company: "FinEdge Capital",
    },

    websiteUrl: "https://example-finedge.com",
  },
];
