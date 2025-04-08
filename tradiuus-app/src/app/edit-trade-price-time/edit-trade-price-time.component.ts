import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

interface TradeService {
  name: string;
  minPrice: number;
  maxPrice: number;
  hours: number;
  minutes: number;
  selected: boolean;
}

@Component({
  selector: 'app-edit-trade-price-time',
  templateUrl: './edit-trade-price-time.component.html',
  styleUrls: ['./edit-trade-price-time.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class EditTradePriceTimeComponent implements OnInit {
  selectedTab: 'emergency' | 'estimate' = 'emergency';
  showModal = false;
  selectedService: TradeService | null = null;

  services: TradeService[] = [
    {
      name: 'Tripped Breaker',
      minPrice: 2,
      maxPrice: 5,
      hours: 0,
      minutes: 30,
      selected: true
    },
    {
      name: 'Tripped GFI Outlet',
      minPrice: 0,
      maxPrice: 0,
      hours: 0,
      minutes: 0,
      selected: false
    }
  ];

  constructor() {}

  ngOnInit() {}

  switchTab(tab: 'emergency' | 'estimate') {
    this.selectedTab = tab;
  }

  toggleService(service: TradeService) {
    service.selected = !service.selected;
  }

  openEditModal(service: TradeService, type: 'price' | 'time') {
    this.selectedService = { ...service };
    this.showModal = true;
    console.log('Opening modal for:', service.name);
  }

  updateService() {
    if (this.selectedService) {
      const index = this.services.findIndex(s => s.name === this.selectedService?.name);
      if (index !== -1) {
        this.services[index] = { ...this.selectedService };
        console.log('Service updated:', this.services[index]);
      }
    }
    this.closeModal();
  }

  closeModal() {
    this.showModal = false;
    setTimeout(() => {
      this.selectedService = null;
    }, 400);
  }

  formatPrice(min: number, max: number): string {
    return `$${min} - $${max}`;
  }

  formatTime(hours: number, minutes: number): string {
    return `${hours}h ${minutes}m`;
  }
} 