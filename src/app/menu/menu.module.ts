import {NgModule} from "@angular/core";
import {ScrMenuComponent} from "./menu.component";
import {ScrUserDetailsLinkModule} from "@scienceroot/user";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material";
import {ScrSearchHeaderModule} from "@scienceroot/search";

@NgModule({
  imports: [
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    ScrUserDetailsLinkModule,
    ScrSearchHeaderModule
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
