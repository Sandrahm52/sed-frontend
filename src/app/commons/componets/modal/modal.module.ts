import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import {MatDialogModule} from '@angular/material';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ModalComponent],
  imports: [
    MatDialogModule,
    CommonModule
  ],
  exports: [ModalComponent]
})
export class ModalModule { }
