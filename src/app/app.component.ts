import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MenusService } from './utils/services/menus.service';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projet VInCI';

  constructor(private route: Router, public mServ: MenusService) {
    this.getRoute();

    this.route.events.subscribe(event => {
      if(event instanceof NavigationEnd){
        if(this.mServ.rgpd){
          gtag('config', 'UA-2790631-41',
                {
                  'page_path': event.urlAfterRedirects
                }
               );
       }}
      });
  }

  changeRoute() {
    // Paramétrer le menu actuel
    this.getRoute();
  }
  getRoute(){
    let r:string = this.route.url.substr(1,this.route.url.length);
    this.mServ.getMenu(r);
  }
}
