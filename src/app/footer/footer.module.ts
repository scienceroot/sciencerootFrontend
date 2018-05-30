import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ScrFooterComponent} from "./footer.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  declarations: [
    ScrFooterComponent
  ],
  exports:[
    ScrFooterComponent
  ]
})
export class ScrFooterModule { }
