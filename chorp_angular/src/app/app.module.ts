import { HttpModule } from '@angular/http';
import {NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {DragulaModule} from 'ng2-dragula/ng2-dragula';

import './rxjs-extensions';

import {AppComponent} from './app.component';
import {routableComponents, AppRoutingModule} from './app-routing.module';
import {NavComponent} from './nav/nav.component';
import {StatusPipe} from './tasks/types/status/status.pipe';
import {StatusLabelComponent} from './status-label/status-label.component';
import {FilterByStatusPipe} from './tasks/types/status/filter-by-status.pipe';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    NavComponent,
    StatusPipe,
    StatusLabelComponent,
    FilterByStatusPipe,
    TasksListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
