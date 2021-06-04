import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(public route: Router) { }

  toGestion(){
    console.log('ENTRO2');
    this.route.navigate(['/business-flow/home']);
    
  }
}
