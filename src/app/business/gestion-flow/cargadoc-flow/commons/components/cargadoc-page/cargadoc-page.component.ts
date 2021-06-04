import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {UploadModalComponent} from '../../../upload-modal/upload-modal.component';

@Component({
  selector: 'app-cargadoc-page',
  templateUrl: './cargadoc-page.component.html',
  styleUrls: ['./cargadoc-page.component.scss']
})
export class CargadocPageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog():void{
    const dialogRef = this.dialog.open(UploadModalComponent,{
      width:'70%',
      panelClass:'dialog-content-example',
    });
    dialogRef.afterClosed().subscribe(res =>  {
      console.log(res);
      if(res){
        console.log('ACCIÓN SIGUIENTE');
      }
    });
  }

}
