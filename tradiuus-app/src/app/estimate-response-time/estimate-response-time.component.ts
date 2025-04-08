import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estimate-response-time',
  templateUrl: './estimate-response-time.component.html',
  styleUrls: ['./estimate-response-time.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule]
})
export class EstimateResponseTimeComponent implements OnInit {
  responseTime: number = 180;

  constructor() { }

  ngOnInit() { }

  decreaseTime() {
    if (this.responseTime > 30) {
      this.responseTime -= 30;
    }
  }

  increaseTime() {
    if (this.responseTime < 360) {
      this.responseTime += 30;
    }
  }

  updateResponseTime() {
    // Logic to update response time
    console.log('Estimate response time updated to:', this.responseTime);
  }
} 