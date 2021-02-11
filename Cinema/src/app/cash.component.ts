import {Component, Input} from '@angular/core';

@Component({
  selector: 'cash-component',
  templateUrl: 'cash.component.html',
  styleUrls: ['cash.component.css']
})
export class CashComponent {

  title = 'cash component';

  @Input("cash-type")
  public cashType: string | undefined;

  @Input("cash-class-name")
  public cashClassName: string | undefined;

  private amount: number | undefined = 1;

  plusClicked():void {
    // @ts-ignore
    if (this.amount < 12) this.amount += 1;
    else alert("The max allowed is 12 tickets");
  }

  minusClicked():void {
    // @ts-ignore
    if (this.amount > 1) this.amount -= 1;
    else alert("The min allowed is 1 ticket");
  }

  getTicketAmount():number {
    return <number>this.amount;
  }
}
