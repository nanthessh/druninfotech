import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';
import { ABOUT_FEATURES } from '../constants/data';

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section id="about" className="py-24 bg-dark-card relative overflow-hidden" ref={ref}>
      <div className="wave-shape absolute top-0 right-0 w-72 h-72 bg-brand/8 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
          <span className="section-tag">About DRUN</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white mt-3">We're Not an Agency.<br /><span className="gradient-text">We're Your Tech Team.</span></h2>
          <p className="text-gray-400 leading-relaxed mb-6">DRUN Technology is a product-focused software company. We partner with startups and growing businesses to build digital products that are fast, scalable, and beautifully designed.</p>
          <p className="text-gray-400 leading-relaxed mb-8">From MVP to enterprise — we bring the engineering depth and design thinking that turns ideas into market-ready products.</p>
          <div className="flex flex-col gap-3">
            {['Product-first thinking', 'Clean, maintainable code', 'Transparent communication', 'Post-launch support'].map((item, i) => (
              <motion.div key={item} initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 text-gray-300 glass px-4 py-3 rounded-xl">
                <CheckCircle size={16} className="text-brand flex-shrink-0" /> {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 gap-4">
          {ABOUT_FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}
              className="bg-dark rounded-2xl p-5 border border-dark-border hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10 transition-all duration-300">
              <div className="w-10 h-10 bg-brand/10 border border-brand/20 rounded-xl flex items-center justify-center mb-3">
                <Icon size={18} className="text-brand" />
              </div>
              <div className="font-bold text-sm mb-1 text-white">{title}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
