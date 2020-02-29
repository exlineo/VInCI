import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/utils/services/menus.service';

import { ContactI, Contact } from '../../utils/modeles/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:ContactI;

  constructor(public mServ:MenusService) { }

  ngOnInit() {
    this.contact = new Contact();
  }

  envoyer(){

  }

}
