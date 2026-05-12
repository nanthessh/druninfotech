import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, X, CheckCircle } from 'lucide-react';
import { SERVICES } from '../constants/data';

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selected, setSelected] = useState(null);

  return (
    <section id="services" className="py-24 bg-dark relative overflow-hidden" ref={ref}>
      <div className="wave-shape absolute -top-20 -left-20 w-72 h-72 bg-brand/10 pointer-events-none" />
      <div className="wave-shape absolute -bottom-20 -right-20 w-64 h-64 bg-brand/8 pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="section-tag">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              We Run All Kinds Of Services<br />
              <span className="gradient-text">From Technologies</span>
            </h2>
          </div>
          <motion.a href="#contact" whileHover={{ scale: 1.05 }} className="orange-btn px-6 py-3 text-sm flex items-center gap-2 self-start md:self-auto">
            All Services <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc, tags, image, details }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelected({ icon: Icon, title, desc, tags, image, details })}
              className="group rounded-2xl overflow-hidden border border-dark-border hover:border-brand/40 hover:shadow-xl hover:shadow-brand/15 transition-all duration-300 cursor-pointer bg-dark-card"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-dark/60 group-hover:bg-dark/40 transition-all duration-300" />
                <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center">
                  <Icon size={20} className="text-brand" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold mb-2 text-sm leading-snug text-white group-hover:text-brand transition-colors">{title}</h3>
                <p className="text-xs leading-relaxed mb-4 text-gray-500">{desc}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {tags.map(t => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-brand/10 border border-brand/20 text-brand">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold text-brand group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-dark-card border border-dark-border rounded-2xl max-w-lg w-full overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Image header */}
              <div className="relative h-48 overflow-hidden">
                <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-dark/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-brand/50 transition-colors"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 left-5 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center">
                    <selected.icon size={20} className="text-brand" />
                  </div>
                  <span className="section-tag mb-0">{selected.title}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{selected.details}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {selected.tags.map(t => (
                    <span key={t} className="text-xs bg-brand/10 text-brand border border-brand/20 px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>

                {/* What's included */}
                <div className="glass rounded-xl p-4 mb-5">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">What's Included</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Discovery & Planning', 'UI/UX Design', 'Development', 'Testing & QA', 'Deployment', '3 Months Support'].map(item => (
                      <div key={item} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle size={11} className="text-brand flex-shrink-0" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelected(null)}
                  className="w-full orange-btn py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
                >
                  Get Started <ArrowRight size={15} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
