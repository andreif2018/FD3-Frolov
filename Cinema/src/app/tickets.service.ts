import { Injectable } from "@angular/core";

@Injectable()
export class TicketsService {

  private freeSeats:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  private bookedSeats:number[] = [];
  private booking:number[] = [];
  private cashType:string | undefined;

  bookSeat(amount:number, cashTypeParam:string):void {
    this.booking = [];
    this.cashType = cashTypeParam;
    let index:number;
    if (this.freeSeats.length >= amount) {
      do {
        index = Math.floor(Math.random() * Math.floor(this.freeSeats.length));
      }
      while (index + amount > this.freeSeats.length);
      this.booking = this.freeSeats.splice(index, amount);
      this.bookedSeats = this.bookedSeats.concat(this.booking);
    }
    else alert("Sorry, all seats are booked already");
  }

  getFreeSeatsAmount():number {
    return this.freeSeats.length;
  }

  getBookedSeatsAmount():number {
    return this.bookedSeats.length;
  }

  getLastBooking():number[] {
    return this.booking;
  }

  getCashType():string | undefined {
    return this.cashType
  }
}
