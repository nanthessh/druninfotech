import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [ngClass]="{
        'bg-[#070c18]/90 backdrop-blur-md border-b border-blue-900/30 py-3 shadow-xl shadow-blue-950/20': isScrolled(),
        'bg-transparent py-5': !isScrolled()
      }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between gap-4">
          
          <!-- Brand Logo & Tagline -->
          <a href="#" class="flex items-center gap-3 shrink-0 group">
            <div class="relative w-11 h-11 rounded-xl overflow-hidden bg-white/5 p-1 border border-blue-500/30 shadow-md group-hover:border-blue-400 transition-all shrink-0">
              <img 
                src="assets/drun-logo.jpg" 
                alt="DRUN Logo" 
                class="w-full h-full object-contain rounded-lg"
                onerror="this.src='assets/drun-logo.svg'"
              />
              <span class="absolute -top-1 -right-1 flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            
            <div class="flex flex-col whitespace-nowrap">
              <div class="flex items-center gap-1.5">
                <span class="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors font-display">
                  DRUN
                </span>
                <span class="text-[10px] uppercase font-semibold tracking-widest px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
                  Tech & Growth
                </span>
              </div>
              <span class="text-xs text-slate-400 tracking-wider whitespace-nowrap">Design • Develop • Scale</span>
            </div>
          </a>

          <!-- Desktop Navigation Links -->
          <nav class="hidden lg:flex items-center gap-1 xl:gap-2 whitespace-nowrap">
            <a href="#services" class="px-3 py-2 text-[13px] xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap">
              Software Services
            </a>
            
            <a href="#digital-marketing" class="px-3 py-2 text-[13px] xl:text-sm font-medium text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              <span>Digital Marketing</span>
            </a>

            <a href="#process" class="px-3 py-2 text-[13px] xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap">
              Process
            </a>

            <a href="#why-us" class="px-3 py-2 text-[13px] xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap">
              Why DRUN
            </a>

            <a href="#contact" class="px-3 py-2 text-[13px] xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap">
              Contact
            </a>
          </nav>

          <!-- Action Buttons / Connectivity Links -->
          <div class="hidden md:flex items-center gap-2 shrink-0 whitespace-nowrap">
            <!-- Direct WhatsApp Connectivity Button -->
            <a 
              [href]="modalService.getWhatsAppUrl('Hi DRUN! I saw your website and would like to discuss a project.')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/60 hover:border-emerald-400 transition-all shadow-sm group whitespace-nowrap">
              <svg class="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.073.043.419-.101.824z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            <!-- Direct Gmail Connectivity Button -->
            <a 
              [href]="modalService.getGmailUrl('Project Inquiry - DRUN', 'Hi DRUN Team,\n\nI would like to learn more about your Software Development and Digital Marketing services for my business.\n\nName:\nCompany:\nRequirement:')"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 bg-rose-950/40 border border-rose-500/30 hover:bg-rose-900/60 hover:border-rose-400 transition-all shadow-sm group whitespace-nowrap">
              <svg class="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>Gmail</span>
            </a>

            <!-- Primary Consultation Action -->
            <button 
              (click)="modalService.openConsultation('General Enquiry')"
              class="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-600/30 transition-all active:scale-95 cursor-pointer whitespace-nowrap">
              <span>Get Free Quote</span>
            </button>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <button 
            (click)="isMobileMenuOpen.set(!isMobileMenuOpen())"
            aria-label="Toggle navigation menu"
            class="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors">
            <svg *ngIf="!isMobileMenuOpen()" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg *ngIf="isMobileMenuOpen()" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Navigation -->
      <div 
        *ngIf="isMobileMenuOpen()" 
        class="lg:hidden bg-[#0a1020]/95 backdrop-blur-xl border-b border-blue-900/40 px-4 pt-4 pb-6 space-y-3 transition-all animate-in slide-in-from-top-4">
        
        <div class="grid grid-cols-2 gap-2 pb-2">
          <a 
            [href]="modalService.getWhatsAppUrl('Hi DRUN! Inquiring from mobile.')"
            target="_blank"
            class="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.073.043.419-.101.824z"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          <a 
            [href]="modalService.getGmailUrl('Mobile Enquiry - DRUN', 'Hi DRUN,\n\nI am looking for software and marketing solutions for my project.')"
            target="_blank"
            class="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-400 text-xs font-semibold">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>Gmail</span>
          </a>
        </div>

        <nav class="flex flex-col space-y-1">
          <a (click)="isMobileMenuOpen.set(false)" href="#services" class="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5">
            Software Services
          </a>
          <a (click)="isMobileMenuOpen.set(false)" href="#digital-marketing" class="px-4 py-2.5 rounded-lg text-sm font-medium text-emerald-400 hover:bg-emerald-500/10 flex items-center justify-between">
            <span>Digital Marketing</span>
            <span class="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">HIGH ROI</span>
          </a>
          <a (click)="isMobileMenuOpen.set(false)" href="#process" class="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5">
            Our 5-Step Process
          </a>
          <a (click)="isMobileMenuOpen.set(false)" href="#why-us" class="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5">
            Why DRUN
          </a>
          <a (click)="isMobileMenuOpen.set(false)" href="#contact" class="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-white/5">
            Contact & Location
          </a>
        </nav>

        <div class="pt-2">
          <button 
            (click)="modalService.openConsultation(); isMobileMenuOpen.set(false)"
            class="w-full py-3 px-4 text-center font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-600/30">
            Book Free Project Consultation
          </button>
        </div>
      </div>
    </header>
  `
})
export class NavbarComponent {
  modalService = inject(ModalService);
  isScrolled = signal<boolean>(false);
  isMobileMenuOpen = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }
}
