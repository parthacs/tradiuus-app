import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { EstimateResponseTimeRoutingModule } from './estimate-response-time-routing.module';
import { EstimateResponseTimeComponent } from './estimate-response-time.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    EstimateResponseTimeRoutingModule,
    EstimateResponseTimeComponent
  ]
})
export class EstimateResponseTimeModule { } 