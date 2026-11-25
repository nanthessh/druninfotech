import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-consultation-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div 
      *ngIf="modalService.isConsultationOpen()" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div 
        (click)="$event.stopPropagation()"
        class="relative w-full max-w-lg rounded-3xl bg-[#0c1426] border border-blue-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3 border-b border-slate-800">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 p-1 flex items-center justify-center">
              <img src="assets/drun-logo.jpg" alt="DRUN" class="w-full h-full object-contain rounded-lg" onerror="this.src='assets/drun-logo.svg'">
            </div>
            <div>
              <h3 class="text-lg font-bold text-white font-display">Schedule Free Consultation</h3>
              <p class="text-xs text-slate-400">Directly with DRUN Tech & Marketing Leadership</p>
            </div>
          </div>

          <button 
            (click)="modalService.closeConsultation()"
            class="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors">
            ✕
          </button>
        </div>

        <!-- Form fields -->
        <div class="space-y-4 text-xs">
          <div>
            <label class="block font-semibold text-slate-300 mb-1">Your Name</label>
            <input 
              type="text" 
              [(ngModel)]="name" 
              placeholder="e.g. Anand Kumar"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label class="block font-semibold text-slate-300 mb-1">Your Phone / WhatsApp Number</label>
            <input 
              type="tel" 
              [(ngModel)]="phone" 
              placeholder="+91 93602 66792"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label class="block font-semibold text-slate-300 mb-1">Service Required</label>
            <select 
              [(ngModel)]="service"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500">
              <option value="Software & Web Application">Software & Web Application</option>
              <option value="Digital Marketing & Lead Generation">Digital Marketing & Lead Generation</option>
              <option value="Custom ERP & Business Tools">Custom ERP & Business Tools</option>
              <option value="Complete Turnkey Package (Software + Marketing)">Complete Turnkey Package (Software + Marketing)</option>
            </select>
          </div>

          <div>
            <label class="block font-semibold text-slate-300 mb-1">Project Brief / Goals</label>
            <textarea 
              [(ngModel)]="notes" 
              rows="2" 
              placeholder="What are your goals or current challenges?"
              class="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500"></textarea>
          </div>
        </div>

        <!-- Dispatch buttons -->
        <div class="space-y-2.5 pt-2">
          <button 
            (click)="dispatchWhatsApp()"
            class="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 cursor-pointer transition-all">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.073.043.419-.101.824z"/>
            </svg>
            <span>Confirm & Open WhatsApp Chat</span>
          </button>

          <button 
            (click)="dispatchGmail()"
            class="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 cursor-pointer transition-all">
            <svg class="w-4 h-4 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>Open as Draft in Gmail</span>
          </button>
        </div>

      </div>

    </div>
  `
})
export class ConsultationModalComponent {
  modalService = inject(ModalService);

  name = '';
  phone = '';
  service = 'Software & Web Application';
  notes = '';

  dispatchWhatsApp(): void {
    const text = `Hi DRUN Team!\n\n*Consultation Request:*\n- Name: ${this.name || 'Not provided'}\n- Phone: ${this.phone || 'Not provided'}\n- Service: ${this.service}\n- Notes: ${this.notes || 'Looking for project roadmap'}`;
    const url = this.modalService.getWhatsAppUrl(text);
    window.open(url, '_blank');
    this.modalService.closeConsultation();
  }

  dispatchGmail(): void {
    const subject = `Consultation Request: ${this.service}`;
    const body = `Hi Nanthessh & DRUN Team,\n\nI would like to schedule a consultation regarding ${this.service}.\n\nName: ${this.name}\nPhone: ${this.phone}\nProject Brief: ${this.notes}`;
    const url = this.modalService.getGmailUrl(subject, body);
    window.open(url, '_blank');
    this.modalService.closeConsultation();
  }
}
