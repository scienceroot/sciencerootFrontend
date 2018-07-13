import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ScrFeedStoreConfig} from '@scienceroot/feed';
import {ScrRepositoryRoutesModule, ScrRepositoryStoreConfig} from '@scienceroot/repository';
import {AppComponent} from './app.component';
import {ScrMenuModule} from './menu/menu.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ScrFooterModule} from './footer/footer.module';
import {ScrActiveUserModule, ScrUserRoutesModule, ScrUserStoreConfigModel} from '@scienceroot/user';
import {
  ScrAuthenticationGuard,
  ScrAuthenticationModule,
  ScrAuthenticationStoreConfig,
  ScrSecureHttpClientModule
} from '@scienceroot/security';
import {ScrSearchRoutesModule, ScrSearchStoreConfigModel} from '@scienceroot/search';
import {environment} from '../environments/environment';
import {ScrWalletStoreConfig} from '@scienceroot/wallet';
import {ScrNewsfeedComponent} from './newsfeed/newsfeed.component';
import {ScrNewsfeedModule} from './newsfeed/newsfeed.module';
import {PrivacyComponent} from './privacy/privacy.component';
import { PrivacyModule } from './privacy/privacy.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'search'},
  {path: 'collection', component: ScrNewsfeedComponent, canActivate: [ScrAuthenticationGuard]},
  {path: 'privacy', component: PrivacyComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    ScrAuthenticationModule,
    ScrSecureHttpClientModule,
    ScrActiveUserModule,
    ScrUserRoutesModule,
    ScrSearchRoutesModule,
    ScrRepositoryRoutesModule,
    ScrMenuModule,
    ScrNewsfeedModule,
    ScrFooterModule,
    PrivacyModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    const host: string = environment.host;

    new ScrFeedStoreConfig(`${host}/posts/`).save();

    new ScrRepositoryStoreConfig(`${host}/repositories/`).save();

    new ScrAuthenticationStoreConfig(
      host,
      'scrAuthToken'
    ).save();

    new ScrSearchStoreConfigModel(
      `${host}/search`,
      `${host}/search/papers`,
      `${host}/search/users`,
      `${host}/search/preprints`
    ).save();

    new ScrUserStoreConfigModel(
      `${host}/users`,
      `${host}/register`,
      `${host}/industries/`,
      `${host}/interests/`,
      `${host}/search/languages/`
    ).save();

    new ScrWalletStoreConfig(
      `${host}/users`,
      'publickey'
    ).save();
  }
}
