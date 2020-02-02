import { Pipe, PipeTransform } from '@angular/core';

/**
 * Traitement de listes d'articles basé sur le modèle des news
 */
@Pipe({ name: 'menusPipe' })
export class MenusPipe implements PipeTransform {
  /**
   * Appliquer un filtre aux titres, intro et descriptions des news
   * @param values Le tableau de données à fitrer (la liste des news)
   * @param filtre Le filtre à appliquer (ici une chaîne de caractère saisi dans le formulaire de filtre)
   */
  public transform(values: any[], filtre: string): any[] {
    if (!values || !values.length) return [];
    if (!filtre) return values;

    // Filtrer le tableau fourni en gérant la casse
    return values.filter(v => {
      // Filtre sur le titre
      if(v.menu){
        return v.menu.toLowerCase().indexOf(filtre.toLowerCase()) >=0 ;
      }
    });
  }
}

/**
 * Filtre pour des tableaux classiques
 */
@Pipe({ name: 'filtreListes' })
export class FiltrerPipe implements PipeTransform {
  public transform(values: any[], filter: string): any[] {
    if (!values || !values.length) return [];
    if (!filter) return values;
    
    return values.filter(v => v.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
  }
}