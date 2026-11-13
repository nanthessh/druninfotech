import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

interface SoftwareService {
  title: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  icon: string;
  accent: string;
}

@Component({
  selector: 'app-software-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="relative py-24 sm:py-32 bg-[#070c18] overflow-hidden">
      <!-- Background Ambient Glow -->
      <div class="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <!-- Header -->
        <div class="max-w-3xl mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wider uppercase">
            <span>01 / Engineering Capabilities</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Software built for <span class="brand-gradient-text">your exact needs</span>, not off-the-shelf limits.
          </h2>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
            From the first user interface to the databases running behind it, DRUN engineers robust web applications and custom systems that remove friction and help businesses scale.
          </p>
        </div>

        <!-- 6 Core Software Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div 
            *ngFor="let s of services"
            class="group rounded-2xl bg-[#0c1426]/90 border border-slate-800/90 p-7 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-950/30 flex flex-col justify-between">
            
            <div>
              <div class="flex items-center justify-between mb-5">
                <div [class]="'w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ' + s.accent">
                  <span>{{ s.icon }}</span>
                </div>
                <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/60">
                  {{ s.category }}
                </span>
              </div>

              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {{ s.title }}
              </h3>
              
              <p class="text-xs font-semibold text-blue-300/80 mb-4 font-mono">{{ s.tagline }}</p>

              <p class="text-sm text-slate-300 leading-relaxed mb-6">
                {{ s.description }}
              </p>

              <!-- Tags / Tech Pill Stack -->
              <div class="flex flex-wrap gap-1.5 mb-6">
                <span 
                  *ngFor="let tag of s.tags"
                  class="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/50">
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Footer Action: Direct Inquire & WhatsApp -->
            <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <button 
                (click)="modalService.openConsultation('Software: ' + s.title)"
                class="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:translate-x-1 transition-all cursor-pointer">
                <span>Configure Project</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <a 
                [href]="modalService.getWhatsAppUrl('Hi DRUN! I am inquiring about ' + s.title)"
                target="_blank"
                class="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-900/60 hover:text-emerald-300 transition-colors"
                title="Discuss on WhatsApp">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.073.043.419-.101.824z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>

        <!-- Custom Solution Banner -->
        <div class="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div class="space-y-1 text-center sm:text-left">
            <h4 class="text-lg font-bold text-white">Have a unique or multi-layered technical requirement?</h4>
            <p class="text-xs sm:text-sm text-slate-300">If your project spans software, cloud infrastructure, and marketing funnels, we provide turnkey solutions.</p>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <button 
              (click)="modalService.openConsultation('Custom Turnkey Architecture')"
              class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer">
              Talk to Our Engineers
            </button>
            <a 
              [href]="modalService.getWhatsAppUrl('Hi DRUN! I have a custom technical project requirement.')"
              target="_blank"
              class="px-4 py-2.5 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-900 text-xs font-bold transition-all">
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class SoftwareServicesComponent {
  modalService = inject(ModalService);

  services: SoftwareService[] = [
    {
      title: 'Web Applications',
      category: 'MODERN SAAS',
      tagline: 'Fast, Interactive & Responsive Products',
      description: 'Single-page web applications engineered for speed, clean UX, and high user retention across desktop and mobile devices.',
      tags: ['Angular 21', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js'],
      icon: '💻',
      accent: 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
    },
    {
      title: 'Business Software & ERP',
      category: 'INTERNAL SYSTEMS',
      tagline: 'Custom Workflows & Operations',
      description: 'Replace messy spreadsheets with custom operational tools, customer portals, staff dashboards, and automated billing software.',
      tags: ['Role-Based Access', 'Dashboards', 'Reporting', 'Automated Invoicing'],
      icon: '🏢',
      accent: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
    },
    {
      title: 'APIs & Third-Party Integrations',
      category: 'CONNECTIVITY',
      tagline: 'Systems That Talk Seamlessly',
      description: 'Unify your business tools by connecting payment gateways (Stripe, Razorpay), WhatsApp Cloud APIs, CRMs, and custom microservices.',
      tags: ['RESTful APIs', 'WhatsApp API', 'Webhooks', 'Payment Gateways'],
      icon: '⚡',
      accent: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
    },
    {
      title: 'Database Architecture',
      category: 'DATA & STORAGE',
      tagline: 'Structured, Secure & Reliable',
      description: 'High-performance schema modeling, query optimization, and structured relational storage built to safeguard your sensitive business data.',
      tags: ['PostgreSQL', 'SQL Server', 'Prisma', 'Data Migration'],
      icon: '🗄️',
      accent: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
    },
    {
      title: 'UI/UX & Design Systems',
      category: 'INTERFACE DESIGN',
      tagline: 'Interfaces Users Actually Love',
      description: 'We craft human-centric UI layouts, interactive design prototypes in Figma, and coherent design systems that look polished on every screen.',
      tags: ['Figma Mockups', 'Design Systems', 'Micro-Interactions', 'UX Audits'],
      icon: '🎨',
      accent: 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
    },
    {
      title: 'Cloud DevOps & Maintenance',
      category: 'LIFECYCLE',
      tagline: 'Zero-Downtime Infrastructure',
      description: 'Automated CI/CD deployment pipelines on Vercel and AWS, SSL certificates, performance audits, bug patches, and long-term tech evolution.',
      tags: ['Vercel', 'AWS', 'Automated CI/CD', '24/7 Monitoring'],
      icon: '☁️',
      accent: 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
    }
  ];
}
