import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LOGIN_APIS } from '../enum/login-apis';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(payload) {
    const apiUrl = `${environment.API_BASE}${LOGIN_APIS.SIGNIN}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${environment.Authorization}`
    });
    return this.http.post<any>(apiUrl,payload, { headers, observe: 'response' })
  }

}
