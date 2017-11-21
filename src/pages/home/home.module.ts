import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { KomponentenPageModule } from '../komponenten/komponenten.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  exports:[
    KomponentenPageModule
  ]
})
export class HomePageModule {}
