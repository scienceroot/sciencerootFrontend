import {Component} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'scr-menu',
  template: `
    <div  class="menu"
          fxLayout="row"
          fxLayoutGap="24px">
      <div  fxFlex="143px"
            fxFlexAlign="center"
            class="menu-item logo-container">
        <img src="assets/images/logo_text.png" 
             alt="Scienceroot" 
              class="logo"/>
      </div>
      <div  class="menu-item"
            fxFlex="">
        <div  fxLayout="row"
              fxLayoutGap="24px"
              fxLayoutAlign="end center">
          <div fxFlex="60%">
            <ng-container *ngIf="showSearchHeader">
              <scr-search-header>
              </scr-search-header>
            </ng-container>
          </div>
          <div fxFlex="150px">
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
    
    .company-name { 
      color: rgba(0,0,0,0.87);
      text-transform: uppercase;
    }
  `]
})
export class ScrMenuComponent {

  public showSearchHeader: boolean = true;

  constructor(private router:Router) {
    router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd ) {
        this._onNavigationEnd(event);
      }
    });
  }

  private _onNavigationEnd(event: any) {
    this.showSearchHeader = !this._isSearchRoute(event.url);
  }

  private _isSearchRoute(url = ''): boolean {
    let isSearch: boolean;

    if(url.indexOf('/search') !== -1) {
      isSearch = true;
    } else {
      isSearch = false;
    }

    return isSearch;
  }
}
