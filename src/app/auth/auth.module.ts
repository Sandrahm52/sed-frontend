import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthPageRoutingModule } from './auth-routing.module';
import { AuthPageModule } from './commons/components/auth-page/auth-page.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
    AuthPageModule,
    HttpClientModule,
    MatIconModule
  ]
})
export class AuthModule { }
