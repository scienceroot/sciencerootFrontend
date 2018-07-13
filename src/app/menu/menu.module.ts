import {NgModule} from "@angular/core";
import {ScrMenuComponent} from "./menu.component";
import {ScrUserDetailsLinkModule} from "@scienceroot/user";
import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule} from "@angular/router";
import {MatButtonModule, MatIconModule} from '@angular/material';
import {ScrSearchHeaderModule} from "@scienceroot/search";
import {ScrCollectionFeedLinkModule} from '@scienceroot/feed';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    ScrUserDetailsLinkModule,
    ScrSearchHeaderModule,
    ScrCollectionFeedLinkModule
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
