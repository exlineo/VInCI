import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ListeMenu, ItemMenus } from '../modeles/menus';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  menus:ListeMenu; // Liste des ménus sélectionnés
  menu:ItemMenus; // Menu actuellement sélectionné
  page:any = {}; // Page actuelle
  langue:string; // Langue de l'utilisateur
  /**
   * Récupérer les menus au démarrage
   * @param htt HttpClient
   */
  constructor(private http:HttpClient) {    
    this.getMenus();
    this.langue = this.getLangue() || "fr";
    
  }
  /**
   * Obtenir la langue local de l'utilsateur
   */
  getLangue():string{
      return localStorage.getItem("langue");
  }
  /**
   * Paramètrer la langue locale de l'utilisateur
   * @param l Langue à sauvegarder localement
   */
  setLangue(l){
    localStorage.setItem("langue", l);
    this.langue = l;
  }
  /**
   * Récupérer les liens et paramètres des menus
   */
  getMenus(){
    this.http.get<ListeMenu>('assets/data/menus.json').subscribe(m => {
      this.menus = m;
      console.log(m);
    });
  }
  /**
   * 
   */
  getMenu(alias:string){
    console.log(alias);
    // Lister le menu principal
    for(let m of this.menus.principal){
      if(alias == m.l){
        this.menu = m;
        break;
      }
    }
    // Lister le menu pied
    for(let m of this.menus.pied){
      if(m.l.indexOf(alias) != -1){
        this.menu = m;
        break;
      }
    }

    console.log(this.menu);
  }
  /**
   * Récupérer les pages du site
   */
  getPage(alias:string){
    if(alias.length == 0){
      alias = 'accueil';
    }
    this.http.get('assets/data/pages/'+ this.langue +'/'+ alias +'.json').subscribe(p => {
      this.page = p;
      console.log(p);
    });
  }
}
