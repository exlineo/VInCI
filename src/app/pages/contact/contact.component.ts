import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/utils/services/menus.service';

import { environment } from '../../../environments/environment';

import { ContactI, Contact } from '../../utils/modeles/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: ContactI;
  retour:string;

  constructor(public mServ: MenusService) { }

  ngOnInit() {
    this.contact = new Contact();
  }
  /**
   * Envoyer l'email et récupérer les résultats
   */
  envoyer() {
    this.retour = null;

    let email = {
      "to":environment.email,
      "subject":"Vincisudoe.eu // "+this.contact.sujet,
      "text":`
      Bonjour,\n
      Un message a été transmis depuis le site vincisudoe.eu\n
      de : ${this.contact.nom} (${this.contact.mail}),\n
      Message : ${this.contact.message}
      `,
      "html":`
      <p>Bonjour,</p>
      <p>Un message a été transmis depuis le site vincisudoe.eu :</p>
      <p>de : ${this.contact.nom} (<a href='mailto:${this.contact.mail}'>${this.contact.mail}</a>),</p>
      <p>Message : </p>
      <p>${this.contact.message}</p>
      `
    }
    // Envoie de l'email
    this.mServ.envoieMail(email).subscribe(data => {
      console.log("Envoie de l'email");
      if(data){
        console.log(this.mServ.traductions['emailenvoye']);
        this.retour = this.mServ.getTraduction('emailenvoye');
      }else{
        this.retour = this.mServ.getTraduction('emailerreur');
      }

      console.log("email", data);
    }
    );
  }

}
