import { Blog } from '@/types';

export const blogs: Blog[] = [
  {
    _id: '1',
    title: 'The Future of Web Development: Trends to Watch in 2024',
    slug: 'future-web-development-trends-2024',
    content: `<p>The web development landscape is constantly evolving, with new technologies and methodologies emerging at a rapid pace. As we move through 2024, several key trends are shaping the future of web development.</p>
<h2>1. AI-Powered Development</h2>
<p>Artificial intelligence is revolutionizing how developers write code, debug applications, and optimize performance. AI coding assistants like GitHub Copilot and ChatGPT are becoming indispensable tools in modern development workflows.</p>
<h2>2. Edge Computing and Serverless Architectures</h2>
<p>Edge computing is pushing processing closer to users, reducing latency and improving performance. Combined with serverless architectures, developers can build highly scalable applications without managing infrastructure.</p>
<h2>3. WebAssembly Goes Mainstream</h2>
<p>WebAssembly (Wasm) enables near-native performance in web browsers, opening doors for complex applications like video editing, 3D games, and computational tools to run smoothly in the browser.</p>
<h2>4. Enhanced Security Practices</h2>
<p>With increasing cyber threats, security-first development is becoming the standard. Zero-trust architectures, advanced authentication methods, and automated security testing are now essential.</p>`,
    excerpt: 'Explore the cutting-edge trends shaping web development in 2024, from AI-powered coding assistants to edge computing and WebAssembly.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Technology',
    tags: ['Web Development', 'AI', 'Trends', 'Innovation'],
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    readTime: 8,
    isPublished: true,
    publishedAt: '2024-03-15',
    createdAt: '2024-03-10'
  },
  {
    _id: '2',
    title: 'Building Scalable Mobile Apps with React Native',
    slug: 'building-scalable-mobile-apps-react-native',
    content: `<p>React Native has become one of the most popular frameworks for building cross-platform mobile applications. Here's how to build scalable apps that can grow with your business.</p>
<h2>Architecture Best Practices</h2>
<p>A well-structured architecture is crucial for scalability. Implement modular architecture with clear separation of concerns, using patterns like Redux or MobX for state management.</p>
<h2>Performance Optimization</h2>
<p>Optimize your React Native app by implementing lazy loading, using FlatList for long lists, and minimizing re-renders with memo and callback hooks.</p>
<h2>Code Splitting and Dynamic Imports</h2>
<p>Break your app into smaller chunks that are loaded on demand, reducing initial bundle size and improving startup time.</p>`,
    excerpt: 'Learn best practices for building high-performance, scalable mobile applications using React Native.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Development',
    tags: ['React Native', 'Mobile', 'JavaScript', 'Performance'],
    author: {
      name: 'Sarah Miller',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    readTime: 6,
    isPublished: true,
    publishedAt: '2024-03-10',
    createdAt: '2024-03-05'
  },
  {
    _id: '3',
    title: 'SEO Strategies That Actually Work in 2024',
    slug: 'seo-strategies-that-work-2024',
    content: `<p>Search engine optimization continues to evolve, and strategies that worked a few years ago may no longer be effective. Here are the SEO strategies that deliver real results in 2024.</p>
<h2>User Experience First</h2>
<p>Google's Core Web Vitals now play a significant role in rankings. Focus on page speed, interactivity, and visual stability to improve your search visibility.</p>
<h2>Content Quality Over Quantity</h2>
<p>Create comprehensive, authoritative content that genuinely helps users. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is more important than ever.</p>
<h2>AI and Search</h2>
<p>Understand how AI is changing search behavior and optimize your content for featured snippets and AI-generated answers.</p>`,
    excerpt: 'Discover proven SEO strategies that deliver results in 2024, from Core Web Vitals to content quality optimization.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Marketing',
    tags: ['SEO', 'Digital Marketing', 'Google', 'Content'],
    author: {
      name: 'Michael Brown',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    readTime: 7,
    isPublished: true,
    publishedAt: '2024-03-05',
    createdAt: '2024-03-01'
  },
  {
    _id: '4',
    title: 'Designing for Accessibility: A Complete Guide',
    slug: 'designing-accessibility-complete-guide',
    content: `<p>Web accessibility ensures that everyone, including people with disabilities, can perceive, understand, navigate, and interact with websites. Here's a comprehensive guide to accessible design.</p>
<h2>WCAG Guidelines</h2>
<p>Follow the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. These provide a robust framework for accessible web content.</p>
<h2>Keyboard Navigation</h2>
<p>Ensure all interactive elements are accessible via keyboard. This includes proper focus states and logical tab order throughout your application.</p>
<h2>Screen Reader Support</h2>
<p>Use semantic HTML, proper ARIA labels, and test your site with screen readers like NVDA, JAWS, and VoiceOver.</p>`,
    excerpt: 'A comprehensive guide to creating accessible web experiences that work for everyone.',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Design',
    tags: ['Accessibility', 'UI/UX', 'WCAG', 'Inclusive Design'],
    author: {
      name: 'Emily Davis',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    readTime: 10,
    isPublished: true,
    publishedAt: '2024-02-28',
    createdAt: '2024-02-25'
  },
  {
    _id: '5',
    title: 'Cloud Architecture Best Practices for Startups',
    slug: 'cloud-architecture-best-practices-startups',
    content: `<p>Choosing the right cloud architecture can make or break your startup's technical foundation. Here are best practices for building scalable, cost-effective cloud infrastructure.</p>
<h2>Start Simple, Scale Later</h2>
<p>Don't over-engineer your initial architecture. Begin with managed services and scale to more complex solutions as your needs grow.</p>
<h2>Security from Day One</h2>
<p>Implement security best practices from the start. Use least privilege access, encrypt data at rest and in transit, and regularly audit your infrastructure.</p>
<h2>Cost Management</h2>
<p>Monitor your cloud spending closely. Use reserved instances, spot instances, and auto-scaling to optimize costs without sacrificing performance.</p>`,
    excerpt: 'Essential cloud architecture practices for building scalable and cost-effective infrastructure for startups.',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cloud',
    tags: ['Cloud', 'AWS', 'DevOps', 'Architecture'],
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    readTime: 8,
    isPublished: true,
    publishedAt: '2024-02-20',
    createdAt: '2024-02-18'
  },
  {
    _id: '6',
    title: 'The Rise of AI in Business Process Automation',
    slug: 'ai-business-process-automation',
    content: `<p>Artificial intelligence is transforming how businesses operate by automating repetitive tasks and providing intelligent insights. Discover how AI can streamline your operations.</p>
<h2>Intelligent Document Processing</h2>
<p>AI-powered systems can now read, understand, and process documents, extracting relevant information and automating workflows.</p>
<h2>Conversational AI</h2>
<p>Chatbots and virtual assistants are handling customer inquiries, scheduling appointments, and providing 24/7 support at scale.</p>
<h2>Predictive Analytics</h2>
<p>AI models can forecast demand, identify potential issues before they occur, and recommend optimal actions based on data patterns.</p>`,
    excerpt: 'Explore how AI is revolutionizing business process automation and driving efficiency across industries.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'AI',
    tags: ['AI', 'Automation', 'Machine Learning', 'Business'],
    author: {
      name: 'Sarah Miller',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    readTime: 6,
    isPublished: true,
    publishedAt: '2024-02-15',
    createdAt: '2024-02-12'
  }
];

export const getBlogBySlug = (slug: string): Blog | undefined => {
  return blogs.find(blog => blog.slug === slug);
};
