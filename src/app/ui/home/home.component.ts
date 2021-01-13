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
  globalCounter = 0;

  constructor(private route: ActivatedRoute, private logger: LoggerService, private homeService: HomeService) {
    route.params.subscribe(params => {
      this.message = params.message;
    });
  }

  inc(): void {
    this.globalCounter += 1;
  }

  reset(): void {
    this.globalCounter = 0;
  }

}
