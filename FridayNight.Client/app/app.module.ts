import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import { EventDetailComponent } from './event/event-detail.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, EventDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
