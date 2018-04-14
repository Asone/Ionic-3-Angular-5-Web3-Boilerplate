import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ArticlesPage } from './Articles.page';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from '../../../test-config/mocks-ionic';

import { SharedModule } from '../../app/shared.module';

describe('[Pages:Articles] Performs tests on Articles Page', () => {
    let fixture;
    let component;
  
    beforeEach( async( () => {
      TestBed.configureTestingModule({
        declarations: [ArticlesPage],
        imports: [
          SharedModule,
          IonicModule.forRoot(ArticlesPage)
        ],
        providers: [NativePageTransitions]
      })
    }));
  
    beforeEach( () => {
      fixture = TestBed.createComponent(ArticlesPage);
      component = fixture.componentInstance;
    });
  
    it('Component should exist', () => {
      expect(component instanceof ArticlesPage).toBe(true);
    });
  });