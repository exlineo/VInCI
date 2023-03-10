import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenusService } from './services/menus.service';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  article:any; // article à afficher dans une lightbox

  constructor(private route:Router) { }
  /** Récupérer la route actuelle */
  getRoute(){
    console.log(this.route.url.substr(1, this.route.url.length));
    return this.route.url.substr(1, this.route.url.length);
  }
  /**
   * Afficher un article en lightbox
   * @param a Données à afficher dans l'article
   */
  showArticle(a:any){
    console.log(a);
    this.article = a;
  }
  /** Cacher un article en lightbox */
  hideArticle(){
    this.article = null;
  }
  /** gérer des onglets */
  onglet(event){}
}
