import { Component } from '@angular/core';
import {TicketsService} from "./tickets.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cinema';

  private tickets:TicketsService;

  constructor(_tickets:TicketsService) {
    this.tickets = _tickets;
  }
}
