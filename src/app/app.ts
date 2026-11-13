import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { DigitalMarketingComponent } from './components/digital-marketing/digital-marketing';
import { SoftwareServicesComponent } from './components/software-services/software-services';
import { CalculatorComponent } from './components/calculator/calculator';
import { ProcessComponent } from './components/process/process';
import { WhyDrunComponent } from './components/why-drun/why-drun';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { FloatingConnectComponent } from './components/floating-connect/floating-connect';
import { ConsultationModalComponent } from './components/consultation-modal/consultation-modal';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    DigitalMarketingComponent,
    SoftwareServicesComponent,
    CalculatorComponent,
    ProcessComponent,
    WhyDrunComponent,
    ContactComponent,
    FooterComponent,
    FloatingConnectComponent,
    ConsultationModalComponent
  ],
  template: `
    <div class="min-h-screen bg-[#070c18] text-slate-100 flex flex-col relative selection:bg-blue-600 selection:text-white">
      
      <!-- Top Navigation -->
      <app-navbar></app-navbar>

      <!-- Main Content Flow -->
      <main class="flex-grow">
        <!-- Hero with Software & Growth View Switcher -->
        <app-hero></app-hero>

        <!-- Digital Marketing Suite (Primary Requirement) -->
        <app-digital-marketing></app-digital-marketing>

        <!-- Software Engineering Capabilities -->
        <app-software-services></app-software-services>

        <!-- Interactive Cost & Scope Calculator -->
        <app-calculator></app-calculator>

        <!-- 5-Step Process -->
        <app-process></app-process>

        <!-- Why DRUN -->
        <app-why-drun></app-why-drun>

        <!-- Direct WhatsApp, Gmail & Contact Hub -->
        <app-contact></app-contact>
      </main>

      <!-- Comprehensive Footer -->
      <app-footer></app-footer>

      <!-- Sticky Floating WhatsApp & Gmail Widget -->
      <app-floating-connect></app-floating-connect>

      <!-- Interactive Consultation Modal -->
      <app-consultation-modal></app-consultation-modal>

      <!-- Global Toast Alert -->
      <div 
        *ngIf="modalService.toastMessage()" 
        class="fixed top-20 right-6 z-50 px-4 py-3 rounded-2xl bg-[#0e172e] border border-blue-500/40 text-white text-xs font-semibold shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-top-2">
        <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
        <span>{{ modalService.toastMessage() }}</span>
      </div>

    </div>
  `
})
export class AppComponent {
  modalService = inject(ModalService);
}
