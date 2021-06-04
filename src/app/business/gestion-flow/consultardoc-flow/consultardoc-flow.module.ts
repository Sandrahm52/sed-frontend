import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultardocFlowRoutingModule } from './consultardoc-flow-routing.module';
import { ConsultardocPageModule } from './commons/components/consultardoc-page/consultardoc-page.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConsultardocFlowRoutingModule,
    ConsultardocPageModule,
    HttpClientModule,
  ]
})
export class ConsultardocFlowModule { }

