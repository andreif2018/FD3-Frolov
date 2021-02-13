import {Component} from '@angular/core';
import {TicketsService} from "./tickets.service";


@Component({
  selector: 'hall-component',
  templateUrl: 'hall.component.html',
  styleUrls: ['hall.component.css'],
})
export class HallComponent {

  title = 'hall component';

  public tickets:TicketsService;


  constructor(_tickets:TicketsService) {
    this.tickets = _tickets;
  }

}
