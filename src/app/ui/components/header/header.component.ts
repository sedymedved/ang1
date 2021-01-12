import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title: string;
  currentUser: string;

  constructor(private titleService: Title) {
    this.title = 'Ang1';
    this.titleService.setTitle(this.title);
    this.currentUser = 'Anonymous';
  }

}
