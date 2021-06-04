import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesPageComponent } from './roles-page.component';
import { TableModule } from '../../../commons/table/table.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { RolesService } from '../../services/roles.service';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [RolesPageComponent],
  imports: [
    CommonModule,
    TableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    HttpClientModule,
    MatGridListModule,
  ],
  exports: [RolesPageComponent],
  providers: [RolesService]
})
export class RolesPageModule { }
