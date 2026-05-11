import { Globe, Smartphone, Brain, Palette, Users, TrendingUp, Star, Shield } from 'lucide-react';

export const NAV_LINKS = ['Services', 'Work', 'About', 'Careers', 'Contact'];

export const SERVICES = [
  { icon: Globe, title: 'Web Application Development', desc: 'Scalable, high-performance web apps built with modern frameworks. From SaaS platforms to enterprise portals.', tags: ['React', 'Node.js', 'AWS'] },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences that users love. iOS & Android with seamless performance.', tags: ['React Native', 'Flutter', 'Swift'] },
  { icon: Brain, title: 'AI Solutions', desc: 'Intelligent automation, ML models, and AI integrations that give your business a competitive edge.', tags: ['Python', 'TensorFlow', 'OpenAI'] },
  { icon: Palette, title: 'UI/UX Design', desc: 'Design systems and interfaces that convert. Every pixel crafted for clarity, trust, and delight.', tags: ['Figma', 'Prototyping', 'Research'] },
];

export const STATS = [
  { icon: Users, value: '50+', label: 'Clients Served', numeric: 50, suffix: '+' },
  { icon: TrendingUp, value: '120+', label: 'Projects Delivered', numeric: 120, suffix: '+' },
  { icon: Star, value: '4.9', label: 'Average Rating', numeric: 4.9, suffix: '' },
  { icon: TrendingUp, value: '3x', label: 'Faster Delivery', numeric: 3, suffix: 'x' },
];

export const PROJECTS = [
  {
    title: 'FinTrack SaaS', category: 'Web App',
    desc: 'Real-time financial analytics dashboard for 10k+ users.',
    color: 'from-purple-600 to-blue-600',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['React', 'Node.js', 'AWS'],
    challenge: 'The client needed a real-time dashboard handling 10k+ concurrent users with complex financial data visualization.',
    solution: 'Built with React, Node.js, WebSockets, and PostgreSQL. Implemented Redis caching and AWS auto-scaling.',
    result: '10,000+ active users, 99.9% uptime, 3x faster data load times.',
  },
  {
    title: 'MediConnect', category: 'Mobile App',
    desc: 'Telemedicine platform connecting patients with doctors instantly.',
    color: 'from-blue-600 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tags: ['React Native', 'WebRTC', 'Stripe'],
    challenge: 'Build a HIPAA-compliant telemedicine app with real-time video, scheduling, and prescriptions.',
    solution: 'React Native app with WebRTC video, Stripe payments, and end-to-end encryption.',
    result: '50,000+ downloads, 4.8★ App Store rating, 200+ doctors onboarded.',
  },
  {
    title: 'SmartHire AI', category: 'AI Solution',
    desc: 'AI-powered recruitment tool reducing hiring time by 60%.',
    color: 'from-violet-600 to-purple-600',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
    tags: ['Python', 'OpenAI', 'TensorFlow'],
    challenge: 'Manual resume screening was taking HR teams 40+ hours per week per role.',
    solution: 'Built NLP pipeline using OpenAI + custom ML models to score, rank, and summarize candidates.',
    result: '60% reduction in hiring time, $200k annual savings for the client.',
  },
  {
    title: 'Luxe Brand Kit', category: 'UI/UX Design',
    desc: 'Complete design system for a premium e-commerce brand.',
    color: 'from-pink-600 to-rose-500',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    tags: ['Figma', 'Design System', 'Prototyping'],
    challenge: 'Inconsistent UI across 5 platforms was hurting brand trust and conversion rates.',
    solution: 'Created a full Figma design system with 200+ components, tokens, and documentation.',
    result: '3x conversion rate improvement, 40% faster dev velocity.',
  },
];

export const TESTIMONIALS = [
  { name: 'Sarah Mitchell', role: 'CEO, FinTrack', text: 'DRUN delivered beyond expectations. The product feels enterprise-grade and our users love it.', rating: 5 },
  { name: 'James Okafor', role: 'CTO, MediConnect', text: 'Professional team, clean code, on-time delivery. We\'ve worked with 3 agencies before — DRUN is different.', rating: 5 },
  { name: 'Priya Sharma', role: 'Founder, SmartHire', text: 'The AI solution they built saved us months of manual work. Truly a technology partner, not just a vendor.', rating: 5 },
];

export const ABOUT_FEATURES = [
  { icon: Shield, title: 'Security First', desc: 'Every product built with security best practices from day one.' },
  { icon: Shield, title: 'Fast Delivery', desc: 'Agile sprints with weekly demos and transparent progress.' },
  { icon: Users, title: 'Dedicated Team', desc: 'A focused team assigned to your project, not shared resources.' },
  { icon: TrendingUp, title: 'Built to Scale', desc: 'Architecture designed for growth from 100 to 1M users.' },
];
