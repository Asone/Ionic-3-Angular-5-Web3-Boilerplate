import { AboutPage } from './About.page';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../app/shared.module';

@NgModule({
    declarations: [
      AboutPage
    ],
    imports: [
      IonicPageModule.forChild(AboutPage),
      SharedModule
    ],
    entryComponents: [
      AboutPage
    ]
  })
  export class AboutPageModule {}