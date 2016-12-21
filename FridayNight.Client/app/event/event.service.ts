import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { Event } from './event';

@Injectable()
export class EventService {

    private eventUrl = 'localhost:47987/api/events/17';

    constructor(private http: Http) {}

    getEvent(id: number): Observable<Event> {
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