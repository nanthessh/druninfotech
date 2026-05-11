import React from 'react';
import { CheckCircle } from 'lucide-react';
import { ABOUT_FEATURES } from '../constants/data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-dark-card">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">About DRUN</p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">We're Not an Agency.<br /><span className="gradient-text">We're Your Tech Team.</span></h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            DRUN Technology is a product-focused software company. We partner with startups and growing businesses to build digital products that are fast, scalable, and beautifully designed.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            From MVP to enterprise — we bring the engineering depth and design thinking that turns ideas into market-ready products.
          </p>
          <div className="flex flex-col gap-3">
            {['Product-first thinking', 'Clean, maintainable code', 'Transparent communication', 'Post-launch support'].map(item => (
              <div key={item} className="flex items-center gap-3 text-gray-300">
                <CheckCircle size={16} className="text-brand flex-shrink-0" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {ABOUT_FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-xl p-5">
              <Icon size={20} className="text-brand mb-3" />
              <div className="font-semibold text-sm mb-1">{title}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
