import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular/platform/platform';
import {
    GoogleMaps,
    GoogleMap,
    GoogleMapsEvent,
    GoogleMapOptions,
    CameraPosition,
    MarkerOptions,
    Marker,
    HtmlInfoWindow,
    LatLng
} from '@ionic-native/google-maps';

declare var google: any;

var origin1 = new google.maps.LatLng(55.930385, -3.118425);
var origin2 = 'Greenwich, England';
var destinationA = 'Stockholm, Sweden';
var destinationB = new google.maps.LatLng(50.087692, 14.42115);

@IonicPage()
@Component({
    selector: 'page-route',
    templateUrl: 'route.html'
})
export class RoutePage {
    @ViewChild('map') mapRef: ElementRef;
    map;
    location;
    lat;
    lng;
    point1;
    point2;
    route;
    mode;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private geolocation: Geolocation,
        private platform: Platform,
        private toastCtrl: ToastController
    ) {
        this.lat = navParams.get('lat');
        this.lng = navParams.get('lng');
        this.location = new LatLng(this.lat, this.lng);
        this.point1 = location;

        //  this.setMarkerOnClick();
        //   this.setRoute();
    }

    public items: LatLng[] = [];

    ionViewDidLoad() {
        //  this.showcurrentPosition();
    }

    ngAfterViewInit() {
        //this.calculateAndDisplayRoute();
        this.showMap(this.location);
    }

    showcurrentPosition(): LatLng {
        let watch = this.geolocation.watchPosition();
        watch.subscribe(position => {
            const location = new LatLng(position.coords.latitude, position.coords.longitude);
            this.location = location;


            // this.showMap(location);
        });
        return this.location;
    }

    showMap(mapLocation) {

        const option = {
            center: mapLocation,
            zoom: 14
        };

        const map = new google.maps.Map(this.mapRef.nativeElement, option);


        this.addMarker(mapLocation, map);

        map.addListener('click', function(e) {
            placeMarker(mapLocation, e.latLng, this.getMode, map);
        });

        //this.calculateAndDisplayRoute(this.point1,this.point2);

        function placeMarker(point1, point2, mode, map) {
            var marker2 = new google.maps.Marker({
                position: point2,
                map: map
            });

            setRoute(point1, point2, mode, map);
        }

        function setRoute(point1, point2, mode, map) {
            var directionsDisplay = new google.maps.DirectionsRenderer();
            var directionsService = new google.maps.DirectionsService();
            var selectedMode = mode;

            directionsDisplay.setMap(map);

            directionsService.route(
                {
                    origin: point1,
                    destination: point2,
                    travelMode: selectedMode
                },
                function(response, status) {
                    if (status == 'OK') {
                        directionsDisplay.setDirections(response);
                    } else {
                        window.alert('Directions request failed due to ' + status);
                    }
                }
            );



            directionsDisplay.setPanel(document.getElementById('time'));
        }
    }

    addMarker(position, map) {
        var marker = new google.maps.Marker({
            position,
            map
        });

        this.addInfo(marker, map);
    }

    addInfo(marker, map) {
        var input1: string = marker.position;
        var marker1 = input1 + '';
        var coordInfoWindow = new google.maps.InfoWindow({
            content: marker1
        });

        marker.addListener('click', () => {
            coordInfoWindow.open(map, marker);
        });
    }

    onModeChange(SelectedValue) {
        this.mode = SelectedValue;
    }






}
