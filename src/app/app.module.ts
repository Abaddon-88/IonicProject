import { ApiResultPage } from './../pages/api-result/api-result';
import { HttpClientModule } from '@angular/common/http';
import { Page3Page } from './../pages/page3/page3';
import { Page2Page } from './../pages/page2/page2';
import { Page1Page } from './../pages/page1/page1';

import { FunktionsübersichtPage } from '../pages/funktionsübersicht/funktionsübersicht';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { KomponentenPage } from '../pages/komponenten/komponenten';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FunktionsübersichtPage,
    Page1Page,
    Page2Page,
    Page3Page,
    ApiResultPage,
    KomponentenPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FunktionsübersichtPage,
    Page1Page,
    Page2Page,
    Page3Page,
    ApiResultPage,
    KomponentenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider
  ]
})
export class AppModule {



}

