import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants/data';

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black">Trusted by<br /><span className="gradient-text">Founders & CTOs</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, role, text, rating }) => (
            <div key={name} className="glass rounded-2xl p-7">
              <div className="flex gap-1 mb-4">
                {Array(rating).fill(0).map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">"{text}"</p>
              <div>
                <div className="font-semibold">{name}</div>
                <div className="text-sm text-gray-500">{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
