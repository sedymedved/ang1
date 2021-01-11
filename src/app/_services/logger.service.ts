import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {
  }

  debug(message?: any, data?: any): void {
    this.log(`DEBUG ${message}`, data);
  }

  info(message?: any, data?: any): void {
    this.log(`INFO ${message}`, data);
  }

  warn(message?: any, data?: any): void {
    this.log(`WARN ${message}`, data);
  }

  error(message?: any, data?: any): void {
    this.log(`ERROR ${message}`, data);
  }

  log(message: any, data?: any): void {
    console.log(message, data);
  }

}
