import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ScrMenuModule} from "./menu/menu.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrFooterModule} from "./footer/footer.module";
import {RouterModule, Routes} from "@angular/router";
import {
  ScrActiveUserModule, ScrUserRoutesModule,
  ScrUserStoreConfigModel
} from "@scienceroot/user";
import {ScrAuthenticationModule, ScrAuthenticationStoreConfig, ScrSecureHttpClientModule} from "@scienceroot/security";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user/new' }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    ScrAuthenticationModule,
    ScrSecureHttpClientModule,
    ScrActiveUserModule,
    ScrUserRoutesModule,
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
export class AppModule {

  constructor() {
    new ScrAuthenticationStoreConfig(
      'scrAuthToken',
      'https://api.scienceroots.com/register',
      'https://api.scienceroots.com/login',
      'https://api.scienceroots.com/token',
    ).save();

    new ScrUserStoreConfigModel(
      'https://api.scienceroots/users',
      'https://api.scienceroots/register',
      'https://api.scienceroots/industries/'
    ).save();
  }
}
