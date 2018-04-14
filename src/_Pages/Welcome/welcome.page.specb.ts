import {} from 'jasmine';

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { WelcomePage } from "./welcome.page";
import { NavController } from 'ionic-angular';

describe("[Page:Welcome] Performs tests on Welcome Page", () => {

    let comp: WelcomePage;
    let fixture: ComponentFixture<WelcomePage>;
    let de: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [WelcomePage],
            providers: [
                {provide: NavController, useValue: NavController},
            ],
        });

        fixture = TestBed.createComponent(WelcomePage);
        // #trick
        // If you want to trigger ionViewWillEnter automatically de-comment the following line
        // fixture.componentInstance.ionViewWillEnter();
        fixture.detectChanges();
        comp = fixture.componentInstance;
        de = fixture.debugElement;
    });

    it("Should call redirection to Homepage", () => {
        spyOn(comp,"gotoHome");

        this.gotoHome();

        expect(this.gotoHome).toHaveBeenCalled();

    });
})