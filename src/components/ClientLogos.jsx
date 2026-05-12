import React from 'react';
import { motion } from 'framer-motion';

const CLIENTS = [
  { name: 'Google',    color: 'from-orange-400 to-brand' },
  { name: 'Microsoft', color: 'from-brand to-brand-mid' },
  { name: 'Stripe',    color: 'from-brand-mid to-orange-300' },
  { name: 'Notion',    color: 'from-gray-300 to-white' },
  { name: 'Vercel',    color: 'from-white to-gray-400' },
  { name: 'Figma',     color: 'from-brand-light to-brand' },
  { name: 'Linear',    color: 'from-orange-300 to-brand-mid' },
  { name: 'Supabase',  color: 'from-brand to-orange-400' },
  { name: 'OpenAI',    color: 'from-brand-mid to-brand-light' },
  { name: 'AWS',       color: 'from-orange-400 to-brand-dark' },
];

export default function ClientLogos() {
  return (
    <section className="relative py-14 overflow-hidden bg-dark-card border-y border-dark-border">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-brand/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center text-xs font-bold uppercase tracking-[0.3em] mb-10 text-gray-500"
        >
          ✦ Trusted by teams at ✦
        </motion.p>

        <div className="relative flex overflow-hidden mb-5">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-card to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-card to-transparent z-10 pointer-events-none" />
          <motion.div
            animate={{ x: ['0%', '-50%'] }} transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...CLIENTS, ...CLIENTS].map(({ name, color }, i) => (
              <span key={i} className={`font-black text-xl bg-gradient-to-r ${color} bg-clip-text text-transparent cursor-default select-none hover:scale-110 inline-block transition-transform duration-300`}>
                {name}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative flex overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-card to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-card to-transparent z-10 pointer-events-none" />
          <motion.div
            animate={{ x: ['-50%', '0%'] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex gap-12 whitespace-nowrap"
          >
            {[...CLIENTS, ...CLIENTS].reverse().map(({ name, color }, i) => (
              <span key={i} className={`font-black text-xl bg-gradient-to-r ${color} bg-clip-text text-transparent cursor-default select-none opacity-40 hover:opacity-100 inline-block transition-opacity duration-300`}>
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
