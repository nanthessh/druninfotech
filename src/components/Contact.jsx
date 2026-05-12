import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { SERVICES } from '../constants/data';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const RECIPIENTS = [
    'arunkumar.sak097@gmail.com',
    'drun.infotech@gmail.com',
    'gowthamr2723@gmail.com',
    'nanthessh777@gmail.com',
  ];

  const handleSubmit = (e) => {
    e.preventDefault(); setSending(true);
    const formData = new FormData(formRef.current);
    const params = {
      from_name: formData.get('from_name'),
      from_email: formData.get('from_email'),
      service: formData.get('service'),
      message: formData.get('message'),
    };
    Promise.all(
      RECIPIENTS.map(to_email =>
        emailjs.send('service_njzragd', 'template_nmhwcak', { ...params, to_email }, 'qiRQ2GCBat1S9AyKu')
      )
    ).then(() => { setStatus('success'); formRef.current.reset(); })
      .catch(() => setStatus('error'))
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="py-24 bg-dark-card relative overflow-hidden" ref={ref}>
      <div className="wave-shape absolute -top-10 -left-10 w-64 h-64 bg-brand/10 pointer-events-none" />
      <div className="wave-shape absolute -bottom-10 -right-10 w-48 h-48 bg-brand/8 pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <span className="section-tag">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white mt-3">Ready to Build<br /><span className="gradient-text">Something Great?</span></h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">Tell us about your project. We'll get back to you within 24 hours.</p>
        </motion.div>

        <motion.form ref={formRef} onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-8 md:p-12 text-left border border-dark-border">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input type="text" name="from_name" placeholder="Your Name" required className="bg-dark border border-dark-border rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all w-full" />
            <input type="email" name="from_email" placeholder="Email Address" required className="bg-dark border border-dark-border rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all w-full" />
          </div>
          <select name="service" className="bg-dark border border-dark-border rounded-xl px-4 py-3.5 text-gray-400 focus:outline-none focus:border-brand transition-all w-full mb-6">
            <option value="">Select Service</option>
            {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
          </select>
          <textarea rows={4} name="message" placeholder="Tell us about your project..." required className="bg-dark border border-dark-border rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-all w-full mb-6 resize-none" />
          {status === 'success' && <p className="text-green-400 text-sm mb-4 bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-xl">✅ Message sent! We'll get back to you soon.</p>}
          {status === 'error' && <p className="text-red-400 text-sm mb-4 bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-xl">❌ Something went wrong. Please try again.</p>}
          <motion.button type="submit" disabled={sending} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
            className="w-full orange-btn py-4 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60">
            {sending ? 'Sending...' : <> Send Message <ArrowRight size={18} /> </>}
          </motion.button>
        </motion.form>

        <div className="flex flex-wrap justify-center gap-4 mt-10 text-sm text-gray-500">
          <a href="mailto:drun.infotech@gmail.com" className="flex items-center gap-2 hover:text-brand transition-colors glass px-4 py-2.5 rounded-xl hover:border-brand/30">
            <Mail size={15} className="text-brand" /> drun.infotech@gmail.com
          </a>
          <a href="tel:+919360266792" className="flex items-center gap-2 hover:text-brand transition-colors glass px-4 py-2.5 rounded-xl hover:border-brand/30">
            <Phone size={15} className="text-brand" /> +91 93602 66792
          </a>
          <span className="flex items-center gap-2 glass px-4 py-2.5 rounded-xl">
            <MapPin size={15} className="text-brand" /> Remote · Worldwide
          </span>
        </div>
      </div>
    </section>
  );
}
