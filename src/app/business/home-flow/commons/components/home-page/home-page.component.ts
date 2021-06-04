import { Component, OnInit } from '@angular/core';
import { HomePagePresenterService } from './commons/services/presenter/home-page-presenter.service';
import {MatDialog} from '@angular/material';
import {ModalComponent} from '../../../../../commons/componets/modal/modal.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  box: boolean = true;
  constructor(
    public hppr: HomePagePresenterService,
    public dialog: MatDialog
  ) { }

  openDialog():void{
    const dialogRef = this.dialog.open(ModalComponent,{
      width:'400px',
      panelClass:'dialog-content-example',
    });
    dialogRef.afterClosed().subscribe(res =>  {
      console.log(res);
      if(res){
        console.log('ACCIÓN SIGUIENTE');
      }
    });
  }

  ngOnInit() {
  }

  back(){
    this.box = true;
  }

  asignar(e){
    console.log(e);
    this.box = false;
  }

  toGestion() {
    this.box = false;
  }

}
