import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 
import { SessionModel } from '../../_Models/session.model';
import { HttpClient } from "@angular/common/http";
import { ENV } from '@app/env';


@Injectable()
export class AuthAPI {
    constructor(private http: HttpClient) {}

    resume = (session: SessionModel): Promise<any> => {
        const uri: string = "http://www.google.fr";
        // make http call here
        return this.http.post(uri, session).toPromise();
    }
}