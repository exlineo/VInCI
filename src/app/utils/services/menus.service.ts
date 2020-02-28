import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

import { environment } from '../../../environments/environment';

import { MenuI, LMenus, ImgI } from '../modeles/sets';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  menus: Array<MenuI> = [new LMenus()]; // Liste des ménus sélectionnés
  menu: MenuI = new LMenus(); // Menu actuellement sélectionné
  page: Array<any> = [new Object()]; // Page actuelle

  langue: string; // Langue de l'utilisateur
  /**
   * Récupérer les menus au démarrage
   * @param http HttpClient
   */
  constructor(private http: HttpClient, private tServ: Title, private route: Router) {
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
  getMenus(alias: string = null) {
    console.log(this.menus.length);
    if (this.menus.length <= 1) {
      this.http.get<Array<MenuI>>(environment.uri + '/sitemaps').subscribe(m => {
        this.menus = m.sort((a, b) => (a.ordre > b.ordre) ? 1 : ((b.ordre > a.ordre) ? -1 : 0));
        // this.menu = this.menus[0];
        this.getMenu(this.route.url.substr(1,this.route.url.length));
        this.route.navigateByUrl(this.menu.chemin);
      });
    }
  }
  /**
   * Récupérer le menu cliquer en fonction de son alias
   * @param { string } alias Alias du menu servant à faire le tri
   */
  getMenu(alias: string = null) {
    // Lister le menu principal
    if (alias) {
      for (let m of this.menus) {
        if (alias == m.chemin) {
          this.menu = m;
          console.log("menu", this.menu);
          break;
        }
      }
    } else {
      this.menu = this.menus[0];
    }
    this.getPage(this.menu.chemin);
    /**
     * Changer le titre de la page HTML
     */
    this.tServ.setTitle("VInCI / " + this.menu.titre);
  }
/**
 * Récupérer les pages du site
 * @param { string } alias Alias du menu servant à faire le tri
 */
getPage(alias: string) {
  console.log("Alias page", alias);
  // if (sessionStorage.getItem(alias)) {
  //   this.page = JSON.parse(sessionStorage.getItem(alias));
  // } else {
  if (alias.length < 1) {
    alias = 'divers';
  }
  this.http.get<Array<any>>(environment.uri + '/' + alias).subscribe(p => {
    sessionStorage.setItem(alias, JSON.stringify(p));
    console.log("Page", p);
    this.page = p;
  });
  // }
}

/**
 * Ajouter l'URL aux média pour leur chargement
 * @param m Un média ou une liste de médias
 */
setMedias(m: any) {
  if (typeof m === "object") {
    m.url = environment.uri + m.url;
  } else if (Array.isArray(m)) {
    m.forEach(i => {
      i.url = environment.uri + i.url;
    })
  }
}
}
