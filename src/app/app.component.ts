import { LocationTracker } from './../providers/location-tracker/location-tracker';
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
import { Page2Page } from '../pages/page2/page2';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{title: string, component: any}>;



  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen, private tracker: LocationTracker) {
this.initializeApp();

    this.pages = [

      { title: 'Komponenten', component: KomponentenPage },
      { title: 'Api', component: ApiResultPage },
      { title: "GitHub", component: GitHubDetailPage },
      { title: "Location", component: LocationPage },
      { title: "Route", component: RoutePage },
      { title: "Page2", component: Page2Page }

    ];
    };




    initializeApp() {
      this.platform.ready().then(() => {

        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }

    openPage(page) {
      this.nav.push(page.component, {
        lat: this.tracker.lat,
        lng: this.tracker.lng
      });

    }


    start(){
      this.tracker.startTracking();
    }

    stop(){
      this.tracker.stopTracking();
    }
}

