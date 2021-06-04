import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalForgotComponent } from './modal-forgot.component';
import {MatDialogModule} from '@angular/material';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ModalForgotComponent],
  imports: [
    MatDialogModule,
    CommonModule
  ],
  exports: [ModalForgotComponent]
})

export class ModalForgotModule { }
