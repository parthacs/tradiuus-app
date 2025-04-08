import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

interface TradeService {
  name: string;
  priceRange: string;
  jobTime: string;
  selected: boolean;
}

@Component({
  selector: 'app-edit-trade',
  templateUrl: './edit-trade.component.html',
  styleUrls: ['./edit-trade.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class EditTradeComponent implements OnInit {
  selectedTab: 'emergency' | 'estimate' = 'emergency';
  
  services: TradeService[] = [
    {
      name: 'Tripped Breaker',
      priceRange: '$2 - $5',
      jobTime: '0h 30m',
      selected: true
    },
    {
      name: 'Tripped GFI Outlet',
      priceRange: '$0 - $0',
      jobTime: '0h 0m',
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

  updateTrade() {
    // Handle trade update logic here
    console.log('Updated services:', this.services);
  }
} 