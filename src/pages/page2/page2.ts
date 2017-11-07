import { Page1Page } from './../page1/page1';
import { Page3Page } from './../page3/page3';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

  pushtoPage1(){
    this.navCtrl.push(Page1Page)
      }
    
      pushtoPage3()
      {
        this.navCtrl.push(Page3Page)
      }

      pushtoHome(){
        
          this.navCtrl.popToRoot();
        }

}
