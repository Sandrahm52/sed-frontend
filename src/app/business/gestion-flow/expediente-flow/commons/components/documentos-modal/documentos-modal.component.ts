import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-documentos-modal',
  templateUrl: './documentos-modal.component.html',
  styleUrls: ['./documentos-modal.component.scss']
})
export class DocumentosModalComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<DocumentosModalComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
    ) { }

  ngOnInit() {
  }

}
