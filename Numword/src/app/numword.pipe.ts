import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"numword",
  pure:true,
})
export class NumwordPipe implements PipeTransform {

  transform(amount:number, word1:string, word2:string, word5:string):string {
    let dd = amount%100;
    if ( (dd >= 11) && (dd <= 19) ) return amount + ' ' + word5;
    let d = amount%10;
    if ( d == 1 ) return amount + ' ' + word1;
    if ( (d >=2 ) && (d <= 4) ) return amount + ' ' + word2;
    if (amount <= 0 || isNaN(amount)) return '0 ' + word5;
    return word5;
  }
}
