import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { ExpedientePageComponent } from './expediente-page.component';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { TableExpedienteModule } from '../table-expediente/table-expediente.module';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ ExpedientePageComponent ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    TableExpedienteModule
  ],
  exports: [ExpedientePageComponent],
})
export class ExpedientePageModule { }
