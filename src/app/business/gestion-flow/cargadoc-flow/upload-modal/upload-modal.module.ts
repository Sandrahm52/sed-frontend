import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material';
import {UploadModalComponent} from './upload-modal.component';
import { UploadFilesDirective } from './directives/upload-files.directive';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [UploadModalComponent, UploadFilesDirective],
  imports: [
    MatDialogModule,
    CommonModule
  ],
  exports: [UploadModalComponent]
})
export class UploadModalModule { }
