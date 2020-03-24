import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/utils/services/menus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  conne:any;

  constructor(public mServ:MenusService) { }

  ngOnInit() {
    this.conne = {
      id:"",
      pwd:""
    }
  }

  connexion(){
    if(this.conne.id == 'VInCI' && this.conne.pwd == 'ADmIN'){
      this.mServ.maintenance = false;
    }
  }

}
