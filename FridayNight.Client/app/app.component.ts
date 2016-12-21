import { Component } from '@angular/core';

import { Event } from './event/event';

import './rxjs-operators';

@Component({
  selector: 'my-app',
  template: `<event-detail></event-detail>`,
})
export class AppComponent  {
  name = 'GoOutOnFriday';
}
