import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LoggerService} from './logger.service';
import {Observable} from 'rxjs';
import {User} from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  // userError$ = new Subject<string>();
  // user$ = new Subject<User | undefined>();
  //
  // deleteUserError$ = new Subject<string>();

  constructor(private http: HttpClient, private logger: LoggerService) {
  }

  // ------------------------------------------------------------------------
  listUsers(errNo: number): Observable<any> {
    const params = new HttpParams().set('err', String(errNo));
    const httpOptions = {params};
    return this.http.get('https://sedymedved.wz.cz/api/list-users.php', httpOptions);
  }

  //     // .pipe(catchError(err => [err]))
  //     // .subscribe(
  //     //   data => {
  //     //     this.logger.debug('HomeService:list-users:subscribe => ', data);
  //     //     if (data.ok) {
  //     //       this.users$.next(data.body);
  //     //     } else {
  //     //       this.users$.error(data.error.message);
  //     //     }
  //     //   });
  // }

  // listUsers(errNo: number): void {
  //   this.usersError$.next('');
  //   const params = new HttpParams().set('err', String(errNo));
  //   const httpOptions = this.buildOptions(params);
  //   this.http
  //     .get('https://sedymedved.wz.cz/api/list-users.php', httpOptions)
  //     .pipe(catchError(err => [err]))
  //     .subscribe(
  //       data => {
  //         this.logger.debug('HomeService:list-users:subscribe => ', data);
  //         if (data.ok) {
  //           this.users$.next(data.body);
  //         } else {
  //           this.users$.error(data.error.message);
  //         }
  //       });
  // }

  // ------------------------------------------------------------------------
  // getUser(id: number): void {
  //   this.userError$.next('');
  //
  //   const params = new HttpParams().set('id', String(id));
  //   const httpOptions = this.buildOptions(params);
  //   this.http
  //     .get('https://sedymedved.wz.cz/api/get-user.php', httpOptions)
  //     .pipe(catchError(err => [err]))
  //     .subscribe(
  //       data => {
  //         this.logger.debug('HomeService:get-user:subscribe => ', data);
  //         if (data.ok) {
  //           if (data.body === null) {
  //             this.userError$.next('User not found.');
  //           }
  //           this.user$.next(data.body);
  //         } else {
  //           this.userError$.next(data.error.message);
  //         }
  //       });
  // }

  // ------------------------------------------------------------------------
  // deleteUser(id: number): void {
  //   this.deleteUserError$.next('');
  //
  //   const params = new HttpParams().set('id', String(id));
  //   const httpOptions = this.buildOptions(params);
  //
  //   this.http
  //     .get('https://sedymedved.wz.cz/api/delete-user.php', httpOptions)
  //     .pipe(catchError(err => [err]))
  //     .subscribe(
  //       data => {
  //         this.logger.debug('HomeService:delete-user:subscribe => ', data);
  //         if (data.ok) {
  //             if( data.body.ok ) {
  //               this.deleteUserError$.next('Delete successfull.');
  //             } else {
  //               this.deleteUserError$.next(data.body.message);
  //             }
  //         } else {
  //           this.deleteUserError$.next(data.error.message);
  //         }
  //       });
  // }

  // buildOptions(params: HttpParams): object {
  //   const headers = new HttpHeaders();
  //   const httpOptions = {
  //     headers,
  //     params,
  //     responseType: 'json' as const,
  //     observe: 'body' as const
  //   };
  //   return httpOptions;
  // }

}
