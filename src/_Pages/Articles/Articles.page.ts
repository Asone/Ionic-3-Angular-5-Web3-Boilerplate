import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
    name: 'articles'
})
@Component({
    selector: 'Page[article]',
    templateUrl: 'Articles.page.html'
})
export class ArticlesPage {

    constructor (
        public _nav: NavController
    ) {}

    ngOnInit () {}

    public goto (id: number): void {
        this._nav.push('article',{
            id: id
        });
    }
}