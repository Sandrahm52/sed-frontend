import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFlowRoutingModule } from './users-flow-routing.module';
import { UsersPageModule } from './commons/components/users-page/users-page.module';
import { ModalCreateModule } from './commons/modal-create/modal-create.module';



@NgModule({
  imports: [
    CommonModule,
    UsersFlowRoutingModule,
    UsersPageModule,
    ModalCreateModule
  ],
  declarations: [],
})
export class UsersFlowModule { }
