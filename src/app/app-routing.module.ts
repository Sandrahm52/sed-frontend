import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './commons/guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login-flow', pathMatch: 'full'},
  {
    path: 'login-flow',
    loadChildren: () =>
    import('./auth/auth.module').then(
      (m) => m.AuthModule
    )
  },
  {
    path: 'business-flow',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('./business/business.module').then(
      (m) => m.BusinessModule
    )
  },
  {
    path: 'home-flow',
    loadChildren: () =>
    import('./business/home-flow/home-flow.module').then(
      (m) => m.HomeFlowModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
