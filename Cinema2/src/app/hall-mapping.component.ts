import {Component, Input} from '@angular/core';
import {TicketsService} from "./tickets.service";


@Component({
  selector: 'hall-mapping-component',
  templateUrl: 'hall-mapping.component.html',
  styleUrls: ['hall-mapping.component.css'],
})
export class HallMappingComponent {

  title = 'hall component';

  public tickets:TicketsService;


  constructor(_tickets:TicketsService) {
    this.tickets = _tickets;
    this.tickets.getStatusObservable().subscribe((statusObservable:boolean[]) => {
      this.hallStatus = statusObservable; });
  }

  getHallStatus():boolean[] {
    return this.hallStatus;
  }

  @Input("hall-status")
  private hallStatus:boolean[];
}
