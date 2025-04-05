import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luxury-building',
  templateUrl: './luxury-building.page.html',
  styleUrls: ['./luxury-building.page.scss'],
  standalone: false
})
export class LuxuryBuildingComponent implements OnInit {
  buildings = [
    {
      name: 'Carlyle Townhouse',
      description: 'Job description goes here.',
      address: '3775 Mount Tabor',
      city: 'New York',
      state: 'NY',
      zip: '10007',
      email: 'luxuarybuilding@email.com'
    },
    {
      name: 'Carlyle Townhouse',
      description: 'Job description goes here.',
      address: '3775 Mount Tabor',
      city: 'New York',
      state: 'NY',
      zip: '10007',
      email: 'luxuarybuilding@email.com'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  requestEmergencyService() {
    console.log('Emergency service requested');
  }

  requestEstimateService() {
    console.log('Estimate service requested');
  }

  editBuilding(building: any) {
    console.log('Edit building:', building);
  }

  deleteBuilding(building: any) {
    console.log('Delete building:', building);
  }

  addBuilding() {
    console.log('Add new luxury building');
  }
} 