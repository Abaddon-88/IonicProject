import { ApiResultPage } from '../api-result/api-result';
import { Page1Page } from '../page1/page1';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
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
  selector: 'page-funktionsübersicht',
  templateUrl: 'funktionsübersicht.html',
})
export class FunktionsübersichtPage {



  constructor(public navCtrl: NavController, public navParams: NavParams, menu: MenuController) {
   
  }

  

  pushtoPage1(){
    this.navCtrl.push(Page1Page);
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
