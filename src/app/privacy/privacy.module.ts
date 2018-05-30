import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { PrivacyComponent } from './privacy.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [PrivacyComponent]
})
export class PrivacyModule { }
