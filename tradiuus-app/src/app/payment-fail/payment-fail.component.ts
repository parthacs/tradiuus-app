import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-payment-fail',
  templateUrl: './payment-fail.component.html',
  styleUrls: ['./payment-fail.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class PaymentFailComponent {
  constructor() {}

  tryAgain() {
    console.log('Trying again...');
    // Logic to retry payment
  }

  contactSupport() {
    console.log('Contacting support...');
    // Logic to contact support
  }
} 