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
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    featured: true,

    slug: 'enterprise-crm-platform',

    title: 'Enterprise CRM Platform',

    industry: 'Business Management',

    client: 'TechCorp Solutions',

    duration: '4 Months',

    description:
      'A scalable CRM platform designed to centralize customer interactions, automate workflows, and improve team productivity.',

    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600',

    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
      'AWS',
    ],

    metrics: {
      primary: {
        value: '45%',
        label: 'Productivity Increase',
      },

      secondary: {
        value: '15K+',
        label: 'Active Users',
      },
    },

    challenge:
      'Disconnected systems and manual processes reduced operational efficiency.',

    solution:
      'Built a centralized CRM ecosystem with workflow automation and analytics.',

    result:
      'Improved team productivity by 45% and streamlined customer management.',

    businessGoal: 'Improve team efficiency',

    launchStatus: 'Delivered on schedule',
  },

  {
    id: 2,

    slug: 'healthcare-management-system',

    title: 'Healthcare Management System',

    industry: 'Healthcare',

    client: 'MediCare Plus',

    duration: '6 Months',

    description:
      'Secure healthcare solution for patient records, appointment scheduling, and doctor communication.',

    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1600',

    technologies: [
      'Next.js',
      'PostgreSQL',
      'Node.js',
      'AWS',
    ],

    metrics: {
      primary: {
        value: '60%',
        label: 'Process Efficiency',
      },

      secondary: {
        value: '25K+',
        label: 'Patient Records',
      },
    },

    challenge:
      'Healthcare providers struggled with fragmented patient management systems.',

    solution:
      'Developed an integrated digital healthcare ecosystem.',

    result:
      'Reduced administration time by 60% and improved patient engagement.',

    businessGoal: 'Improve patient care',

    launchStatus: 'Successfully deployed',
  },

  {
    id: 3,

    slug: 'ecommerce-marketplace',

    title: 'E-Commerce Marketplace',

    industry: 'Retail & Commerce',

    client: 'CommerceHub',

    duration: '5 Months',

    description:
      'A multi-vendor marketplace with secure payments, inventory control, and advanced analytics.',

    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600',

    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Stripe',
    ],

    metrics: {
      primary: {
        value: '120%',
        label: 'Revenue Growth',
      },

      secondary: {
        value: '50K+',
        label: 'Monthly Users',
      },
    },

    challenge:
      'Scaling marketplace operations while maintaining user experience.',

    solution:
      'Implemented scalable architecture and vendor automation tools.',

    result:
      'Achieved 120% revenue growth within the first year.',

    businessGoal: 'Increase online revenue',

    launchStatus: 'Launched successfully',
  },
    {
    id: 4,

    slug: 'learning-management-system',

    title: 'Learning Management System',

    industry: 'Education',

    client: 'EduTech Global',

    duration: '4 Months',

    description:
      'Interactive online learning platform with course management, assessments, and progress tracking.',

    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600',

    technologies: [
      'Next.js',
      'Node.js',
      'MongoDB',
      'AWS',
    ],

    metrics: {
      primary: {
        value: '70%',
        label: 'Student Engagement',
      },

      secondary: {
        value: '80K+',
        label: 'Students',
      },
    },

    challenge:
      'Traditional learning systems lacked scalability and engagement.',

    solution:
      'Built a cloud-native LMS with analytics and interactive learning modules.',

    result:
      'Increased course completion rates and student retention.',

    businessGoal: 'Digital learning transformation',

    launchStatus: 'Production ready',
  },

  {
    id: 5,

    slug: 'real-estate-platform',

    title: 'Real Estate Portal',

    industry: 'Real Estate',

    client: 'Prime Properties',

    duration: '3 Months',

    description:
      'Property marketplace platform with listings, virtual tours, and CRM integration.',

    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600',

    technologies: [
      'React',
      'Node.js',
      'MongoDB',
    ],

    metrics: {
      primary: {
        value: '40%',
        label: 'Lead Conversion',
      },

      secondary: {
        value: '35K+',
        label: 'Property Visitors',
      },
    },

    challenge:
      'Manual lead management slowed down sales cycles.',

    solution:
      'Integrated lead automation and property management workflows.',

    result:
      'Generated more qualified leads and faster property sales.',

    businessGoal: 'Increase qualified leads',

    launchStatus: 'Delivered successfully',
  },

    {
    id: 6,

    slug: 'fintech-dashboard',

    title: 'FinTech Analytics Dashboard',

    industry: 'Finance',

    client: 'FinEdge Capital',

    duration: '5 Months',

    description:
      'Advanced analytics platform for financial reporting, forecasting, and investment tracking.',

    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600',

    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
    ],

    metrics: {
      primary: {
        value: '50%',
        label: 'Reporting Speed',
      },

      secondary: {
        value: '20K+',
        label: 'Investors',
      },
    },

    challenge:
      'Financial teams lacked real-time access to performance data.',

    solution:
      'Developed interactive dashboards with automated reporting.',

    result:
      'Improved decision-making and reporting efficiency.',

    businessGoal: 'Improve financial visibility',

    launchStatus: 'Enterprise launch completed',
  },
];