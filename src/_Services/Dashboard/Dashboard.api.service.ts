import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardAPI {
    constructor (
        private http: HttpClient
    ) {}

}