import {NgModule} from "@angular/core";
import {ScrMenuComponent} from "./menu.component";
import {ScrUserDetailsLinkModule} from "@scienceroot/user";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  imports: [
    FlexLayoutModule,
    ScrUserDetailsLinkModule
  ],
  declarations: [
    ScrMenuComponent
  ],
  exports: [
    ScrMenuComponent
  ],
  providers: []
})
export class ScrMenuModule {

}
