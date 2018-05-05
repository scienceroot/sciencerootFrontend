import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrFeedCollectionModule} from '@scienceroot/feed';
import {ScrActiveUserModule} from '@scienceroot/user';
import { ScrNewsfeedComponent } from './newsfeed.component';

@NgModule({
  imports: [
    CommonModule,
    ScrActiveUserModule,
    ScrFeedCollectionModule
  ],
  declarations: [ScrNewsfeedComponent]
})
export class ScrNewsfeedModule { }
