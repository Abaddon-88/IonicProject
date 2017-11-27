import { FunktionsuebersichtPage } from '../pages/funktionsuebersicht/funktionsuebersicht';
import { FunktionsuebersichtPageModule } from './../pages/funktionsuebersicht/funktionsuebersicht.module';
import { LocationPageModule } from './../pages/location/location.module';
import { KomponentenPageModule } from './../pages/komponenten/komponenten.module';
import { GitHubDetailPageModule } from '../pages/git-hub-detail/git-hub-detail.module';
import { ApiResultPageModule } from './../pages/api-result/api-result.module';
import { HomePage } from './../pages/home/home';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiResultPage } from './../pages/api-result/api-result';
import { HttpClientModule } from '@angular/common/http';

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
import { RoutePage } from '../pages/route/route';
import { RoutePageModule } from '../pages/route/route.module';
import { LocationTracker} from '../providers/location-tracker/location-tracker';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { MapService } from '../providers/map-service/map-service';
import { Page2Page } from '../pages/page2/page2';
import { Page2PageModule } from '../pages/page2/page2.module';
import { MenuComponent } from '../pages/menu/menu';
import { MenuComponentModule } from '../pages/menu/menu.module';

@NgModule({
  declarations: [
    MyApp

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    MenuComponentModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FunktionsuebersichtPage,
    ApiResultPage,
    GitHubDetailPage,
    LocationPage,
    RoutePage,
    Page2Page,
    MenuComponent
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider,
    GoogleMaps,
    InAppBrowser,
    LocationTracker,
    MapService,
    BackgroundGeolocation,


  ]
})
export class AppModule {



}

