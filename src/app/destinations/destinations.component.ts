import { Component } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { ClickTravelService } from '../click-travel.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss']
})
export class DestinationsComponent {

  constructor(protected clickTravelService: ClickTravelService) {
    this.clickTravelService.getDestinations().pipe(
      map(destinations => destinations.filter(destination => destination.isDreamDestination === true))
    ).subscribe(destinations => this.destinations = destinations);
  }

  destinations: any;

  title = 'Choose your dream destination...';

}
