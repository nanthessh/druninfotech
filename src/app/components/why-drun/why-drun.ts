import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-drun',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="why-us" class="relative py-24 sm:py-32 bg-[#060b17] border-t border-slate-800/80 overflow-hidden">
      <!-- Glow -->
      <div class="absolute -bottom-20 right-1/4 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-5 space-y-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wider uppercase">
              <span>04 / Why Choose DRUN</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
              Built with purpose. <br />
              <span class="brand-gradient-text">Delivered with speed.</span>
            </h2>

            <p class="text-base text-slate-300 leading-relaxed">
              We believe great digital products come from the intersection of thoughtful user experience, bulletproof engineering, and aggressive commercial distribution.
            </p>

            <div class="space-y-4 pt-2">
              <div class="flex items-start gap-3.5">
                <div class="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 class="text-sm font-bold text-white">Full Product Lifecycle Ownership</h4>
                  <p class="text-xs text-slate-400 mt-0.5">Design, frontend, cloud backend, SEO, and paid media managed by one synchronized squad.</p>
                </div>
              </div>

              <div class="flex items-start gap-3.5">
                <div class="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 class="text-sm font-bold text-white">Direct WhatsApp & Founder Line</h4>
                  <p class="text-xs text-slate-400 mt-0.5">No junior gatekeepers or multi-week ticket queues. You have immediate direct access.</p>
                </div>
              </div>

              <div class="flex items-start gap-3.5">
                <div class="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <h4 class="text-sm font-bold text-white">Zero Vendor Lock-in</h4>
                  <p class="text-xs text-slate-400 mt-0.5">You own 100% of your code, repository, cloud assets, ad accounts, and analytics.</p>
                </div>
              </div>
            </div>

          </div>

          <div class="lg:col-span-7">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              <div class="p-6 rounded-2xl bg-[#0b1325]/90 border border-slate-800 space-y-3">
                <span class="text-3xl">⚡</span>
                <h4 class="text-base font-bold text-white">Ultra-Responsive Architecture</h4>
                <p class="text-xs text-slate-300 leading-relaxed">
                  We leverage Angular 21, Vite, and serverless edge functions so your web app loads in milliseconds, keeping bounce rates at absolute zero.
                </p>
              </div>

              <div class="p-6 rounded-2xl bg-[#0b1325]/90 border border-slate-800 space-y-3">
                <span class="text-3xl">📈</span>
                <h4 class="text-base font-bold text-white">Commercial Conversion Focus</h4>
                <p class="text-xs text-slate-300 leading-relaxed">
                  Every button, color contrast, headline, and form field is designed to maximize user action, WhatsApp enquiries, and revenue.
                </p>
              </div>

              <div class="p-6 rounded-2xl bg-[#0b1325]/90 border border-slate-800 space-y-3">
                <span class="text-3xl">📍</span>
                <h4 class="text-base font-bold text-white">Tamil Nadu Tech Hubs</h4>
                <p class="text-xs text-slate-300 leading-relaxed">
                  Serving from Coimbatore, Namakkal, Erode & Salem, Tamil Nadu — delivering high-standard software engineering and digital marketing at unmatched velocity and value.
                </p>
              </div>

              <div class="p-6 rounded-2xl bg-[#0b1325]/90 border border-slate-800 space-y-3">
                <span class="text-3xl">💬</span>
                <h4 class="text-base font-bold text-white">Always-On WhatsApp Updates</h4>
                <p class="text-xs text-slate-300 leading-relaxed">
                  Receive bi-weekly video screen walkthroughs, sprint milestones, and ad performance snapshots directly on your WhatsApp.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class WhyDrunComponent {}
