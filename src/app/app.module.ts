import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

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
import { MarkPipe, LangPipe } from './utils/mark.pipe';
import { PairePipe } from './utils/paire.pipe';
import { PlusComponent } from './pages/infos/plus/plus.component';

import { environment } from '../environments/environment';
import { ParticlesModule } from 'angular-particle';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ReversePipe } from './utils/reverse.pipe';

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
    LangPipe,
    PairePipe,
    PlusComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.map.api,
      libraries: ["places"]
      /* apiKey is required, unless you are a premium customer, in which case you can use clientId */
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    // ,
    // ParticlesModule
  ],
  providers: [MenusService, ToolsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
