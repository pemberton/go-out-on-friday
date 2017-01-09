import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { EventCategory } from './event/event-category';

@Injectable()
export class AppService {
    
    private eventUrl = 'http://localhost:47987/api/events/22';

    constructor(private http: Http) {}

    getEvents(startPeriod: Date, endPeriod: Date): Observable<EventCategory[]> {
        return this.http.get(this.eventUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: Response | any) {
        return Observable.throw('some error occured');
    }

}