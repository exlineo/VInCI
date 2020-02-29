import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/utils/services/menus.service';
import { ToolsService } from 'src/app/utils/tools.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(public mServ:MenusService, public toolsServ:ToolsService) { }

  ngOnInit() {
  }

}
