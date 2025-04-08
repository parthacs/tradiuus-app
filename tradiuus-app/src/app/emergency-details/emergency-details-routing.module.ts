import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmergencyDetailsComponent } from './emergency-details.component';

const routes: Routes = [
  {
    path: ':id',
    component: EmergencyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergencyDetailsRoutingModule { } 