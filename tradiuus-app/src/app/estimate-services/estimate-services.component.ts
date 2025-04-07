import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, MenuController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  basePrice: number;
  rating: number;
  completedJobs: number;
  responseTime: string;
}

interface ServiceRequest {
  id: string;
  title: string;
  jobId: string;
  posterName: string;
  contact: string;
  price: number;
  rating: number;
  bookedDate: Date;
  workStatus: string;
  status: 'approved' | 'rejected';
}

@Component({
  selector: 'app-estimate-services',
  templateUrl: './estimate-services.component.html',
  styleUrls: ['./estimate-services.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class EstimateServicesComponent implements OnInit {
  services: Service[] = [
    {
      id: 'plumbing',
      name: 'Plumbing Services',
      description: 'Professional plumbing services including repairs, installations, and maintenance',
      icon: 'water-outline',
      basePrice: 75,
      rating: 4.8,
      completedJobs: 1250,
      responseTime: '30 min'
    },
    {
      id: 'electrical',
      name: 'Electrical Services',
      description: 'Licensed electricians for all your electrical needs and emergencies',
      icon: 'flash-outline',
      basePrice: 85,
      rating: 4.9,
      completedJobs: 980,
      responseTime: '25 min'
    },
    {
      id: 'hvac',
      name: 'HVAC Services',
      description: 'Heating, ventilation, and air conditioning installation and repairs',
      icon: 'thermometer-outline',
      basePrice: 95,
      rating: 4.7,
      completedJobs: 750,
      responseTime: '35 min'
    },
    {
      id: 'cleaning',
      name: 'Cleaning Services',
      description: 'Professional cleaning services for residential and commercial spaces',
      icon: 'sparkles-outline',
      basePrice: 60,
      rating: 4.6,
      completedJobs: 2100,
      responseTime: '45 min'
    }
  ];

  requests: ServiceRequest[] = [
    {
      id: '1',
      title: 'Plumber for water leak',
      jobId: '12356896',
      posterName: 'Roger Brook',
      contact: '(505)569-8521',
      price: 300,
      rating: 4,
      bookedDate: new Date('2024-12-24T15:35:00'),
      workStatus: '',
      status: 'approved'
    },
    {
      id: '2',
      title: 'Plumber for broken faucet',
      jobId: '12356896',
      posterName: 'Roger Brook',
      contact: '(505)569-8521',
      price: 300,
      rating: 4,
      bookedDate: new Date('2024-12-24T15:35:00'),
      workStatus: '',
      status: 'rejected'
    }
  ];

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private menuCtrl: MenuController
  ) {}

  ngOnInit(): void {}

  goBack(): void {
    this.navCtrl.back();
  }

  async openMenu(): Promise<void> {
    await this.menuCtrl.toggle();
  }

  requestEstimate(service: Service): void {
    try {
      this.router.navigate(['/estimate-request'], {
        queryParams: {
          serviceId: service.id
        }
      });
    } catch (error) {
      console.error('Navigation error:', error);
    }
  }
}
