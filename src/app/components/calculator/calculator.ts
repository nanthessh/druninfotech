import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

interface AddonOption {
  id: string;
  name: string;
  price: number;
  timeDays: number;
  desc: string;
}

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="calculator" class="relative py-24 sm:py-32 bg-[#060b17] border-t border-slate-800/80 overflow-hidden">
      <!-- Glow effect -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wider uppercase">
            <span>Instant Project Scoper</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Transparent Pricing & <span class="brand-gradient-text">Instant Project Estimate</span>
          </h2>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
            No surprise invoices, hidden clauses, or vague promises. Select your requirements below to see an instant timeline and budget scope.
          </p>
        </div>

        <!-- Calculator Interface Card -->
        <div class="rounded-3xl bg-[#0b1325]/90 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <!-- Left Controls: 7 Cols -->
            <div class="lg:col-span-7 space-y-8">
              
              <!-- 1. Project Domain Selector -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Step 1: Choose Primary Project Type
                </label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div 
                    *ngFor="let p of projectTypes"
                    (click)="selectedType.set(p.id)"
                    class="p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5"
                    [ngClass]="selectedType() === p.id ? 'bg-blue-600/15 border-blue-400 text-white shadow-md' : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'">
                    <span class="text-2xl">{{ p.icon }}</span>
                    <div>
                      <div class="text-sm font-bold">{{ p.name }}</div>
                      <div class="text-xs text-slate-400 mt-0.5">{{ p.desc }}</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 2. Feature & Growth Add-ons -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Step 2: Select Capabilities & Features
                </label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div 
                    *ngFor="let addon of addons"
                    (click)="toggleAddon(addon.id)"
                    class="p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between"
                    [ngClass]="isAddonSelected(addon.id) ? 'bg-emerald-500/10 border-emerald-400/80 text-white' : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:border-slate-700'">
                    
                    <div class="flex items-center gap-2.5">
                      <div 
                        class="w-5 h-5 rounded-md flex items-center justify-center border text-xs font-bold"
                        [ngClass]="isAddonSelected(addon.id) ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700 bg-slate-800'">
                        <span *ngIf="isAddonSelected(addon.id)">✓</span>
                      </div>
                      <div>
                        <div class="text-xs font-semibold text-slate-200">{{ addon.name }}</div>
                        <div class="text-[10px] text-slate-400">{{ addon.desc }}</div>
                      </div>
                    </div>

                    <span class="text-xs font-mono font-bold text-slate-300">+₹{{ addon.price.toLocaleString('en-IN') }}</span>
                  </div>
                </div>
              </div>

              <!-- 3. Delivery Pace -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Step 3: Timeline & Delivery Speed
                </label>
                <div class="grid grid-cols-3 gap-3">
                  <div 
                    *ngFor="let sp of deliveryPaces"
                    (click)="selectedPace.set(sp.id)"
                    class="p-3 rounded-xl border text-center transition-all cursor-pointer"
                    [ngClass]="selectedPace() === sp.id ? 'bg-indigo-600/20 border-indigo-400 text-white' : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700'">
                    <div class="text-xs font-bold">{{ sp.name }}</div>
                    <div class="text-[11px] text-slate-400 mt-0.5">{{ sp.sub }}</div>
                  </div>
                </div>
              </div>

            </div>

            <!-- Right Summary Output: 5 Cols -->
            <div class="lg:col-span-5 flex flex-col justify-between">
              <div class="rounded-2xl bg-gradient-to-b from-[#0f1b33] to-[#0a1324] border border-blue-500/30 p-6 sm:p-7 space-y-6 shadow-xl">
                
                <div class="flex items-center justify-between pb-4 border-b border-slate-800">
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Project Estimation</span>
                  <span class="text-xs font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-semibold">
                    DRUN Guaranteed Scope
                  </span>
                </div>

                <!-- Price range display -->
                <div class="space-y-1">
                  <span class="text-xs text-slate-400 uppercase tracking-wider font-semibold">Estimated Investment:</span>
                  <div class="text-3xl sm:text-4xl font-extrabold text-white font-display">
                    ₹{{ totalMinPrice().toLocaleString('en-IN') }} - ₹{{ totalMaxPrice().toLocaleString('en-IN') }}
                  </div>
                  <div class="text-xs text-slate-400 font-mono">
                    ≈ USD $ {{ minPriceUsd() }} - $ {{ maxPriceUsd() }}
                  </div>
                </div>

                <!-- Timeline & Milestones -->
                <div class="grid grid-cols-2 gap-3 py-3 border-y border-slate-800/80">
                  <div>
                    <span class="text-[11px] text-slate-400 block">Estimated Turnaround</span>
                    <span class="text-sm font-bold text-emerald-400 font-mono">{{ estimatedTimeline() }}</span>
                  </div>
                  <div>
                    <span class="text-[11px] text-slate-400 block">Revisions Included</span>
                    <span class="text-sm font-bold text-blue-400 font-mono">Unlimited in Scope</span>
                  </div>
                </div>

                <!-- Scope items checklist summary -->
                <div class="space-y-2 text-xs text-slate-300">
                  <div class="font-bold text-white">Included in this quote:</div>
                  <div class="flex items-center gap-2 text-slate-300">
                    <span class="text-emerald-400">✓</span>
                    <span>100% Source Code Ownership & Git Repo</span>
                  </div>
                  <div class="flex items-center gap-2 text-slate-300">
                    <span class="text-emerald-400">✓</span>
                    <span>Production deployment on Vercel / Cloud</span>
                  </div>
                  <div class="flex items-center gap-2 text-slate-300">
                    <span class="text-emerald-400">✓</span>
                    <span>Direct WhatsApp & Gmail support channel</span>
                  </div>
                </div>

                <!-- Direct Connectivity Buttons -->
                <div class="space-y-2.5 pt-2">
                  <a 
                    [href]="getCalculatorWhatsAppUrl()"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-950/40 group">
                    <svg class="w-4 h-4 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.073.043.419-.101.824z"/>
                    </svg>
                    <span>Send Quote to DRUN via WhatsApp</span>
                  </a>

                  <a 
                    [href]="getCalculatorGmailUrl()"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full py-3 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-all">
                    <svg class="w-4 h-4 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <span>Open Pre-filled in Gmail</span>
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
export class CalculatorComponent {
  modalService = inject(ModalService);

