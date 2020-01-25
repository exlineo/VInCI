import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './structure/menu/menu.component';
import { PiedComponent } from './structure/pied/pied.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { PartenairesComponent } from './pages/partenaires/partenaires.component';
import { ProjetComponent } from './pages/projet/projet.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { NewsComponent } from './pages/news/news.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Erreur404Component } from './pages/erreur404/erreur404.component';
import { MenusService } from './utils/services/menus.service';
import { MentionsComponent } from './pages/infos/mentions/mentions.component';
import { RgpdComponent } from './pages/infos/rgpd/rgpd.component';
import { SitemapComponent } from './pages/infos/sitemap/sitemap.component';
import { ToolsService } from './utils/tools.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PiedComponent,
    AccueilComponent,
    ConnexionComponent,
    PartenairesComponent,
    ProjetComponent,
    ActionsComponent,
    NewsComponent,
    PublicationsComponent,
    ContactComponent,
    Erreur404Component,
    MentionsComponent,
    RgpdComponent,
    SitemapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MenusService, ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
