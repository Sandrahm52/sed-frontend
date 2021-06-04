import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINT_USERS } from 'src/app/commons/utils/utils';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(){
    const tk = localStorage.getItem('access_token')
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${tk}`
      })
    };
    const urlApi = `${environment.API_BASE}${ENDPOINT_USERS.LIST}`;
    return this.http.get(urlApi, httpOptions);
  }

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

  createUser(user_data){
    const tk = localStorage.getItem('access_token')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': `application/json`,
        'Authorization': `Bearer ${tk}`
      })
    };
    const urlApi = `${environment.API_BASE}${ENDPOINT_USERS.CREATE}`;
    return this.http.post<any>(urlApi,user_data,httpOptions);
  }
}
