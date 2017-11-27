import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation} from '@ionic-native/geolocation';
import { LatLng } from '@ionic-native/google-maps';

declare var google;

@IonicPage()
@Component({
    selector: 'page-location',
    templateUrl: 'location.html'
})
export class LocationPage {
    @ViewChild('map') mapRef: ElementRef;
    map;
    lat;
    lng;
    location;
    constructor(
        public navCtrl: NavController,
        private navParams: NavParams,
        private geolocation: Geolocation,
    ) {
        this.lat = navParams.get('lat');
        this.lng = navParams.get('lng');
        this.location = new LatLng(this.lat, this.lng);
    }

    ionViewWillEnter() {
        this.showMap(this.location);
    }

    showcurrentPosition() {
        let watch = this.geolocation.watchPosition();
        watch.subscribe(position => {
            const location = new LatLng(position.coords.latitude, position.coords.longitude);
            this.location = location;

            this.showMap(location);
        });
    }

    showMap(mapLocation) {
        const location = new google.maps.LatLng(mapLocation);

        const option = {
            center: location,
            zoom: 14
        };

        const map = new google.maps.Map(this.mapRef.nativeElement, option);

        this.map = map;
        this.addMarker(location, map);
    }

    addMarker(position, map) {
        var marker = new google.maps.Marker({
            position,
            map
        });

        this.addInfo(marker, map);
        return marker;
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

    setCenter() {
        this.map.setCenter(this.location);
    }
}
