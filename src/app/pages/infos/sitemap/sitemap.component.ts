import { Component, OnInit } from '@angular/core';
import { ToolsService } from 'src/app/utils/tools.service';
import { MenusService } from 'src/app/utils/services/menus.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.component.html',
  styleUrls: ['./sitemap.component.css']
})
export class SitemapComponent implements OnInit {

  constructor(private contenu:MenusService) { }

  ngOnInit() {
  }

}
