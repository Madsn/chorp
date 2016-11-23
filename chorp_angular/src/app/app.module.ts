import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {routableComponents, AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {NavComponent} from "./nav/nav.component";
import {StatusPipe} from "./tasks/types/status/status.pipe";
import {APP_BASE_HREF} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {StatusLabelComponent} from './status-label/status-label.component';
import {DragulaModule} from "ng2-dragula/ng2-dragula";
import {FilterByStatusPipe} from "./tasks/types/status/filter-by-status.pipe";
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AllowanceAccountsModule } from './allowance-accounts/allowance-accounts.module';

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
    DragulaModule,
    AllowanceAccountsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: "/"}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
