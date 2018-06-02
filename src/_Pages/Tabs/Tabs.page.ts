import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({
    name: 'tabs'
})
@Component({
    templateUrl: 'Tabs.page.html',
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    public tab1Root: string = 'homepage';
    public tab2Root: string = 'articles';
    public tab3Root: string = 'about';
    public tab4Root: string = 'projects';

    constructor () {}
}
