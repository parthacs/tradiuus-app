import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

// Import the component directly
import { LuxuryBuildingComponent } from './luxury-building.component';

// Define routes directly in the module to avoid circular dependencies
const routes: Routes = [
  {
    path: '',
    component: LuxuryBuildingComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LuxuryBuildingComponent],
  exports: [RouterModule]
})
export class LuxuryBuildingModule {} 