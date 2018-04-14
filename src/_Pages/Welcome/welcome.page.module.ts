import { WelcomePage } from './welcome.page';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
      WelcomePage
    ],
    imports: [
      IonicPageModule.forChild(WelcomePage)
    ],
    entryComponents: [
      WelcomePage
    ]
  })
  export class WelcomePageModule {}