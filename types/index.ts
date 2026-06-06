export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatar?: string;
  createdAt: string;
}

export interface Service {
  _id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  image: string;
  features: string[];
  technologies: string[];
  order: number;
  isActive: boolean;
  createdAt: string;
}

export interface Portfolio {
  _id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  client: string;
  industry: string;
  image: string;
  images: string[];
  technologies: string[];
  features: string[];
  category: string;
  completedAt: string;
  serviceId: string;
  isActive: boolean;
  createdAt: string;
}

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  readTime: number;
  isPublished: boolean;
  publishedAt: string;
  createdAt: string;
}

export interface Career {
  _id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  description: string;
  requirements: string[];
  benefits: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  isActive: boolean;
  createdAt: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  isActive: boolean;
  createdAt: string;
}

export interface Contact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'responded' | 'closed';
  createdAt: string;
}

export interface Newsletter {
  _id: string;
  email: string;
  isActive: boolean;
  subscribedAt: string;
}

export interface Settings {
  _id: string;
  siteName: string;
  tagline: string;
  description: string;
  logo: string;
  favicon: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    youtube: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}
