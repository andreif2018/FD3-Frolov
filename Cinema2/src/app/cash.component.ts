import {Component, Input} from '@angular/core';
import {TicketsService} from "./tickets.service";

@Component({
  selector: 'cash-component',
  templateUrl: 'cash.component.html',
  styleUrls: ['cash.component.css']
})
export class CashComponent {

  title = 'cash component';

  public tickets:TicketsService;

  constructor(_tickets:TicketsService) {
    this.tickets = _tickets;
  }

  @Input("cash-type")
  public cashType: string | undefined;

  @Input("cash-class-name")
  public cashClassName: string | undefined;

  private amount: number | undefined = 1;

  plusClicked():void {
    if (this.tickets.getAvailableSeatsAmount() === 0) alert("Sorry, all seats are booked already");
    else if (this.amount < this.tickets.getAvailableSeatsAmount()) this.amount += 1;
    else alert("Requested tickets amount is above available tickets amount");
  }

  minusClicked():void {
    if (this.amount > 1) this.amount -= 1;
    else alert("The min allowed is 1 ticket");
  }

  getTicketAmount():number {
    return <number>this.amount;
  }
}
