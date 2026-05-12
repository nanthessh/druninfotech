import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, X, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../constants/data';

export default function Work() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selected, setSelected] = useState(null);

  return (
    <section id="work" className="py-24 bg-dark-card relative overflow-hidden" ref={ref}>
      <div className="wave-shape absolute top-0 right-0 w-64 h-64 bg-brand/8 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="section-tag">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Work That<br /><span className="gradient-text">Speaks for Itself</span></h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">Click any project to see the full case study.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map(({ title, category, desc, color, image, tags, challenge, solution, result }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }} whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden cursor-pointer border border-dark-border hover:border-brand/40 transition-all duration-300 hover:shadow-2xl hover:shadow-brand/15 bg-dark"
              onClick={() => setSelected({ title, category, desc, color, image, tags, challenge, solution, result })}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-50 group-hover:opacity-30 transition-opacity`} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-brand text-white shadow-lg">{category}</span>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowRight size={14} className="text-brand" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-brand transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map(t => <span key={t} className="text-xs bg-brand/10 border border-brand/20 text-brand px-2.5 py-1 rounded-full">{t}</span>)}
                </div>
                <div className="flex items-center gap-1.5 text-brand text-sm font-semibold group-hover:gap-3 transition-all">
                  View Case Study <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-dark-card border border-dark-border rounded-2xl max-w-lg w-full relative overflow-hidden my-4"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-52 overflow-hidden">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br ${selected.color} opacity-50`} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
                <button onClick={() => setSelected(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-brand/50 transition-colors">
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-brand text-white">{selected.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black mb-1 text-white">{selected.title}</h3>
                <p className="text-gray-500 text-sm mb-5">{selected.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.tags.map(t => <span key={t} className="text-xs bg-brand/10 text-brand border border-brand/20 px-3 py-1 rounded-full">{t}</span>)}
                </div>
                <div className="space-y-3">
                  <div className="glass rounded-xl p-4"><span className="text-xs text-gray-500 uppercase tracking-widest font-semibold block mb-1">Challenge</span><p className="text-gray-300 text-sm">{selected.challenge}</p></div>
                  <div className="glass rounded-xl p-4"><span className="text-xs text-gray-500 uppercase tracking-widest font-semibold block mb-1">Solution</span><p className="text-gray-300 text-sm">{selected.solution}</p></div>
                  <div className="rounded-xl p-4 bg-brand/10 border border-brand/20"><span className="text-xs text-brand uppercase tracking-widest font-semibold block mb-1">Result</span><p className="text-brand-light text-sm flex items-start gap-2"><CheckCircle size={14} className="mt-0.5 flex-shrink-0" />{selected.result}</p></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
