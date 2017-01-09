import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { EventCategory } from './event/event-category';
import { AppService } from './app.service';

import './rxjs-operators';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ AppService ]
})
export class AppComponent implements OnInit {
  eventCategories: EventCategory[];

  ngOnInit(): void {
        var startPeriod = new Date();
        var endPeriod = new Date(startPeriod.getFullYear(), startPeriod.getMonth() + 1, startPeriod.getDay());
        this.appService.getEvents(startPeriod, endPeriod)
            .subscribe(
                    e => { 
                           this.eventCategories = e;
                    },
                    error => console.log(error)
            );
    }

    constructor(private appService: AppService) {}
}
