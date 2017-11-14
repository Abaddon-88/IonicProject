import { Page3Page } from './../page3/page3';
import { Page2Page } from './../page2/page2';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationPage } from '../location/location';

/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  pushtoPage2(){
this.navCtrl.push(Page2Page)
  }

  pushtoPage3()
  {
    this.navCtrl.push(Page3Page)
  }

  pushtoHome(){
    
      this.navCtrl.popToRoot();
    }

    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      this.navCtrl.setRoot(page.component);
    }

}
