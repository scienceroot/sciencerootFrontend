import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

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

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
