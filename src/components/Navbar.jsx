import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gradient-to-r from-[#0A0A0F]/95 via-[#0d0b1a]/95 to-[#0A0A0F]/95 backdrop-blur-xl border-b border-brand/20 py-3 shadow-[0_4px_30px_rgba(108,99,255,0.15)]'
          : 'bg-gradient-to-r from-[#0A0A0F]/60 via-[#110d2a]/60 to-[#0A0A0F]/60 backdrop-blur-md py-5'
      }`}
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-80" />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3"
        >
          <div className="rounded-xl bg-gradient-to-br from-brand via-purple-500 to-pink-500 p-[2px] shadow-lg shadow-brand/30">
            <div className="rounded-[20px] overflow-hidden bg-[#0A0A0F] w-18 h-16 flex items-center justify-center">
              <img src="/logo512.png" alt="DRUN" className="w-16 h-16 object-contain" />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-brand to-purple-400 bg-clip-text text-transparent">
              DRUN
            </span>
            <span className="text-[10px] text-white-500 tracking-widest uppercase">Technology</span>
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l, i) => (
            <motion.a
              key={l}
              href={`#${l.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              onClick={() => setActive(l)}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                active === l ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {/* Hover bg */}
              <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/5 transition-all duration-300" />
              {/* Active underline */}
              {active === l && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-gradient-to-r from-brand to-purple-400"
                />
              )}
              <span className="relative">{l}</span>
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="ml-4 relative overflow-hidden bg-gradient-to-r from-brand to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-brand/30"
          >
            <span className="relative z-10">Start a Project</span>
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-dark-border flex items-center justify-center text-gray-400 hover:text-white hover:border-brand/50 transition-all"
          onClick={() => setOpen(!open)}
        >
          <AnimatePresence mode="wait">
            {open
              ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={18} /></motion.div>
              : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={18} /></motion.div>
            }
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="mx-4 mt-2 mb-3 rounded-2xl bg-gradient-to-b from-[#12121A] to-[#0d0b1a] border border-brand/20 p-4 flex flex-col gap-1 shadow-xl shadow-brand/10">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl transition-all flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                  {l}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                onClick={() => setOpen(false)}
                className="mt-2 bg-gradient-to-r from-brand to-purple-500 text-white text-sm font-semibold px-5 py-3 rounded-xl text-center shadow-lg shadow-brand/20"
              >
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom gradient line */}
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
    </motion.nav>
  );
}
