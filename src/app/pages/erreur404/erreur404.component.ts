import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/utils/services/menus.service';

@Component({
  selector: 'app-erreur404',
  templateUrl: './erreur404.component.html',
  styleUrls: ['./erreur404.component.css']
})
export class Erreur404Component implements OnInit {

  constructor(public mServ:MenusService) { }

  ngOnInit() {
  }

}
