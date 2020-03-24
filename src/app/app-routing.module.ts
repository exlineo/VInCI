import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ProjetComponent } from './pages/projet/projet.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { PartenairesComponent } from './pages/partenaires/partenaires.component';
import { PublicationsComponent } from './pages/publications/publications.component';
import { NewsComponent } from './pages/news/news.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Erreur404Component } from './pages/erreur404/erreur404.component';
import { SitemapComponent } from './pages/infos/sitemap/sitemap.component';
import { RgpdComponent } from './pages/infos/rgpd/rgpd.component';
import { MentionsComponent } from './pages/infos/mentions/mentions.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';

const routes: Routes = [
  {path:'', component:AccueilComponent},
  {path:'projets', component:ProjetComponent},
  {path:'actions', component:ActionsComponent},
  {path:'partenaires', component:PartenairesComponent},
  {path:'publications', component:PublicationsComponent},
  {path:'actualites', component:NewsComponent},
  {path:'contacts', component:ContactComponent},
  {path:'sitemaps', component:SitemapComponent},
  {path:'rgpd', component:RgpdComponent},
  {path:'mentions', component:MentionsComponent},
  {path:'connexion', component:ConnexionComponent},
  { path: '**', component:Erreur404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
