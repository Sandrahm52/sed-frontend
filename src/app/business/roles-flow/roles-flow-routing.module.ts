import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesPageComponent } from './commons/components/roles-page/roles-page.component';


const routes: Routes = [
  {path: '', component: RolesPageComponent},
  {path: 'roles', component: RolesPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesFlowRoutingModule { }
