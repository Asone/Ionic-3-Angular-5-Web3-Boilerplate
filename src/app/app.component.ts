/** Angular Core **/
import { Component, OnInit, ViewChild } from '@angular/core';

/** Ionic Core **/
import { Platform, MenuController, NavController } from 'ionic-angular';

/** Ionic Modules **/
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/** Custom Components **/
import { MainPage } from "../_Pages/Main/main.component";

/** Custom Services **/
import { SessionService } from "../_Services/Session/session.service";
import { AuthService } from '../_Services/Auth/auth.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp{
  rootPage:any = MainPage;

  @ViewChild('content') content: NavController;

  constructor(
    platform: Platform, 
    statusBar: StatusBar,
    menuController: MenuController, 
    splashScreen: SplashScreen,
    _sessionService: SessionService,
    _authService: AuthService
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

