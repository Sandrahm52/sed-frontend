import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionComponent } from './gestion.component';

const routes: Routes = [
  {
    path:'', 
    component: GestionComponent,
    children: [
      {path: '', redirectTo: 'consultar-doc', pathMatch: 'full'},
      {
      path: '',
      children: [
      {
        path: 'carga',
        loadChildren: () =>
        import('./cargadoc-flow/cargadoc-flow.module').then(
          (m) => m.CargadocFlowModule
        )
      },
      {
        path: 'consulta',
        loadChildren: () =>
        import('./consultardoc-flow/consultardoc-flow.module').then(
          (m) => m.ConsultardocFlowModule
        )
      },
      {
        path: 'expediente',
        loadChildren: () =>
        import('./expediente-flow/expediente-flow.module').then(
          (m) => m.ExpedienteFlowModule
        )
      },


        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionFlowRoutingModule { }
