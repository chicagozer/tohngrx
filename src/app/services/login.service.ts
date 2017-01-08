// logged-in.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AppState} from '../reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class LoggedInGuard implements CanActivate {
  profile: Observable<gapi.auth2.BasicProfile>;

  constructor(private store: Store<AppState>) {
    this.profile = store.select('profile');
  }

  canActivate(): Observable<boolean> {
    return this.profile.map( (x) => {  return x != null; } );
  }
}
