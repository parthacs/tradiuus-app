import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

interface ServiceItem {
  icon: string;
  title: string;
  route: string;
}

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class MyServicesComponent {
  services: ServiceItem[] = [
    {
      icon: 'construct',
      title: 'Update Trade',
      route: '/update-trade'
    },
    {
      icon: 'alarm',
      title: 'Update Emergency Response Time',
      route: '/update-emergency-response'
    },
    {
      icon: 'time',
      title: 'Update Estimate Response Time',
      route: '/update-estimate-response'
    }
  ];

  constructor(private router: Router) {}

  navigateToService(route: string): void {
    this.router.navigate([route]);
  }
} 