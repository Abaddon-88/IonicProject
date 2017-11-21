import { FunktionsuebersichtPage } from '../pages/funktionsuebersicht/funktionsuebersicht';
import { FunktionsuebersichtPageModule } from './../pages/funktionsuebersicht/funktionsuebersicht.module';
import { LocationPageModule } from './../pages/location/location.module';
import { KomponentenPageModule } from './../pages/komponenten/komponenten.module';
import { GitHubDetailPageModule } from '../pages/git-hub-detail/git-hub-detail.module';
import { ApiResultPageModule } from './../pages/api-result/api-result.module';
import { Page3PageModule } from './../pages/page3/page3.module';
import { Page2PageModule } from '../pages/page2/page2.module';
import { Page1PageModule } from './../pages/page1/page1.module';
import { HomePage } from './../pages/home/home';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiResultPage } from './../pages/api-result/api-result';
import { HttpClientModule } from '@angular/common/http';
import { Page3Page } from './../pages/page3/page3';
import { Page2Page } from './../pages/page2/page2';
import { Page1Page } from './../pages/page1/page1';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { KomponentenPage } from '../pages/komponenten/komponenten';
import { GitHubDetailPage } from '../pages/git-hub-detail/git-hub-detail';
import { LocationPage } from '../pages/location/location';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';


@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HomePageModule,
    FunktionsuebersichtPageModule,
    Page1PageModule,
    Page2PageModule,
    Page3PageModule,
    ApiResultPageModule,
    GitHubDetailPageModule,
    LocationPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page1Page,
    Page2Page,
    Page3Page,
    FunktionsuebersichtPage,
    ApiResultPage,
    GitHubDetailPage,
    LocationPage
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider,
    GoogleMaps,
    InAppBrowser
  ]
})
export class AppModule {



}

