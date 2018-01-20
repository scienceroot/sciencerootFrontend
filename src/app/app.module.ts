import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ScrMenuModule} from "./menu/menu.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrFooterModule} from "./footer/footer.module";
import {RouterModule, Routes} from "@angular/router";
import {ScrUserRoutesModule} from "@scienceroot/user";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user/new' }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    ScrUserRoutesModule,
    ScrMenuModule,
    ScrFooterModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
