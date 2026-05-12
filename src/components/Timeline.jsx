import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const STEPS = [
  { step: '01', title: 'Discovery Call', desc: 'We understand your goals, tech stack, and timeline in a free 30-min call.', duration: 'Day 1' },
  { step: '02', title: 'Proposal & Planning', desc: 'Detailed scope, wireframes, tech architecture, and fixed pricing delivered.', duration: 'Day 2–3' },
  { step: '03', title: 'Design Sprint', desc: 'UI/UX designs with your brand identity. Figma prototypes for review.', duration: 'Week 1' },
  { step: '04', title: 'Development', desc: 'Agile sprints with weekly demos. Full transparency via project dashboard.', duration: 'Week 2–6' },
  { step: '05', title: 'QA & Testing', desc: 'Rigorous testing across devices, browsers, and edge cases.', duration: 'Week 7' },
  { step: '06', title: 'Launch & Support', desc: 'Deployment, monitoring, and 3 months of post-launch support included.', duration: 'Week 8+' },
];

export default function Timeline() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <section className="py-24 bg-dark relative overflow-hidden" ref={ref}>
      <div className="wave-shape absolute -bottom-10 -right-10 w-56 h-56 bg-brand/8 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="section-tag">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">From Idea to<br /><span className="gradient-text">Launch in 8 Weeks</span></h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand via-brand/40 to-transparent" />
          <div className="space-y-6">
            {STEPS.map(({ step, title, desc, duration }, i) => (
              <motion.div key={step} initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-6 pl-4 group">
                <div className="relative flex-shrink-0">
                  <motion.div whileHover={{ scale: 1.15 }} className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-xs font-black text-white z-10 relative shadow-lg shadow-brand/40">
                    {step}
                  </motion.div>
                </div>
                <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}
                  className="bg-dark-card rounded-2xl p-5 flex-1 border border-dark-border group-hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white group-hover:text-brand transition-colors">{title}</h3>
                    <span className="text-xs text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-full font-semibold">{duration}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
