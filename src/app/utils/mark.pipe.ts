import { Pipe, PipeTransform } from '@angular/core';
import * as marked from "marked";
/** Transformer le markdown en html */
@Pipe({
  name: 'mark'
})
export class MarkPipe implements PipeTransform {

  transform(value: any): any {
    if (value && value.length > 0) {
      return marked(value);
    }
    return value;
  }

}
/** Récupérer les articles en fonctions de la langue */
@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {

  transform(values: any[], l:string=null): any {
    if (!values || !values.length) return [];
    if (!l || l.length == 0) return values;

    return values.filter(v => {
      // Filtre sur le titre
      console.log(v.langue.code, v.langue.code.indexOf(l) >= 0);
      if(v.langue.code.indexOf(l) >= 0){
        return v;
      }
    });
  }

}
