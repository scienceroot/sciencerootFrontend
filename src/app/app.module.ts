import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ScrMenuModule} from "./menu/menu.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ScrFooterModule} from "./footer/footer.module";
import {RouterModule, Routes} from "@angular/router";
import {ScrActiveUserModule, ScrUserRoutesModule, ScrUserStoreConfigModel} from "@scienceroot/user";
import {ScrAuthenticationModule, ScrAuthenticationStoreConfig, ScrSecureHttpClientModule} from "@scienceroot/security";
import {ScrSearchRoutesModule, ScrSearchStoreConfigModel} from "@scienceroot/search";

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
    ScrSearchRoutesModule,
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

  private host: string = 'https://api.scienceroots.com';

  //private host: string = 'http://localhost:8080';

  constructor() {
    new ScrAuthenticationStoreConfig(
      'scrAuthToken',
      `${this.host}/register`,
      `${this.host}/login`,
      `${this.host}/token`,
    ).save();

    new ScrUserStoreConfigModel(
      `${this.host}/users`,
      `${this.host}/register`,
      `${this.host}/industries/`,
      `${this.host}/interests/`
    ).save();

    new ScrSearchStoreConfigModel(
      `${this.host}/search`,
      `${this.host}/search/papers`,
      `${this.host}/search/users`
    ).save();
  }
}
