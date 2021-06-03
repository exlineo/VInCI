import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/utils/services/menus.service';
import { ToolsService } from 'src/app/utils/tools.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  filtre:string;

  constructor(public mServ:MenusService, public toolsServ:ToolsService) { }

  ngOnInit() {
    
  }
  /**
   * Afficher toutes les news ou juste une
   */
  setFiltre(){
    if(!this.filtre || this.filtre.length == 0){
      this.filtre = this.mServ.langue;
    }else{
      this.filtre = '';
    }
  }

}
