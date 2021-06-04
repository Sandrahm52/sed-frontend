import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonMenuComponent } from './boton-menu.component';
import { MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [BotonMenuComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [BotonMenuComponent]
})
export class BotoneMenuModule { }