import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenusService } from './services/menus.service';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor(private route:Router) { }
  /**
   * Récupérer la route actuelle
   */
  getRoute(){
    console.log(this.route.url.substr(1, this.route.url.length));
    return this.route.url.substr(1, this.route.url.length);
  }
}
