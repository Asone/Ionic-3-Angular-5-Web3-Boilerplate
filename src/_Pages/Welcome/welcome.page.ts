import { Component } from '@angular/core';
import filter from 'lodash-es/filter';
import { IonicPage, NavController } from 'ionic-angular';
import { MainPage } from '../Main/main.component';
import { TabsPage } from '../Tabs/Tabs.page';

@IonicPage({
    name: 'welcome'
})
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.page.html',
})
export class WelcomePage {
    public user: any;

    constructor(private _nav: NavController) {
    }
    
    gotoHome () {
        this._nav.setRoot('tabs');
     }
}
