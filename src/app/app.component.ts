import { GitHubDetailPage } from './../pages/git-hub-detail/git-hub-detail';
import { FunktionsuebersichtPage } from '../pages/funktionsuebersicht/funktionsuebersicht';


import { ApiResultPage } from './../pages/api-result/api-result';
import { KomponentenPage } from './../pages/komponenten/komponenten';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LocationPage } from '../pages/location/location';
import { RoutePage } from '../pages/route/route';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;



  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen) {
this.initializeApp();

    this.pages = [

      { title: 'Komponenten', component: KomponentenPage },
      { title: 'Api', component: ApiResultPage },
      { title: "GitHub", component: GitHubDetailPage},
      { title: "Location", component: LocationPage},
      { title: "Route", component: RoutePage}

    ];
    };




    initializeApp() {
      this.platform.ready().then(() => {

        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }

    openPage(page) {
    console.log(page);
      this.nav.push(page.component);

    }

}

