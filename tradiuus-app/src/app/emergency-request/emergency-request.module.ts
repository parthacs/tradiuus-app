import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { EmergencyRequestComponent } from './emergency-request.component';
import { EmergencyRequestRoutingModule } from './emergency-request-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    EmergencyRequestRoutingModule
  ],
  declarations: [EmergencyRequestComponent],
  exports: [EmergencyRequestComponent]
})
export class EmergencyRequestModule { } 