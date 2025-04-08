import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MyServicesRoutingModule } from './my-services-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    MyServicesRoutingModule
  ]
})
export class MyServicesModule { } 