import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

interface EmergencyRequest {
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
}

@Component({
  selector: 'app-emergency-request',
  templateUrl: './emergency-request.component.html',
  styleUrls: ['./emergency-request.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class EmergencyRequestComponent implements OnInit {
  requests: EmergencyRequest[] = [
    {
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
      status: 'approved'
    },
    {
      id: '2',
      title: 'Plumber for broken faucet',
      jobId: '12356896',
      userName: 'Dave',
      profileImage: 'assets/images/dave.jpg',
      posterName: 'Roger Brook',
      contact: '(505)569-8521',
      price: 300,
      rating: 4,
      bookedDate: new Date('2024-12-24T15:35:00'),
      workStatus: '',
      status: 'rejected'
    },
    {
      id: '3',
      title: 'Plumbing job',
      jobId: '12356896',
      userName: 'Dave',
      profileImage: 'assets/images/dave.jpg',
      posterName: 'Roger Brook',
      contact: '(505)569-8521',
      price: 300,
      rating: 4,
      bookedDate: new Date('2024-12-24T15:35:00'),
      workStatus: '',
      status: 'pending'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

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
} 