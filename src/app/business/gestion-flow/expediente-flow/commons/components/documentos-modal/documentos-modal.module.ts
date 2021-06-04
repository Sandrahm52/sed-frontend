import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DocumentosModalComponent } from './documentos-modal.component';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [DocumentosModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [DocumentosModalComponent]
})
export class DocumentosModalModule { }
