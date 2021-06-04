import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-menu',
  templateUrl: './boton-menu.component.html',
  styleUrls: ['./boton-menu.component.scss']
})
export class BotonMenuComponent implements OnInit {
  @Input() path: string;
  @Input() icon: string;
  @Input() text: string;
  @Input() clase: string;
  @Input() link: any;
  @Input() active: boolean;
  gestion: string;
  @Output() propagar = new EventEmitter();
  @Output() bread = new EventEmitter();

  constructor(public route: Router) { }

  ngOnInit() {
  }

  toGestion(path){
    // this.bread.emit(this.text)
    if(path === ''){
      this.propagar.emit(this.gestion)
    } else {
    this.route.navigate([path]);
    }
  }

}
