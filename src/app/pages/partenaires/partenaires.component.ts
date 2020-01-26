import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/utils/services/menus.service';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {

  constructor(public mServ:MenusService) { }

  ngOnInit() {
  }

}
