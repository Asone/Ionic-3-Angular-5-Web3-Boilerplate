import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LedgerAPI {
    constructor (
        private http: HttpClient
    ) {}

}