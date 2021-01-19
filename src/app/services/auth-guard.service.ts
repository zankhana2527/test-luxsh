import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const role = localStorage.getItem('role');

    if(role === 'admin'){
      return true;
    }else{
      this.router.navigate(['/home/about']);
      return false;
    }

  }
}
