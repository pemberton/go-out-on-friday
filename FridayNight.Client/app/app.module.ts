import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { EventDetailComponent } from './event/event-detail.component';
import { EventCategoryComponent } from './event/event-category.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, EventDetailComponent, EventCategoryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
