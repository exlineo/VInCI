import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paire'
})
export class PairePipe implements PipeTransform {

  transform(tab: Array<any>, n:string): any {
    if (!tab || !tab.length) return [];
    if (!n) return tab;

    return tab.filter((item, idx) => n === 'paire' ? idx % 2 === 1 : idx % 2 === 0 );
  }

}
