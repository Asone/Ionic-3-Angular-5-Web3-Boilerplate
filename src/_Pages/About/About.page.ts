import { Component } from '@angular/core';

import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  name: 'about'
})
@Component({
  selector: 'page-about',
  templateUrl: 'About.page.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

}