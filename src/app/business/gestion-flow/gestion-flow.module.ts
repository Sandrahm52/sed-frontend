import { ConsultardocPageModule } from './consultardoc-flow/commons/components/consultardoc-page/consultardoc-page.module';
import { CargadocPageModule } from './cargadoc-flow/commons/components/cargadoc-page/cargadoc-page.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionFlowRoutingModule } from './gestion-flow-routing.module';
import { ExpedientePageModule } from './expediente-flow/commons/components/expediente-page/expediente-page.module';
import { GestionComponent } from './gestion.component';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ GestionComponent],
  imports: [
    CommonModule,
    GestionFlowRoutingModule,
    ExpedientePageModule,
    CargadocPageModule,
    ConsultardocPageModule,
  ], exports: [GestionComponent]
}) 
export class GestionFlowModule { }
