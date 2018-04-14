import { Component } from '@angular/core';
import { IonicPage, NavController, Config } from 'ionic-angular';

import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage({
    name: 'articles'
})
@Component({
    selector: 'Page[article]',
    templateUrl: 'Articles.page.html'
})
export class ArticlesPage {

    constructor (
        public _nav: NavController,
        private config: Config
    ) {}

    ngOnInit () {}

    public goto (id: number): void {
        this._nav.push('article',{
            id: id
        });
    }
}