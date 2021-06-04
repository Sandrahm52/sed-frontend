import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINT_USERS } from 'src/app/commons/utils/utils';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http: HttpClient) { }

  getRoles(){
      const tk = localStorage.getItem('access_token')
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${tk}`
        })
      };
      const urlApi = `${environment.API_BASE}${ENDPOINT_USERS.ROLLIST}`;
      return this.http.get(urlApi, httpOptions);
    }


    createRoles(role_data){
      const tk = localStorage.getItem('access_token')
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': `application/json`, 
          'Authorization': `Bearer ${tk}`
        })
      };
      const urlApi = `${environment.API_BASE}${ENDPOINT_USERS.CREATE_ROLE}`;
      return this.http.post<any>(urlApi,role_data,httpOptions);
    }

    getPrivilegios(){
      const tk = localStorage.getItem('access_token')
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${tk}`
        })
      };
      const urlApi = `${environment.API_BASE}${ENDPOINT_USERS.LIST_PRIVILEGIOS}`;
      return this.http.get(urlApi, httpOptions);
    }
}
