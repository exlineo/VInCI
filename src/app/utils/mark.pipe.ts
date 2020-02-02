import { Pipe, PipeTransform } from '@angular/core';
import * as marked from "marked";

@Pipe({
  name: 'mark'
})
export class MarkPipe implements PipeTransform {

  transform(value: any): any {
    if (value && value.length > 0) {
      console.log(marked(value));
      return marked(value);
    }
    return value;
  }

}
