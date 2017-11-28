import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MapService } from '../../providers/map-service/map-service';

@IonicPage()
@Component({
    selector: 'page-page2',
    templateUrl: 'page2.html'
})
export class Page2Page {
    constructor(private mapService: MapService) {}

    ionViewDidEnter() {
        this.mapService.showMap()

        setInterval(() => {
          this.mapService.showMap()
        }, 5000);
    }
}
