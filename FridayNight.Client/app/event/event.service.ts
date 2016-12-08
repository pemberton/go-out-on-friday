import { Injectable } from '@angular/core';

import { Event } from './event';

@Injectable()
export class EventService {

    cityEvent: Event = {
        id: 1,
        name: 'Фестиваль тыквы',
        shortDescription: '',
        description: '',
        pathToMap: '',
        address: '',
        siteAddress: '',
        timetable: {
        startDay: new Date('2017-08-16T00:00:00'),
        endDay: new Date('2017-09-30T00:00:00'),
        startHour: 10,
        endHour: 22
        },
        imagePathes: null
    };


    getEvent(): Promise<Event> {
        return new Promise(x =>
            setTimeout(x, 2000))
            .then(() =>  this.cityEvent);
    }
}