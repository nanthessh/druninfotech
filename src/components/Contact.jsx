import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { SERVICES } from '../constants/data';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
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
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
        <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Build<br /><span className="gradient-text">Something Great?</span></h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">Tell us about your project. We'll get back to you within 24 hours with a clear plan and honest pricing.</p>

        <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-12 text-left">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input type="text" name="from_name" placeholder="Your Name" required className="bg-dark border border-dark-border rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-colors w-full" />
            <input type="email" name="from_email" placeholder="Email Address" required className="bg-dark border border-dark-border rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-colors w-full" />
          </div>
          <select name="service" className="bg-dark border border-dark-border rounded-xl px-4 py-3.5 text-gray-400 focus:outline-none focus:border-brand transition-colors w-full mb-6">
            <option value="">Select Service</option>
            {SERVICES.map(s => <option key={s.title}>{s.title}</option>)}
          </select>
          <textarea rows={4} name="message" placeholder="Tell us about your project..." required className="bg-dark border border-dark-border rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-brand transition-colors w-full mb-6 resize-none" />
          {status === 'success' && <p className="text-green-400 text-sm mb-4">✅ Message sent! We'll get back to you soon.</p>}
          {status === 'error' && <p className="text-red-400 text-sm mb-4">❌ Something went wrong. Please try again.</p>}
          <button type="submit" disabled={sending} className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-4 rounded-xl transition-all hover:scale-[1.01] glow flex items-center justify-center gap-2 disabled:opacity-60">
            {sending ? 'Sending...' : <> Send Message <ArrowRight size={18} /> </>}
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-500">
          <a href="mailto:drun.infotech@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={15} /> drun.infotech@gmail.com</a>
          <a href="tel:+919360266792" className="flex items-center gap-2 hover:text-white transition-colors"><Phone size={15} /> +91 93602 66792</a>
          <span className="flex items-center gap-2"><MapPin size={15} /> Remote · Worldwide</span>
        </div>
      </div>
    </section>
  );
}
