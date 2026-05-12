import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, ChevronDown, ArrowRight, X, Send, User, Mail, Phone, Briefcase } from 'lucide-react';
import emailjs from '@emailjs/browser';

const JOBS = [
  { title: 'Senior React Developer', type: 'Full-time', location: 'Remote', desc: 'Build scalable frontend applications with React, TypeScript, and modern tooling.' },
  { title: 'Node.js Backend Engineer', type: 'Full-time', location: 'Remote', desc: 'Design and build robust APIs, microservices, and cloud infrastructure on AWS.' },
  { title: 'UI/UX Designer', type: 'Contract', location: 'Remote', desc: 'Create beautiful, user-centered designs using Figma for web and mobile products.' },
  { title: 'AI/ML Engineer', type: 'Full-time', location: 'Remote', desc: 'Build and deploy machine learning models and AI-powered features for our clients.' },
];

export default function Careers() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [open, setOpen] = useState(null);
  const [applyJob, setApplyJob] = useState(null);
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const formRef = useRef();

  const handleApply = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs.sendForm(
      'service_njzragd',
      'template_nmhwcak',
      formRef.current,
      'qiRQ2GCBat1S9AyKu'
    ).then(() => {
      setStatus('success');
      formRef.current.reset();
    }).catch(() => {
      setStatus('error');
    }).finally(() => setSending(false));
  };

  return (
    <section id="careers" className="py-24 bg-dark relative overflow-hidden" ref={ref}>
      <div className="wave-shape absolute -top-10 -right-10 w-56 h-56 bg-brand/8 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="text-center mb-16"
        >
          <span className="section-tag">Join Us</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Build the Future<br /><span className="gradient-text">With DRUN</span></h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">We're a remote-first team that values ownership, craft, and impact.</p>
        </motion.div>

        <div className="space-y-4">
          {JOBS.map(({ title, type, location, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-dark-card rounded-2xl overflow-hidden border border-dark-border hover:border-brand/30 transition-all duration-300"
            >
              <button
                className="w-full p-5 flex items-center justify-between text-left hover:bg-brand/5 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div>
                  <h3 className="font-bold text-white">{title}</h3>
                  <div className="flex gap-4 mt-1">
                    <span className="flex items-center gap-1 text-xs text-gray-500"><Clock size={11} className="text-brand" /> {type}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-500"><MapPin size={11} className="text-brand" /> {location}</span>
                  </div>
                </div>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={18} className="text-brand" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }} className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-dark-border pt-4">
                      <p className="text-gray-400 text-sm mb-4">{desc}</p>
                      <motion.button
                        whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                        onClick={() => { setApplyJob(title); setStatus(''); }}
                        className="inline-flex items-center gap-2 orange-btn px-5 py-2.5 text-sm"
                      >
                        Apply Now <ArrowRight size={14} />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Apply Modal */}
      <AnimatePresence>
        {applyJob && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setApplyJob(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-dark-card border border-dark-border rounded-2xl max-w-md w-full relative my-4 overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-brand/20 to-brand-dark/20 border-b border-dark-border px-6 py-5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase size={16} className="text-brand" />
                    <span className="text-xs text-brand font-semibold uppercase tracking-widest">Apply Now</span>
                  </div>
                  <h3 className="text-lg font-black text-white">{applyJob}</h3>
                </div>
                <button
                  onClick={() => setApplyJob(null)}
                  className="w-8 h-8 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-brand/30 transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Form */}
              <form ref={formRef} onSubmit={handleApply} className="p-6 space-y-4">
                {/* Hidden field for job title */}
                <input type="hidden" name="job_title" value={applyJob} />
                <input type="hidden" name="message" value={`Job Application for: ${applyJob}`} />

                <div className="relative">
                  <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="text" name="from_name" placeholder="Full Name" required
                    className="w-full bg-dark border border-dark-border rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all text-sm"
                  />
                </div>

                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email" name="from_email" placeholder="Email Address" required
                    className="w-full bg-dark border border-dark-border rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all text-sm"
                  />
                </div>

                <div className="relative">
                  <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="tel" name="phone" placeholder="Phone Number" required
                    className="w-full bg-dark border border-dark-border rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all text-sm"
                  />
                </div>

                <input
                  type="text" name="experience" placeholder="Years of Experience (e.g. 3 years)" required
                  className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all text-sm"
                />

                <input
                  type="url" name="portfolio" placeholder="Portfolio / LinkedIn URL (optional)"
                  className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all text-sm"
                />

                <textarea
                  rows={3} name="cover_note" placeholder="Why do you want to join DRUN? (brief note)" required
                  className="w-full bg-dark border border-dark-border rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all text-sm resize-none"
                />

                {status === 'success' && (
                  <p className="text-green-400 text-sm bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-xl">
                    ✅ Application sent! We'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-xl">
                    ❌ Something went wrong. Please try again.
                  </p>
                )}

                <motion.button
                  type="submit" disabled={sending}
                  whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                  className="w-full orange-btn py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60 text-sm"
                >
                  {sending ? 'Submitting...' : <> Submit Application <Send size={15} /> </>}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
