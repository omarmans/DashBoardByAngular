import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, retry, take, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AUTH_GUARD implements CanActivate {
  constructor(private AuthService: AuthService, private router: Router) {}
  //we can use router to go to main page but we  will use the URL_TREE
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
    return this.AuthService.user.pipe(
      take(1),
      map((bol_user) => {
        const isAuth = !!bol_user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/']);
      })
    );
  }
}