  selectedType = signal<string>('webapp');
  selectedAddons = signal<string[]>(['seo', 'whatsapp']);
  selectedPace = signal<string>('standard');

  projectTypes = [
    { id: 'webapp', name: 'Web Application', icon: '💻', basePrice: 35000, days: 18, desc: 'Responsive Angular/Next.js product' },
    { id: 'marketing', name: 'Digital Marketing & Ads', icon: '🚀', basePrice: 25000, days: 10, desc: 'SEO, Meta & Google Ad funnels' },
    { id: 'erp', name: 'Business ERP / CRM', icon: '🏢', basePrice: 50000, days: 28, desc: 'Custom internal software & DB' },
    { id: 'turnkey', name: 'Turnkey Suite (Code + Growth)', icon: '👑', basePrice: 70000, days: 30, desc: 'Full product development + marketing' }
  ];

  addons: AddonOption[] = [
    { id: 'seo', name: 'SEO & Search Setup', price: 12000, timeDays: 5, desc: 'Google schema, sitemaps, page 1 optimization' },
    { id: 'whatsapp', name: 'WhatsApp Bot Integration', price: 10000, timeDays: 3, desc: 'Click-to-chat & automated lead replies' },
    { id: 'payment', name: 'Online Payments & Checkout', price: 15000, timeDays: 4, desc: 'Razorpay / Stripe gateway integration' },
    { id: 'auth', name: 'User Authentication & Roles', price: 14000, timeDays: 4, desc: 'Secure login, profile & permissions' },
    { id: 'ads', name: 'Meta & Google Ads Campaign', price: 18000, timeDays: 5, desc: 'Ad creative design, copy & pixel setup' },
    { id: 'analytics', name: 'Executive Live Dashboard', price: 12000, timeDays: 3, desc: 'Real-time sales & lead analytics' }
  ];

