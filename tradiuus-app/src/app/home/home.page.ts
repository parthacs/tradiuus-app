import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Auto navigate to login page after 4 seconds for better splash screen experience
    setTimeout(() => {
      try {
        this.router.navigate(['/login']).catch(err => {
          console.error('Navigation error:', err);
          // Fallback to review page if there's an error
          this.router.navigate(['/review']).catch(() => console.error('Could not navigate to review page'));
        });
      } catch (error) {
        console.error('Error during navigation:', error);
      }
    }, 4000);
  }
}
