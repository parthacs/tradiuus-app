import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { EmergencyRequestTimeRoutingModule } from './emergency-request-time-routing.module';
import { EmergencyRequestTimeComponent } from './emergency-request-time.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    EmergencyRequestTimeRoutingModule,
    EmergencyRequestTimeComponent
  ]
})
export class EmergencyRequestTimeModule { } 