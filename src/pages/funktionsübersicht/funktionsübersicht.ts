import { ApiResultPage } from '../api-result/api-result';
import { Page1Page } from '../page1/page1';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KomponentenPage } from '../komponenten/komponenten';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

}
