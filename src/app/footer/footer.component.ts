import { Component } from '@angular/core';

@Component({
  selector: 'scr-footer',
  template: `
    <div class="footer">
      <div fxLayout="row">
        <div  fxFlex="140px"
              class="mat-caption">
          &copy; 2018 Scienceroot
        </div>
        <div fxFlex="">
          <div  fxLayout="row"
                fxLayoutAlign="end">
            <div  fxFlex="100px"
                  fxFlexAlign="center">
              <button mat-button="">
                Impressum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .footer {
      margin: 0 24px;
    }
  `]
})
export class ScrFooterComponent {

  constructor() { }
}
