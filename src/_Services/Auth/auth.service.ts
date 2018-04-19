import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 

import { AuthAPI } from './auth.api.service';

import { SessionModel } from '../../_Models/session.model';

@Injectable()
export class AuthService {
    private authState = new BehaviorSubject<boolean>(false);
    public state : boolean;
    constructor(private _authAPI:AuthAPI) {}

    getAuthState = (): Observable<boolean> => {
        return this.authState.asObservable();
    }

    setAuthState = (state: boolean) => {
        this.state = state;
        this.authState.next(state);
    }
    
    /**
     * @param session : SessionModel : Data model for session resuming
     * 
     * @returns Promise<boolean> : Session has been resumed
     */

    resume = (session: SessionModel): Promise<boolean> => {
        return this._authAPI.resume(session).then(res => {
            if(!res.result) return false;
            return true;
        }).catch(err => { 
            return false; 
        });
    }
}