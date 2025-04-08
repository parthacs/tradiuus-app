import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTradePriceTimeComponent } from './edit-trade-price-time.component';

const routes: Routes = [
  {
    path: '',
    component: EditTradePriceTimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTradePriceTimeRoutingModule { } 