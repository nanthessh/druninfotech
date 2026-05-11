import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, ChevronDown } from 'lucide-react';

const JOBS = [
  { title: 'Senior React Developer', type: 'Full-time', location: 'Remote', desc: 'Build scalable frontend applications with React, TypeScript, and modern tooling.' },
  { title: 'Node.js Backend Engineer', type: 'Full-time', location: 'Remote', desc: 'Design and build robust APIs, microservices, and cloud infrastructure on AWS.' },
  { title: 'UI/UX Designer', type: 'Contract', location: 'Remote', desc: 'Create beautiful, user-centered designs using Figma for web and mobile products.' },
  { title: 'AI/ML Engineer', type: 'Full-time', location: 'Remote', desc: 'Build and deploy machine learning models and AI-powered features for our clients.' },
];

export default function Careers() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [open, setOpen] = useState(null);

  return (
    <section id="careers" className="py-24 bg-dark-card" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="text-center mb-16"
        >
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Join Us</p>
          <h2 className="text-4xl md:text-5xl font-black">Build the Future<br /><span className="gradient-text">With DRUN</span></h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">We're a remote-first team that values ownership, craft, and impact. No bureaucracy — just great work.</p>
        </motion.div>

        <div className="space-y-4">
          {JOBS.map(({ title, type, location, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                className="w-full p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div>
                  <h3 className="font-bold text-white">{title}</h3>
                  <div className="flex gap-4 mt-1">
                    <span className="flex items-center gap-1 text-xs text-gray-500"><Clock size={11} /> {type}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-500"><MapPin size={11} /> {location}</span>
                  </div>
                </div>
                <ChevronDown size={18} className={`text-gray-400 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }} className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-dark-border pt-4">
                      <p className="text-gray-400 text-sm mb-4">{desc}</p>
                      <a href="mailto:drun.infotech@gmail.com?subject=Application: {title}"
                        className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
                        Apply Now
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
