import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { ClickTravelService } from '../click-travel.service';
import { ActivatedRoute } from '@angular/router';
import { Ticket } from '../models/ticket';

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

  selectedTicket: Ticket;

  setSelectedTicket(ticket) {
    this.selectedTicket = ticket;
  }

  code: string;
  tickets: any;

}
