import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {TableModule} from '../../table/table.module'
import { UsersPageComponent } from './users-page.component';
import { UsersService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    TableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  exports:[UsersPageComponent],
  providers: [UsersService],
})
export class UsersPageModule { }
