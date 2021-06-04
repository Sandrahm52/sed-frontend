import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { CrearRolComponent } from '../components/crear-rol/crear-rol.component';
import { RolesService } from '../services/roles.service';

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
/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'search', 'search', 'search', 'search', 'search', 'search', 'search', 'search'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  dataUser = [];

  displayedColumns: string[] = ['codigo', 'nombre rol', 'estado', 'opciones'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private rolesService: RolesService, public dialog: MatDialog) {
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  ngOnInit() {
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog():void{
    const dialogPass = this.dialog.open(CrearRolComponent,{
      width:'60%',
      panelClass:'dialog-content-example',
    });
    dialogPass.afterClosed().subscribe(res =>  {
      console.log(res);
      if(res){
        console.log('ACCIÓN SIGUIENTE');
      }
    });
  }

  /*function setUser(userAll:Object, codigo: number): UserData{
    return {
      codigo: codigo.toString(),
      estado: userAll.estado,
      nombre: userAll.nombres,
      opciones: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
    };
  }*/

}

/** Builds and returns a new User. */
function createNewUser(codigo: number): UserData {
  const estado = 0;

  return {
    codigo: codigo.toString(),
    nombres: 'María',
    apellidoMaterno: 'Apellido Materno',
    apellidoPaterno: 'Apellido Paterno',
    cargo: 'nosee',
    empresa: 'IAFAS',
    role: 'ADMIN',
    estado: estado
  };
}
