import {Component} from "@angular/core";

@Component({
  selector: 'scr-menu',
  template: `
    <div  class="menu"
          fxLayout="row"
          fxLayoutGap="24px">
      <div  fxFlex="64px"
            class="menu-item logo-container">
        <img src="assets/images/logo_new.png" 
             alt="Scienceroot" 
              class="logo"/>
      </div>
      <div fxFlex="100px"
           fxFlexAlign="center"
           class="menu-item company-name">
        <span class="mat-display-1">Scienceroot</span>
      </div>
      <div  class="menu-item"
            fxFlex="">
        <div  fxLayout="row"
              fxLayoutGap="24px"
              fxLayoutAlign="end center">
          <div fxFlex="100px">
            <a  mat-raised-button=""
                color="accent"
                [routerLink]="['/search']">
              Search
            </a> 
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
      height: 64px;
      width: 48px;
    }
    
    .logo-container img {
      width: 100%;
      height: 100%;
    }
    
    .company-name { color: #fff; }
  `]
})
export class ScrMenuComponent {

}
