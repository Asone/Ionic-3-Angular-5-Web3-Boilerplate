import { Injectable } from '@angular/core';
import { SessionModel } from '../../_Models/session.model';
import { HttpClient } from "@angular/common/http";
import { ENV } from '@app/env';


@Injectable()
export class AuthAPI {

    constructor(private http: HttpClient) {}

    resume = (session: SessionModel): Promise<any> => {
        const uri: string =  ENV.apiUrl + "/auth";
        // make http call here
        return this.http.post(uri, session).toPromise();
    }
}