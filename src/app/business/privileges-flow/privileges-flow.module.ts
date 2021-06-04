import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivilegesFlowRoutingModule } from './privileges-flow-routing.module';
import { PrivilegesPageComponent } from './commons/components/privileges-page/privileges-page.component';


@NgModule({
  declarations: [PrivilegesPageComponent],
  imports: [
    CommonModule,
    PrivilegesFlowRoutingModule
  ]
})
export class PrivilegesFlowModule { }
