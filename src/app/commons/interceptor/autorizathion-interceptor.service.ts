import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorizathionInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const access_token: string = localStorage.getItem('access_token');

    let request = req;

    if(access_token){
      request = req.clone({
        setHeaders:{
          authorization: `Bearer ${access_token}`
        }
      });
    }
    return next.handle(request);
  }

}
