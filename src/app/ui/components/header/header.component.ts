import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string;
  currentUser: string;

  constructor(private route: ActivatedRoute, private titleService: Title) {
    this.title = 'Ang1';
    this.titleService.setTitle(this.title);
    this.currentUser = 'Anonymous';
  }

  ngOnInit(): void {
  }

}
