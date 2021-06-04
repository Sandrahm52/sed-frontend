import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DocumentosModalComponent } from '../documentos-modal/documentos-modal.component';

export interface PeriodicElement {
  Lote: string;
  NRemesa: string;
  Estatus: string;
  Garante: string;
  RSocial: string;
  PFactura: string;
  Anexo: string;
  Documento: string;
}


interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}

/** Constants used to fill up our data base. */
const ELEMENT_DATA: PeriodicElement[] = [
  {Lote: '1', NRemesa: '523', Estatus: 'Pendiente', Garante: 'Rimac seguros', RSocial: 'Rimac Seguros y Reaseguros sa', PFactura: '', Anexo:'', Documento:''},
  {Lote: '2', NRemesa: '163', Estatus: 'Pendiente', Garante: 'Rimac seguros',RSocial: 'Rimac Seguros y Reaseguros sa', PFactura: '', Anexo:'', Documento:''},
  {Lote: '3', NRemesa: '965', Estatus: 'Pendiente', Garante: 'Pacifico', RSocial: 'Pacifico sa', PFactura: '', Anexo:'', Documento:''},
  {Lote: '4', NRemesa: '752', Estatus: 'Pendiente', Garante: 'Sanna', RSocial: 'Sanna saa', PFactura: '', Anexo:'', Documento:''},
  {Lote: '5', NRemesa: '223', Estatus: 'Pendiente', Garante: 'Rimac seguros', RSocial: 'Rimac Seguros y Reaseguros sa', PFactura: '', Anexo:'', Documento:''},
  {Lote: '6', NRemesa: '965', Estatus: 'Pendiente', Garante: 'Rimac seguros', RSocial: 'Rimac Seguros y Reaseguros sa', PFactura: '', Anexo:'', Documento:''},
  {Lote: '7', NRemesa: '145', Estatus: 'Pendiente', Garante: 'Rimac seguros', RSocial: 'Rimac Seguros y Reaseguros sa', PFactura: '', Anexo:'', Documento:''},
  {Lote: '8', NRemesa: '345', Estatus: 'Pendiente', Garante: 'Pacifico', RSocial: 'Pacifico sa', PFactura: '', Anexo:'', Documento:''},
  {Lote: '9', NRemesa: '963', Estatus: 'Pendiente', Garante: 'Pacifico', RSocial: 'Pacifico sa', PFactura: '', Anexo:'', Documento:''},
  {Lote: '10', NRemesa: '784', Estatus: 'Pendiente', Garante: 'Pacifico', RSocial: 'Pacifico sa', PFactura: '', Anexo:'', Documento:''},
  {Lote: '11', NRemesa: '235', Estatus: 'Pendiente', Garante: 'Sanna', RSocial: 'Sanna saa', PFactura: '', Anexo:'', Documento:''},
  {Lote: '12', NRemesa: '984', Estatus: 'Pendiente', Garante: 'Sanna', RSocial: 'Sanna saa', PFactura: '', Anexo:'', Documento:''},
];

@Component({
  selector: 'app-expediente-page',
  templateUrl: './expediente-page.component.html',
  styleUrls: ['./expediente-page.component.scss']
})
export class ExpedientePageComponent implements OnInit {
  data:any;
  constructor(public dialog: MatDialog) {}
  openDialog():void{
    const dialogRef = this.dialog.open(DocumentosModalComponent,{
      width:'800px',
      height:'350px'
    });
    dialogRef.afterClosed().subscribe(res =>{
      console.log(res);
    });
  }
  prueba():void{


  }
  ngOnInit(): void {
    console.log('console padre',ELEMENT_DATA);
    this.data=ELEMENT_DATA;

  }

}
