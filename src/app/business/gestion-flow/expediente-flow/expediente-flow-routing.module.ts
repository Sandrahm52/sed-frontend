import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpedientePageComponent } from './commons/components/expediente-page/expediente-page.component';


const routes: Routes = [
  {path: '', component: ExpedientePageComponent},
  {path: 'expediente', component: ExpedientePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpedienteFlowRoutingModule { }
