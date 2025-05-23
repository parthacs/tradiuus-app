import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-external-website',
  standalone: true,
  imports: [CommonModule, IonicModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>Schedule Inspection</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <iframe 
        [src]="safeUrl" 
        style="width: 100%; height: 100%; border: none;"
        allow="camera; microphone; fullscreen; display-capture; geolocation"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads"
      ></iframe>
    </ion-content>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    ion-content {
      --overflow: hidden;
    }
  `]
})
export class ExternalWebsiteComponent {
  private readonly SPECTORA_URL = 'https://app.spectora.com/home-inspectors/my-inspection-company-9b326f9c3f/schedule';
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Create a safe URL for the iframe
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.SPECTORA_URL);
  }
} 