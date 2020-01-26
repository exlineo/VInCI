import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/utils/services/menus.service';

@Component({
  selector: 'app-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.css']
})
export class MentionsComponent implements OnInit {

  constructor(public mServ:MenusService) { }

  ngOnInit() {
  }

}
