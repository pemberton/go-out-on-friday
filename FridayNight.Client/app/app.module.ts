import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { EventDetailComponent } from './event/event-detail.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, EventDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
