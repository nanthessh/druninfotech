import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Clock, Calendar, User } from 'lucide-react';

const POSTS = [
  { tag: 'AI', title: 'How We Built a Recruitment AI That Saves 60% Hiring Time', excerpt: 'A deep dive into our NLP pipeline using OpenAI and custom ML models to automate resume screening.', date: 'Jan 15, 2025', read: '5 min read', author: 'Nanthesh S', image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80' },
  { tag: 'React', title: 'Why We Choose React + Node.js for Every SaaS We Build', excerpt: 'Our engineering philosophy behind picking the right stack for scalable, maintainable SaaS products.', date: 'Jan 8, 2025', read: '4 min read', author: 'DRUN Team', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80' },
  { tag: 'Design', title: 'The Design System That Helped Our Client 3x Conversions', excerpt: 'How a unified Figma design system with 200+ components transformed a brand and tripled revenue.', date: 'Dec 28, 2024', read: '6 min read', author: 'DRUN Team', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80' },
];

export default function Blog() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="py-24 bg-dark-card relative overflow-hidden" ref={ref}>
      <div className="wave-shape absolute top-0 left-0 w-64 h-64 bg-brand/8 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="section-tag">Insights</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">From Our<br /><span className="gradient-text">Engineering Blog</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {POSTS.map(({ tag, title, excerpt, date, read, author, image }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }} whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden border border-dark-border hover:border-brand/40 transition-all duration-300 hover:shadow-2xl hover:shadow-brand/15 cursor-pointer bg-dark">
              <div className="relative h-48 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand/40 to-dark/60 opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                <div className="absolute top-4 left-4"><span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-brand text-white">{tag}</span></div>
                <div className="absolute top-4 right-4"><span className="text-xs text-white flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full"><Clock size={10} /> {read}</span></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-base leading-snug mb-2 text-white group-hover:text-brand transition-colors">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-600 mb-4 pt-4 border-t border-dark-border">
                  <span className="flex items-center gap-1.5"><User size={11} className="text-brand" /> {author}</span>
                  <span className="flex items-center gap-1.5"><Calendar size={11} className="text-brand" /> {date}</span>
                </div>
                <div className="flex items-center gap-1.5 text-brand text-sm font-semibold group-hover:gap-3 transition-all">Read Article <ArrowRight size={13} /></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
