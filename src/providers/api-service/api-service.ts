import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {
    apiUrl = 'https://randomuser.me/api/?results=20';
    apiUrl1 = 'https://jsonplaceholder.typicode.com/users';
    apiUrl2 = 'https://api.github.com/users';

    constructor(public http: HttpClient) {}

    checkInput(input: String) {
        if (input != '') return (input = '/' + input);
    }

    getUsersProfiles(input: String) {
        if (input != '') input = '/' + input;

        return new Promise(resolve => {
            this.http.get(this.apiUrl + input).subscribe(
                data => {
                    resolve(data['results']);
                },
                err => {
                    console.log(err);
                }
            );
        });
    }

    getUsersGitHub(input: String) {
        if (input != '') input = '/' + input;

        return new Promise(resolve => {
            this.http.get(this.apiUrl2 + input).subscribe(
                data => {
                    resolve(data);
                },
                err => {
                    console.log(err);
                }
            );
        });
    }
}
