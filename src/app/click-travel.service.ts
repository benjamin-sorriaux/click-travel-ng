import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destination } from './models/destination';

@Injectable({
  providedIn: 'root'
})
export class ClickTravelService {

  constructor(private httpClient: HttpClient) {}

  getDestinations() {
    return this.httpClient.get('https://travel-api.clicksomeone.com/destinations');
  }

  getTickets() {
    return this.httpClient.get(`https://travel-api.clicksomeone.com/tickets`);
  }

}
