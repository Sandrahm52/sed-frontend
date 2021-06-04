import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINT_USERS } from 'src/app/commons/utils/utils';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor( private http: HttpClient) { }

  getDocuments(){
    // const tk = localStorage.getItem('access_token')
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Authorization': `Bearer ${tk}`
    //   })
    // };
    // const urlApi = `${environment.API_BASE}${ENDPOINT_USERS.DOCUMENTLIST}`;
    const urlApi = `${environment.API_BASE}${ENDPOINT_USERS.DOCUMENTLIST}`;
    return this.http.get(urlApi);
  }

}
