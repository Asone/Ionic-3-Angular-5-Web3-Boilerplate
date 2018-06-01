import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 
import { SessionModel } from '../../_Models/session.model';
import { HttpClient } from "@angular/common/http";
import { AuthAPI } from './auth.api.service';

@Injectable()
export class AuthService {
    private authState = new BehaviorSubject<boolean>(false);
    public state : boolean;
    constructor(private _authAPI:AuthAPI) {}

    private init() {}

    getAuthSta = (): Observable<boolean> => {
        return this.authState.asObservable();
    }

    setAuth = (state: boolean) => {
        this.state = state;
        this.authState.next(state);
    }
    
    resume = (session: SessionModel): Promise<boolean> => {
        return this._authAPI.resume(session).then(res => {
            if(!res.result) return false;
            return true;
        }).catch(err => { 
            return false; 
        });
    }
}