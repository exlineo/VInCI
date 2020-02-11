import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/utils/services/menus.service';

@Component({
  selector: 'app-rgpd',
  templateUrl: './rgpd.component.html',
  styleUrls: ['./rgpd.component.css']
})
export class RgpdComponent implements OnInit {

  constructor(public mServ: MenusService) { }

  ngOnInit() {
  }
  choixRGPD(c: string) {
    switch (c) {
      case "analytics":
        break;
      case "interaction":
        break;

    }
  }
}
