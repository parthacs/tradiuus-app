import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTradeComponent } from './edit-trade.component';

const routes: Routes = [
  {
    path: '',
    component: EditTradeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTradeRoutingModule { } 