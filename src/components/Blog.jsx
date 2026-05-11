import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const POSTS = [
  { tag: 'AI', title: 'How We Built a Recruitment AI That Saves 60% Hiring Time', date: 'Jan 15, 2025', read: '5 min read', color: 'from-violet-600 to-purple-600' },
  { tag: 'React', title: 'Why We Choose React + Node.js for Every SaaS We Build', date: 'Jan 8, 2025', read: '4 min read', color: 'from-blue-600 to-cyan-500' },
  { tag: 'Design', title: 'The Design System That Helped Our Client 3x Conversions', date: 'Dec 28, 2024', read: '6 min read', color: 'from-pink-600 to-rose-500' },
];

export default function Blog() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="text-center mb-16"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Insights</p>
          <h2 className="text-4xl md:text-5xl font-black">From Our<br /><span className="gradient-text">Engineering Blog</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {POSTS.map(({ tag, title, date, read, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden group cursor-pointer card-hover"
            >
              <div className={`h-40 bg-gradient-to-br ${color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              <div className="p-6">
                <span className="text-xs text-brand font-semibold uppercase tracking-widest">{tag}</span>
                <h3 className="font-bold mt-2 mb-3 leading-snug group-hover:text-brand transition-colors">{title}</h3>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{date}</span>
                  <span>{read}</span>
                </div>
                <div className="flex items-center gap-1 text-brand text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={13} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
