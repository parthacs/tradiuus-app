import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { EditTradeRoutingModule } from './edit-trade-routing.module';
import { EditTradeComponent } from './edit-trade.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    EditTradeRoutingModule,
    EditTradeComponent
  ]
})
export class EditTradeModule { } 