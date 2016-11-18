import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {routableComponents, AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {NavComponent} from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents,
    NavComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
