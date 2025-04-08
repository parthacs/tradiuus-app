import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

interface EstimateDetails {
  id: string;
  title: string;
  jobId: string;
  userName: string;
  profileImage: string;
  posterName: string;
  contact: string;
  price: number;
  rating: number;
  bookedDate: Date;
  workStatus: string;
  status: 'approved' | 'rejected' | 'pending';
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
  selector: 'app-estimate-details',
  templateUrl: './estimate-details.component.html',
  styleUrls: ['./estimate-details.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class EstimateDetailsComponent implements OnInit {
  request: EstimateDetails = {
    id: '1',
    title: 'Plumber for water leak',
    jobId: '12356896',
    userName: 'Dave',
    profileImage: 'assets/images/dave.jpg',
    posterName: 'Roger Brook',
    contact: '(505)569-8521',
    price: 300,
    rating: 4,
    bookedDate: new Date('2024-12-24T15:35:00'),
    workStatus: '',
    status: 'approved',
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Here you would typically fetch the estimate details using the ID
      console.log('Loading estimate details for ID:', id);
    });
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'approved':
        return 'checkmark-circle';
      case 'rejected':
        return 'close-circle';
      case 'pending':
        return 'call';
      default:
        return 'checkmark-circle';
    }
  }

  goBack(): void {
    this.router.navigate(['/estimate-services']);
  }
} 