import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

import { MenusPipe } from './utils/menus.pipe';
import { MediaPipe } from './utils/media.pipe';
import { MarkPipe } from './utils/mark.pipe';
import { PairePipe } from './utils/paire.pipe';
import { PlusComponent } from './pages/infos/plus/plus.component';

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
    SitemapComponent,
    MenusPipe,
    MediaPipe,
    MarkPipe,
    PairePipe,
    PlusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MenusService, ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
