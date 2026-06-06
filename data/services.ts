import { Service } from '@/types';

export const services: Service[] = [
  {
    _id: '1',
    title: 'Web Development',
    slug: 'web-development',
    description: 'We build modern, responsive, and scalable web applications using cutting-edge technologies. Our team specializes in creating high-performance websites that drive business growth and deliver exceptional user experiences.',
    shortDescription: 'Custom web applications built with modern technologies for optimal performance',
    icon: 'Globe',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Custom Web Applications',
      'Progressive Web Apps (PWA)',
      'E-commerce Solutions',
      'Content Management Systems',
      'API Development & Integration',
      'Performance Optimization'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    order: 1,
    isActive: true,
    createdAt: '2024-01-01'
  },
  {
    _id: '2',
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Create powerful mobile applications for iOS and Android platforms. We develop native and cross-platform solutions that provide seamless user experiences and help you reach your audience wherever they are.',
    shortDescription: 'Native and cross-platform mobile applications for iOS and Android',
    icon: 'Smartphone',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-Platform Solutions',
      'App Store Optimization',
      'Push Notifications',
      'App Maintenance & Support'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    order: 2,
    isActive: true,
    createdAt: '2024-01-01'
  },
  {
    _id: '3',
    title: 'SEO Optimization',
    slug: 'seo-optimization',
    description: 'Boost your online visibility and drive organic traffic with our comprehensive SEO strategies. We help businesses improve their search engine rankings and attract qualified leads through data-driven optimization.',
    shortDescription: 'Data-driven SEO strategies to improve search rankings and visibility',
    icon: 'Search',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Technical SEO Audit',
      'Keyword Research & Strategy',
      'On-Page Optimization',
      'Link Building',
      'Content Strategy',
      'Local SEO'
    ],
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Screaming Frog', 'Google Search Console'],
    order: 3,
    isActive: true,
    createdAt: '2024-01-01'
  },
  {
    _id: '4',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description: 'Reach your target audience and grow your brand with our comprehensive digital marketing services. We create data-driven campaigns that deliver measurable results and maximize your ROI.',
    shortDescription: 'Strategic digital marketing campaigns that drive growth and engagement',
    icon: 'TrendingUp',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Social Media Marketing',
      'Pay-Per-Click Advertising',
      'Email Marketing',
      'Content Marketing',
      'Influencer Marketing',
      'Analytics & Reporting'
    ],
    technologies: ['Google Ads', 'Meta Ads', 'HubSpot', 'Mailchimp', 'Hootsuite'],
    order: 4,
    isActive: true,
    createdAt: '2024-01-01'
  },
  {
    _id: '5',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'Create stunning and intuitive user interfaces that delight your users. Our design team crafts visually appealing and user-centered experiences that enhance engagement and drive conversions.',
    shortDescription: 'Beautiful and intuitive designs that enhance user experience',
    icon: 'Palette',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'User Research & Analysis',
      'Wireframing & Prototyping',
      'Visual Design',
      'Interaction Design',
      'Design Systems',
      'Usability Testing'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
    order: 5,
    isActive: true,
    createdAt: '2024-01-01'
  },
  {
    _id: '6',
    title: 'ERP Software',
    slug: 'erp-software',
    description: 'Streamline your business operations with custom ERP solutions. We develop integrated software systems that optimize workflows, improve efficiency, and provide real-time business insights.',
    shortDescription: 'Custom ERP solutions to streamline and automate business operations',
    icon: 'Settings',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Custom ERP Development',
      'Inventory Management',
      'Financial Management',
      'HR & Payroll Systems',
      'Supply Chain Management',
      'Business Intelligence'
    ],
    technologies: ['SAP', 'Oracle', 'Microsoft Dynamics', 'Odoo', 'Python'],
    order: 6,
    isActive: true,
    createdAt: '2024-01-01'
  },
  {
    _id: '7',
    title: 'AI Solutions',
    slug: 'ai-solutions',
    description: 'Leverage the power of artificial intelligence to transform your business. We develop intelligent solutions that automate processes, provide insights, and create competitive advantages.',
    shortDescription: 'Intelligent AI solutions to automate and optimize business processes',
    icon: 'Brain',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Chatbots & Virtual Assistants',
      'Process Automation'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'AWS SageMaker'],
    order: 7,
    isActive: true,
    createdAt: '2024-01-01'
  },
  {
    _id: '8',
    title: 'E-Commerce Development',
    slug: 'ecommerce-development',
    description: 'Build powerful online stores that drive sales and deliver exceptional shopping experiences. We create scalable e-commerce platforms with advanced features and seamless payment integration.',
    shortDescription: 'Scalable e-commerce platforms optimized for conversion and growth',
    icon: 'ShoppingCart',
    image: 'https://images.pexels.com/photos/2305445/pexels-photo-2305445.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Custom E-commerce Platforms',
      'Shopping Cart Development',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Management Systems',
      'Multi-vendor Marketplaces'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Next.js', 'Stripe'],
    order: 8,
    isActive: true,
    createdAt: '2024-01-01'
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
