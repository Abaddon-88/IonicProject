import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider} from '../../providers/api-service/api-service';

/**
 * Generated class for the ApiResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-api-result',
  templateUrl: 'api-result.html',
})
export class ApiResultPage {

 users:any; 


  constructor(public navCtrl: NavController, public apiProvider: ApiServiceProvider) {
    this.getUsers();
    
  }

  

  getUsers() {
    this.apiProvider.getUsers()
    .then(data => {
      this.users = data['results'];
    });
  }
 


}
