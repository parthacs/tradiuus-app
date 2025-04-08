import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'estimate-services',
    loadChildren: () => import('./estimate-services/estimate-services.module').then(m => m.EstimateServicesModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'luxury-building',
    loadChildren: () => import('./luxury-building/luxury-building.module').then( m => m.LuxuryBuildingModule)
  },
  {
    path: 'emergency-request',
    loadChildren: () => import('./emergency-request/emergency-request.module').then( m => m.EmergencyRequestModule)
  },
  {
    path: 'emergency-details',
    loadChildren: () => import('./emergency-details/emergency-details.module').then(m => m.EmergencyDetailsModule)
  },
  {
    path: 'estimate-details',
    loadChildren: () => import('./estimate-details').then(m => m.EstimateDetailsModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
