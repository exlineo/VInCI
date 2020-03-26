import { Component, OnInit } from '@angular/core';
import { MenusService } from '../../utils/services/menus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mobile:boolean;

  constructor(public mServ:MenusService, private route:Router) { }

  ngOnInit() {
    this.mobile = true;
  }
  /**
   * Changer d'adresse et ferme le menu si utile
   * @param u Adresse à laquelle se rendre
   */
  goTo(u:string){
    this.route.navigateByUrl('/'+u);
    this.mobile = false;
  }
}
