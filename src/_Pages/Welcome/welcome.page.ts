import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

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
