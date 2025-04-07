import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

interface EmergencyRequest {
  jobId: string;
  title: string;
  posterName: string;
  posterContact: string;
  price: number;
  rating: number;
  bookedDate: Date;
  workStatus: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    buildingType: string;
  };
  requirement: {
    problem: string;
    location: string;
    additionalQuestion: string;
    additionalAnswer: string;
  };
  images: string[];
}

@Component({
  selector: 'app-emergency-request',
  templateUrl: './emergency-request.component.html',
  styleUrls: ['./emergency-request.component.scss'],
  standalone: false
})
export class EmergencyRequestComponent implements OnInit {
  request: EmergencyRequest = {
    jobId: '12356896',
    title: 'Plumber for water leak',
    posterName: 'Roger Brook',
    posterContact: '(505)569-8521',
    price: 300,
    rating: 4,
    bookedDate: new Date('2024-12-12T15:35:00'),
    workStatus: '',
    address: {
      street: '3775 Mount Tabor',
      city: 'New York',
      state: 'NY',
      zip: '10007',
      buildingType: 'Condo Walk Up'
    },
    requirement: {
      problem: 'Clogged drain',
      location: 'In the kitchen sink',
      additionalQuestion: 'Another question?',
      additionalAnswer: 'Another answer'
    },
    images: [
      'assets/images/plumbing1.jpg',
      'assets/images/plumbing2.jpg',
      'assets/images/plumbing3.jpg'
    ]
  };

  constructor(
    private router: Router,
    private menuController: MenuController
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/']);
  }

  openMenu() {
    this.menuController.toggle();
  }
} 