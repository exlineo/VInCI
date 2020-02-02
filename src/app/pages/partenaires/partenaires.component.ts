import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MenusService } from 'src/app/utils/services/menus.service';

// Variable pour OpenStreetMap
declare var ol: any;

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {
  latitude: number = 42.741;
  longitude: number = -0.967;

  map: any;

  constructor(public mServ:MenusService) { }

  ngOnInit() {
  }

  ngOnAfterInit(){
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.latitude, this.longitude]),
        zoom: 8
      })
    });
  }

}
