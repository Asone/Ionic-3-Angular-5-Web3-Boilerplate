
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HomePage } from './Home.page';

describe('[Page:Home] Performs tests on Home page :', () => {
    let comp: HomePage;
    let fixture: ComponentFixture<HomePage>;
    let de: DebugElement;


    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [HomePage],
            providers: [
                {provide: NavController, useValue: NavController},
            ],
        });
        
        fixture = TestBed.createComponent(HomePage);
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
