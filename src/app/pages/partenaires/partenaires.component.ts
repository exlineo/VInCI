import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MenusService } from 'src/app/utils/services/menus.service';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {
  coord:any
  marqueurs:Array<any>;
  constructor(public mServ:MenusService) { }

  ngOnInit() {
    this.marqueurs = [];
    this.coord = environment.map.coord;
    this.setmarqueurs();
  }
  setmarqueurs(){
    for(let m of this.mServ.pages[this.mServ.menu.chemin]){
      if(m.coordonnees){
        this.marqueurs.push(m.coordonnees.split(", "));
      }
    }
  }
  // Clic sur le marqueur
  marqueurClic(marq:any){
    console.log(marq);
  }

}
