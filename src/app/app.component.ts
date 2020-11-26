import { Component } from '@angular/core';
import { ClickTravelService } from './click-travel.service';
import { Destination } from './models/destination';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(protected clickTravelService: ClickTravelService) {
    this.clickTravelService.getDestinations().pipe(
      map(destinations => destinations.filter(destination => destination.isDreamDestination === true))
    ).subscribe(destinations => this.destinations = destinations);
  }

  destinations: any;

  title = 'Choose your dream destination...';
}
