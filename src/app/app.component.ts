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

  constructor(private route: Router, public mServ: MenusService) {
    this.getRoute();
  }

  changeRoute() {
    // Paramétrer le menu actuel
    this.getRoute();
  }
  getRoute(){
    console.log("Chemin URL", this.route.url.substr(1,this.route.url.length));
    this.mServ.getMenu(this.route.url.substr(1,this.route.url.length));
  }
}
