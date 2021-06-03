import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  // Renvoyer un tableau dans un ordre inversé
  transform(ar:Array<any>): unknown {
    return ar.reverse();
  }

}
