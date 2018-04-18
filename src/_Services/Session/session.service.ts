import { Network } from '@ionic-native/network';
import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { SessionModel } from '../../_Models/session.model';

@Injectable()
export class SessionService {
    private networkState = new Subject<any>();
    private session: Subject<SessionModel>;

    constructor(private network: Network) {
        this.init();
    }

    private init = ():boolean => {
        // disabled as network provides change detection
        //   setInterval(() => { return this.pulse(); },2500);
        
        this.network.onConnect = (): any => { this.partum(); };
        this.network.onchange = (): any => { this.mortem(); };
        return true;
    }

    partum = () => {
        this.networkState.next(true);
    };

    mortem = () => {
        this.networkState.next(false);
      };

    heartbeat = (): Observable<any> => {
        return this.networkState.asObservable();
    }
    
    pulse = (): void => {
        // process here the heartbeat state based on network state
    }

    load = (data: SessionModel): boolean => {
        if(data) this.session.next(data);
        return false;
    }

    public getSession = (): Observable<SessionModel> => {
        return this.session.asObservable();
    }
}