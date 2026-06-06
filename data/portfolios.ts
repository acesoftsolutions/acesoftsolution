import { Portfolio } from '@/types';

export const portfolios: Portfolio[] = [
  {
    _id: '1',
    title: 'FinanceFlow - Banking App',
    slug: 'financeflow-banking-app',
    description: 'A comprehensive digital banking platform featuring real-time transactions, AI-powered fraud detection, and seamless user experience. The platform serves over 2 million users with 99.9% uptime.',
    shortDescription: 'Digital banking platform with AI-powered security and real-time transactions',
    client: 'FinanceFlow Inc.',
    industry: 'Finance',
    image: 'https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'TensorFlow'],
    features: ['Real-time Transactions', 'Biometric Authentication', 'AI Fraud Detection', 'Multi-currency Support'],
    category: 'Mobile App',
    completedAt: '2024-03-15',
    serviceId: '2',
    isActive: true,
    createdAt: '2024-01-01'
  },
  {
    _id: '2',
    title: 'ShopMax E-Commerce Platform',
    slug: 'shopmax-ecommerce-platform',
    description: 'A high-performance e-commerce platform handling 100,000+ daily transactions with advanced inventory management, personalized recommendations, and seamless checkout experience.',
    shortDescription: 'High-performance e-commerce platform with AI-powered recommendations',
    client: 'ShopMax Retail',
    industry: 'Retail',
    image: 'https://images.pexels.com/photos/2305445/pexels-photo-2305445.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2305445/pexels-photo-2305445.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe'],
    features: ['AI Product Recommendations', 'Real-time Inventory', 'Multi-vendor Support', 'Analytics Dashboard'],
    category: 'E-Commerce',
    completedAt: '2024-02-20',
    serviceId: '8',
    isActive: true,
    createdAt: '2024-01-01'
  },
  {
    _id: '3',
    title: 'MediCare Health Portal',
    slug: 'medicare-health-portal',
    description: 'A comprehensive healthcare management platform connecting patients with healthcare providers, featuring telemedicine, appointment scheduling, and electronic health records.',
    shortDescription: 'Healthcare platform with telemedicine and EHR integration',
    client: 'MediCare Health Systems',
    industry: 'Healthcare',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['React', 'Django', 'PostgreSQL', 'WebRTC', 'AWS'],
    features: ['Telemedicine Integration', 'EHR Management', 'Appointment Scheduling', 'HIPAA Compliant'],
    category: 'Web App',
    completedAt: '2024-01-10',
    serviceId: '1',
    isActive: true,
    createdAt: '2024-01-01'
  },
  {
    _id: '4',
    title: 'EduLearn Learning Platform',
    slug: 'edulearn-learning-platform',
    description: 'An interactive e-learning platform with live classes, AI-powered course recommendations, progress tracking, and gamification elements for enhanced engagement.',
    shortDescription: 'Interactive e-learning platform with AI personalization',
    client: 'EduLearn Academy',
    industry: 'Education',
    image: 'https://images.pexels.com/photos/5428006/pexels-photo-5428006.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/5428006/pexels-photo-5428006.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'WebRTC'],
    features: ['Live Classes', 'AI Course Recommendations', 'Progress Tracking', 'Gamification'],
    category: 'Web App',
    completedAt: '2023-12-05',
    serviceId: '1',
    isActive: true,
    createdAt: '2024-01-01'
  },
  {
    _id: '5',
    title: 'LogiTrack Fleet Management',
    slug: 'logitrack-fleet-management',
    description: 'An IoT-powered fleet management solution with real-time GPS tracking, predictive maintenance, route optimization, and comprehensive analytics dashboard.',
    shortDescription: 'IoT fleet management with GPS tracking and predictive maintenance',
    client: 'LogiTrack Logistics',
    industry: 'Logistics',
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['React', 'Python', 'TensorFlow', 'AWS IoT', 'PostgreSQL'],
    features: ['Real-time GPS Tracking', 'Predictive Maintenance', 'Route Optimization', 'Driver Analytics'],
    category: 'Enterprise',
    completedAt: '2023-11-20',
    serviceId: '6',
    isActive: true,
    createdAt: '2024-01-01'
  },
  {
    _id: '6',
    title: 'FoodieHub Restaurant App',
    slug: 'foodiehub-restaurant-app',
    description: 'A food delivery platform connecting restaurants with customers, featuring real-time order tracking, AI-powered restaurant recommendations, and seamless payment integration.',
    shortDescription: 'Food delivery platform with real-time tracking and AI recommendations',
    client: 'FoodieHub Inc.',
    industry: 'Food & Beverage',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps', 'Stripe'],
    features: ['Real-time Order Tracking', 'AI Recommendations', 'Multi-restaurant Partnerships', 'Rating System'],
    category: 'Mobile App',
    completedAt: '2023-10-15',
    serviceId: '2',
    isActive: true,
    createdAt: '2024-01-01'
  }
];

export const getPortfolioBySlug = (slug: string): Portfolio | undefined => {
  return portfolios.find(p => p.slug === slug);
};
