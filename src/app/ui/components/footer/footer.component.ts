import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  developer: string;
  year: string;

  constructor() {
    this.developer = 'Sedy Medved';
    this.year = '2021';
  }

}
