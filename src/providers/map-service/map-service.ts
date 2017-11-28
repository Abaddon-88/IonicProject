import { Map } from 'rxjs/util/Map';
import { Injectable } from '@angular/core';
import { LocationTracker } from '../location-tracker/location-tracker';

declare var google;

@Injectable()
export class MapService {
    constructor(public locationTracker: LocationTracker) {}

    showMap(): any {
        const location = this.locationTracker.getLatLng();
        const option = {
            center: location,
            zoom: 14
        };

        const map = new google.maps.Map(document.getElementById('map'), option);
        this.addMarker(location, map);
        return map;
    }

    addMarker(position, map) {
        var marker = new google.maps.Marker({
            position,
            map
        });

        //this.addInfo(marker, map);
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
}
