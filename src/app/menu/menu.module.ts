import {NgModule} from "@angular/core";
import {ScrMenuComponent} from "./menu.component";
import {ScrUserDetailsLinkModule} from "@scienceroot/user";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material";
import {ScrSearchHeaderModule} from "@scienceroot/search";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
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
