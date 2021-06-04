import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private route: Router,
  ){}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!localStorage.getItem( environment.sessionKey )){
      this.route.navigateByUrl('/login-flow')
    }
    return true;
  }
  
}
