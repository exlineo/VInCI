import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MenusService } from 'src/app/utils/services/menus.service';

import { environment } from '../../../environments/environment';

// Variable pour OpenStreetMap
declare var ol: any;

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {
  coord:any
  constructor(public mServ:MenusService) { }

  ngOnInit() {
    this.coord = environment.map.coord;
  }

  ngOnAfterInit(){
  }

}
