import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  breadcrumb: string;
  constructor() { }

  ngOnInit() {
  }

  to(e){
    this.breadcrumb = 'OMac'
    console.log(e)
  }

  toBread(mensaje) {
    console.log(mensaje);
  }

}
