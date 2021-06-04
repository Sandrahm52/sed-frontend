import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargadocPageComponent } from './commons/components/cargadoc-page/cargadoc-page.component';


const routes: Routes = [
  {path: '', component: CargadocPageComponent},
  {path: 'carga-doc', component: CargadocPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargadocFlowRoutingModule { }
