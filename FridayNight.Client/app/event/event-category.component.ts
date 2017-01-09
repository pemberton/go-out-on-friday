import { Component, Input } from '@angular/core';

import { EventCategory } from './event-category';

@Component({
    selector: 'event-category',
    templateUrl: 'event-category.html',
}
)

export class EventCategoryComponent {
    @Input()
    eventCategory: EventCategory;
}
