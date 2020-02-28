import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { MenusService } from 'src/app/utils/services/menus.service';
import { ToolsService } from 'src/app/utils/tools.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: 'auto',
        // opacity: 1
      })),
      state('closed', style({
        height: '0',
        // opacity: 0
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class ActionsComponent implements OnInit {
  isOpen:boolean = true; // Ouvrir fermer un bloc

  constructor(public mServ:MenusService, public toolsServ:ToolsService) { }

  ngOnInit() {
  }

  openClose(){
    this.isOpen = !this.isOpen;
  }

}
