import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {ScrMenuModule} from "./menu/menu.module";
import {ScrUserCoreModule} from "@scienceroot/user";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrFooterModule} from "./footer/footer.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    ScrMenuModule,
    ScrFooterModule,
    ScrUserCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
