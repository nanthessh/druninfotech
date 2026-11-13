import { Injectable, signal } from '@angular/core';

export interface ProjectInquiry {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  budget: string;
  timeline: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isConsultationOpen = signal<boolean>(false);
  isCalculatorOpen = signal<boolean>(false);
  isWhatsAppDrawerOpen = signal<boolean>(false);
  toastMessage = signal<string | null>(null);

  // Default contact details for DRUN
  readonly phone = '+919360266792';
  readonly displayPhone = '+91 93602 66792';
  readonly email = 'druntech.official@gmail.com';
  readonly location = 'Coimbatore, Tamil Nadu, India';

  openConsultation(defaultService: string = 'Software Development'): void {
    this.isConsultationOpen.set(true);
  }

  closeConsultation(): void {
    this.isConsultationOpen.set(false);
  }

  toggleCalculator(): void {
    this.isCalculatorOpen.update(v => !v);
  }

  toggleWhatsAppDrawer(): void {
    this.isWhatsAppDrawerOpen.update(v => !v);
  }

  closeWhatsAppDrawer(): void {
    this.isWhatsAppDrawerOpen.set(false);
  }

  showToast(message: string): void {
    this.toastMessage.set(message);
    setTimeout(() => {
      this.toastMessage.set(null);
    }, 3500);
  }

  /**
   * Generates direct WhatsApp click-to-chat URL with pre-filled message
   */
  getWhatsAppUrl(text: string): string {
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${this.phone.replace(/[^0-9]/g, '')}?text=${encoded}`;
  }

  /**
   * Generates direct Gmail web composer URL
   */
  getGmailUrl(subject: string, body: string): string {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}&su=${encodedSubject}&body=${encodedBody}`;
  }

  /**
   * Fallback mailto URL
   */
  getMailtoUrl(subject: string, body: string): string {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    return `mailto:${this.email}?subject=${encodedSubject}&body=${encodedBody}`;
  }

  copyToClipboard(text: string, label: string = 'Copied to clipboard!'): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast(label);
      }).catch(() => {
        this.showToast('Failed to copy');
      });
    } else {
      this.showToast(label);
    }
  }
}
