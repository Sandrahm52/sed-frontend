import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFlowRoutingModule } from './home-flow-routing.module';
import { HomePageModule } from './commons/components/home-page/home-page.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeFlowRoutingModule,
    HomePageModule,
  ]
})
export class HomeFlowModule { }
