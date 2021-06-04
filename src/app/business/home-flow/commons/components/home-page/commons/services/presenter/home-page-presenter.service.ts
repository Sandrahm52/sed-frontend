import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomePagePresenterService {

  constructor() { }

  listOptionGestion = [
    {
      text: 'Consultar documentos',
      icon: 'search',
      path: '/business-flow/documentos/consulta',
      active: true
    },
    {
      text: 'Carga de documentos',
      icon: 'upload_file',
      path: '/business-flow/documentos/carga',
      active: true
    },
    {
      text: 'Generar exp. digital',
      icon: 'cloud_done',
      path: '/business-flow/documentos/expediente',
      active: true
    },
  ]

  listOption = [
    {
      text: 'Mantenimiento de roles',
      icon: 'supervised_user_circle',
      path: '/business-flow/roles',
      active: true
    },
    {
      text: 'Mantenimiento de usuarios',
      icon: 'account_box',
      path: '/business-flow/users',
      active: true
    },
    {
      text: 'Mantenimiento de aplicaciones',
      icon: 'settings_applications',
      path: '/business-flow/home',
      active: true
    },
    {
      text: 'Gestión de documentos',
      icon: 'snippet_folder',
      path: '',
      clase: 'green',
      active: true
    },
  ];


}