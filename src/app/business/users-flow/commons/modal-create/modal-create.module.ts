import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {ModalCreateComponent} from './modal-create.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UsersService} from '../services/users.service';
import {MatIconModule, MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';





@NgModule({
  declarations: [ModalCreateComponent],
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatGridListModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[ModalCreateComponent],
  providers: [UsersService]
})
export class ModalCreateModule { }
