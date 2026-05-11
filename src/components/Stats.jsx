import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { STATS } from '../constants/data';

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-16 border-y border-dark-border" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map(({ icon: Icon, value, label, numeric, suffix }) => (
          <div key={label} className="text-center group">
            <Icon size={20} className="text-brand mx-auto mb-3 group-hover:scale-125 transition-transform duration-300" />
            <div className="text-3xl font-black gradient-text">
              {inView ? (
                numeric ? <CountUp end={numeric} duration={2} suffix={suffix} /> : value
              ) : '0'}
            </div>
            <div className="text-sm text-gray-500 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
