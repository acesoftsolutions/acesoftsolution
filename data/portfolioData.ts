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

    slug: "enterprise-crm-software-development",

    title: "Custom Enterprise CRM Software Development",

    industry: "Enterprise Software",

    client: "Confidential Enterprise Client",

    duration: "5 Months",

    description:
      "Designed and developed a custom enterprise CRM platform that centralized customer management, automated sales workflows, and improved operational efficiency across multiple business departments.",

    overview:
      "A rapidly growing enterprise needed a centralized CRM platform to replace multiple disconnected spreadsheets and legacy tools. The objective was to improve customer relationship management, automate repetitive business processes, provide real-time reporting, and create a scalable solution capable of supporting future business growth.",

    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600",

    projectGallery: [
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "AWS",
    ],

    services: [
      "Business Analysis",
      "UI/UX Design",
      "Custom Software Development",
      "API Integration",
      "Cloud Deployment",
      "Quality Assurance",
    ],

    objectives: [
      "Centralize customer and sales data",
      "Automate lead and sales workflows",
      "Improve collaboration across departments",
      "Provide real-time business insights",
      "Build a scalable cloud-based CRM platform",
    ],

    keyFeatures: [
      "Customer Relationship Management",
      "Lead & Opportunity Management",
      "Sales Pipeline Tracking",
      "Workflow Automation",
      "Task & Activity Management",
      "Role-Based Access Control",
      "Advanced Analytics Dashboard",
      "Custom Reports",
      "Notification System",
      "Third-Party API Integration",
    ],

    metrics: {
      primary: {
        value: "40%",
        label: "Operational Efficiency Improved",
      },

      secondary: {
        value: "10K+",
        label: "Customer Records Managed",
      },
    },

    businessImpacts: [
      {
        title: "Administrative Work Reduced",
        value: "-35%",
      },

      {
        title: "Sales Process Efficiency",
        value: "+40%",
      },

      {
        title: "Customer Response Time",
        value: "-50%",
      },
    ],

    challenge:
      "The client relied on disconnected spreadsheets, manual reporting, and multiple standalone applications that created data duplication, inconsistent customer records, slow communication between teams, and limited visibility into sales performance.",

    solution:
      "We developed a fully customized cloud-based CRM platform that unified customer information, automated lead management and sales workflows, integrated existing business systems, and delivered real-time dashboards for management and sales teams.",

    result:
      "The new CRM platform streamlined daily operations, reduced manual effort, improved collaboration between departments, accelerated customer response times, and provided leadership with actionable business insights for informed decision-making.",

    businessGoal:
      "Digitize customer relationship management while improving productivity, collaboration, and long-term business scalability.",

    launchStatus: "Successfully Delivered",

    testimonial: {
      quote:
        "The new CRM platform significantly simplified our daily operations and gave our teams a single source of truth for customer data. Automation and reporting have greatly improved productivity and decision-making.",

      name: "Operations Manager",

      role: "Enterprise Operations",

      company: "Confidential Client",
    },

    websiteUrl: "",
  },

  {
    id: 2,

    featured: true,

    slug: "healthcare-management-system",

    title: "Custom Healthcare Management System",

    industry: "Healthcare",

    client: "Multi-Specialty Healthcare Provider",

    duration: "6 Months",

    description:
      "Developed a secure healthcare management system that streamlined patient registration, appointment scheduling, electronic medical records, billing, and administrative workflows across multiple departments.",

    overview:
      "A growing healthcare organization required a centralized digital platform to manage patient records, appointments, billing, laboratory reports, and daily hospital operations. The goal was to reduce administrative workload, improve patient experience, and digitize healthcare workflows with a secure, scalable solution.",

    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600",

    projectGallery: [
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1600",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1600",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "AWS",
    ],

    services: [
      "Healthcare Software Consulting",
      "UI/UX Design",
      "Custom Software Development",
      "API Integration",
      "Cloud Deployment",
      "Quality Assurance",
    ],

    objectives: [
      "Digitize patient management",
      "Automate appointment scheduling",
      "Improve hospital operations",
      "Centralize medical records",
      "Reduce administrative workload",
    ],

    keyFeatures: [
      "Patient Registration",
      "Appointment Scheduling",
      "Electronic Medical Records (EMR)",
      "Doctor & Staff Management",
      "Laboratory Management",
      "Prescription Management",
      "Billing & Invoicing",
      "Role-Based Access Control",
      "Analytics Dashboard",
      "Notification System",
    ],

    metrics: {
      primary: {
        value: "50%",
        label: "Administrative Work Reduced",
      },

      secondary: {
        value: "25K+",
        label: "Patient Records Managed",
      },
    },

    businessImpacts: [
      {
        title: "Appointment Efficiency",
        value: "+45%",
      },

      {
        title: "Patient Waiting Time",
        value: "-35%",
      },

      {
        title: "Operational Productivity",
        value: "+40%",
      },
    ],

    challenge:
      "The healthcare provider relied on manual paperwork and disconnected software systems, making patient management, appointment scheduling, billing, and medical record access inefficient and time-consuming.",

    solution:
      "We developed a centralized healthcare management platform that unified patient records, automated appointment scheduling, streamlined billing, digitized medical documentation, and provided secure access for doctors, staff, and administrators.",

    result:
      "The new healthcare management system improved operational efficiency, reduced manual administrative tasks, enhanced patient experiences, and provided healthcare professionals with quick access to accurate medical information.",

    businessGoal:
      "Digitize healthcare operations to improve patient care, operational efficiency, and long-term scalability.",

    launchStatus: "Successfully Delivered",

    testimonial: {
      quote:
        "The platform transformed how we manage patient care and daily operations. Our staff now works more efficiently, and patients enjoy a much smoother healthcare experience.",

      name: "Hospital Administrator",

      role: "Operations Department",

      company: "Healthcare Provider",
    },

    websiteUrl: "",
  },

  {
    id: 3,

    featured: true,

    slug: "ecommerce-marketplace",

    title: "Multi-Vendor eCommerce Marketplace Development",

    industry: "Retail & eCommerce",

    client: "Online Retail Marketplace",

    duration: "5 Months",

    description:
      "Designed and developed a scalable multi-vendor eCommerce marketplace that enables multiple sellers to manage products, process orders, accept secure payments, and deliver seamless shopping experiences across web and mobile platforms.",

    overview:
      "A fast-growing retail business wanted to launch a modern multi-vendor marketplace where vendors could independently manage their stores while customers enjoyed a smooth shopping experience. The platform required secure payment processing, inventory management, vendor dashboards, order tracking, and a scalable architecture capable of supporting future growth.",

    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600",

    projectGallery: [
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=1600",
      "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],

    services: [
      "Business Analysis",
      "UI/UX Design",
      "Marketplace Development",
      "Backend Development",
      "Payment Gateway Integration",
      "Cloud Deployment",
    ],

    objectives: [
      "Build a scalable multi-vendor marketplace",
      "Simplify vendor onboarding",
      "Improve customer shopping experience",
      "Automate order management",
      "Support business growth",
    ],

    keyFeatures: [
      "Multi-Vendor Management",
      "Product Catalog Management",
      "Inventory Management",
      "Secure Payment Gateway",
      "Order & Shipment Tracking",
      "Vendor Dashboard",
      "Customer Dashboard",
      "Ratings & Reviews",
      "Coupon & Promotion Management",
      "Sales Analytics Dashboard",
    ],

    metrics: {
      primary: {
        value: "55%",
        label: "Order Processing Faster",
      },

      secondary: {
        value: "50K+",
        label: "Products Managed",
      },
    },

    businessImpacts: [
      {
        title: "Online Sales Growth",
        value: "+48%",
      },

      {
        title: "Vendor Onboarding Time",
        value: "-60%",
      },

      {
        title: "Customer Retention",
        value: "+35%",
      },
    ],

    challenge:
      "The client needed a centralized marketplace capable of supporting multiple vendors, thousands of products, secure transactions, inventory synchronization, and real-time order management without relying on multiple disconnected systems.",

    solution:
      "We developed a custom multi-vendor eCommerce platform featuring independent vendor dashboards, inventory management, secure payment integration, order tracking, customer management, promotional tools, and powerful analytics for business growth.",

    result:
      "The marketplace successfully streamlined vendor operations, accelerated order fulfillment, improved customer satisfaction, and provided a scalable foundation for expanding product categories and seller partnerships.",

    businessGoal:
      "Launch a scalable digital marketplace that increases online sales while delivering a seamless shopping experience for customers and vendors.",

    launchStatus: "Successfully Delivered",

    testimonial: {
      quote:
        "The marketplace exceeded our expectations. Vendor management became effortless, order processing improved significantly, and the customer experience has been outstanding since launch.",

      name: "Business Director",

      role: "Marketplace Operations",

      company: "Online Retail Marketplace",
    },

    websiteUrl: "",
  },
  {
    id: 4,

    featured: true,

    slug: "learning-management-system",

    title: "Custom Learning Management System (LMS)",

    industry: "Education",

    client: "EdTech Company",

    duration: "5 Months",

    description:
      "Developed a modern Learning Management System (LMS) that enables educational institutions and training providers to deliver online courses, manage learners, conduct assessments, and track learning progress through a centralized digital platform.",

    overview:
      "An EdTech company required a scalable Learning Management System to support online education, instructor-led training, and corporate learning programs. The platform needed to provide course management, live classes, assessments, certifications, learner analytics, and a seamless experience across web and mobile devices.",

    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600",

    projectGallery: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600",
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "AWS",
      "WebRTC",
    ],

    services: [
      "Product Strategy",
      "UI/UX Design",
      "LMS Development",
      "API Integration",
      "Cloud Deployment",
      "Quality Assurance",
    ],

    objectives: [
      "Digitize learning experiences",
      "Simplify course management",
      "Enable virtual classrooms",
      "Track learner progress",
      "Support scalable online education",
    ],

    keyFeatures: [
      "Course Management",
      "Learning Dashboard",
      "Virtual Classrooms",
      "Assignment Management",
      "Online Assessments & Quizzes",
      "Certificates & Course Completion",
      "Student Progress Tracking",
      "Instructor Management",
      "Discussion Forums",
      "Analytics & Reporting",
    ],

    metrics: {
      primary: {
        value: "60%",
        label: "Administrative Tasks Reduced",
      },

      secondary: {
        value: "20K+",
        label: "Active Learners",
      },
    },

    businessImpacts: [
      {
        title: "Course Completion Rate",
        value: "+38%",
      },

      {
        title: "Student Engagement",
        value: "+42%",
      },

      {
        title: "Training Administration",
        value: "-50%",
      },
    ],

    challenge:
      "The client relied on multiple disconnected tools for course delivery, learner management, assessments, and reporting, making administration complex while limiting engagement and scalability.",

    solution:
      "We developed a centralized Learning Management System that streamlined course creation, virtual learning, assessments, learner management, certification, and real-time performance analytics within a secure cloud-based platform.",

    result:
      "The LMS significantly improved learner engagement, simplified academic administration, automated training workflows, and provided educators with actionable insights to enhance learning outcomes.",

    businessGoal:
      "Build a scalable digital learning platform that delivers engaging educational experiences while simplifying academic and training management.",

    launchStatus: "Successfully Delivered",

    testimonial: {
      quote:
        "The new LMS has completely transformed our online learning experience. Course management is easier, learner engagement has improved, and our instructors now have the tools they need to deliver high-quality education.",

      name: "Academic Program Manager",

      role: "Learning & Development",

      company: "EdTech Company",
    },

    websiteUrl: "",
  },

  {
    id: 5,

    featured: true,

    slug: "real-estate-platform",

    title: "Custom Real Estate Platform Development",

    industry: "Real Estate",

    client: "Property Management Company",

    duration: "6 Months",

    description:
      "Developed a comprehensive real estate platform that enables property listings, lead management, virtual property tours, agent collaboration, and seamless property buying, selling, and renting experiences.",

    overview:
      "A growing real estate company required a modern digital platform to manage residential and commercial property listings, automate lead management, simplify agent workflows, and deliver an engaging property search experience for buyers, sellers, landlords, and tenants. The platform was designed to improve operational efficiency while supporting long-term business growth.",

    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600",

    projectGallery: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Google Maps API",
      "AWS",
    ],

    services: [
      "Business Analysis",
      "UI/UX Design",
      "Custom Software Development",
      "API Integration",
      "Cloud Deployment",
      "Quality Assurance",
    ],

    objectives: [
      "Digitize property management",
      "Simplify property discovery",
      "Improve lead conversion",
      "Automate agent workflows",
      "Build a scalable PropTech platform",
    ],

    keyFeatures: [
      "Property Listing Management",
      "Advanced Property Search",
      "Interactive Maps",
      "Virtual Property Tours",
      "Lead Management System",
      "Agent Dashboard",
      "Property Inquiry Management",
      "Appointment Scheduling",
      "Document Management",
      "Analytics Dashboard",
    ],

    metrics: {
      primary: {
        value: "45%",
        label: "Lead Conversion Improved",
      },

      secondary: {
        value: "12K+",
        label: "Properties Managed",
      },
    },

    businessImpacts: [
      {
        title: "Property Inquiries",
        value: "+52%",
      },

      {
        title: "Sales Process Efficiency",
        value: "+40%",
      },

      {
        title: "Administrative Work",
        value: "-35%",
      },
    ],

    challenge:
      "The client relied on multiple disconnected systems for property listings, customer inquiries, and sales management, resulting in duplicated data, slow response times, and inefficient agent collaboration.",

    solution:
      "We developed a centralized real estate platform featuring property listing management, advanced search filters, interactive maps, virtual property tours, lead tracking, appointment scheduling, agent dashboards, and real-time analytics.",

    result:
      "The platform streamlined property management, increased qualified lead generation, improved customer engagement, accelerated sales processes, and provided a scalable foundation for future expansion.",

    businessGoal:
      "Create a modern PropTech platform that simplifies property transactions while improving operational efficiency and customer experience.",

    launchStatus: "Successfully Delivered",

    testimonial: {
      quote:
        "The platform has transformed the way we manage properties and interact with clients. Our agents work more efficiently, and customers can easily discover and inquire about properties online.",

      name: "Sales & Operations Manager",

      role: "Real Estate Operations",

      company: "Property Management Company",
    },

    websiteUrl: "",
  },
  {
    id: 6,

    featured: true,

    slug: "fintech-dashboard",

    title: "Custom FinTech Analytics Dashboard",

    industry: "FinTech",

    client: "Digital Financial Services Company",

    duration: "4 Months",

    description:
      "Developed a secure fintech analytics dashboard that provides real-time financial insights, transaction monitoring, customer analytics, and business intelligence through an intuitive and scalable web application.",

    overview:
      "A digital financial services company required a centralized dashboard to monitor transactions, customer activity, revenue, and operational performance across multiple financial products. The objective was to replace fragmented reporting tools with a secure, data-driven platform that supports faster decision-making and business growth.",

    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600",

    projectGallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600",
    ],

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],

    services: [
      "Business Analysis",
      "UI/UX Design",
      "Dashboard Development",
      "API Integration",
      "Cloud Deployment",
      "Quality Assurance",
    ],

    objectives: [
      "Centralize financial reporting",
      "Monitor transactions in real time",
      "Improve operational visibility",
      "Support data-driven decisions",
      "Build a scalable analytics platform",
    ],

    keyFeatures: [
      "Financial Analytics Dashboard",
      "Real-Time Transaction Monitoring",
      "Revenue & Profit Reporting",
      "Customer Insights",
      "Role-Based Access Control",
      "Interactive Charts & KPIs",
      "Custom Reports",
      "Notification & Alert System",
      "Data Export",
      "Audit Logs",
    ],

    metrics: {
      primary: {
        value: "50%",
        label: "Reporting Time Reduced",
      },

      secondary: {
        value: "2M+",
        label: "Transactions Analyzed",
      },
    },

    businessImpacts: [
      {
        title: "Decision-Making Speed",
        value: "+45%",
      },

      {
        title: "Reporting Efficiency",
        value: "+55%",
      },

      {
        title: "Manual Data Processing",
        value: "-60%",
      },
    ],

    challenge:
      "The client relied on multiple spreadsheets and disconnected reporting tools to analyze financial data, making it difficult to monitor transactions, identify business trends, and generate timely management reports.",

    solution:
      "We developed a centralized fintech analytics dashboard that consolidated financial data from multiple systems, delivered real-time reporting, visualized key performance indicators, automated business reports, and provided secure role-based access for different stakeholders.",

    result:
      "The new dashboard significantly improved reporting efficiency, enhanced operational visibility, reduced manual reporting efforts, and enabled executives to make faster, data-driven business decisions.",

    businessGoal:
      "Enable real-time financial visibility while improving reporting accuracy, operational efficiency, and executive decision-making.",

    launchStatus: "Successfully Delivered",

    testimonial: {
      quote:
        "The dashboard has become an essential part of our daily operations. We now have instant access to accurate financial insights, enabling faster reporting and better strategic decisions.",

      name: "Head of Operations",

      role: "Business Operations",

      company: "Digital Financial Services Company",
    },

    websiteUrl: "",
  },
];
