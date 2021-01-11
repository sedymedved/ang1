import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private logger: LoggerService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> |
    boolean | UrlTree {

    const isLoggedIn = this.authService.isLoggedIn();
    this.logger.debug('canActivate()? -> ' + isLoggedIn);

    if (isLoggedIn) {
      return true;
    } else {
      const urlTree = this.router.createUrlTree(['/forbidden']);
      this.logger.debug('urlTree = ' + urlTree);
      return urlTree;
    }
  }

}
