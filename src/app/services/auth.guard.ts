import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(
    public auth: AuthenticationService,
    public router: Router
  ){ }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggedIn !== true) {
      this.router.navigate(['login'])
    }
    return true;
  }
}
