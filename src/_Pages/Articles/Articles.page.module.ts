import { ArticlesPage } from './Articles.page';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../app/shared.module';

@NgModule({
    declarations: [
      ArticlesPage
    ],
    imports: [
      IonicPageModule.forChild(ArticlesPage),
      SharedModule
    ],
    entryComponents: [
      ArticlesPage
    ]
  })
  export class ArticlesPageModule {}