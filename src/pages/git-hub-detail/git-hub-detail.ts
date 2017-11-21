import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service'

@IonicPage()
@Component({
  selector: 'page-git-hub-detail',
  templateUrl: 'git-hub-detail.html',
})
export class GitHubDetailPage {

  userDetails:any;
  userData:any;
  userName:any;
  userPic:any;
  userType:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiServiceProvider) {


  }



  getUsersDetails() {


    this.apiProvider.getUsersGitHub(this.userDetails)
    .then(data => {
      this.userData = data;
      this.userName = this.userData.login;
      this.userPic = this.userData.avatar_url;
      this.userType = this.userData.type;

    });
  }

}
