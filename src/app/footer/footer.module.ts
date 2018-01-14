import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrFooterComponent} from "./footer.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
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
