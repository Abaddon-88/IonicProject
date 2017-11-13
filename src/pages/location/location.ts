import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Platform } from 'ionic-angular/platform/platform';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  LatLng
 } from '@ionic-native/google-maps';
 
/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  @ViewChild('map') mapElement;
  map: any;
  x: number = 0;
  y: number = 0;

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private platform: Platform) {
    this.loadMap();
  }

  ionViewDidLoad(){
  
  }

 



loadMap() {

 
  let watch = this.geolocation.watchPosition();
  watch.subscribe((position) => {
    this.x = position.coords.longitude;
    console.log(this.x, position.coords.latitude);
    this.y = position.coords.latitude;
  

  console.log(this.x, this.y);
  let latLng = new google.maps.LatLng(this.x, this.y);
console.log(latLng + " hier");
        

  let mapOptions1 = {
   
    center: latLng,
    zoom: 15,
    maxTypeId: google.maps.MapTypeId.ROADMAP
   
  };
   console.log(latLng + " hier1");

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions1);
     // this.map = GoogleMaps.create('map_canvas', mapOptions);
  
      // Wait the MAP_READY before using any methods.
      var marker = new google.maps.Marker({
        position: latLng,
        map: this.map,
        title: 'Hallo World!'
      });
    });
       
}}
  
