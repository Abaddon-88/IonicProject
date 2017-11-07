import { FunktionsübersichtPage } from '../funktionsübersicht/funktionsübersicht';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController) {}


ionViewDidEnter()
{
  //Loading Pages simulate
  setTimeout(() => {
    this.navCtrl.push(FunktionsübersichtPage)},0);
  


}


}
