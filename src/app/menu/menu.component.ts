import {Component} from "@angular/core";

@Component({
  selector: 'scr-menu',
  template: `
    <div class="menu">
      <div class="logo-container">
        <img src="assets/images/logo_only.svg" alt="Scienceroot" />
      </div>
      <div fxLayout="row">
        <div fxFlex="">
          
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
