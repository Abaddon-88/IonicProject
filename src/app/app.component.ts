import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { LocationTracker } from './../providers/location-tracker/location-tracker';
import { MenuComponent } from '../pages/menu/menu';

@Component({
    template: '<ion-nav #baseNav></ion-nav>'
})
export class MyApp {
    @ViewChild('baseNav') nav: Nav;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        private tracker: LocationTracker
    ) {
        this.initializeApp();
    }

    ngOnInit() {
        const componentStack: Array<{ page: any }> = [
            {
                page: MenuComponent
            }
        ];

        this.nav.insertPages(0, componentStack, { animate: false });
    }

    openPage(page) {
        this.nav.push(page.component, {
            lat: this.tracker.lat,
            lng: this.tracker.lng
        });
    }

    start() {
        this.tracker.startTracking();
    }

    stop() {
        this.tracker.stopTracking();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
