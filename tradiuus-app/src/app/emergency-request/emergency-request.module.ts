import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmergencyRequestComponent } from './emergency-request.component';

const routes: Routes = [
  {
    path: '',
    component: EmergencyRequestComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EmergencyRequestModule { } 