import { Component, ViewChild } from '@angular/core';
import { Nav, IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';
import { KomponentenPage } from '../komponenten/komponenten';
import { ApiResultPage } from '../api-result/api-result';
import { GitHubDetailPage } from '../git-hub-detail/git-hub-detail';
import { LocationPage } from '../location/location';
import { RoutePage } from '../route/route';
import { Page2Page } from '../page2/page2';

@IonicPage()
@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html'
})
export class MenuComponent {
    @ViewChild('content') nav: Nav;
    rootPage: any = HomePage;

    pages: Array<{ title: string; component: any }>;

    constructor() {
        this.pages = [
            { title: 'Komponenten', component: KomponentenPage },
            { title: 'Api', component: ApiResultPage },
            { title: 'GitHub', component: GitHubDetailPage },
            { title: 'Location', component: LocationPage },
            { title: 'Route', component: RoutePage },
            { title: 'Page2', component: Page2Page }
        ];
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }
}
