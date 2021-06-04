import { OnInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CrearRolComponent } from '../crear-rol/crear-rol.component';
import { RolesService } from '../../services/roles.service';



@Component({
  selector: 'app-roles-page',
  templateUrl: './roles-page.component.html',
  styleUrls: ['./roles-page.component.scss']
})
export class RolesPageComponent implements OnInit {
  

  constructor(public dialog: MatDialog, private rolesServices: RolesService ) {}
  openDialog():void{
    const dialogRef = this.dialog.open(CrearRolComponent,{
      
    });
    dialogRef.afterClosed().subscribe(res =>{
      console.log(res);
    });
  }

  ngOnInit() {
    this.getListRoles()
  }

  getListRoles(){
    this.rolesServices.getRoles().subscribe(data => console.log(data)
    )
  }

}
