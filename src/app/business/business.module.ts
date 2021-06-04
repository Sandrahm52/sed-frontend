import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BusinessComponent } from './business.component';
import { HomeFlowModule } from './home-flow/home-flow.module';
import { RolesFlowModule } from './roles-flow/roles-flow.module';
import { HeaderModule } from '../commons/componets/header/header.module';
import { BusinessRoutingModule } from './business-routing.module';
import { BreadcrumbsModule } from '../commons/componets/breadcrumbs/breadcrumbs.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutorizathionInterceptorService } from '../commons/interceptor/autorizathion-interceptor.service';
//import { CrearRolComponent } from './roles-flow/commons/components/crear-rol/crear-rol.component';
import { MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';
import { DocumentosModalComponent } from '../business/gestion-flow/expediente-flow/commons/components/documentos-modal/documentos-modal.component';
import { HttpClientModule} from "@angular/common/http";


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [BusinessComponent,DocumentosModalComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    HomeFlowModule,
    RolesFlowModule,
    HeaderModule,
    BreadcrumbsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule, 
    HttpClientModule
  ],

  entryComponents:[DocumentosModalComponent],
  exports: [BusinessComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AutorizathionInterceptorService,
    multi: true
  }]

})
export class BusinessModule { }
