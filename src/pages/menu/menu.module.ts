import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuComponent } from './menu';
import { HomePageModule } from '../home/home.module';
import { FunktionsuebersichtPageModule } from '../funktionsuebersicht/funktionsuebersicht.module';
import { ApiResultPageModule } from '../api-result/api-result.module';
import { GitHubDetailPageModule } from '../git-hub-detail/git-hub-detail.module';
import { KomponentenPageModule } from '../komponenten/komponenten.module';
import { LocationPageModule } from '../location/location.module';
import { RoutePageModule } from '../route/route.module';
import { Page2PageModule } from '../page2/page2.module';

@NgModule({
    declarations: [MenuComponent],
    imports: [
        IonicPageModule.forChild(MenuComponent),
        HomePageModule,
        FunktionsuebersichtPageModule,
        ApiResultPageModule,
        GitHubDetailPageModule,
        KomponentenPageModule,
        LocationPageModule,
        RoutePageModule,
        Page2PageModule
    ]
})
export class MenuComponentModule {}
