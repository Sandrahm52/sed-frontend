import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesFlowRoutingModule } from './roles-flow-routing.module';
import { RolesPageModule } from './commons/components/roles-page/roles-page.module';
import { CrearRolModule } from './commons/components/crear-rol/crear-rol.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RolesFlowRoutingModule,
    RolesPageModule,
    CrearRolModule,
  ]
})
export class RolesFlowModule { }

