// logged-in.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AppState} from '../reducers';
import { Profile} from '../models';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoggedInGuard implements CanActivate {
  profile: Observable<Profile>;

  constructor(private store: Store<AppState>) {
    this.profile = store.select('profile');
  }

  canActivate(): Observable<boolean> {
    return this.profile.map( (x) => {  return x != null; } );
  }
}
