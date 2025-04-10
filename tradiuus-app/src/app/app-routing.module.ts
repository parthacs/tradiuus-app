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
  },
  {
    path: 'my-services',
    loadChildren: () => import('./my-services/my-services.module').then(m => m.MyServicesModule)
  },
  {
    path: 'edit-trade',
    loadChildren: () => import('./edit-trade/edit-trade.module').then(m => m.EditTradeModule)
  },
  {
    path: 'emergency-request-time',
    loadChildren: () => import('./emergency-request-time/emergency-request-time.module').then(m => m.EmergencyRequestTimeModule)
  },
  {
    path: 'estimate-response-time',
    loadChildren: () => import('./estimate-response-time/estimate-response-time.module').then(m => m.EstimateResponseTimeModule)
  },
  {
    path: 'edit-trade-price-time',
    loadChildren: () => import('./edit-trade-price-time/edit-trade-price-time.module').then(m => m.EditTradePriceTimeModule)
  },
  {
    path: 'payment-fail',
    loadChildren: () => import('./payment-fail/payment-fail.module').then(m => m.PaymentFailModule)
  },
  {
    path: 'payment-success',
    loadComponent: () => import('./payment-success/payment-success.component').then(m => m.PaymentSuccessComponent)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  {
    path: 'change-password',
    loadComponent: () => import('./change-password/change-password.component').then(m => m.ChangePasswordComponent)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
