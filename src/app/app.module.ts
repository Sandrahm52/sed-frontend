import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
import { ModalComponent } from './commons/componets/modal/modal.component';
import {MatDialogModule, MatButtonModule} from '@angular/material';
import { ModalForgotComponent } from './auth/commons/modal-forgot/modal-forgot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";
import {UploadModalComponent} from './business/gestion-flow/cargadoc-flow/upload-modal/upload-modal.component'




@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ AppComponent, ModalComponent,ModalForgotComponent,UploadModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  entryComponents:[ModalComponent,ModalForgotComponent,UploadModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
