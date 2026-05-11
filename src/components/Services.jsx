import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SERVICES } from '../constants/data';

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="text-center mb-16"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-black">Services Built for<br /><span className="gradient-text">Modern Businesses</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc, tags }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 hover:bg-white/[0.07] transition-all group cursor-pointer card-hover"
            >
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand/20 group-hover:scale-110 transition-all duration-300">
                <Icon size={22} className="text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed mb-5">{desc}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map(t => (
                  <span key={t} className="text-xs bg-brand/10 text-brand px-3 py-1 rounded-full hover:bg-brand/20 transition-colors">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
