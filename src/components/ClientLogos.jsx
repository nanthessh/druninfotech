import React from 'react';
import { motion } from 'framer-motion';

const CLIENTS = [
  { name: 'Google', color: 'from-blue-400 to-green-400' },
  { name: 'Microsoft', color: 'from-blue-500 to-cyan-400' },
  { name: 'Stripe', color: 'from-violet-500 to-purple-400' },
  { name: 'Notion', color: 'from-gray-300 to-white' },
  { name: 'Vercel', color: 'from-white to-gray-300' },
  { name: 'Figma', color: 'from-pink-500 to-orange-400' },
  { name: 'Linear', color: 'from-indigo-400 to-blue-400' },
  { name: 'Supabase', color: 'from-green-400 to-emerald-300' },
  { name: 'OpenAI', color: 'from-teal-400 to-cyan-300' },
  { name: 'AWS', color: 'from-orange-400 to-yellow-300' },
];

export default function ClientLogos() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-blue-900/40 via-indigo-900/40 to-pink-900/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />

      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-pink-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Border lines with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.3em] mb-10 bg-gradient-to-r from-brand via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          ✦ Trusted by teams at ✦
        </motion.p>

        {/* Row 1 — left to right */}
        <div className="relative flex overflow-hidden mb-6">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...CLIENTS, ...CLIENTS].map(({ name, color }, i) => (
              <span
                key={i}
                className={`font-black text-xl bg-gradient-to-r ${color} bg-clip-text text-transparent cursor-default select-none hover:scale-110 inline-block transition-transform duration-300`}
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Row 2 — right to left */}
        <div className="relative flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...CLIENTS, ...CLIENTS].reverse().map(({ name, color }, i) => (
              <span
                key={i}
                className={`font-black text-xl bg-gradient-to-r ${color} bg-clip-text text-transparent cursor-default select-none opacity-60 hover:opacity-100 inline-block transition-opacity duration-300`}
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
