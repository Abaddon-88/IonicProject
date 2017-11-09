import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service'

/**
 * Generated class for the GitHubDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-git-hub-detail',
  templateUrl: 'git-hub-detail.html',
})
export class GitHubDetailPage {

  userDetails:any; 
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiServiceProvider) {
    this.getUsersDetails(this.navParams.get('userP'));

  }

  

  getUsersDetails(user) {


    this.apiProvider.getUsers(user)
    .then(data => {
      console.log(data);
      this.userDetails = data;
    });
  }

}
