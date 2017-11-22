
import { ApiResultPage } from '../api-result/api-result';
import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, LoadingController, Nav, NavController, NavParams } from 'ionic-angular';
import { KomponentenPage } from '../komponenten/komponenten';
import { LocationPage } from '../location/location';
import { App, MenuController } from 'ionic-angular';


/**
 * Generated class for the FunktionsübersichtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-funktionsuebersicht',
  templateUrl: 'funktionsuebersicht.html',
})
export class FunktionsuebersichtPage {



  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }





  pushtoApiPage(){
    this.navCtrl.push(ApiResultPage);
  }

  pushtoComponent(){
    this.navCtrl.push(KomponentenPage);
  }

  pushtoLocation(){
    this.navCtrl.push(LocationPage);
  }



}
