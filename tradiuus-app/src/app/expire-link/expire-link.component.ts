import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-expire-link',
  templateUrl: './expire-link.component.html',
  styleUrls: ['./expire-link.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class ExpireLinkComponent {
  
  constructor(private router: Router) {}

  returnToForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  returnToLogin() {
    this.router.navigate(['/login']);
  }
} 