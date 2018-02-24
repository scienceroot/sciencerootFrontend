import {Component} from "@angular/core";

@Component({
  selector: 'scr-menu',
  template: `
    <div class="menu">
      <div  fxFlex="64px"
            class="menu-item logo-container">
        <img src="assets/images/logo_only.svg" alt="Scienceroot" />
      </div>
      <div  class="menu-item"
            fxFlex="">
        <div  fxLayout="row"
              fxLayoutAlign="end center">
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
      background-color: #B1B7C1;
    }
    
    .logo-container {
      height: 48px;
      width: 48px;
    }
  `]
})
export class ScrMenuComponent {

}
