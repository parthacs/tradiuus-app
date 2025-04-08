import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmergencyRequestTimeComponent } from './emergency-request-time.component';

const routes: Routes = [
  {
    path: '',
    component: EmergencyRequestTimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergencyRequestTimeRoutingModule { } 