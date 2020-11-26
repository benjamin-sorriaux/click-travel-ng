import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ClickTravelService } from '../click-travel.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent  {

  constructor(protected clickTravelService: ClickTravelService, private route: ActivatedRoute) {

    this.code = this.route.snapshot.params.code;

    this.clickTravelService.getTickets().pipe(
      map(tickets => tickets.filter(ticket => ticket.to === this.code))
    ).subscribe(tickets => this.tickets = tickets);
  }

  code: string;
  tickets: any;

}
