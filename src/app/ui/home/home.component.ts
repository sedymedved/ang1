import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoggerService} from '../../_services/logger.service';
import {HomeService} from '../../_services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  message = '';

  constructor(private route: ActivatedRoute, private logger: LoggerService, private homeService: HomeService) {
    route.params.subscribe(params => {
      this.message = params.message;
    });
  }


}
