import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, CheckCircle } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-gray-400 mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow" />
          Available for new projects in 2025
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
          We Build Software<br />
          <span className="gradient-text">That Scales.</span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          DRUN Technology crafts world-class web apps, mobile products, AI solutions, and design systems — built for growth, trusted by founders.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 glow">
            Start Your Project <ArrowRight size={18} />
          </a>
          <a href="#work" className="glass hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2">
            View Our Work <ChevronRight size={18} />
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.4)} className="flex flex-wrap justify-center gap-6 mt-16 text-sm text-gray-500">
          {['ISO Certified', 'NDA Protected', '24/7 Support', 'Agile Delivery'].map(b => (
            <div key={b} className="flex items-center gap-2">
              <CheckCircle size={14} className="text-brand" /> {b}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
