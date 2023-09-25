import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map! : L.Map;

  constructor() {}

  ionViewDidEnter(){
    this.map = L.map('mapId').setView([51.505, -0.09], 10)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
      attribution: '&copy; <a href = "https://www.openstreetmap.org/copyright" >OpenStreetMap</a> contributors'
    }).addTo(this.map); 

    const markerIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25,41],
      iconAnchor: [12,41],
    });

    const marker = L.marker([51.505, -0.09], {icon: markerIcon}).addTo(this.map)
    .bindPopup('This Is My Info Window.')
    .openPopup();
  }
 
}
