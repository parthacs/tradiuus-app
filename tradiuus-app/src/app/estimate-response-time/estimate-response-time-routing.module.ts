import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstimateResponseTimeComponent } from './estimate-response-time.component';

const routes: Routes = [
  {
    path: '',
    component: EstimateResponseTimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimateResponseTimeRoutingModule { } 