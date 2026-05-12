import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-dark-border">
      <div className="h-1 bg-gradient-to-r from-brand-dark via-brand to-brand-light" />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-xl bg-gradient-to-br from-brand-light via-brand to-brand-dark p-[2px]">
                <div className="rounded-[10px] bg-dark w-10 h-10 flex items-center justify-center">
                  <img src="/logo512.png" alt="DRUN" className="w-9 h-9 object-contain" />
                </div>
              </div>
              <div>
                <div className="font-black text-lg gradient-text">DRUN</div>
                <div className="text-xs text-gray-500 tracking-widest uppercase">Technology</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">Building world-class digital products for startups and enterprises worldwide.</p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-500 mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['Services', 'Work', 'About', 'Careers', 'Contact'].map(l => (
                <motion.a key={l} href={`#${l.toLowerCase()}`} whileHover={{ x: 4 }}
                  className="text-gray-400 hover:text-brand text-sm transition-colors animated-underline w-fit">{l}</motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-500 mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:drun.infotech@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-brand text-sm transition-colors">
                <Mail size={14} className="text-brand" /> drun.infotech@gmail.com
              </a>
              <a href="tel:+919360266792" className="flex items-center gap-2 text-gray-400 hover:text-brand text-sm transition-colors">
                <Phone size={14} className="text-brand" /> +91 93602 66792
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-dark-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-gray-600 text-sm">© 2025 DRUN Technology. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/drun.infotech?igsh=MW5vZWd2NHRpdXloYQ==" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-brand transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-brand transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
