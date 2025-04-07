import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimateServicesComponent } from './estimate-services.component';

const routes: Routes = [
  {
    path: '',
    component: EstimateServicesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class EstimateServicesModule { } 