import { TabsPage } from './Tabs.page';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
      TabsPage
    ],
    imports: [
      IonicPageModule.forChild(TabsPage)
    ],
    entryComponents: [
      TabsPage
    ]
  })
  export class TabsPageModule {}