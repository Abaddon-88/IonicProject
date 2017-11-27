import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MapService } from '../../providers/map-service/map-service';

@IonicPage()
@Component({
    selector: 'page-page2',
    templateUrl: 'page2.html'
})
export class Page2Page {
    constructor(private map: MapService) {}

    ionViewDidEnter() {
        this.map.showMap();

        setInterval(() => {
            this.map.showMap();
        }, 5000);
    }
}
