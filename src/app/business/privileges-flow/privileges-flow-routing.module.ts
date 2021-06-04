import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivilegesPageComponent } from './commons/components/privileges-page/privileges-page.component';


const routes: Routes = [
  {path: '', component: PrivilegesPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivilegesFlowRoutingModule { }
