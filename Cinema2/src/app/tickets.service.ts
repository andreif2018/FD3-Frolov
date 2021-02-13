import {Injectable} from "@angular/core";
import {from, Observable} from "rxjs";

@Injectable()
export class TicketsService {

  private allSeats:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  private freeSeats:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  private bookedSeats:number[] = [];
  private booking:number[] = [];
  private cashType:string | undefined;
  private bookingFailed:boolean = false;

  public status:Observable<boolean[]>;

  constructor() {
    this.status = new Observable<boolean[]>();
  }

  getStatusObservable():Observable<boolean[]> {
    return this.status = from([this.getLayout()]);
  }

  getLayout():boolean[] {
    return this.allSeats.map((item: number) => {
      return this.freeSeats.includes(item);
    });
  }

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
    else this.bookingFailed = true;
  }

  getAllSeats():Array<number> {
    return this.allSeats;
  }

  getAvailableSeatsAmount():number {
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

  getBookingFailed():boolean {
    return this.bookingFailed;
  }
}
