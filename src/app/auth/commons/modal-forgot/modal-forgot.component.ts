import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal-forgot',
  templateUrl: './modal-forgot.component.html',
  styleUrls: ['./modal-forgot.component.scss']
})
export class ModalForgotComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef <ModalForgotComponent>,
    @Inject(MAT_DIALOG_DATA) public message:string){ }

  ngOnInit() {
  }

  onClickNO():void{
    this.dialogRef.close(false);
  }

}
