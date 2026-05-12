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
      className={`fixed top-0 w-full z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-dark/98 backdrop-blur-xl border-b border-dark-border py-3 shadow-xl shadow-black/30'
          : 'bg-dark/80 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a href="#" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex items-center gap-3">
          <div className="rounded-xl bg-gradient-to-br from-brand-light via-brand to-brand-dark p-[2px] shadow-md shadow-brand/30">
            <div className="rounded-[10px] bg-dark w-10 h-10 flex items-center justify-center">
              <img src="/logo512.png" alt="DRUN" className="w-9 h-9 object-contain" />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight gradient-text">DRUN</span>
            <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-medium">Technology</span>
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
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                active === l ? 'text-brand' : 'text-gray-300 hover:text-white'
              }`}
            >
              {active === l && (
                <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-lg bg-brand/10 border border-brand/20" />
              )}
              <span className="relative">{l}</span>
            </motion.a>
          ))}

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="ml-3 orange-btn px-6 py-2.5 text-sm"
          >
            Schedule Consultation
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-300 hover:text-brand transition-all"
          onClick={() => setOpen(!open)}
        >
          <AnimatePresence mode="wait">
            {open
              ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={18} /></motion.div>
              : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={18} /></motion.div>
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
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-dark-border"
          >
            <div className="bg-dark-card px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setOpen(false)}
                  className="text-sm text-gray-300 hover:text-brand hover:bg-brand/5 px-4 py-3 rounded-xl transition-all flex items-center gap-2 font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand" />{l}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                onClick={() => setOpen(false)}
                className="mt-2 orange-btn px-5 py-3 text-sm text-center"
              >
                Schedule Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
