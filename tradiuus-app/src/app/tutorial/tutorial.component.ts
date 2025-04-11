import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class TutorialComponent implements OnInit {
  slides = [
    {
      id: 1,
      title: 'Welcome to Tradiuus',
      description: 'Tradiuus is an app that connects you in realtime with trade contractors active within your radius.',
      image: 'assets/images/tutorial/tutorial-1.png'
    },
    {
      id: 2,
      title: 'Emergency Assistance',
      description: 'Have you ever needed a contractor for an emergency or a quick estimate and had to search for one?',
      image: 'assets/images/tutorial/tutorial-2.png'
    },
    {
      id: 3,
      title: 'Better Than Traditional Search',
      description: 'This is how the old system works when searching for a trade contractor.',
      image: 'assets/images/tutorial/tutorial-3.png'
    }
  ];

  activeSlide = 0;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToNextSlide() {
    if (this.activeSlide < this.slides.length - 1) {
      this.activeSlide++;
    } else {
      this.goToDashboard();
    }
  }

  goToPreviousSlide() {
    if (this.activeSlide > 0) {
      this.activeSlide--;
    }
  }

  goToSlide(index: number) {
    this.activeSlide = index;
  }

  goToDashboard() {
    // Set a flag in localStorage to indicate that the user has seen the tutorial
    localStorage.setItem('tutorialComplete', 'true');
    this.router.navigate(['/dashboard']);
  }

  skipTutorial() {
    this.goToDashboard();
  }
} 