import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { BotoneMenuModule } from 'src/app/commons/componets/boton-menu/botone-menu.module';
import { HomePagePresenterService } from './commons/services/presenter/home-page-presenter.service';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    BotoneMenuModule,
    HttpClientModule,
    MatIconModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule { }
