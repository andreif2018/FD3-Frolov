import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:"numword",
  pure:true,
})
export class NumwordPipe implements PipeTransform {

  transform(amount:number, word1:string, word2:string):string {
    if (amount === 1) return word1;
    else return word2;
  }
}