  deliveryPaces = [
    { id: 'standard', name: 'Standard', sub: 'Calculated Pace' },
    { id: 'sprint', name: 'Rush Sprint', sub: '-35% Time (+20%)' },
    { id: 'retainer', name: 'Monthly Partner', sub: 'Ongoing Growth' }
  ];

  toggleAddon(id: string): void {
    const current = this.selectedAddons();
    if (current.includes(id)) {
      this.selectedAddons.set(current.filter(item => item !== id));
    } else {
      this.selectedAddons.set([...current, id]);
    }
  }

  isAddonSelected(id: string): boolean {
    return this.selectedAddons().includes(id);
  }

  totalMinPrice = computed(() => {
    const type = this.projectTypes.find(t => t.id === this.selectedType()) || this.projectTypes[0];
    const addonsTotal = this.addons
      .filter(a => this.selectedAddons().includes(a.id))
      .reduce((sum, a) => sum + a.price, 0);

    let total = type.basePrice + addonsTotal;
    if (this.selectedPace() === 'sprint') total *= 1.2;
    return Math.round(total);
  });

  totalMaxPrice = computed(() => {
    return Math.round(this.totalMinPrice() * 1.35);
  });

  minPriceUsd = computed(() => {
    return Math.round(this.totalMinPrice() / 86);
  });

  maxPriceUsd = computed(() => {
    return Math.round(this.totalMaxPrice() / 86);
  });

  estimatedTimeline = computed(() => {
    const type = this.projectTypes.find(t => t.id === this.selectedType()) || this.projectTypes[0];
    const addonDays = this.addons
      .filter(a => this.selectedAddons().includes(a.id))
      .reduce((sum, a) => sum + a.timeDays, 0);

    let days = Math.round(type.days + addonDays * 0.45);
    if (this.selectedPace() === 'sprint') days = Math.max(7, Math.round(days * 0.65));
    return `${days} - ${Math.round(days * 1.3)} Business Days`;
  });

  getCalculatorWhatsAppUrl(): string {
    const text = `Hi DRUN Team! I generated a quote on your website calculator:%0A- Project: ${this.selectedType()}%0A- Features: ${this.selectedAddons().join(', ')}%0A- Pace: ${this.selectedPace()}%0A- Estimate: ₹${this.totalMinPrice().toLocaleString('en-IN')} - ₹${this.totalMaxPrice().toLocaleString('en-IN')}%0APlease let me know how we can start!`;
    return this.modalService.getWhatsAppUrl(text);
  }

  getCalculatorGmailUrl(): string {
    const subject = `Project Estimation: ${this.selectedType()} - DRUN Quote`;
    const body = `Hi Nanthessh & DRUN Team,%0D%0A%0D%0AI configured a project estimate on your DRUN website:%0D%0A- Project Type: ${this.selectedType()}%0D%0A- Selected Features: ${this.selectedAddons().join(', ')}%0D%0A- Delivery Speed: ${this.selectedPace()}%0D%0A- Estimated Range: ₹${this.totalMinPrice().toLocaleString('en-IN')} to ₹${this.totalMaxPrice().toLocaleString('en-IN')}%0D%0A- Timeline: ${this.estimatedTimeline()}%0D%0A%0D%0APlease send over a formal scope of work.%0D%0A%0D%0AMy Name:%0D%0AContact Number:`;
    return this.modalService.getGmailUrl(subject, body);
  }
}
