import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {routableComponents, AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {NavComponent} from "./nav/nav.component";
import {StatusPipe} from "./tasks/types/status/status.pipe";
import {APP_BASE_HREF} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    NavComponent,
    StatusPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: "/"}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
