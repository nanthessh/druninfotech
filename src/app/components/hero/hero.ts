import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <!-- Ambient Glows -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute top-1/3 -left-32 w-[500px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute top-1/2 -right-32 w-[500px] h-[450px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <!-- Subtle Grid Pattern Background -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: High-Impact Typography & Action Suite -->
          <div class="lg:col-span-7 text-center lg:text-left space-y-7">
            
            <!-- Live Availability Badge -->
            <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 backdrop-blur-md shadow-sm">
              <span class="flex h-2.5 w-2.5 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span class="text-xs font-semibold tracking-wide text-slate-300">
                DRUN <span class="text-blue-400">Software</span> & <span class="text-emerald-400">Digital Marketing</span> Agency
              </span>
            </div>

            <!-- Primary Headline -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-display">
              Software built properly. <br class="hidden sm:inline" />
              <span class="brand-gradient-text">Scaled with high-ROI</span> <br />
              <span class="marketing-gradient-text">digital marketing.</span>
            </h1>

            <!-- Subheading description -->
            <p class="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We turn ideas into modern digital products that are simple to use, powerful under the hood, and promoted through data-driven campaigns that drive real sales, leads, and revenue.
            </p>

            <!-- Dual Focus Interactive Switcher -->
            <div class="inline-flex p-1 rounded-xl bg-slate-900/80 border border-slate-700/60 shadow-inner">
              <button 
                (click)="activeView.set('software')"
                class="px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
                [ngClass]="activeView() === 'software' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span>Software Engineering</span>
              </button>

              <button 
                (click)="activeView.set('marketing')"
                class="px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 cursor-pointer"
                [ngClass]="activeView() === 'marketing' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>Digital Marketing Wing</span>
              </button>
            </div>

            <!-- Primary CTAs & Connectivity Launchpad -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              
              <!-- Direct Consultation CTA -->
              <button 
                (click)="modalService.openConsultation(activeView() === 'software' ? 'Software Development' : 'Digital Marketing')"
                class="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2.5">
                <span>Start Your Project</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <!-- Instant WhatsApp Button with Live Chat Indicator -->
              <a 
                [href]="modalService.getWhatsAppUrl('Hi DRUN Team! I would like to consult on a project with you.')"
                target="_blank"
                rel="noopener noreferrer"
                class="px-5 py-3.5 rounded-xl text-sm font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/60 hover:border-emerald-400 shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5 group">
                <svg class="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.073.043.419-.101.824z"/>
                </svg>
                <span>WhatsApp: {{ modalService.displayPhone }}</span>
              </a>

              <!-- Direct Gmail One-Click Composer -->
              <a 
                [href]="modalService.getGmailUrl('New Project Inquiry - DRUN', 'Hello Nanthessh & DRUN Team,%0D%0A%0D%0AI want to build / scale my business with you.')"
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-slate-400 hover:text-white transition-all flex items-center gap-2 group">
                <svg class="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>Email via Gmail</span>
              </a>

            </div>

            <!-- Trust proof badges -->
            <div class="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
              <div class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Production-Ready Code</span>
              </div>
              <div class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>ROI-Tracked Marketing</span>
              </div>
              <div class="flex items-center gap-1.5">
                <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                <span>Direct WhatsApp Support</span>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Visual Showcase & Live Preview -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-lg lg:max-w-none">
              
              <!-- Subtle decorative card backing -->
              <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-emerald-500/30 blur-xl opacity-75 animate-pulse"></div>

              <!-- Main Interactive Console / Dashboard Card -->
              <div class="relative rounded-2xl bg-[#0d162b]/90 border border-blue-500/20 shadow-2xl backdrop-blur-xl p-6 sm:p-7 overflow-hidden">
                
                <!-- Window Chrome Bar -->
                <div class="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <div class="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span class="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/20 text-blue-300">
                      drun://system.live
                    </span>
                  </div>
                </div>

                <!-- SOFTWARE VIEW CARD -->
                <div *ngIf="activeView() === 'software'" class="pt-5 space-y-4 animate-in fade-in duration-300">
                  <div class="flex items-center justify-between">
                    <div>
                      <span class="text-xs uppercase font-bold text-blue-400 tracking-wider">Product Architecture</span>
                      <h4 class="text-lg font-bold text-white">Full-Stack Digital Engine</h4>
                    </div>
                    <span class="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold">
                      v2.6 Stable
                    </span>
                  </div>

                  <!-- Visual Tech Stack Nodes -->
                  <div class="grid grid-cols-2 gap-3 pt-1">
                    <div class="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3">
                      <div class="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs">
                        UI
                      </div>
                      <div>
                        <div class="text-xs font-semibold text-white">Responsive Frontend</div>
                        <div class="text-[11px] text-slate-400">Angular & Next.js</div>
                      </div>
                    </div>

                    <div class="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3">
                      <div class="w-9 h-9 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xs">
                        API
                      </div>
                      <div>
                        <div class="text-xs font-semibold text-white">Cloud Backend</div>
                        <div class="text-[11px] text-slate-400">High-Throughput REST</div>
                      </div>
                    </div>

                    <div class="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3">
                      <div class="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
                        DB
                      </div>
                      <div>
                        <div class="text-xs font-semibold text-white">Reliable Storage</div>
                        <div class="text-[11px] text-slate-400">PostgreSQL / SQL Server</div>
                      </div>
                    </div>

                    <div class="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3">
                      <div class="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xs">
                        DEV
                      </div>
                      <div>
                        <div class="text-xs font-semibold text-white">Instant Deploy</div>
                        <div class="text-[11px] text-slate-400">Vercel & Cloud Edge</div>
                      </div>
                    </div>
                  </div>

                  <!-- Live Metric Bar -->
                  <div class="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between">
                    <div class="flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-emerald-400 live-indicator"></span>
                      <span class="text-xs font-medium text-slate-300">Deployment Pipeline Status</span>
                    </div>
                    <span class="text-xs font-mono font-bold text-emerald-400">100% OPERATIONAL</span>
                  </div>
                </div>

                <!-- DIGITAL MARKETING VIEW CARD -->
                <div *ngIf="activeView() === 'marketing'" class="pt-5 space-y-4 animate-in fade-in duration-300">
                  <div class="flex items-center justify-between">
                    <div>
                      <span class="text-xs uppercase font-bold text-emerald-400 tracking-wider">Digital Marketing Hub</span>
                      <h4 class="text-lg font-bold text-white">Growth & Lead Funnel</h4>
                    </div>
                    <span class="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                      +340% YoY
                    </span>
                  </div>

                  <!-- Live Marketing Metrics -->
                  <div class="grid grid-cols-3 gap-2 text-center">
                    <div class="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                      <div class="text-lg sm:text-xl font-extrabold text-emerald-400 font-display">4.8x</div>
                      <div class="text-[10px] text-slate-400 uppercase font-semibold">Avg. ROAS</div>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                      <div class="text-lg sm:text-xl font-extrabold text-blue-400 font-display">1.4K+</div>
                      <div class="text-[10px] text-slate-400 uppercase font-semibold">Leads Gen</div>
                    </div>
                    <div class="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                      <div class="text-lg sm:text-xl font-extrabold text-amber-400 font-display">#1</div>
                      <div class="text-[10px] text-slate-400 uppercase font-semibold">SEO Rank</div>
                    </div>
                  </div>

                  <!-- Campaign Channels -->
                  <div class="space-y-2 pt-1 text-xs">
                    <div class="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 flex items-center justify-between">
                      <span class="text-slate-300 font-medium">Meta & Instagram Ads</span>
                      <span class="text-emerald-400 font-bold">₹4.20 per Lead</span>
                    </div>
                    <div class="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 flex items-center justify-between">
                      <span class="text-slate-300 font-medium">Google High-Intent Search</span>
                      <span class="text-blue-400 font-bold">18.4% Conv. Rate</span>
                    </div>
                    <div class="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 flex items-center justify-between">
                      <span class="text-slate-300 font-medium">WhatsApp Automated Retargeting</span>
                      <span class="text-emerald-400 font-bold">89% Read Rate</span>
                    </div>
                  </div>

                  <!-- Quick WhatsApp Enquiry for Marketing -->
                  <a 
                    [href]="modalService.getWhatsAppUrl('Hi DRUN! I want to scale my business with your Digital Marketing services.')"
                    target="_blank"
                    class="block w-full py-2.5 px-3 text-center text-xs font-bold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/30 rounded-xl transition-all">
                    Request Custom Marketing Plan on WhatsApp
                  </a>
                </div>

              </div>

              <!-- Floating Sub-Badge 1: Speed & Delivery -->
              <div class="hidden sm:flex absolute -bottom-5 -left-6 p-3.5 rounded-xl bg-[#091122]/95 border border-blue-500/30 shadow-xl backdrop-blur-md items-center gap-3 animate-float">
                <div class="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-bold text-white">Rapid Agile Cycles</div>
                  <div class="text-[11px] text-slate-400">Bi-weekly Working Demos</div>
                </div>
              </div>

              <!-- Floating Sub-Badge 2: WhatsApp Direct Line -->
              <div class="hidden sm:flex absolute -top-5 -right-6 p-3.5 rounded-xl bg-[#091122]/95 border border-emerald-500/30 shadow-xl backdrop-blur-md items-center gap-3 animate-float-delayed">
                <div class="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.073.043.419-.101.824z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-xs font-bold text-white">Direct Founder Access</div>
                  <div class="text-[11px] text-emerald-400 font-medium">WhatsApp: {{ modalService.displayPhone }}</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  modalService = inject(ModalService);
  activeView = signal<'software' | 'marketing'>('software');
}
