import { Component, OnInit } from '@angular/core';
import { GestionService } from 'src/app/business/gestion-flow/services/gestion.service';



@Component({
  selector: 'app-consultardoc-page',
  templateUrl: './consultardoc-page.component.html',
  styleUrls: ['./consultardoc-page.component.scss']
})
export class ConsultardocPageComponent implements OnInit {

  constructor( private gestionService: GestionService ) { }

  ngOnInit() {
    this.getListDocument()
  }

  getListDocument(){
    this.gestionService.getDocuments().subscribe(data => console.log(data)
    )
  }

}
