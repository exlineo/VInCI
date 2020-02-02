import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

import { environment } from '../../../environments/environment';

import { MenuI, LMenus, ImgI } from '../modeles/sets';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  menus: Array<MenuI> = [new LMenus()]; // Liste des ménus sélectionnés
  menu: MenuI = new LMenus(); // Menu actuellement sélectionné
  pages: any = {}; // Page actuelle
  langue: string; // Langue de l'utilisateur
  /**
   * Récupérer les menus au démarrage
   * @param http HttpClient
   */
  constructor(private http: HttpClient, private tServ: Title) {
    this.getMenus();
    this.langue = this.getLangue() || "fr";
  }
  /**
   * Obtenir la langue local de l'utilsateur
   */
  getLangue(): string {
    return localStorage.getItem("langue");
  }
  /**
   * Paramètrer la langue locale de l'utilisateur
   * @param l Langue à sauvegarder localement
   */
  setLangue(l) {
    localStorage.setItem("langue", l);
    this.langue = l;
  }
  /**
   * Récupérer les liens et paramètres des menus
   */
  getMenus() {
    this.http.get<Array<MenuI>>(environment.uri+'/sitemaps').subscribe(m => {
      this.menus = m.sort((a, b) => (a.ordre > b.ordre) ? 1 : ((b.ordre > a.ordre) ? -1 : 0));
      this.menu = this.menus[0];
      console.log("Menu strapi", m, "Menu sélectionné", this.menu);
      // this.getMenu("/");
    });
  }
  /**
   * Récupérer le menu cliquer en fonction de son alias
   * @param { string } alias Alias du menu servant à faire le tri
   */
  getMenu(alias: string) {
    console.log(alias);
    // Lister le menu principal
    for (let m of this.menus) {
      console.log(alias == m.chemin);
      if (alias == m.chemin) {
        this.menu = m;
        break;
      }
    }
    /**
     * Changer le titre de la page HTML
     */
    this.tServ.setTitle("VInCI / " + this.menu.titre);
    console.log(this.menu);
  }
  /**
   * Récupérer les pages du site
   * @param { string } alias Alias du menu servant à faire le tri
   */
  getPage(alias: string) {
    // if (sessionStorage.getItem(alias)) {
    //   this.page = JSON.parse(sessionStorage.getItem(alias));
    // } else {
      this.http.get(environment.uri + '/' + alias).subscribe(p => {
        sessionStorage.setItem(alias, JSON.stringify(p));
        this.pages = p;
        console.log("Pages loadées", this.pages);
      });
    // }
  }
  /**
   * Ajouter l'URL aux média pour leur chargement
   * @param m Un média ou une liste de médias
   */
  setMedias(m:any){
    console.log("Set medias : ", m);
    if(typeof m === "object"){
      m.url = environment.uri + m.url;
    }else if(Array.isArray(m)){
      m.forEach(i => {
        i.url = environment.uri + i.url;
      })
    }
  }
}
