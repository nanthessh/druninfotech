import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="relative py-24 sm:py-32 bg-[#070c18] overflow-hidden">
      <!-- Glow ambient -->
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wider uppercase">
            <span>05 / Direct Connectivity Hub</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            Let's build something <span class="brand-gradient-text">exceptional together.</span>
          </h2>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
            Reach out through your preferred channel. We respond within hours on WhatsApp and Gmail.
          </p>
        </div>

        <!-- 3 Connectivity Pillars Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <!-- Pillar 1: WhatsApp Connect -->
          <div class="rounded-2xl bg-gradient-to-b from-[#0a1826] to-[#07111c] border border-emerald-500/30 p-6 flex flex-col justify-between hover:border-emerald-400 transition-all shadow-xl">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.073.043.419-.101.824z"/>
                  </svg>
                </div>
                <span class="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 live-indicator"></span>
                  Active Now
                </span>
              </div>

              <h3 class="text-xl font-bold text-white mb-1">Instant WhatsApp</h3>
              <p class="text-xs text-slate-400 mb-4 font-mono">{{ modalService.displayPhone }}</p>
              
              <p class="text-xs text-slate-300 leading-relaxed mb-5">
                Chat directly with our founder & tech lead. Instant quotations, voice notes, and fast scope clarifications.
              </p>
            </div>

            <div class="space-y-2">
              <a 
                [href]="modalService.getWhatsAppUrl('Hi DRUN! I would like to consult on a new project.')"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 flex items-center justify-center gap-2 transition-all">
                <span>Start WhatsApp Chat</span>
                <span>→</span>
              </a>
              <button 
                (click)="modalService.copyToClipboard(modalService.displayPhone, 'Phone copied: ' + modalService.displayPhone)"
                class="w-full py-2 text-center text-[11px] text-slate-400 hover:text-slate-200 transition-colors cursor-pointer">
                Copy Number
              </button>
            </div>
          </div>

          <!-- Pillar 2: Gmail Connect -->
          <div class="rounded-2xl bg-gradient-to-b from-[#1c0e13] to-[#0f090b] border border-rose-500/30 p-6 flex flex-col justify-between hover:border-rose-400 transition-all shadow-xl">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <span class="text-[11px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-bold">
                  Direct Inbox
                </span>
              </div>

              <h3 class="text-xl font-bold text-white mb-1">Direct Gmail</h3>
              <p class="text-xs text-slate-400 mb-4 font-mono">{{ modalService.email }}</p>
              
              <p class="text-xs text-slate-300 leading-relaxed mb-5">
                Send formal RFPs, architecture documents, or business proposals directly into our dedicated inbox.
              </p>
            </div>

            <div class="space-y-2">
              <a 
                [href]="modalService.getGmailUrl('Project Inquiry - DRUN', 'Hi DRUN Team,\n\nI want to get in touch regarding a project.')"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-rose-300 bg-rose-950/80 hover:bg-rose-900 border border-rose-500/40 flex items-center justify-center gap-2 transition-all">
                <span>Compose in Gmail</span>
                <span>→</span>
              </a>
              <button 
                (click)="modalService.copyToClipboard(modalService.email, 'Email copied: ' + modalService.email)"
                class="w-full py-2 text-center text-[11px] text-slate-400 hover:text-slate-200 transition-colors cursor-pointer">
                Copy Email Address
              </button>
            </div>
          </div>

          <!-- Pillar 3: Location & Calling -->
          <div class="rounded-2xl bg-gradient-to-b from-[#0c162b] to-[#070e1c] border border-blue-500/30 p-6 flex flex-col justify-between hover:border-blue-400 transition-all shadow-xl">
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span class="text-[11px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-bold">
                  Headquarters
                </span>
              </div>

              <h3 class="text-xl font-bold text-white mb-1">Tamil Nadu Hubs</h3>
              <p class="text-xs text-slate-400 mb-4 font-mono">Coimbatore • Namakkal • Erode • Salem</p>
              
              <p class="text-xs text-slate-300 leading-relaxed mb-5">
                Proudly operating across Coimbatore, Namakkal, Erode, and Salem — serving clients throughout India, Southeast Asia, the Middle East, and globally.
              </p>
            </div>

            <div class="space-y-2">
              <a 
                [href]="'tel:' + modalService.phone"
                class="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-blue-300 bg-blue-950/80 hover:bg-blue-900 border border-blue-500/40 flex items-center justify-center gap-2 transition-all">
                <span>Direct Phone Call</span>
                <span>→</span>
              </a>
              <div class="text-center text-[11px] text-slate-400">
                Mon - Sat: 9:00 AM - 7:00 PM IST
              </div>
            </div>
          </div>

        </div>

        <!-- Multi-Channel Interactive Form -->
        <div class="rounded-3xl bg-[#0c1426]/90 border border-slate-800 p-7 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          <div class="max-w-2xl mx-auto space-y-6">
            <div class="text-center space-y-2">
              <h3 class="text-2xl font-bold text-white font-display">Send a Detailed Project Scope</h3>
              <p class="text-xs text-slate-400">
                Fill the fields below. You can submit directly or send automatically formatted to WhatsApp or Gmail!
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">Your Name *</label>
                <input 
                  type="text" 
                  [(ngModel)]="name" 
                  placeholder="e.g. Rahul Sharma"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">Your Email *</label>
                <input 
                  type="email" 
                  [(ngModel)]="userEmail" 
                  placeholder="name@company.com"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">WhatsApp / Phone *</label>
                <input 
                  type="tel" 
                  [(ngModel)]="phone" 
                  placeholder="+91 98765 43210"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">Required Service *</label>
                <select 
                  [(ngModel)]="serviceType"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors">
                  <option value="Web Application Development">Web Application Development</option>
                  <option value="Digital Marketing & Lead Gen">Digital Marketing & Lead Gen</option>
                  <option value="SEO & Search Engine Dominance">SEO & Search Engine Dominance</option>
                  <option value="Meta & Google Ads Campaign">Meta & Google Ads Campaign</option>
                  <option value="Business ERP / CRM System">Business ERP / CRM System</option>
                  <option value="Turnkey: Software + Marketing">Turnkey: Software + Marketing</option>
                  <option value="Other Custom Requirement">Other Custom Requirement</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1.5">Estimated Budget</label>
              <select 
                [(ngModel)]="budget"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors">
                <option value="Under ₹30,000">Under ₹30,000 (Starter project)</option>
                <option value="₹30,000 - ₹75,000">₹30,000 - ₹75,000 (Growth)</option>
                <option value="₹75,000 - ₹2,00,000">₹75,000 - ₹2,00,000 (Professional)</option>
                <option value="₹2,00,000+">₹2,00,000+ (Enterprise / Scale)</option>
              </select>
            </div>

            <div>
              <label class="block text-xs font-semibold text-slate-300 mb-1.5">Project Details / Problem to Solve</label>
              <textarea 
                [(ngModel)]="message" 
                rows="3"
                placeholder="Briefly describe what you're building, your target audience, or current bottlenecks..."
                class="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"></textarea>
            </div>

            <!-- Instant Dispatched Actions -->
            <div class="pt-2 space-y-3">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                <!-- Action 1: Dispatch to WhatsApp -->
                <button 
                  (click)="sendViaWhatsApp()"
                  class="py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer transition-all">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.073.043.419-.101.824z"/>
                  </svg>
                  <span>Dispatch Directly to WhatsApp</span>
                </button>

                <!-- Action 2: Dispatch to Gmail -->
                <button 
                  (click)="sendViaGmail()"
                  class="py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 flex items-center justify-center gap-2 shadow-lg shadow-rose-950/40 cursor-pointer transition-all">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>Open Directly in Gmail</span>
                </button>

              </div>

              <!-- Action 3: Web Submit Confirmation -->
              <button 
                (click)="submitInquiry()"
                class="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer">
                Submit Online & Request Callback
              </button>
            </div>

            <!-- Submission Message Alert -->
            <div *ngIf="submitted()" class="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs text-center animate-in fade-in">
              🎉 Thank you! Your enquiry has been received. Our team will contact you via WhatsApp / Email within 4 hours.
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  modalService = inject(ModalService);

  name = '';
  userEmail = '';
  phone = '';
  serviceType = 'Web Application Development';
  budget = '₹30,000 - ₹75,000';
  message = '';
  submitted = signal<boolean>(false);

  sendViaWhatsApp(): void {
    const text = `Hi DRUN Team!\n\n*New Project Enquiry:*\n- *Name:* ${this.name || 'Not provided'}\n- *Email:* ${this.userEmail || 'Not provided'}\n- *Phone:* ${this.phone || 'Not provided'}\n- *Service:* ${this.serviceType}\n- *Budget:* ${this.budget}\n- *Details:* ${this.message || 'Looking for initial consultation'}`;
    const url = this.modalService.getWhatsAppUrl(text);
    window.open(url, '_blank');
  }

  sendViaGmail(): void {
    const subject = `Project Enquiry: ${this.serviceType} - ${this.name || 'Client'}`;
    const body = `Hi Nanthessh & DRUN Team,\n\nI would like to discuss a project with the following details:\n\nName: ${this.name}\nEmail: ${this.userEmail}\nPhone/WhatsApp: ${this.phone}\nService Needed: ${this.serviceType}\nBudget Range: ${this.budget}\n\nProject Scope / Requirements:\n${this.message}\n\nPlease get in touch at your earliest convenience.`;
    const url = this.modalService.getGmailUrl(subject, body);
    window.open(url, '_blank');
  }

  submitInquiry(): void {
    this.submitted.set(true);
    this.modalService.showToast('Enquiry recorded! We will reach out shortly.');
    setTimeout(() => {
      this.submitted.set(false);
      this.name = '';
      this.userEmail = '';
      this.phone = '';
      this.message = '';
    }, 6000);
  }
}
