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
    <section className="py-24 bg-dark-card" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="text-center mb-16"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
          <h2 className="text-4xl md:text-5xl font-black">From Idea to<br /><span className="gradient-text">Launch in 8 Weeks</span></h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand via-brand/50 to-transparent" />
          <div className="space-y-8">
            {STEPS.map(({ step, title, desc, duration }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 pl-4"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-xs font-bold text-white z-10 relative">
                    {step}
                  </div>
                </div>
                <div className="glass rounded-xl p-5 flex-1 card-hover">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white">{title}</h3>
                    <span className="text-xs text-brand bg-brand/10 px-2 py-1 rounded-full">{duration}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
