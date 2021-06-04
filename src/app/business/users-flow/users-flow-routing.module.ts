import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersPageComponent } from './commons/components/users-page/users-page.component';


const routes: Routes = [
  {path:'', component: UsersPageComponent},
  {path: 'users', component: UsersPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersFlowRoutingModule { }
