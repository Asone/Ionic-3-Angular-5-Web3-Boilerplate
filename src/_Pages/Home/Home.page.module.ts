import { HomePage } from './Home.page';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../app/shared.module';

@NgModule({
    declarations: [
      HomePage
    ],
    imports: [
      SharedModule,
      IonicPageModule.forChild(HomePage)
    ],
    entryComponents: [
      HomePage
    ]
  })
  export class HomePageModule {}