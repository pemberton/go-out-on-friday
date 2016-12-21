import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { Event } from './event';
import { EventService } from './event.service';

@Component({
    selector: 'event-detail',
    template: `
        <div class="group">
            <div class="left">
                <div class="photos">
                    <img src="images/pumpkin1.jpg" alt="pumpkin">
                    <img src="images/pumpkin2.jpg" alt="pumpkin">
                    <img src="images/pumpkin3.jpg" alt="pumpkin">
                    <img src="images/pumpkin4.jpg" alt="pumpkin">
                    <img src="images/pumpkin5.jpg" alt="pumpkin">
                    <img src="images/pumpkin-big.jpg">
                </div>
            </div>
            <div class="right">			
                <h1 class="category-title">{{event.name}}</h1>				
                <h2 class="subtitle">{{event.shortDescription}}</h2>			
                <div>
                    <p>{{event.description}}</p>
                </div>
                <div class="group">
                    <div class="map">
                        <h3 class="category-title">Куда идти</h3>
                        <img src="{{event.pathToMap}}" alt="event map">
                    </div>
                    <div class="table">
                        <h3 class="category-title">Когда идти</h3>
                        <p>1 августа - 30 сентября</p>
                        <p>С 10.00 до 20.00</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    providers: [ EventService ]
}
)

export class EventDetailComponent implements OnInit {    
    event: Event;
    errorMessage: String;

    ngOnInit(): void {
        this.eventService.getEvent(17)
            .subscribe(
                    e => this.event = e,
                    error => this.errorMessage = error);
    }

    constructor(private eventService: EventService) { }
}