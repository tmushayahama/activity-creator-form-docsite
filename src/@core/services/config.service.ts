import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SaeConfigService {
    settings: any;
    categories: any = {};

    /**
     * @param platform
     */
    constructor(
        public platform: Platform,
        private http: HttpClient) {
    }



}
