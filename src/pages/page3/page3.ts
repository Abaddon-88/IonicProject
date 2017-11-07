import { Page1Page } from './../page1/page1';

import { Page2Page } from './../page2/page2';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Page3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushtoPage1(){
    this.navCtrl.push(Page1Page)
      }
    
      pushtoPage2()
      {
        this.navCtrl.push(Page2Page)
      }

      pushtoHome(){
        
          this.navCtrl.popToRoot();
        }
}
