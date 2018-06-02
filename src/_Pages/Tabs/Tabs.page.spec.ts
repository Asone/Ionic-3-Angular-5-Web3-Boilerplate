import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from './Tabs.page';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';
describe('[Pages:Tabs] Performs tests on Tabs Page', () => {
    let fixture;
    let component;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [TabsPage],
        imports: [
          IonicModule.forRoot(TabsPage)
        ],
        providers: []
      })
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(TabsPage);
      component = fixture.componentInstance;
    });
  
    it('Component should exist', () => {
      expect(component instanceof TabsPage).toBe(true);
    });
  

  });