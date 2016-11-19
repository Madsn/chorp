import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {routableComponents, AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {NavComponent} from "./nav/nav.component";
import {StatusPipe} from "./tasks/types/status/status.pipe";
import {APP_BASE_HREF} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    NavComponent,
    StatusPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: "/"}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
