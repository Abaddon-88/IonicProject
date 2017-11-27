import { ApiResultPage } from '../api-result/api-result';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KomponentenPage } from '../komponenten/komponenten';
import { LocationPage } from '../location/location';

@IonicPage()
@Component({
    selector: 'page-funktionsuebersicht',
    templateUrl: 'funktionsuebersicht.html'
})
export class FunktionsuebersichtPage {
    constructor(public navCtrl: NavController, public navParams: NavParams) {}

    pushtoApiPage() {
        this.navCtrl.push(ApiResultPage);
    }

    pushtoComponent() {
        this.navCtrl.push(KomponentenPage);
    }

    pushtoLocation() {
        this.navCtrl.push(LocationPage);
    }
}
