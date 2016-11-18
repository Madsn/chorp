import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {routableComponents, AppRoutingModule} from "./app-routing.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    AppComponent,
    routableComponents
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
