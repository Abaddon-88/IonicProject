import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { GitHubDetailPage } from '../git-hub-detail/git-hub-detail';

@IonicPage()
@Component({
    selector: 'page-api-result',
    templateUrl: 'api-result.html'
})
export class ApiResultPage {
    users: any;

    constructor(public navCtrl: NavController, public apiProvider: ApiServiceProvider) {
        this.getUsers();
    }

    getUsers() {
        this.apiProvider.getUsersProfiles('').then(data => {
            this.users = data;
        });
    }

    UserDetails(user) {
        this.navCtrl.push(GitHubDetailPage, { userP: user.login });
    }
}
