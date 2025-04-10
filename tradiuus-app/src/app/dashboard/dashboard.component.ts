import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class DashboardComponent implements OnInit {
  // Mock data for demonstration
  services = [
    { id: 1, name: 'Emergency Service', icon: 'alert-circle', route: '/emergency-request' },
    { id: 2, name: 'Request Estimate', icon: 'calculator', route: '/estimate-services' },
    { id: 3, name: 'My Services', icon: 'construct', route: '/my-services' },
    { id: 4, name: 'Find Contractor', icon: 'search', route: '/find-contractor' }
  ];

  recentRequests = [
    { 
      id: 101, 
      type: 'Emergency', 
      service: 'Plumbing',
      date: new Date('2023-08-15'),
      status: 'Completed',
      contractor: 'John Smith Plumbing'
    },
    { 
      id: 102, 
      type: 'Estimate', 
      service: 'Electrical',
      date: new Date('2023-08-10'),
      status: 'Pending',
      contractor: 'Edison Electric'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Check if user is first-time visitor
    this.checkFirstTimeUser();
  }

  checkFirstTimeUser() {
    const tutorialComplete = localStorage.getItem('tutorialComplete');
    if (!tutorialComplete) {
      // Redirect to tutorial for first-time users
      this.router.navigate(['/tutorial']);
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
} 