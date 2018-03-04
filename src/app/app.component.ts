import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ScrAuthenticationLoginService} from "@scienceroot/security";
import {Router} from "@angular/router";

@Component({
  selector: 'scr-root',
  template: `
    <scr-menu>
    </scr-menu>
    <div class="content-container">
      <div  fxLayout="row"
            fxLayoutAlign="center">
        <div  fxFlex="90%"
              fxFlex.lt-md="100%"
              fxFlex.lt-lg="90%"
              fxFlex.xl="75%">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
    <scr-footer>
    </scr-footer>
  `,
  styles: [`
    .content-container {
      padding: 12px 0;
      min-height: calc(100vh - (128px));
    }
  `]
})
export class AppComponent {

  public readonly title: string = 'Scienceroot';

  constructor(
    private _titleService: Title,
    private _loginService: ScrAuthenticationLoginService,
    private _router: Router
  ) {
    this._titleService.setTitle(this.title);

    this._loginService.loginStateChanged.subscribe((authenticated: boolean) => {
      if(authenticated) {
        this._router.navigate(['/search'])
      }
    })
  }
}
