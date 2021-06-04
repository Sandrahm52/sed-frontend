import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpedienteFlowRoutingModule } from './expediente-flow-routing.module';
import { ExpedientePageModule } from './commons/components/expediente-page/expediente-page.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExpedienteFlowRoutingModule,
    ExpedientePageModule,
  ]
})
export class ExpedienteFlowModule { }

