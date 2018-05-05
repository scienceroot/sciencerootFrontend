import {Component} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {ScrAuthenticationLoginService} from '@scienceroot/security';

@Component({
  selector: 'scr-menu',
  template: `
    <div  class="menu"
          fxLayout="row"
          fxLayoutGap="24px">
      <div  fxFlex="143px"
            fxFlexAlign="center"
            class="menu-item logo-container">
        <a [routerLink]="['search']">
          <img src="assets/images/logo_text.png"
               alt="Scienceroot"
               class="logo"/>
        </a>
      </div>
      <div  class="menu-item"
            fxFlex="">
        <div  fxLayout="row"
              fxLayoutGap="24px"
              fxLayoutAlign="end center">
          <div fxFlex="">
            <ng-container *ngIf="showSearchHeader">
              <scr-search-header>
              </scr-search-header>
            </ng-container>
          </div>
          <div  fxFlex="75px"
                *ngIf="isAuthenticated">
            <scr-collection-feed-link>
            </scr-collection-feed-link>
          </div>
          <div fxFlex="75px">
            <scr-user-details-link>
            </scr-user-details-link>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .menu {
      padding: 8px 24px;
      background-color: #0F0F1F;
    }
    
    .logo-container {
      height: 41px;
      width: 143px;
    }
    
    .logo-container img {
      width: 100%;
    }
  `]
})
export class ScrMenuComponent {

  public showSearchHeader: boolean = true;
  public isAuthenticated: boolean = false;

  constructor(
    private _router: Router,
    private _loginService: ScrAuthenticationLoginService
  ) {
    this._router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd ) {
        this._onNavigationEnd(event);
      }
    });

    this._loginService.loginStateChanged
      .subscribe(newState => this.isAuthenticated = newState);
  }

  private _onNavigationEnd(event: any) {
    this.showSearchHeader = !this._isSearchRoute(event.url);
  }

  private _isSearchRoute(url: string = ''): boolean {
    return url.indexOf('/search') !== -1;
  }
}
