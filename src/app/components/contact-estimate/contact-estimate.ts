import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-contact-estimate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact-estimate" class="relative py-24 sm:py-32 bg-[#060b17] border-t border-slate-800/80 overflow-hidden">
      <div class="absolute -top-40 right-10 w-[550px] h-[550px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute -bottom-40 left-10 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4">
            Get a Free Project Estimate
          </h2>
          <p class="text-base sm:text-lg text-slate-300">
            Fill the quick form below and we’ll reach out via WhatsApp or email with a tailored quote.
          </p>
        </div>
        <form class="bg-[#0c1426]/90 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input [(ngModel)]="name" name="name" type="text" placeholder="Your Name" class="w-full px-3 py-2 bg-[#070c18] border border-slate-700 rounded text-white placeholder-slate-500" />
            <input [(ngModel)]="company" name="company" type="text" placeholder="Company" class="w-full px-3 py-2 bg-[#070c18] border border-slate-700 rounded text-white placeholder-slate-500" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input [(ngModel)]="email" name="email" type="email" placeholder="Email" class="w-full px-3 py-2 bg-[#070c18] border border-slate-700 rounded text-white placeholder-slate-500" />
            <input [(ngModel)]="phone" name="phone" type="text" placeholder="Phone / WhatsApp" class="w-full px-3 py-2 bg-[#070c18] border border-slate-700 rounded text-white placeholder-slate-500" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select [(ngModel)]="projectType" name="projectType" class="w-full px-3 py-2 bg-[#070c18] border border-slate-700 rounded text-white">
              <option value="" disabled selected>Project Type</option>
              <option value="webapp">Web Application</option>
              <option value="erp">Business ERP / CRM</option>
              <option value="marketing">Digital Marketing Campaign</option>
              <option value="fullstack">Full‑Stack Turnkey</option>
            </select>
            <input [(ngModel)]="budget" name="budget" type="text" placeholder="Estimated Budget (₹)" class="w-full px-3 py-2 bg-[#070c18] border border-slate-700 rounded text-white placeholder-slate-500" />
          </div>
          <textarea [(ngModel)]="message" name="message" rows="3" placeholder="Brief goals / requirements" class="w-full px-3 py-2 bg-[#070c18] border border-slate-700 rounded text-white placeholder-slate-500"></textarea>
          <div class="flex flex-col md:flex-row gap-4 justify-center">
            <a (click)="openWhatsApp()" class="flex-1 text-center py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold cursor-pointer transition-colors">
              WhatsApp Quote
            </a>
            <a (click)="openGmail()" class="flex-1 text-center py-2 bg-gray-700 hover:bg-gray-600 text-white rounded font-bold cursor-pointer transition-colors">
              Email Quote
            </a>
          </div>
        </form>
      </div>
    </section>
  `
})
export class ContactEstimateComponent {
  modalService = inject(ModalService);
  name = '';
  company = '';
  email = '';
  phone = '';
  projectType = '';
  budget = '';
  message = '';

  openWhatsApp(): void {
    const text = `Hi DRUN! I would like a quote for a ${this.projectType} project.\n\nCompany: ${this.company}\nBudget: ${this.budget}\nDetails: ${this.message}\nContact: ${this.phone} / ${this.email}`;
    this.modalService.openUrl(this.modalService.getWhatsAppUrl(text));
  }

  openGmail(): void {
    const subject = `Project Estimate Request – ${this.projectType}`;
    const body = `Hi DRUN,%0D%0A%0D%0AI am interested in a ${this.projectType} project.%0D%0A%0D%0ACompany: ${this.company}%0D%0ABudget: ${this.budget}%0D%0ADetails: ${this.message}%0D%0AContact: ${this.phone}%0D%0AEmail: ${this.email}`;
    this.modalService.openUrl(this.modalService.getGmailUrl(subject, body));
  }
}
