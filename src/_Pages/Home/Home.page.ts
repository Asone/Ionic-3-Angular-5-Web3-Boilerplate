import { Component } from '@angular/core';
import filter from 'lodash-es/filter';
import { IonicPage } from 'ionic-angular';
import { UserModel } from '../../_Models/user.model';

@IonicPage({
    name: 'homepage'
})
@Component({
    selector: 'page-home',
    templateUrl: 'Home.page.html',
})
export class HomePage {
    public user: UserModel;
    
    constructor() {}

    ngOnInit () {}
    
}
