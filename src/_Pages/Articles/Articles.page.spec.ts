import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform, NavController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ArticlesPage } from './Articles.page';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock,
  NavMock
} from '../../../test-config/mocks-ionic';

import { SharedModule } from '../../app/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('[Pages:Articles] Performs tests on Articles Page', () => {
    let fixture;
    let component;
  
    beforeEach( async( () => {
      TestBed.configureTestingModule({

        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [ArticlesPage],
        imports: [
          SharedModule,
          IonicModule.forRoot(ArticlesPage)
        ],
        providers: [NativePageTransitions,
          {provide: NavController, useClass : NavMock}]
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