import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

interface MarketingService {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  metrics: string;
  features: string[];
  icon: string;
  color: string;
}

@Component({
  selector: 'app-digital-marketing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="digital-marketing" class="relative py-24 sm:py-32 bg-[#060b17] border-y border-slate-800/80 overflow-hidden">
      <!-- Glow Gradients -->
      <div class="absolute -top-40 right-10 w-[550px] h-[550px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute -bottom-40 left-10 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wider uppercase">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Growth Marketing & Lead Engine
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Data-Driven Marketing That Fills Your Pipeline With <span class="marketing-gradient-text">High-Value Clients.</span>
          </h2>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
            Building software is only half the battle. DRUN connects your product to paying users through relentless SEO, performance advertising, and automated WhatsApp conversion funnels.
          </p>
        </div>

        <!-- 6 Pillars Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          <div 
            *ngFor="let s of marketingServices"
            class="group relative rounded-2xl bg-[#0c1426]/80 border border-slate-800/90 p-7 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-950/30 flex flex-col justify-between">
            
            <div>
              <!-- Header & Badge -->
              <div class="flex items-center justify-between mb-5">
                <div [class]="'w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ' + s.color">
                  <span>{{ s.icon }}</span>
                </div>
                <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60">
                  {{ s.badge }}
                </span>
              </div>

              <!-- Title & Description -->
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {{ s.title }}
              </h3>
              <p class="text-xs text-slate-400 mb-4 font-mono">{{ s.subtitle }}</p>
              
              <p class="text-sm text-slate-300 leading-relaxed mb-5">
                {{ s.description }}
              </p>

              <!-- Feature bullet points -->
              <ul class="space-y-2 mb-6">
                <li *ngFor="let f of s.features" class="flex items-center text-xs text-slate-300 gap-2">
                  <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ f }}</span>
                </li>
              </ul>
            </div>

            <!-- Footer Metric & Quick Action -->
            <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span class="text-xs font-bold text-emerald-400 font-mono">{{ s.metrics }}</span>
              <button 
                (click)="modalService.openConsultation('Digital Marketing: ' + s.title)"
                class="text-xs font-semibold text-slate-300 group-hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all cursor-pointer">
                <span>Inquire</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>

        <!-- Interactive Growth & Campaign ROI Estimator -->
        <div class="relative rounded-3xl bg-gradient-to-b from-[#0f1d38] to-[#091224] border border-emerald-500/30 p-7 sm:p-10 shadow-2xl overflow-hidden">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <!-- Estimator Controls -->
            <div class="lg:col-span-7 space-y-6">
              <div class="space-y-2">
                <div class="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  <span>Interactive Growth Simulator</span>
                </div>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  Estimate Your Marketing Returns & Lead Volume
                </h3>
                <p class="text-sm text-slate-300">
                  Slide your planned monthly budget to preview projected reach, qualified enquiries, and estimated Return on Ad Spend (ROAS).
                </p>
              </div>

              <!-- Industry Selector -->
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-2">Select Your Business Sector:</label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button 
                    *ngFor="let ind of industries" 
                    (click)="selectedIndustry.set(ind.id)"
                    class="py-2 px-3 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer"
                    [ngClass]="selectedIndustry() === ind.id ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-sm' : 'bg-slate-900/60 border-slate-700/60 text-slate-400 hover:text-slate-200'">
                    {{ ind.name }}
                  </button>
                </div>
              </div>

              <!-- Monthly Budget Slider -->
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <label class="text-xs font-semibold text-slate-300">Monthly Marketing Budget:</label>
                  <span class="text-lg font-mono font-extrabold text-emerald-400">
                    ₹{{ monthlyBudget().toLocaleString('en-IN') }} <span class="text-xs text-slate-400 font-normal">/ month</span>
                  </span>
                </div>
                
                <input 
                  type="range" 
                  min="20000" 
                  max="500000" 
                  step="10000" 
                  [ngModel]="monthlyBudget()" 
                  (ngModelChange)="monthlyBudget.set($event)"
                  class="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" 
                />

                <div class="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>₹20,000 (Starter)</span>
                  <span>₹1,50,000 (Growth)</span>
                  <span>₹5,00,000+ (Scale)</span>
                </div>
              </div>

            </div>

            <!-- Calculated Output Card -->
            <div class="lg:col-span-5">
              <div class="rounded-2xl bg-[#091122]/95 border border-emerald-500/30 p-6 space-y-5 shadow-xl">
                <div class="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Projected 30-Day Impact</span>
                  <span class="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                    {{ estimatedRoas() }} ROAS Target
                  </span>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span class="text-[11px] text-slate-400 block mb-1">Estimated Impressions</span>
                    <span class="text-xl sm:text-2xl font-bold font-display text-white">
                      {{ estimatedImpressions() }}
                    </span>
                  </div>

                  <div class="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span class="text-[11px] text-slate-400 block mb-1">Target Qualified Leads</span>
                    <span class="text-xl sm:text-2xl font-bold font-display text-emerald-400">
                      {{ estimatedLeads() }}
                    </span>
                  </div>
                </div>

                <!-- Strategic Gameplan Output -->
                <div class="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs text-slate-300 space-y-1.5">
                  <div class="font-bold text-emerald-300 flex items-center gap-1.5">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"/>
                    </svg>
                    <span>Recommended Multi-Channel Mix:</span>
                  </div>
                  <p class="text-slate-300 text-[11px] leading-relaxed">
                    {{ recommendedStrategy() }}
                  </p>
                </div>

                <!-- Direct Action Buttons with Pre-filled WhatsApp and Gmail -->
                <div class="space-y-2 pt-2">
                  <a 
                    [href]="getPlanWhatsAppUrl()"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full py-3 px-4 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 flex items-center justify-center gap-2 transition-all shadow-md group">
                    <svg class="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.073.043.419-.101.824z"/>
                    </svg>
                    <span>Send This Plan to DRUN via WhatsApp</span>
                  </a>

                  <a 
                    [href]="getPlanGmailUrl()"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-all">
                    <svg class="w-4 h-4 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span>Email This Spec via Gmail</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class DigitalMarketingComponent {
  modalService = inject(ModalService);

  monthlyBudget = signal<number>(50000);
  selectedIndustry = signal<string>('services');

  industries = [
    { id: 'services', name: 'B2B & Services' },
    { id: 'saas', name: 'Software / SaaS' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'local', name: 'Local Business' }
  ];

  marketingServices: MarketingService[] = [
    {
      id: 'seo',
      title: 'SEO & Search Dominance',
      subtitle: 'Technical, On-Page & Local Search',
      badge: 'LONG-TERM ASSET',
      description: 'Rank for high-intent transactional search terms that bring ready-to-buy customers without burning money on clicks indefinitely.',
      metrics: '+280% Organic Visits in 90 Days',
      features: [
        'Core Web Vitals & speed optimization',
        'Local SEO & Google Business Profile dominance',
        'Competitor keyword gap hijacking',
        'Semantic content clusters & backlink building'
      ],
      icon: '🔍',
      color: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
    },
    {
      id: 'ppc',
      title: 'Meta & Google Ads Engine',
      subtitle: 'Laser-Targeted Performance PPC',
      badge: 'IMMEDIATE RESULTS',
      description: 'Engineered ad campaigns across Instagram, Facebook, and Google Search designed specifically for positive unit economics and lowest Cost Per Acquisition (CPA).',
      metrics: '3.8x - 6.2x Verified ROAS',
      features: [
        'High-converting video ad creatives & hooks',
        'Negative keyword filtering to eliminate waste',
        'Dynamic retargeting for cart & form drop-offs',
        'Full pixel, CAPI & conversion tracking'
      ],
      icon: '🎯',
      color: 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
    },
    {
      id: 'whatsapp-funnels',
      title: 'WhatsApp Automation Funnels',
      subtitle: 'Conversational Lead Qualification',
      badge: 'HIGHEST CONVERSION',
      description: 'Connect ad clicks directly into interactive WhatsApp flows where customers get instant quotes, schedule calls, and close with 90%+ message open rates.',
      metrics: '4x Higher Close Rate than Email',
      features: [
        'Click-to-WhatsApp Meta Ad campaigns',
        'Automated 24/7 lead qualification chatbot',
        'Broadcast sequences & reminder triggers',
        'Direct CRM synchronization'
      ],
      icon: '💬',
      color: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
    },
    {
      id: 'social-branding',
      title: 'Social Media & Brand Scaling',
      subtitle: 'Content That Builds Massive Authority',
      badge: 'VIRAL & ORGANIC',
      description: 'Transform your brand from unknown to industry authority with stunning visuals, compelling short-form video reels, and high-engagement carousel posts.',
      metrics: '50K+ Monthly Reach Target',
      features: [
        'Custom graphic design matching DRUN quality',
        'Instagram Reels & YouTube Shorts scripting',
        'LinkedIn thought leadership for B2B founders',
        'Consistent weekly publishing schedule'
      ],
      icon: '📱',
      color: 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
    },
    {
      id: 'cro',
      title: 'Conversion Rate Optimization (CRO)',
      subtitle: 'Frictionless High-Conversion Pages',
      badge: 'DOUBLE YOUR REVENUE',
      description: 'Even great ads fail with bad landing pages. We build laser-focused landing pages with psychology-backed copy, social proof, and one-tap checkout.',
      metrics: '12% - 24% Landing Page Conv.',
      features: [
        'Heatmap & scroll-depth analysis',
        'A/B headline & CTA button testing',
        'Sub-second mobile loading speeds',
        'Frictionless inquiry forms & WhatsApp triggers'
      ],
      icon: '⚡',
      color: 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
    },
    {
      id: 'analytics',
      title: 'Real-Time ROI & Analytics',
      subtitle: 'Zero Guesswork, 100% Attribution',
      badge: 'TOTAL TRANSPARENCY',
      description: 'Know exactly where every single rupee is spent and how much profit it generated with custom live dashboards and weekly WhatsApp executive reports.',
      metrics: 'Full End-to-End Tracking',
      features: [
        'Google Analytics 4 & Meta Pixel setup',
        'Custom Looker Studio ROI live dashboards',
        'Cost-per-lead (CPL) real-time alerts',
        'Bi-weekly strategic review calls'
      ],
      icon: '📊',
      color: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
    }
  ];

  estimatedImpressions = computed(() => {
    const b = this.monthlyBudget();
    const imp = Math.round(b * 3.8);
    return imp.toLocaleString('en-IN') + '+';
  });

  estimatedLeads = computed(() => {
    const b = this.monthlyBudget();
    const ind = this.selectedIndustry();
    let mult = 0.0016; // base lead rate
    if (ind === 'local') mult = 0.0022;
    if (ind === 'ecommerce') mult = 0.0035;
    if (ind === 'saas') mult = 0.0011;

    const leads = Math.max(15, Math.round(b * mult));
    return `${leads} - ${Math.round(leads * 1.4)} leads`;
  });

  estimatedRoas = computed(() => {
    const ind = this.selectedIndustry();
    if (ind === 'ecommerce') return '4.2x - 5.8x';
    if (ind === 'saas') return '3.5x - 5.0x';
    if (ind === 'local') return '4.5x - 7.0x';
    return '3.8x - 5.2x';
  });

  recommendedStrategy = computed(() => {
    const b = this.monthlyBudget();
    const ind = this.selectedIndustry();

    if (b < 35000) {
      return 'Hyper-focused Google Local Search + targeted Meta Ad campaign with direct WhatsApp lead capture to maximize immediate cashflow.';
    } else if (b < 100000) {
      return 'Multi-funnel mix: Google Search for high-intent buyers, Meta video ads for retargeting, SEO foundation, and automated WhatsApp nurturing.';
    } else {
      return 'Full Omni-Channel Scale: Aggressive Meta/Google paid spend, daily short-form content distribution, high-authority SEO backlinks, and dedicated CRO A/B testing.';
    }
  });

  getPlanWhatsAppUrl(): string {
    const text = `Hi DRUN Team! I used your Digital Marketing Estimator for my ${this.selectedIndustry()} business with a monthly budget of ₹${this.monthlyBudget().toLocaleString('en-IN')}. Please share the detailed campaign roadmap.`;
    return this.modalService.getWhatsAppUrl(text);
  }

  getPlanGmailUrl(): string {
    const sub = `Digital Marketing Plan Request - Budget: ₹${this.monthlyBudget().toLocaleString('en-IN')}`;
    const body = `Hi DRUN,%0D%0A%0D%0AI tested your Digital Marketing ROI Estimator with the following details:%0D%0A- Business Type: ${this.selectedIndustry()}%0D%0A- Monthly Budget: ₹${this.monthlyBudget().toLocaleString('en-IN')}%0D%0A- Target: ${this.estimatedLeads()}%0D%0A%0D%0APlease send me a formal proposal and schedule an onboarding call.%0D%0A%0D%0AName:%0D%0APhone/WhatsApp:`;
    return this.modalService.getGmailUrl(sub, body);
  }
}
