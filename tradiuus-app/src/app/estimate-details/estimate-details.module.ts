import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { EstimateDetailsRoutingModule } from './estimate-details-routing.module';
import { EstimateDetailsComponent } from './estimate-details.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    EstimateDetailsRoutingModule
  ]
})
export class EstimateDetailsModule { } 