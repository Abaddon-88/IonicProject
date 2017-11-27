import { InAppBrowser } from '@ionic-native/in-app-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { LocationTracker } from '../providers/location-tracker/location-tracker';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { MapService } from '../providers/map-service/map-service';
import { MenuComponent } from '../pages/menu/menu';
import { MenuComponentModule } from '../pages/menu/menu.module';

@NgModule({
    declarations: [MyApp],
    imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp), MenuComponentModule],
    bootstrap: [IonicApp],
    entryComponents: [MyApp, MenuComponent],
    providers: [
        StatusBar,
        Geolocation,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        ApiServiceProvider,
        GoogleMaps,
        InAppBrowser,
        LocationTracker,
        MapService,
        BackgroundGeolocation
    ]
})
export class AppModule {}
