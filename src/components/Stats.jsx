import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { STATS } from '../constants/data';

const COLORS = [
  { bg: 'from-sky-400 to-blue-600',     shadow: 'shadow-blue-500/30' },
  { bg: 'from-violet-400 to-purple-600', shadow: 'shadow-purple-500/30' },
  { bg: 'from-amber-400 to-orange-500',  shadow: 'shadow-orange-500/30' },
  { bg: 'from-emerald-400 to-teal-600',  shadow: 'shadow-teal-500/30' },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-16 bg-dark-card border-y border-dark-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map(({ icon: Icon, value, label, numeric, suffix }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center group"
          >
            <motion.div
              whileHover={{ scale: 1.12, rotate: 5 }}
              transition={{ duration: 0.2 }}
              className={`w-16 h-16 bg-gradient-to-br ${COLORS[i].bg} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${COLORS[i].shadow} group-hover:shadow-xl transition-all duration-300`}
            >
              <Icon size={26} className="text-white" />
            </motion.div>
            <div className="text-3xl font-black text-white mb-1">
              {inView ? (
                numeric ? <CountUp end={numeric} duration={2} suffix={suffix} decimals={numeric % 1 !== 0 ? 1 : 0} /> : value
              ) : '0'}
            </div>
            <div className="text-sm text-gray-500">{label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
