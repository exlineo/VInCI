import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ListeMenu } from '../modeles/menus';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  menus:ListeMenu;
  /**
   * Récupérer les menus au démarrage
   * @param htt HttpClient
   */
  constructor(private http:HttpClient) {    
    this.http.get<ListeMenu>('assets/data/menus.json').subscribe(m => {
      this.menus = m;
      console.log(m);
    });
  }
}
