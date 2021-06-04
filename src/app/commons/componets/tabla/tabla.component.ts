import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { RolesService } from '../../../business/roles-flow/commons/services/roles.service';
export interface RolData {
  codigo: string;
  nombre: string;
  estado: boolean;
  descripcion: string;
  //opciones: string;
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
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements AfterViewInit {
  displayedColumns: string[] = ['codigo', 'nombre', 'estado', 'descripcion', 'opciones'];
  dataSource: MatTableDataSource<RolData>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private rolesServices: RolesService) {
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }
  //getListRoles(){
    //this.rolesServices.getRoles().subscribe(
      //data => console.log(data)
      //(data:any)=>{
        //this.dataSource=data;
        //console.log(data)
     // }
   // )
 // }
  ngOnInit(){
    this.rolesServices.getRoles().subscribe(
      //data => console.log(data)
      (data:any)=>{
        this.dataSource=new MatTableDataSource(data);
        console.log(data)
      }
    )
  }

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
}

/** Builds and returns a new User. */
//function createNewUser(codigo: number): RolData {
 // const estado = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
    //NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

 // return {
  //  codigo: codigo.toString(),
   // estado: estado,
    //nombre: Math.round(Math.random() * 100).toString(),
    //opciones: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
 // };
//}
