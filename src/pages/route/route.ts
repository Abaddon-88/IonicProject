import { LocationTracker } from '../../providers/location-tracker/location-tracker';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { LatLng } from '@ionic-native/google-maps';
import { MapService } from '../../providers/map-service/map-service';

declare var google: any;

@IonicPage()
@Component({
    selector: 'page-route',
    templateUrl: 'route.html'
})
export class RoutePage {
    @ViewChild('map') mapRef: ElementRef;
    map: any;
    marker: any;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private geolocation: Geolocation,
        private tracker: LocationTracker,
        private mapService: MapService
    ) {}

    ionViewWillEnter() {
        this.map = this.mapService.showMap();
        this.mapService.addMarker(this.tracker.getLatLng(),this.map)
        this.setListener(this.tracker.getLatLng(), this.map);
    }

    setListener(location, map) {
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var directionsService = new google.maps.DirectionsService();


        this.map.addListener('click', function(e) {
            document.getElementById('time').innerHTML = '';
            directionsDisplay.setPanel(document.getElementById('time'));
             setRoute(directionsService, directionsDisplay, e.latLng, location, map);

            var onChangeHandler = function() {
                setRoute(directionsService, directionsDisplay, e.latLng, location, map);
            };

            document.getElementById('floating-panel').addEventListener('change', onChangeHandler);
        });

        function setRoute(directionsService, directionsDisplay, point1, point2, map) {
            var mode = (<HTMLInputElement>document.getElementById('select')).value;
            directionsDisplay.setMap(map);
            directionsService.route(
                {
                    origin: point1,
                    destination: point2,
                    travelMode: mode
                },
                function(response, status) {
                    if (status == 'OK') {
                        directionsDisplay.setDirections(response);
                    } else {
                        console.log('Directions request failed due to ' + status);
                    }
                }
            );
        }
    }
}
