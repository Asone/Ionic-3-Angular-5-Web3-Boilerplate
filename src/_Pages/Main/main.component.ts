import { Component, OnInit } from '@angular/core';

import { TabsPage } from '../Tabs/Tabs.page';
import { AuthService } from '../../_Services/Auth/auth.service';
import { WelcomePage } from '../Welcome/welcome.page';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../Home/Home.page';

@Component({
    templateUrl: './main.page.html',
})
export class MainPage implements OnInit {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    public TabsPage: any = TabsPage;
    public rootPage:any = TabsPage;
    constructor(
        private _authService: AuthService,
        private _nav: NavController) { //
    }

    ngOnInit () {
        if(this._authService.state){
            this.rootPage = MainPage;
         }else{
           this.rootPage = WelcomePage;
          
         }
    }

    openPage(page) {
        let comp: any;
        switch (page) {
            case 'WelcomePage':
            comp = WelcomePage;
            break;
            case 'HomePage':
            comp = HomePage;
            break;
            default: 
            comp = MainPage;
        }
        this._nav.setRoot(comp);
    }
}
