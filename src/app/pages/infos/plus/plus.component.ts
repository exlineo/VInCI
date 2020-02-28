import { Component, OnInit, Input } from '@angular/core';
import { ToolsService } from 'src/app/utils/tools.service';
import { MenusService } from 'src/app/utils/services/menus.service';

@Component({
  selector: 'app-plus',
  templateUrl: './plus.component.html',
  styleUrls: ['./plus.component.css']
})
export class PlusComponent implements OnInit {

  @Input()
  infos:string; // Informations à afficher dans la lightbox

  constructor(public toolServ:ToolsService, public mServ:MenusService) { }

  ngOnInit(): void {
  }

}
