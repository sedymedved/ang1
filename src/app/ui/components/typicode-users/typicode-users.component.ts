import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-typicode-users',
  templateUrl: './typicode-users.component.html',
  styleUrls: ['./typicode-users.component.css']
})
export class TypicodeUsersComponent implements OnInit {
  loading = false;
  data = {};

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  makeRequest(): void {
    this.loading = true;

    this.http
      .get('https://jsonplaceholder.typicode.com/users/1')
      .subscribe(data => {
          console.log('Result: ');
          this.data = data;
          this.loading = false;
        },
        error => {
          console.log('Error: ', error);
          this.data = error;
          this.loading = false;
        },
        () => {
          console.log('Completed. '); // ??? useless
          this.loading = false;
        }
      );
  }

}
