import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableExpedienteComponent } from './table-expediente.component';
import { MatIconModule, MatPaginatorModule, MatSortModule, MatTableModule , MatTableDataSource} from '@angular/material';




@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [TableExpedienteComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  exports:[TableExpedienteComponent],

})
export class TableExpedienteModule { }
