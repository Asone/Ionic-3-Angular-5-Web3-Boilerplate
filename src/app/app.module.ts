
/** Ionic Core **/
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

/** Ionic Modules **/
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Network } from '@ionic-native/network';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { IonicStorageModule, Storage } from '@ionic/storage';

/** Angular Core **/
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/** Custom Components **/
import { MyApp } from './app.component';
import { MainPage } from '../_Pages/Main/main.component';
import { WelcomePage } from '../_Pages/Welcome/welcome.page';

/** Custom Services **/
import { SessionService } from '../_Services/Session';
import { AuthService } from '../_Services/Auth/auth.service';
import { AuthAPI } from '../_Services/Auth/auth.api.service';

/** Pages Modules **/
import { ArticlesPageModule } from '../_Pages/Articles/Articles.page.module';
import { WelcomePageModule } from '../_Pages/Welcome/welcome.page.module';
import { TabsPageModule } from '../_Pages/Tabs/Tabs.page.module';
import { SharedModule } from './shared.module';

/** Custom Models **/
import { SessionModel } from '../_Models/session.model';
import { AboutPageModule } from '../_Pages/About/About.page.module';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    MyApp,
    MainPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot({
      name: '__appBoilerplate',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
  }),
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      platforms: {
        ios: {
          tabsHideOnSubPages: 'true' // turn to false to keep tabs when going in subpages
        },
        android: {
          tabsHideOnSubPages: 'true'
        }
      }
    }),
    SharedModule,
    WelcomePageModule,
    TabsPageModule,
    ArticlesPageModule,
    AboutPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Network,
    NativePageTransitions,
    SessionService,
    AuthService,
    AuthAPI
  ],
  exports: []
})
export class AppModule {
  private heartBeat: any;
  private network : boolean;

  constructor(
    private storage: Storage,
    private _sessionService: SessionService,
    private _authAPI: AuthAPI,
    private _authService: AuthService
  ) { 
     this.init();
     this._sessionService.heartbeat().subscribe( res => {
        this.heartBeat = res;
    });
  }

  /**
   * Init session
   * 
   * @returns Promise<boolean> : Initialization succeed
   * 
   */

   init = (): Promise<boolean> => {
    return this.storage.get('session')
    .then( (res: string): SessionModel  => JSON.parse(res))
    .then( (res: SessionModel): SessionModel => {
      if(!res) return;
      if(this.heartBeat) this._authAPI.resume(res);
      else return;
    })
    .then( (res: SessionModel) => {
      if(!res) return;
      this._authService.setAuth(true);
      this._sessionService.load(res);
      return true;
    }).catch( err => {
      return false;
    });
  }
 
}