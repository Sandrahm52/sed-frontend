import { ConsultardocPageComponent } from './consultardoc-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GestionService } from 'src/app/business/gestion-flow/services/gestion.service';



@NgModule({
  declarations: [ConsultardocPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
   
  ],
  exports: [ConsultardocPageComponent],
  providers: [GestionService]
})
export class ConsultardocPageModule { }
