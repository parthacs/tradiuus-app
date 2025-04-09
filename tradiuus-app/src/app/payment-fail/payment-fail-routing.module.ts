import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentFailComponent } from './payment-fail.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentFailComponent,
    // pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentFailRoutingModule { } 