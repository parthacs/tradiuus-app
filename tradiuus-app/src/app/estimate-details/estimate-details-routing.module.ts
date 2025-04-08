import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimateDetailsComponent } from './estimate-details.component';

const routes: Routes = [
  {
    path: ':id',
    component: EstimateDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimateDetailsRoutingModule { } 