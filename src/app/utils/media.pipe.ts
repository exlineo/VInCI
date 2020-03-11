import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

/**
 * Traitement de listes d'articles basé sur le modèle des news
 */
@Pipe({ name: 'mediaPipe' })
export class MediaPipe implements PipeTransform {
  /**
   * Appliquer un filtre aux titres, intro et descriptions des news
   * @param values Le tableau de données à fitrer (la liste des news)
   * @param filtre Le filtre à appliquer (ici une chaîne de caractère saisi dans le formulaire de filtre)
   */
  public transform(str: string): string {
    if (!str || !str.length) return '';
    str = environment.uri + str;
    // Filtrer le tableau fourni en gérant la casse
    return str;
  }
}