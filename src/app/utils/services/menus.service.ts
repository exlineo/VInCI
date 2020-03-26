import { Injectable, NgZone } from '@angular/core';
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
  pages: any;
  traductions: Array<any> = [new Object()];
  maintenance:boolean;
  rgpd:boolean; // Modifier la règle RGPD pour récupérer les statistiques

  langue: string; // Langue de l'utilisateur
  /**
   * Récupérer les menus au démarrage
   * @param http HttpClient
   */
  constructor(private http: HttpClient, private tServ: Title, private route: Router, private zone:NgZone) {
    this.checkProd(); // Vérifier si nous sommes en production ou non
    this.pages = new Object();
    this.getMenus(); // Obtenir la liste des éléments du menu
    this.getLangue() ? this.langue = this.getLangue() : this.langue = "fr";
    localStorage.getItem('rgpd') ? this.rgpd = eval(localStorage.getItem('rgpd')) : this.rgpd = true;
  }
  /**
   * Check prod
   */
  checkProd(){
    this.http.get('assets/data/prod.json').subscribe(
      p => {
        this.maintenance = p['MAINTENANCE'];
      }
    );
  }
  /**
   * Récupérer les traductions des éléments du site (formulaire notamment)
   */
  getTraductions(): void {
    this.http.get<Array<any>>(environment.uri + '/mots').subscribe(t => {
      this.traductions = t;
    });
  }
  /**
   * Retourner la traduction du mot sélectionné
   */
  getTraduction(alias: string) {
    for (let a of this.traductions) {
      if (a.alias == alias) {
        return a[this.langue];
      }
    };
  }
  /**
   * Obtenir la langue locale de l'utilsateur
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
    if (this.menus.length <= 1) {
      this.http.get<Array<MenuI>>(environment.uri + '/sitemaps').subscribe(m => {
        this.menus = m.sort((a, b) => (a.ordre > b.ordre) ? 1 : ((b.ordre > a.ordre) ? -1 : 0));
        this.getMenu(this.route.url.substr(1, this.route.url.length));
      });
    }
    // Récupérer la liste des traductions
    this.getTraductions();
  }
  /**
   * Récupérer le menu cliqué en fonction de son alias
   * @param { string } alias Alias du menu servant à faire le tri
   */
  getMenu(alias: string) {
    if(alias.length == 0) {alias = 'vincis'};
    // Lister le menu principal
      for (let m of this.menus) {
        if (alias == m.chemin) {
          this.menu = m;
          break;
        }
      }
      
    this.getPage(this.menu.chemin);
    
    /**
     * Changer le titre de la page HTML
     */
    this.tServ.setTitle("VInCI / " + this.menu['titre_'+this.langue]);
  }
  /**
   * Récupérer les pages du site
   * @param { string } alias Alias du menu servant à faire le tri
   */
  getPage(alias: string) {
    if (!this.pages.hasOwnProperty(alias)) {
      this.http.get<Array<any>>(environment.uri + '/' + alias).subscribe(p => {
        this.pages[this.menu.chemin] = p;
        document.getElementById("loader").classList.add('cache');
      });
    }else{
      this.page = this.pages[this.menu.chemin];
    }
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
  /**
   * Définir le choix RGPD
   */
  setRgpd(){
    this.rgpd = !this.rgpd;
    localStorage.setItem('rgpd', String(this.rgpd));
  }
}
