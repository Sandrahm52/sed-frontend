import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {MatDialog, MatDialogConfig} from '@angular/material';
import { RolesService } from 'src/app/business/roles-flow/commons/services/roles.service';
import {DocumentosModalComponent} from '../documentos-modal/documentos-modal.component';

export interface ExpedienteData{
  Anexo: string,
  Documento: string,
  Estatus: string,
  Garante: string,
  Lote: string,
  NRemesa: string,
  PFactura: string,
  RSocial: string,
}
export interface UserData {
  codigo: string;
  nombres: string;
  apellidoMaterno: string;
  apellidoPaterno: string;
  cargo: string;
  empresa: string;
  role:string;
  estado:number;
}
@Component({
  selector: 'app-table-expediente',
  templateUrl: './table-expediente.component.html',
  styleUrls: ['./table-expediente.component.scss']
})
export class TableExpedienteComponent implements OnInit {

  //displayedColumns: string[] = ['Lote'];
  // displayedColumns: string[] = ['Anexo', 'Documento', 'Estatus', 'Garante','Lote','NRemesa','PFactura','RSocial'];
  @Input() data;
  //dataSource : MatTableDataSource<ExpedienteData>;
  dataUser = [];

  displayedColumns: string[] = ['codigo', 'nombre rol', 'estado'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  // constructor(public dialog: MatDialog) {
  //   // const users = Array.from({length: 100}, (_, k) => createNewExpediente(k + 1));
  //   this.dataSource= new MatTableDataSource();
  // }

  constructor(private rolesService: RolesService, public dialog: MatDialog) {
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  //   console.log('hijo');
  // }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    // console.log(this.dataSource);
    // console.log('hijo');
    // this.dataSource =new MatTableDataSource(this.data);
    // console.log(this.dataSource);
    this.rolesService.getRoles().subscribe((data: any) =>  {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  edit(){
    console.log('Editar');

  }

  view(){
    console.log('Ver');

  }

  openDialog():void{
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(DocumentosModalComponent);
  }

}


// function createNewExpediente(codigo:number): ExpedienteData {

//   return {
//     lote: 'prueba lote',
//     nroRemesa: 'prueba nroRemesa',
//     garante: 'garante',
//     estatus: 'estatus',
//   };
// }

