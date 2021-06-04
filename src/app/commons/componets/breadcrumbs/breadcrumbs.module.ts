import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { MatIconModule } from '@angular/material';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [BreadcrumbsComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [BreadcrumbsComponent]
})
export class BreadcrumbsModule { }