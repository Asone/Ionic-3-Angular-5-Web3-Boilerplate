import { Component } from '@angular/core';

import { IonicPage, NavController } from 'ionic-angular';
@IonicPage({
  name: 'about',
  segment: '/about'
})
@Component({
  selector: 'Page[about]',
  templateUrl: 'About.page.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}
