
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MainPage } from './main.page';

describe('[Page:Home] Performs tests on Main page :', () => {
    let comp: MainPage;
    let fixture: ComponentFixture<MainPage>;
    let de: DebugElement;


    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [MainPage],
            providers: [
                {provide: NavController, useValue: NavController},
            ],
        });
        
        fixture = TestBed.createComponent(MainPage);
        // #trick
        // If you want to trigger ionViewWillEnter automatically de-comment the following line
        // fixture.componentInstance.ionViewWillEnter();
        fixture.detectChanges();
        comp = fixture.componentInstance;
        de = fixture.debugElement;
    });

    describe('.constructor()', () => {
        it('Should be defined', () => {
            expect(comp).toBeDefined();
        });
    });

});
