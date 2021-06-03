import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/utils/services/menus.service';
import { ToolsService } from 'src/app/utils/tools.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  constructor(public mServ:MenusService, public toolsServ:ToolsService) { }

  ngOnInit() {
    this.mServ.getContacts();
  }

}
