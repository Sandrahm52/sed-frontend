import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultardocPageComponent } from './commons/components/consultardoc-page/consultardoc-page.component';


const routes: Routes = [
  {path: '', component: ConsultardocPageComponent},
  {path: 'consultar-doc', component: ConsultardocPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultardocFlowRoutingModule { }
