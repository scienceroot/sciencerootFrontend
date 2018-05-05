import { Component, OnInit } from '@angular/core';
import {ScrActiveUserService, ScrUser} from '@scienceroot/user';

@Component({
  selector: 'scr-newsfeed',
  template: `
    <ng-container *ngIf="!!activeUser">
      <scr-feed-collection [activeUser]="activeUser">
      </scr-feed-collection>
    </ng-container>
  `,
  styles: []
})
export class ScrNewsfeedComponent implements OnInit {

  public activeUser: ScrUser;

  constructor(private _activeUserService: ScrActiveUserService) {
    this._activeUserService.activeUserChanged
      .subscribe(user => {
        console.log(user)
        this.activeUser = user
      });
  }

  ngOnInit() {
  }

}
