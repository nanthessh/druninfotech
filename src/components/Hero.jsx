import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-dark pt-20">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=60')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/95 to-dark/70" />

      {/* Orange blob shapes like template */}
      <div className="wave-shape absolute -top-20 -right-20 w-80 h-80 bg-brand/20 pointer-events-none" />
      <div className="wave-shape absolute bottom-10 left-10 w-48 h-48 bg-brand/15 pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-brand/8 rounded-full blur-3xl pointer-events-none animate-float" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 py-16">
        {/* Left content */}
        <div>
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 glass-orange rounded-full px-4 py-2 text-sm text-brand mb-6">
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse-slow" />
            Work With DRUN Technology
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6 text-white">
            Innovate Solution For<br />
            <span className="gradient-text">Business Success</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-gray-400 max-w-lg mb-10 leading-relaxed">
            DRUN Technology crafts world-class web apps, mobile products, AI solutions, and design systems — built for growth, trusted by founders worldwide.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 mb-10">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
              className="orange-btn px-8 py-4 flex items-center gap-2"
            >
              Work Together <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="tel:+919360266792"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 glass rounded-full px-6 py-4 text-white hover:border-brand/30 transition-all"
            >
              <div className="w-9 h-9 rounded-full bg-brand/20 border border-brand/30 flex items-center justify-center">
                <Phone size={15} className="text-brand" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Call Everyday</div>
                <div className="text-sm font-semibold">+91 93602 66792</div>
              </div>
            </motion.a>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 text-sm text-gray-500">
            {[ 'NDA Protected', '24/7 Support', 'Agile Delivery'].map(b => (
              <div key={b} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-brand" /> {b}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — image with orange ring */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden md:flex items-center justify-center"
        >
          {/* Outer ring */}
          {/* <div className="absolute w-[420px] h-[420px] rounded-full border-2 border-brand/20 animate-spin-slow" />
          <div className="absolute w-[360px] h-[360px] rounded-full border border-brand/10" /> */}

          {/* Image circle */}
          {/* <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-brand/30 shadow-2xl shadow-brand/20">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80"
              alt="DRUN Technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
          </div> */}

          {/* Play button */}
          {/* <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute top-8 right-8 w-14 h-14 rounded-full bg-brand flex items-center justify-center shadow-lg shadow-brand/40 cursor-pointer glow"
          >
            <Play size={20} className="text-white ml-1" />
          </motion.div> */}

          {/* Floating stat card */}
          {/* <motion.div
            animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-4 -left-4 glass-orange rounded-2xl px-5 py-3"
          >
            <div className="text-2xl font-black text-brand">4.9★</div>
            <div className="text-xs text-gray-400">Average Rating</div>
          </motion.div> */}

          <motion.div
            animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-4 -left-8 glass rounded-2xl px-4 py-3"
          >
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#13131F" />
        </svg>
      </div>
    </section>
  );
}
