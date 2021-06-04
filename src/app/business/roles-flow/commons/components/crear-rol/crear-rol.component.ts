import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.scss']
})
export class CrearRolComponent implements OnInit {
  

  constructor(public dialogRef: MatDialogRef<CrearRolComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
   ) { }

  ngOnInit() {
  }
  onclickNO():void{
    this.dialogRef.close();
  }
  
}
