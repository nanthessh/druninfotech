import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { STATS } from '../constants/data';

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-16 bg-dark-card border-y border-dark-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map(({ icon: Icon, value, label, numeric, suffix }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center group"
          >
            <div className="w-14 h-14 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-brand/20 group-hover:scale-110 transition-all duration-300">
              <Icon size={22} className="text-brand" />
            </div>
            <div className="text-3xl font-black gradient-text">
              {inView ? (numeric ? <CountUp end={numeric} duration={2} suffix={suffix} decimals={numeric % 1 !== 0 ? 1 : 0} /> : value) : '0'}
            </div>
            <div className="text-sm text-gray-500 mt-1">{label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
