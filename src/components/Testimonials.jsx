import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants/data';

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="py-24 bg-dark relative overflow-hidden" ref={ref}>
      <div className="wave-shape absolute -bottom-10 -left-10 w-56 h-56 bg-brand/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="section-tag">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Trusted by<br /><span className="gradient-text">Founders & CTOs</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, role, text, rating }, i) => (
            <motion.div key={name} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -4 }}
              className="bg-dark-card rounded-2xl p-7 border border-dark-border hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10 transition-all duration-300 relative">
              <Quote size={32} className="text-brand/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">{Array(rating).fill(0).map((_, i) => <Star key={i} size={14} className="text-brand fill-brand" />)}</div>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">"{text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
                <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white text-sm font-bold">{name[0]}</div>
                <div><div className="font-bold text-white text-sm">{name}</div><div className="text-xs text-gray-500">{role}</div></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
