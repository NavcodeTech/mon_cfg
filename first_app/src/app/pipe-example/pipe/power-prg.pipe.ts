import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerPrg'
})
export class PowerPrgPipe implements PipeTransform {

  transform(n1: number, n2: number){
    return Math.pow(n1,n2);
  }

}
