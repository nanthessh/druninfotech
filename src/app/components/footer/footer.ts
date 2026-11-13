import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="relative bg-[#040812] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-400 text-xs">
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          <!-- Column 1: Brand Info (2 cols on lg) -->
          <div class="lg:col-span-2 space-y-4">
            <a href="#" class="flex items-center gap-3 group">
              <div class="w-10 h-10 rounded-xl overflow-hidden bg-white/5 p-1 border border-blue-500/30">
                <img src="assets/drun-logo.jpg" alt="DRUN" class="w-full h-full object-contain rounded-lg" onerror="this.src='assets/drun-logo.svg'">
              </div>
              <div>
                <span class="text-xl font-bold text-white font-display">DRUN</span>
                <span class="block text-[11px] text-slate-400">Software & Digital Growth Agency</span>
              </div>
            </a>

            <p class="text-xs text-slate-400 leading-relaxed max-w-sm">
              We turn ambitious ideas into robust, scalable software products and promote them with data-driven marketing campaigns that generate tangible business revenue.
            </p>

            <div class="flex items-center gap-3 pt-1">
              <a 
                [href]="modalService.getWhatsAppUrl('Hi DRUN! Inquiring from website footer.')" 
                target="_blank"
                class="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900 transition-colors"
                title="Chat on WhatsApp">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.302c-.087.087-.179.182-.077.357.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.101-.116.433-.506.549-.679.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.13.332.202.043.073.043.419-.101.824z"/>
                </svg>
              </a>

              <a 
                [href]="modalService.getGmailUrl('General Enquiry - DRUN', 'Hi DRUN,%0D%0A%0D%0AI want to get in touch.')" 
                target="_blank"
                class="p-2 rounded-lg bg-rose-950/60 border border-rose-500/30 text-rose-400 hover:bg-rose-900 transition-colors"
                title="Send Gmail">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>

              <a 
                [href]="'tel:' + modalService.phone"
                class="p-2 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-400 hover:bg-blue-900 transition-colors"
                title="Call Directly">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Software Capabilities -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase text-white tracking-wider">Software Engineering</h4>
            <ul class="space-y-2">
              <li><a href="#services" class="hover:text-blue-400 transition-colors">Web Applications</a></li>
              <li><a href="#services" class="hover:text-blue-400 transition-colors">Business ERP / CRM</a></li>
              <li><a href="#services" class="hover:text-blue-400 transition-colors">RESTful Cloud APIs</a></li>
              <li><a href="#services" class="hover:text-blue-400 transition-colors">Database Modeling</a></li>
              <li><a href="#services" class="hover:text-blue-400 transition-colors">UI/UX & Design Systems</a></li>
            </ul>
          </div>

          <!-- Column 3: Digital Marketing -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase text-emerald-400 tracking-wider">Digital Marketing</h4>
            <ul class="space-y-2">
              <li><a href="#digital-marketing" class="hover:text-emerald-300 transition-colors">Search Engine Optimization (SEO)</a></li>
              <li><a href="#digital-marketing" class="hover:text-emerald-300 transition-colors">Meta & Google Performance Ads</a></li>
              <li><a href="#digital-marketing" class="hover:text-emerald-300 transition-colors">WhatsApp Automation Funnels</a></li>
              <li><a href="#digital-marketing" class="hover:text-emerald-300 transition-colors">Social Media & Brand Growth</a></li>
              <li><a href="#digital-marketing" class="hover:text-emerald-300 transition-colors">Conversion Rate Optimization (CRO)</a></li>
            </ul>
          </div>

          <!-- Column 4: Location & Direct Line -->
          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase text-white tracking-wider">Connect with Us</h4>
            <div class="space-y-2 text-xs">
              <p class="text-slate-300">
                <span class="block text-white font-semibold">Location:</span>
                Coimbatore, Tamil Nadu, India
              </p>
              <p class="text-slate-300">
                <span class="block text-white font-semibold">WhatsApp & Phone:</span>
                {{ modalService.displayPhone }}
              </p>
              <p class="text-slate-300">
                <span class="block text-white font-semibold">Direct Email:</span>
                {{ modalService.email }}
              </p>
            </div>
          </div>

        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 DRUN. All rights reserved. Built with precision for growing businesses.
          </div>
          <div class="flex items-center gap-6">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
            <a href="#contact" class="hover:text-white transition-colors">Direct Support</a>
          </div>
        </div>

      </div>

    </footer>
  `
})
export class FooterComponent {
  modalService = inject(ModalService);
}
