import {Injectable} from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// Model
import {Language} from "../models/language";

@Injectable()
export class JsonService {

    private _dataUrl = './assets/data';  // URL to web API

    constructor(private http: Http) {
        console.log('JsonService::constructor()');
    }

    getLanguages(): Observable<Language[]> {
        console.log('JsonService::getLanguages()');

        return this.http.get(this._dataUrl + '/languages.json')

            // ...and calling .json() on the response to return data
            //.map((response: Response) => response.json() as Language)
            .map(this.mapLanguages)
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        //console.error('JsonService::handleError');

        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error('JsonService::handleError', errMsg);
        return Observable.throw(errMsg);
    }

    private mapLanguages(res: Response) {
        console.log('JsonService::mapLanguages', res.json());
        return Language.asLanguages(res.json());
    }

}
