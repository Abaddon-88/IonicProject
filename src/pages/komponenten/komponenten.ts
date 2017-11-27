import { Component } from '@angular/core';
import {
    IonicPage,
    NavController,
    NavParams,
    ActionSheetController,
    AlertController
} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-komponenten',
    templateUrl: 'komponenten.html'
})
export class KomponentenPage {
    testRadioResult: any;
    testRadioOpen: boolean;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public actionSheetCtrl: ActionSheetController,
        public alertCtrl: AlertController
    ) {}

    showActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'ActionSheet-Test',
            buttons: [
                {
                    text: 'Category-A',
                    role: 'destructive',
                    handler: () => {
                        console.log('Category-A clicked');
                    }
                },
                {
                    text: 'Category-B',
                    role: 'destructive',
                    handler: () => {
                        console.log('Category-B clicked');
                    }
                },
                {
                    text: 'Category-C',
                    role: 'destructive',
                    handler: () => {
                        console.log('Category-C clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

    showAlert() {
        let alert = this.alertCtrl.create({
            title: 'Alert-Test',
            subTitle: 'Das hier ist ein Test Alert',
            buttons: ['OK']
        });
        alert.present();
    }

    showPromptAlert() {
        let prompt = this.alertCtrl.create({
            title: 'Prompt Alert',
            message: 'This showed the Prompt Alert',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    }

    showRadioAlert() {
        let alert = this.alertCtrl.create();
        alert.setTitle('Lightsaber color');

        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Green',
            value: 'green',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red',
            checked: false
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: data => {
                this.testRadioOpen = false;
                this.testRadioResult = data;
            }
        });
        alert.present();
    }
}
