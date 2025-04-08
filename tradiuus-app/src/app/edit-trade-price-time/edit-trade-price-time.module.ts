import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { EditTradePriceTimeRoutingModule } from './edit-trade-price-time-routing.module';
import { EditTradePriceTimeComponent } from './edit-trade-price-time.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    EditTradePriceTimeRoutingModule,
    EditTradePriceTimeComponent
  ]
})
export class EditTradePriceTimeModule { } 