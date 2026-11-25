import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-floating-connect',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Floating Connectivity Buttons (Bottom Right) -->
    <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      <!-- Expanded WhatsApp Chat Drawer -->
      <div 
        *ngIf="modalService.isWhatsAppDrawerOpen()" 
        class="w-80 sm:w-88 rounded-2xl bg-[#091122]/98 border border-emerald-500/40 shadow-2xl backdrop-blur-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
        
        <!-- Drawer Header with WhatsApp Theme -->
        <div class="bg-gradient-to-r from-emerald-800 to-teal-800 p-4 text-white flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="relative w-10 h-10 rounded-full bg-white/10 p-1 border border-white/20">
              <img src="assets/drun-logo.jpg" alt="DRUN" class="w-full h-full object-contain rounded-full" onerror="this.src='assets/drun-logo.svg'">
              <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-900"></span>
            </div>
            <div>
              <h4 class="text-xs font-bold">DRUN Official Support</h4>
              <p class="text-[10px] text-emerald-200 font-medium">Online • Instant Founder Line</p>
            </div>
          </div>
          <button 
            (click)="modalService.closeWhatsAppDrawer()"
            class="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 text-xs">
            ✕
          </button>
        </div>

        <!-- Chat Conversation Simulator -->
        <div class="p-4 space-y-3 bg-[#060b14] text-xs">
          
          <div class="p-3 rounded-xl rounded-tl-none bg-slate-800/90 text-slate-200 max-w-[85%] border border-slate-700/60 leading-relaxed">
            👋 Hi there! Welcome to DRUN. We specialize in custom software engineering and high-ROI digital marketing.
          </div>

          <div class="p-3 rounded-xl rounded-tl-none bg-slate-800/90 text-slate-200 max-w-[85%] border border-slate-700/60 leading-relaxed">
            How can we assist you today? Tap an option below or type a message to start on WhatsApp:
          </div>

          <!-- Quick Prompts -->
          <div class="flex flex-col gap-1.5 pt-1">
            <button 
              *ngFor="let prompt of quickPrompts"
              (click)="sendQuickPrompt(prompt)"
              class="text-left px-3 py-2 rounded-lg bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold transition-all">
              {{ prompt }}
            </button>
          </div>
        </div>

        <!-- Chat Input Bar -->
        <div class="p-3 bg-[#091122] border-t border-slate-800 flex items-center gap-2">
          <input 
            type="text" 
            [(ngModel)]="customMessage" 
            placeholder="Type a message..."
            (keyup.enter)="sendCustom()"
            class="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
          />
          <button 
            (click)="sendCustom()"
            class="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>

      </div>

      <!-- Quick Action Floating Buttons Row -->
      <div class="flex items-center gap-2.5">
        
        <!-- Gmail Floating Quick Pill -->
        <a 
          [href]="modalService.getGmailUrl('Instant Project Inquiry', 'Hi DRUN,\n\nI want to connect regarding a project.')"
          target="_blank"
          title="Compose Email in Gmail"
          class="p-3 rounded-full bg-rose-950/80 hover:bg-rose-900 border border-rose-500/40 text-rose-300 shadow-xl shadow-rose-950/50 hover:scale-110 active:scale-95 transition-all">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>

        <!-- Main WhatsApp Launcher Button -->
        <button 
          (click)="modalService.toggleWhatsAppDrawer()"
          class="relative p-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all cursor-pointer group"
          title="Chat on WhatsApp">
          
          <span class="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>

          <svg class="w-6 h-6 text-white group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.073.043.419-.101.824z"/>
          </svg>
        </button>

      </div>

    </div>
  `
})
export class FloatingConnectComponent {
  modalService = inject(ModalService);
  customMessage = '';

  quickPrompts = [
    '💻 I want to build a custom web app',
    '📈 I want to grow sales with Digital Marketing',
    '💰 What is the cost & timeline for my project?'
  ];

  sendQuickPrompt(prompt: string): void {
    const url = this.modalService.getWhatsAppUrl(`Hi DRUN! ${prompt}`);
    window.open(url, '_blank');
    this.modalService.closeWhatsAppDrawer();
  }

  sendCustom(): void {
    if (!this.customMessage.trim()) return;
    const url = this.modalService.getWhatsAppUrl(`Hi DRUN! ${this.customMessage.trim()}`);
    window.open(url, '_blank');
    this.customMessage = '';
    this.modalService.closeWhatsAppDrawer();
  }
}
