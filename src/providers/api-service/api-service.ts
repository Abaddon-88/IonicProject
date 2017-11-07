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
apiUrl1 = 'https://jsonplaceholder.typicode.com/users'

  constructor(public http: HttpClient) {
    console.log('Hello ApiServiceProvider Provider');
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

 

}
