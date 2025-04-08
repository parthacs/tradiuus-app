import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-emergency-request-time',
  templateUrl: './emergency-request-time.component.html',
  styleUrls: ['./emergency-request-time.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class EmergencyRequestTimeComponent implements OnInit {
  responseTime: number = 30;

  constructor() { }

  ngOnInit() { }

  decreaseTime() {
    if (this.responseTime > 5) {
      this.responseTime -= 5;
    }
  }

  increaseTime() {
    if (this.responseTime < 120) {
      this.responseTime += 5;
    }
  }

  updateResponseTime() {
    // Logic to update response time
    console.log('Response time updated to:', this.responseTime);
  }
} 