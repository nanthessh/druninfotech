import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="process" class="relative py-24 sm:py-32 bg-[#070c18] overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <!-- Header -->
        <div class="max-w-3xl mb-16 space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-wider uppercase">
            <span>03 / Execution Blueprint</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            From first idea to <span class="brand-gradient-text">production and scale.</span>
          </h2>

          <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
            A clear, disciplined process keeps the timeline locked, deliverables transparent, and results predictable at every stage.
          </p>
        </div>

        <!-- 5 Steps Horizontal / Vertical Timeline -->
        <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div 
            *ngFor="let step of steps; let i = index"
            class="relative rounded-2xl bg-[#0b1325]/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all hover:-translate-y-1">
            
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-3xl font-extrabold font-display text-blue-500/30 group-hover:text-blue-400 transition-colors">
                  0{{ i + 1 }}
                </span>
                <span class="text-xl">{{ step.icon }}</span>
              </div>

              <h3 class="text-lg font-bold text-white mb-2">{{ step.title }}</h3>
              <p class="text-xs text-slate-300 leading-relaxed">{{ step.desc }}</p>
            </div>

            <div class="mt-6 pt-3 border-t border-slate-800/80">
              <span class="text-[10px] font-mono uppercase text-blue-400 font-bold">{{ step.deliverable }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ProcessComponent {
  steps = [
    {
      title: 'Problem Discovery',
      icon: '🎯',
      desc: 'We analyze your workflows, customer bottlenecks, and competitors before writing a single line of code or running an ad.',
      deliverable: 'Scope Blueprint & Roadmap'
    },
    {
      title: 'UI/UX & Funnel Plan',
      icon: '✏️',
      desc: 'Interactive Figma mockups and high-converting user journeys designed for maximum engagement and zero confusion.',
      deliverable: 'Approved Interactive Prototype'
    },
    {
      title: 'Agile Engineering',
      icon: '⚙️',
      desc: 'Clean, modular Angular/TypeScript code, robust cloud APIs, and staged digital marketing ad creatives.',
      deliverable: 'Weekly Working Demos'
    },
    {
      title: 'QA & Speed Benchmark',
      icon: '🛡️',
      desc: 'Rigorous cross-device testing, sub-second load speed tuning, pixel tracking verification, and security checks.',
      deliverable: 'Zero-Defect Sign-off'
    },
    {
      title: 'Launch & Growth',
      icon: '🚀',
      desc: 'Production deployment to Vercel/Cloud, ad campaigns switched live, and direct WhatsApp/Gmail support activated.',
      deliverable: 'Live Product & ROI Tracking'
    }
  ];
}
