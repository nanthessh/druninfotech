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
