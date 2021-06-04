import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargadocFlowRoutingModule } from './cargadoc-flow-routing.module';
import { CargadocPageModule } from './commons/components/cargadoc-page/cargadoc-page.module';
//import { UploadModalComponent } from './upload-modal/upload-modal.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CargadocFlowRoutingModule,
    CargadocPageModule,
  ]
})
export class CargadocFlowModule { }

