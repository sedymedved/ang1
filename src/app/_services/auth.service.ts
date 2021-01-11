import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private logger: LoggerService) {
  }

  login(user: string, password: string): boolean {
    if (password === 'p') {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('username');
  }

  getUser(): any {
    const user: any = localStorage.getItem('username');
    this.logger.debug('getUser() -> ' + user);

    return user;
  }

  isLoggedIn(): boolean {
    const res = this.getUser() !== null;
    this.logger.debug('isLoggedIn() -> ' + res);
    return res;
  }

}

export const AUTH_PROVIDERS: Array<any> = [
  {provide: AuthService, useClass: AuthService}
];

