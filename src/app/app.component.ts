import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MenusService } from './utils/services/menus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projet VInCI';

  constructor(private route: Router, private mServ: MenusService) { }

  changeRoute() {
    // Paramétrer le menu actuel
    this.mServ.getMenu(this.route.url.substr(1,this.route.url.length));
    // Récupérer les données de la page
    // this.mServ.getPage(this.mServ.menu.chemin);
  }
}
