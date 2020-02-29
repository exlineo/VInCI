import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/utils/services/menus.service';
import { ToolsService } from 'src/app/utils/tools.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  constructor(public mServ:MenusService, public toolsServ:ToolsService) { }

  ngOnInit() {
  }

}
